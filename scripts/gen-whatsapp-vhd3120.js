#!/usr/bin/env node
/**
 * Gera imagem WhatsApp promocional — Intelbras VHD 3120 (R$300)
 * Usa @vercel/og (satori + resvg) para renderizar HTML com texto correto.
 * Identidade visual ESI Exata (brand-spec.json).
 * v3: preco R$300, CTA URL landing page
 */
const { ImageResponse } = require(
  'next/dist/compiled/@vercel/og/index.node.js'
);
const fs = require('fs');
const path = require('path');
const { logos, footerElement } = require('./lib/esi-brand-assets');

const fontRegular = fs.readFileSync(
  path.resolve(__dirname, '../node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')
);

// 1080x1350 — formato WhatsApp/Instagram feed (4:5)
const W = 1080;
const H = 1350;

// Brand colors
const ESI_RED = '#E11D2A';
const ESI_DARK = '#0E1620';
const ESI_DARK2 = '#060C14';
const WHITE = '#FFFFFF';
const WHITE_50 = 'rgba(255,255,255,0.5)';
const WHITE_70 = 'rgba(255,255,255,0.7)';
const WHITE_85 = 'rgba(255,255,255,0.85)';

// ─────────────────────────────────────────────
//  Foto real do produto (PNG gerado via gpt-image-1)
// ─────────────────────────────────────────────
const productPhotoPath = path.resolve(__dirname, '../public/produtos/vhd3120-foto.png');
const productDataUri = `data:image/png;base64,${fs.readFileSync(productPhotoPath).toString('base64')}`;

// ─────────────────────────────────────────────
//  Build element tree (satori JSX objects)
// ─────────────────────────────────────────────
function h(type, props, ...children) {
  return { type, props: { ...props, children: children.length === 1 ? children[0] : children.length ? children : undefined } };
}

const element = h('div', {
  style: {
    display: 'flex',
    flexDirection: 'column',
    width: `${W}px`,
    height: `${H}px`,
    background: `linear-gradient(160deg, ${ESI_DARK2} 0%, ${ESI_DARK} 60%, #111C2B 100%)`,
    fontFamily: 'Geist',
    overflow: 'hidden',
  }
},

  // ── Red top bar ──
  h('div', { style: { width: '100%', height: 8, background: ESI_RED, flexShrink: 0 } }),

  // ── Top header: category tag ──
  h('div', {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '28px 52px 0 52px',
      flexShrink: 0,
    }
  },
    h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '7px 18px',
        border: `1.5px solid ${ESI_RED}`,
        borderRadius: 6,
        background: 'rgba(225,29,42,0.10)',
      }
    },
      h('span', {
        style: { fontSize: 15, fontWeight: 700, color: ESI_RED, letterSpacing: 3 }
      }, 'CÂMERA DE SEGURANÇA')
    ),
    // Product model label
    h('span', {
      style: { fontSize: 15, fontWeight: 700, color: WHITE_50, letterSpacing: 2 }
    }, 'VHD 3120')
  ),

  // ── Hero: produto foto real (dominante) ──
  h('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
    }
  },
    // Subtle red glow behind the product
    h('div', {
      style: {
        position: 'absolute',
        width: 520,
        height: 520,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(225,29,42,0.12) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    }),
    // Real product photo
    h('img', {
      src: productDataUri,
      width: 620,
      height: 620,
      style: {
        objectFit: 'contain',
        filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.6))',
        zIndex: 1,
      },
    })
  ),

  // ── Info section: headline + price + CTA ──
  h('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 52px 0 52px',
      flexShrink: 0,
    }
  },
    // Thin divider
    h('div', { style: { width: '100%', height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 24 } }),

    // Headline
    h('span', {
      style: {
        fontSize: 72,
        fontWeight: 700,
        color: WHITE,
        lineHeight: 1,
        letterSpacing: -2,
        marginBottom: 24,
      }
    }, 'Câmera que protege.'),

    // Price + CTA row
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 28,
        marginBottom: 24,
      }
    },

      // Price badge
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          background: ESI_RED,
          borderRadius: 12,
          padding: '12px 28px',
          alignItems: 'flex-start',
        }
      },
        h('span', {
          style: { fontSize: 11, fontWeight: 700, color: WHITE_85, letterSpacing: 2.5, marginBottom: 2 }
        }, 'PREÇO ESPECIAL'),
        h('span', {
          style: { fontSize: 52, fontWeight: 700, color: WHITE, letterSpacing: -1.5, lineHeight: 1 }
        }, 'R$300')
      ),

      // URL CTA
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          flex: 1,
          justifyContent: 'center',
        }
      },
        h('span', {
          style: { fontSize: 13, fontWeight: 700, color: WHITE_70, letterSpacing: 1, marginBottom: 4 }
        }, 'SAIBA MAIS'),
        h('span', {
          style: { fontSize: 18, fontWeight: 500, color: WHITE, letterSpacing: 0, lineHeight: 1.3 }
        }, 'projeto-interno-teste'),
        h('span', {
          style: { fontSize: 18, fontWeight: 500, color: WHITE, letterSpacing: 0, lineHeight: 1.3 }
        }, '.vercel.app/promo/vhd3120')
      )
    )
  ),

  // ── Footer: ESI Exata logo real (PNG) ──
  footerElement({ logoHeight: 48, padding: '14px 52px' }),

  // ── Red bottom bar ──
  h('div', { style: { width: '100%', height: 8, background: ESI_RED, flexShrink: 0 } }),
);

// ─────────────────────────────────────────────
//  Render + save
// ─────────────────────────────────────────────
const resp = new ImageResponse(element, {
  width: W,
  height: H,
  fonts: [
    { name: 'Geist', data: fontRegular, style: 'normal', weight: 400 },
    { name: 'Geist', data: fontRegular, style: 'normal', weight: 700 },
  ],
});

const outputPath = path.resolve(__dirname, '../public/whatsapp/vhd3120-promo.png');
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

resp.arrayBuffer().then(buf => {
  fs.writeFileSync(outputPath, Buffer.from(buf));
  console.log('Imagem gerada com sucesso!');
  console.log('Arquivo:', outputPath);
  console.log('Tamanho:', buf.byteLength, 'bytes');
}).catch(err => {
  console.error('Erro:', err.message);
  process.exit(1);
});
