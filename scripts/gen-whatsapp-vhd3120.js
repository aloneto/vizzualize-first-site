#!/usr/bin/env node
/**
 * Gera imagem WhatsApp promocional — Intelbras VHD 3120 (R$230)
 * Usa @vercel/og (satori + resvg) para renderizar HTML com texto correto.
 * Identidade visual ESI Exata (brand-spec.json).
 */
const { ImageResponse } = require(
  'next/dist/compiled/@vercel/og/index.node.js'
);
const fs = require('fs');
const path = require('path');

const fontRegular = fs.readFileSync(
  path.resolve(__dirname, '../node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')
);

// 1080x1080 square — ideal WhatsApp format
const W = 1080;
const H = 1080;

// Brand colors
const ESI_RED = '#E11D2A';
const ESI_DARK = '#0E1620';
const ESI_DARK2 = '#060C14';
const WHITE = '#FFFFFF';
const WHITE_50 = 'rgba(255,255,255,0.5)';
const WHITE_70 = 'rgba(255,255,255,0.7)';
const WHITE_85 = 'rgba(255,255,255,0.85)';

// ─────────────────────────────────────────────
//  Camera SVG as background data URI
// ─────────────────────────────────────────────
const cameraSvg = `<svg width="560" height="280" xmlns="http://www.w3.org/2000/svg">
  <!-- Red glow -->
  <radialGradient id="g" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#E11D2A" stop-opacity="0.20"/>
    <stop offset="100%" stop-color="#E11D2A" stop-opacity="0"/>
  </radialGradient>
  <ellipse cx="260" cy="140" rx="240" ry="130" fill="url(#g)"/>
  <!-- Body -->
  <rect x="80" y="90" width="340" height="100" rx="50" fill="#1A2535"/>
  <rect x="80" y="90" width="340" height="100" rx="50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
  <!-- Front lens housing -->
  <circle cx="130" cy="140" r="48" fill="#111A26"/>
  <circle cx="130" cy="140" r="48" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  <!-- Lens ring (ESI red) -->
  <circle cx="130" cy="140" r="35" fill="#0A1018"/>
  <circle cx="130" cy="140" r="35" fill="none" stroke="#E11D2A" stroke-width="2.5"/>
  <!-- Lens inner -->
  <circle cx="130" cy="140" r="22" fill="#050A10"/>
  <!-- Lens glass -->
  <circle cx="130" cy="140" r="14" fill="rgba(30,60,120,0.9)"/>
  <!-- Lens highlight -->
  <circle cx="124" cy="134" r="4" fill="rgba(255,255,255,0.4)"/>
  <!-- IR LEDs -->
  <circle cx="130" cy="96" r="4" fill="#E83030" opacity="0.85"/>
  <circle cx="130" cy="184" r="4" fill="#E83030" opacity="0.85"/>
  <circle cx="170" cy="106" r="4" fill="#E83030" opacity="0.85"/>
  <circle cx="170" cy="174" r="4" fill="#E83030" opacity="0.85"/>
  <circle cx="92" cy="106" r="4" fill="#E83030" opacity="0.85"/>
  <circle cx="92" cy="174" r="4" fill="#E83030" opacity="0.85"/>
  <!-- Body text -->
  <text x="290" y="133" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="rgba(255,255,255,0.55)" letter-spacing="2">INTELBRAS</text>
  <text x="290" y="156" text-anchor="middle" font-family="Arial" font-size="17" font-weight="700" fill="rgba(255,255,255,0.9)" letter-spacing="1">VHD 3120</text>
  <!-- Mount bracket -->
  <rect x="400" y="128" width="55" height="24" rx="4" fill="#141F2E"/>
  <rect x="445" y="118" width="12" height="44" rx="4" fill="#0D1520"/>
  <!-- Mount foot -->
  <rect x="456" y="200" width="12" height="60" rx="4" fill="#0D1520"/>
  <rect x="440" y="255" width="46" height="12" rx="6" fill="#1A2535"/>
  <!-- Subtle detail line -->
  <line x1="195" y1="93" x2="195" y2="187" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
</svg>`;

