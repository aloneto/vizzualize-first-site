/**
 * ESI Brand Assets — carrega logos PNG reais e fotos de produto como base64 data URIs
 * para uso com satori / @vercel/og.
 *
 * Uso:
 *   const { logos, loadProductImage, footerElement } = require('./lib/esi-brand-assets');
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BRAND_DIR = path.resolve(__dirname, '../../docs/brand');

// ───────────────────────────���─────────────────
//  Logo loading (base64 data URIs)
// ─────────────────────────────────────────────

function pngToDataUri(filePath) {
  const buf = fs.readFileSync(filePath);
  return `data:image/png;base64,${buf.toString('base64')}`;
}

const logos = {
  /** Logo horizontal negativa (fundo escuro) */
  get horizontalNegativa() {
    return pngToDataUri(path.join(BRAND_DIR, 'Logo-ESI-horizontal-negativa.png'));
  },
  /** Logo horizontal positiva (fundo claro) */
  get horizontalPositiva() {
    return pngToDataUri(path.join(BRAND_DIR, 'Logo-ESI-horizontal-positiva.png'));
  },
  /** Logo vertical negativa */
  get verticalNegativa() {
    return pngToDataUri(path.join(BRAND_DIR, 'Logo-ESI-vertical-negativa.png'));
  },
  /** Logo vertical positiva */
  get verticalPositiva() {
    return pngToDataUri(path.join(BRAND_DIR, 'Logo-ESI-vertical-positiva.png'));
  },
  /** Simbolo ESI (seta) */
  get simbolo() {
    return pngToDataUri(path.join(BRAND_DIR, 'simbolo-ESI.png'));
  },
};

// ─────────────────────────────────────────────
//  Product image loading
// ─────────────────────────────────────────────

/**
 * Carrega imagem de produto como base64 data URI.
 * Aceita path local (absoluto ou relativo ao projeto) ou URL https/http.
 * @param {string} source - Caminho local ou URL da imagem
 * @returns {Promise<string>} data URI da imagem
 */
async function loadProductImage(source) {
  if (source.startsWith('http://') || source.startsWith('https://')) {
    return await fetchImageAsDataUri(source);
  }
  // Local path
  const resolved = path.isAbsolute(source)
    ? source
    : path.resolve(__dirname, '../../', source);
  const ext = path.extname(resolved).toLowerCase().replace('.', '');
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg'
    : ext === 'png' ? 'image/png'
    : ext === 'webp' ? 'image/webp'
    : `image/${ext}`;
  const buf = fs.readFileSync(resolved);
  return `data:${mime};base64,${buf.toString('base64')}`;
}

function fetchImageAsDataUri(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'ESI-Brand-Renderer/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchImageAsDataUri(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} fetching ${url}`));
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        const contentType = res.headers['content-type'] || 'image/png';
        resolve(`data:${contentType};base64,${buf.toString('base64')}`);
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

// ─────────────────────────────────────────────
//  Brand colors
// ─────────────────────────────────────────────

const colors = {
  ESI_RED: '#E11D2A',
  ESI_RED_DEEP: '#B0121E',
  ESI_DARK: '#0E1620',
  ESI_DARK2: '#060C14',
  ESI_INK: '#111827',
  WHITE: '#FFFFFF',
  FOG: '#F5F2EC',
};

// ─────────────────────────────────────────────
//  Reusable layout elements (satori JSX objects)
// ─────────────────────────────────────────────

function h(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children.length ? children : undefined,
    },
  };
}

/**
 * Footer com logo ESI real (PNG) — para fundo escuro.
 * @param {object} opts
 * @param {number} [opts.logoHeight=48] - Altura do logo em px
 * @param {string} [opts.padding='20px 60px'] - Padding do footer
 */
function footerElement(opts = {}) {
  const { logoHeight = 48, padding = '20px 60px' } = opts;
  return h('div', {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding,
      flexShrink: 0,
    },
  },
    h('img', {
      src: logos.horizontalNegativa,
      height: logoHeight,
      style: { objectFit: 'contain' },
    })
  );
}

/**
 * Header com nome do produto e badge de categoria.
 * @param {object} opts
 * @param {string} opts.productName - Nome do produto (ex: "Intelbras VHD 3120")
 * @param {string} [opts.category] - Categoria (ex: "CAMERA DE SEGURANCA")
 */
function productHeaderElement(opts) {
  const { productName, category } = opts;
  const children = [];

  if (category) {
    children.push(
      h('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: '8px 20px',
          border: `1.5px solid ${colors.ESI_RED}`,
          borderRadius: 6,
          background: 'rgba(225,29,42,0.12)',
          marginBottom: 16,
        },
      },
        h('span', {
          style: {
            fontSize: 16,
            fontWeight: 700,
            color: colors.ESI_RED,
            letterSpacing: 3,
          },
        }, category.toUpperCase())
      )
    );
  }

  children.push(
    h('span', {
      style: {
        fontSize: 32,
        fontWeight: 700,
        color: 'rgba(255,255,255,0.85)',
        letterSpacing: 1,
      },
    }, productName)
  );

  return h('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  }, ...children);
}

/**
 * Elemento de imagem de produto centralizado.
 * @param {string} dataUri - base64 data URI da imagem
 * @param {object} [opts]
 * @param {number} [opts.width=480] - Largura da imagem
 * @param {number} [opts.height=320] - Altura da imagem
 */
function productImageElement(dataUri, opts = {}) {
  const { width = 480, height = 320 } = opts;
  return h('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 16,
    },
  },
    h('img', {
      src: dataUri,
      width,
      height,
      style: { objectFit: 'contain' },
    })
  );
}

module.exports = {
  logos,
  colors,
  loadProductImage,
  footerElement,
  productHeaderElement,
  productImageElement,
  h,
  BRAND_DIR,
};
