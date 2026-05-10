#!/usr/bin/env node
/**
 * Script generico para gerar arte promocional de produto.
 * Demonstra uso da lib esi-brand-assets com:
 * - Logo PNG real
 * - Foto de produto (local ou URL)
 * - Nome do produto na arte
 *
 * Uso:
 *   node scripts/gen-promo-produto.js \
 *     --name "Intelbras VHD 3120" \
 *     --category "CAMERA DE SEGURANCA" \
 *     --price "R$ 230,00" \
 *     --image "./public/produtos/vhd3120.png" \
 *     --output "./public/promo/vhd3120.png"
 *
 * Se --image nao for fornecido, gera sem foto de produto.
 */
const { ImageResponse } = require('next/dist/compiled/@vercel/og/index.node.js');
const fs = require('fs');
const path = require('path');
const {
  logos,
  colors,
  loadProductImage,
  footerElement,
  productHeaderElement,
  productImageElement,
  h,
} = require('./lib/esi-brand-assets');

// ─────────────────────────────────────────────
//  Parse CLI args
// ─────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    name: 'Produto ESI',
    category: null,
    price: null,
    image: null,
    headline: null,
    output: './public/promo/produto.png',
    width: 1080,
    height: 1080,
  };
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace('--', '');
    const val = args[i + 1];
    if (key in opts) opts[key] = val;
  }
  return opts;
}

async function main() {
  const opts = parseArgs();
  const W = Number(opts.width);
  const H = Number(opts.height);

  const fontRegular = fs.readFileSync(
    path.resolve(__dirname, '../node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')
  );

  // Load product image if provided
  let productDataUri = null;
  if (opts.image) {
    try {
      productDataUri = await loadProductImage(opts.image);
    } catch (err) {
      console.error(`Aviso: nao foi possivel carregar imagem "${opts.image}": ${err.message}`);
    }
  }

  // Build headline
  const headline = opts.headline || `${opts.name}.`;

  // Build element tree
  const element = h('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: `${W}px`,
      height: `${H}px`,
      background: `linear-gradient(180deg, ${colors.ESI_DARK2} 0%, ${colors.ESI_DARK} 100%)`,
      fontFamily: 'Geist',
      position: 'relative',
      overflow: 'hidden',
    },
  },

    // Red top bar
    h('div', { style: { width: '100%', height: 8, background: colors.ESI_RED, flexShrink: 0 } }),

    // Main content
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '40px 60px',
        justifyContent: 'center',
      },
    },

      // Product header (category + name)
      productHeaderElement({ productName: opts.name, category: opts.category }),

      // Product image (if available)
      ...(productDataUri
        ? [productImageElement(productDataUri, { width: Math.round(W * 0.5), height: Math.round(H * 0.3) })]
        : []),

      // Headline
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          marginTop: 24,
          marginBottom: 24,
        },
      },
        ...headline.split('\n').map((line) =>
          h('span', {
            style: {
              fontSize: 72,
              fontWeight: 700,
              color: colors.WHITE,
              lineHeight: 1,
              letterSpacing: -2,
            },
          }, line)
        )
      ),

      // Price badge (if provided)
      ...(opts.price
        ? [h('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              background: colors.ESI_RED,
              borderRadius: 12,
              padding: '14px 28px',
              alignSelf: 'flex-start',
            },
          },
            h('span', {
              style: { fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: 3, marginBottom: 2 },
            }, 'PRECO ESPECIAL'),
            h('span', {
              style: { fontSize: 52, fontWeight: 700, color: colors.WHITE, letterSpacing: -1, lineHeight: 1 },
            }, opts.price)
          )]
        : [])
    ),

    // Divider
    h('div', { style: { width: '100%', height: 1, background: 'rgba(255,255,255,0.10)', flexShrink: 0 } }),

    // Footer with real PNG logo
    footerElement({ logoHeight: 48, padding: '16px 60px' }),

    // Red bottom bar
    h('div', { style: { width: '100%', height: 8, background: colors.ESI_RED, flexShrink: 0 } })
  );

  // Render
  const resp = new ImageResponse(element, {
    width: W,
    height: H,
    fonts: [
      { name: 'Geist', data: fontRegular, style: 'normal', weight: 400 },
      { name: 'Geist', data: fontRegular, style: 'normal', weight: 700 },
    ],
  });

  const outputPath = path.resolve(opts.output);
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const buf = await resp.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(buf));
  console.log('Imagem gerada com sucesso!');
  console.log('Arquivo:', outputPath);
  console.log('Tamanho:', buf.byteLength, 'bytes');
  console.log('Produto:', opts.name);
  if (opts.image) console.log('Foto produto:', opts.image);
}

main().catch((err) => {
  console.error('Erro:', err.message);
  process.exit(1);
});