const cameraDataUri = `data:image/svg+xml;base64,${Buffer.from(cameraSvg).toString('base64')}`;

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
    background: `linear-gradient(180deg, ${ESI_DARK2} 0%, ${ESI_DARK} 100%)`,
    fontFamily: 'Geist',
    position: 'relative',
    overflow: 'hidden',
  }
},

  // ── Red top bar ──
  h('div', { style: { width: '100%', height: 10, background: ESI_RED, flexShrink: 0 } }),

  // ── Tech grid overlay (very subtle) ──
  // (done via background pattern on outer container if needed)

  // ── Main body (flex column, padded) ──
  h('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      padding: '40px 60px 0 60px',
    }
  },

    // Row 1: Category tag + ESI arrows (top)
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32,
      }
    },
      // Category badge
      h('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: '8px 20px',
          border: `1.5px solid ${ESI_RED}`,
          borderRadius: 6,
          background: 'rgba(225,29,42,0.12)',
        }
      },
        h('span', {
          style: {
            fontSize: 17,
            fontWeight: 700,
            color: ESI_RED,
            letterSpacing: 3,
          }
        }, 'CÂMERA DE SEGURANÇA')
      ),

      // ESI arrows (decorative, top right)
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          gap: 6,
          opacity: 0.22,
        }
      },
        h('div', { style: { width: 0, height: 0, borderTop: '18px solid transparent', borderBottom: '18px solid transparent', borderLeft: `32px solid ${ESI_RED}` } }),
        h('div', { style: { width: 0, height: 0, borderTop: '18px solid transparent', borderBottom: '18px solid transparent', borderLeft: `32px solid ${ESI_RED}` } }),
        h('div', { style: { width: 0, height: 0, borderTop: '18px solid transparent', borderBottom: '18px solid transparent', borderLeft: `32px solid ${ESI_RED}` } }),
      )
    ),

    // Row 2: Camera image
    h('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
      }
    },
      h('img', {
        src: cameraDataUri,
        width: 560,
        height: 280,
        style: { objectFit: 'contain' },
      })
    ),

    // Row 3: Headline — "Câmera que protege."
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 28,
      }
    },
      h('span', {
        style: {
          fontSize: 90,
          fontWeight: 700,
          color: WHITE,
          lineHeight: 1,
          letterSpacing: -2,
        }
      }, 'Câmera'),
      h('span', {
        style: {
          fontSize: 90,
          fontWeight: 700,
          color: WHITE,
          lineHeight: 1,
          letterSpacing: -2,
        }
      }, 'que protege.')
    ),

    // Row 4: Price badge
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        background: ESI_RED,
        borderRadius: 14,
        padding: '18px 32px',
        marginBottom: 28,
        alignSelf: 'flex-start',
        minWidth: 460,
      }
    },
      h('span', {
        style: {
          fontSize: 15,
          fontWeight: 700,
          color: WHITE_85,
          letterSpacing: 3,
          marginBottom: 4,
        }
      }, 'PREÇO ESPECIAL'),
      h('span', {
        style: {
          fontSize: 66,
          fontWeight: 700,
          color: WHITE,
          letterSpacing: -2,
          lineHeight: 1,
        }
      }, 'R$ 230,00')
    ),

    // Row 5: WhatsApp CTA
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 28,
      }
    },
      // Green circle with phone icon
      h('div', {
        style: {
          display: 'flex',
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: '#25D366',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }
      },
        h('span', { style: { fontSize: 28, fontWeight: 700, color: WHITE } }, 'W')
      ),
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
        }
      },
        h('span', {
          style: {
            fontSize: 17,
            fontWeight: 700,
            color: WHITE_70,
            letterSpacing: 1,
            marginBottom: 2,
          }
        }, 'ENTRE EM CONTATO AGORA'),
        h('span', {
          style: {
            fontSize: 38,
            fontWeight: 700,
            color: WHITE,
            letterSpacing: 0,
            lineHeight: 1,
          }
        }, '(041) 99151-9622'),
        h('span', {
          style: {
            fontSize: 15,
            color: WHITE_50,
            marginTop: 3,
          }
        }, 'wa.me/5541991519622')
      )
    )
  ), // end main body

  // ── Divider before footer ──
  h('div', {
    style: {
      width: '100%',
      height: 1,
      background: 'rgba(255,255,255,0.10)',
      flexShrink: 0,
    }
  }),

  // ── Footer: ESI Exata logo lockup ──
  h('div', {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '18px 60px',
      gap: 16,
      flexShrink: 0,
    }
  },
    // ESI triple arrows
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
      }
    },
      h('div', { style: { width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: `20px solid ${ESI_RED}` } }),
      h('div', { style: { width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: `20px solid ${ESI_RED}` } }),
      h('div', { style: { width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: `20px solid ${ESI_RED}` } }),
    ),
    // wordmark
    h('span', {
      style: { fontSize: 22, fontWeight: 700, color: WHITE, letterSpacing: 2 }
    }, 'esi'),
    h('span', {
      style: { fontSize: 22, fontWeight: 400, color: 'rgba(255,255,255,0.35)', margin: '0 2px' }
    }, '|'),
    h('span', {
      style: { fontSize: 22, fontWeight: 700, color: WHITE, letterSpacing: 1 }
    }, 'exata'),
    // divider
    h('div', { style: { width: 1.5, height: 28, background: 'rgba(255,255,255,0.25)', margin: '0 8px' } }),
    // sub-brand
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
      }
    },
      h('span', {
        style: { fontSize: 13, color: 'rgba(255,255,255,0.40)', letterSpacing: 1 }
      }, 'esi · soluções integradas'),
      h('span', {
        style: { fontSize: 11, color: 'rgba(255,255,255,0.22)' }
      }, 'Há 21 anos protegendo o que importa.')
    )
  ),

  // ── Red bottom bar ──
  h('div', { style: { width: '100%', height: 10, background: ESI_RED, flexShrink: 0 } }),
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
