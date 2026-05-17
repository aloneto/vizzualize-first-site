#!/usr/bin/env node
/**
 * Gera post Instagram promocional — Kit NVS Hikvision WiFi 2MP
 * Usa @vercel/og (satori + resvg) para renderizar layout preciso.
 * Identidade visual ESI Exata (brand-spec.json).
 * Layout inspirado em modelo de referência (Mercado do Alarme), adaptado para ESI Exata.
 *
 * Produto: Kit NVS com 2 Bullets WiFi 2MP Hikvision
 * Código: 6942160474694
 * Preço de: R$1.818,08 → por: R$1.393,20 (23% OFF)
 */
const { ImageResponse } = require(
  'next/dist/compiled/@vercel/og/index.node.js'
);
const fs = require('fs');
const path = require('path');
const { logos, colors, h } = require('./lib/esi-brand-assets');

const fontRegular = fs.readFileSync(
  path.resolve(__dirname, '../node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')
);

// 1080x1350 — Instagram portrait 4:5
const W = 1080;
const H = 1350;

// Heights budget
const TOP_BAR   = 8;
const HEADER_H  = 112;  // logo 56 + 2*28 padding
const YELLOW_H  = 70;   // headline banner
const PROMO_H   = 50;
const FOOTER_H  = 120;
const BOT_BAR   = 8;
const PRODUCT_H = H - TOP_BAR - HEADER_H - YELLOW_H - PROMO_H - FOOTER_H - BOT_BAR; // ~982px

const { ESI_RED, ESI_DARK, WHITE } = colors;
const YELLOW        = '#F5C800';
const YELLOW_DARK   = '#C4A000';
const LIGHT_BG      = '#F2F2F2';
const HIKVISION_RED = '#CC0000';
const INK           = '#111827';
const GRAY_TEXT     = '#555555';
const GRAY_MID      = '#AAAAAA';

// ─────────────────────────────────────────────
//  Reference image — product cameras photo
// ─────────────────────────────────────────────
const refPhotoPath = path.resolve(__dirname, '../public/instagram/hikvision-ref.jpeg');
if (!fs.existsSync(refPhotoPath)) {
  const dir = path.dirname(refPhotoPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmpSrc = '/tmp/hikvision-reference.jpeg';
  if (fs.existsSync(tmpSrc)) fs.copyFileSync(tmpSrc, refPhotoPath);
}
const productDataUri = fs.existsSync(refPhotoPath)
  ? `data:image/jpeg;base64,${fs.readFileSync(refPhotoPath).toString('base64')}`
  : null;

// ─────────────────────────────────────────────
//  Layout
// ─────────────────────────────────────────────
const LEFT_W  = 490;
const RIGHT_W = W - LEFT_W;  // 590

const element = h('div', {
  style: {
    display: 'flex',
    flexDirection: 'column',
    width: `${W}px`,
    height: `${H}px`,
    background: LIGHT_BG,
    fontFamily: 'Geist',
    overflow: 'hidden',
  }
},

  // ── TOP RED BAR ──
  h('div', { style: { width: '100%', height: TOP_BAR, background: ESI_RED, flexShrink: 0 } }),

  // ── DARK HEADER with ESI logo ──
  h('div', {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: ESI_DARK,
      padding: '28px 52px',
      height: HEADER_H,
      flexShrink: 0,
    }
  },
    h('img', {
      src: logos.horizontalNegativa,
      height: 56,
      style: { objectFit: 'contain' },
    }),
    h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 20px',
        border: `2px solid ${ESI_RED}`,
        borderRadius: 6,
        background: 'rgba(225,29,42,0.14)',
      }
    },
      h('span', {
        style: { fontSize: 15, fontWeight: 700, color: ESI_RED, letterSpacing: 2 }
      }, 'CÂMERAS WIFI')
    )
  ),

  // ── YELLOW HEADLINE BANNER ──
  h('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: YELLOW,
      height: YELLOW_H,
      flexShrink: 0,
    }
  },
    h('span', {
      style: { fontSize: 34, fontWeight: 700, color: INK, letterSpacing: 0.5, textAlign: 'center' }
    }, 'MAIS PERFORMANCE EM KIT COMPLETO')
  ),

  // ── PRODUCT SECTION ──
  h('div', {
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: PRODUCT_H,
      background: WHITE,
      flexShrink: 0,
      overflow: 'hidden',
    }
  },

    // ─── LEFT: Product showcase (dark brand panel) ───
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: LEFT_W,
        height: PRODUCT_H,
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(160deg, #0A1420 0%, ${ESI_DARK} 100%)`,
        flexShrink: 0,
        overflow: 'hidden',
        padding: '40px 32px',
        gap: 20,
      }
    },

      // Camera icon / decorative element (two camera silhouettes)
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          gap: 24,
          alignItems: 'flex-end',
          marginBottom: 8,
        }
      },
        // Camera body 1
        h('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }
        },
          // Antenna
          h('div', { style: { width: 4, height: 56, background: 'rgba(255,255,255,0.6)', borderRadius: 2, marginBottom: 4 } }),
          // Camera body
          h('div', {
            style: {
              display: 'flex',
              width: 120,
              height: 64,
              background: 'rgba(255,255,255,0.12)',
              border: '2px solid rgba(255,255,255,0.25)',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: 8,
              position: 'relative',
            }
          },
            // Lens circle
            h('div', {
              style: {
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
                border: '2px solid rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            },
              h('div', { style: { width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' } })
            )
          )
        ),
        // Camera body 2 (slightly larger, forward)
        h('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }
        },
          h('div', { style: { width: 4, height: 70, background: 'rgba(255,255,255,0.6)', borderRadius: 2, marginBottom: 4 } }),
          h('div', {
            style: {
              display: 'flex',
              width: 140,
              height: 74,
              background: 'rgba(255,255,255,0.16)',
              border: '2px solid rgba(255,255,255,0.35)',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: 8,
            }
          },
            h('div', {
              style: {
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.20)',
                border: '2px solid rgba(255,255,255,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            },
              h('div', { style: { width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' } })
            )
          )
        ),
        // NVR box
        h('div', {
          style: {
            width: 100,
            height: 50,
            background: 'rgba(255,255,255,0.10)',
            border: '2px solid rgba(255,255,255,0.20)',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }
        },
          h('span', { style: { fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: 1 } }, 'NVR')
        )
      ),

      // WiFi waves decorative element
      h('div', {
        style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: 8 }
      },
        h('div', { style: { width: 64, height: 3, borderRadius: 2, background: 'rgba(245,200,0,0.7)' } }),
        h('div', { style: { width: 44, height: 3, borderRadius: 2, background: 'rgba(245,200,0,0.5)' } }),
        h('div', { style: { width: 26, height: 3, borderRadius: 2, background: 'rgba(245,200,0,0.3)' } }),
      ),

      // HIKVISION® brand
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          marginTop: 8,
        }
      },
        h('span', { style: { fontSize: 46, fontWeight: 700, color: HIKVISION_RED, letterSpacing: -1 } }, 'HIK'),
        h('span', { style: { fontSize: 46, fontWeight: 700, color: WHITE, letterSpacing: -1 } }, 'VISION'),
        h('span', { style: { fontSize: 18, fontWeight: 700, color: WHITE, alignSelf: 'flex-start', marginTop: 6 } }, '®')
      ),

      // "Câmeras Bullet WiFi 2MP" descriptor
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          marginTop: 4,
        }
      },
        h('span', { style: { fontSize: 18, color: 'rgba(255,255,255,0.6)', fontWeight: 500, textAlign: 'center' } }, 'Câmeras Bullet WiFi 2MP'),
        h('span', { style: { fontSize: 15, color: 'rgba(255,255,255,0.4)', textAlign: 'center', letterSpacing: 1 } }, '+ Gravador NVR incluso')
      ),

      // Connectivity features row
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'row',
          gap: 12,
          marginTop: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }
      },
        ...[
          { icon: '📡', label: 'WiFi' },
          { icon: '🎥', label: '2 câmeras' },
          { icon: '🌙', label: 'Noturna' },
          { icon: '🔴', label: 'Full HD' },
        ].map(({ label }) =>
          h('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              padding: '6px 14px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 20,
            }
          },
            h('span', { style: { fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600 } }, label)
          )
        )
      ),

      // Red accent line at bottom
      h('div', { style: { width: 80, height: 3, background: ESI_RED, borderRadius: 2, marginTop: 16 } }),
    ),

    // Thin vertical divider
    h('div', { style: { width: 1, height: PRODUCT_H, background: '#E0E0E0', flexShrink: 0 } }),

    // ─── RIGHT: Product name + pricing ───
    h('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: RIGHT_W - 1,
        height: PRODUCT_H,
        padding: '48px 40px 48px 40px',
        justifyContent: 'space-between',
        flexShrink: 0,
      }
    },

      // Top: Product name block
      h('div', {
        style: { display: 'flex', flexDirection: 'column', gap: 0 }
      },

        // "KIT NVS" large title
        h('span', {
          style: {
            fontSize: 68,
            fontWeight: 700,
            color: INK,
            lineHeight: 1,
            letterSpacing: -2,
            marginBottom: 4,
          }
        }, 'KIT NVS'),

        // "COM 2 BULLETS"
        h('span', {
          style: {
            fontSize: 38,
            fontWeight: 700,
            color: INK,
            lineHeight: 1.05,
            marginBottom: 14,
          }
        }, 'COM 2 BULLETS'),

        // WIFI 2MP yellow badge
        h('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: YELLOW,
            padding: '8px 20px',
            borderRadius: 4,
            marginBottom: 20,
            alignSelf: 'flex-start',
          }
        },
          h('span', { style: { fontSize: 28, fontWeight: 700, color: INK, letterSpacing: 1 } }, 'WIFI 2MP')
        ),

        // Código
        h('span', {
          style: { fontSize: 14, color: GRAY_TEXT, letterSpacing: 0.5 }
        }, 'Código: 6942160474694'),
      ),

      // Middle: Product specs grid
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          background: '#F7F7F7',
          borderRadius: 10,
          padding: '16px 20px',
        }
      },
        h('span', { style: { fontSize: 11, fontWeight: 700, color: GRAY_MID, letterSpacing: 2, marginBottom: 12 } }, 'O QUE ESTÁ INCLUÍDO'),
        ...[
          ['2 câmeras bullet WiFi', '2MP / 1080p'],
          ['Gravador NVR', 'sem HD'],
          ['Alcance WiFi', 'até 50m'],
          ['Visão noturna', 'IR integrado'],
        ].map(([label, value]) =>
          h('div', {
            style: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 10,
              marginBottom: 10,
              borderBottom: '1px solid #EBEBEB',
            }
          },
            h('span', { style: { fontSize: 14, color: GRAY_TEXT, fontWeight: 500 } }, label),
            h('span', { style: { fontSize: 14, color: INK, fontWeight: 700 } }, value)
          )
        ).concat([
          // Last row without border
          h('div', {
            style: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }
          },
            h('span', { style: { fontSize: 14, color: GRAY_TEXT, fontWeight: 500 } }, 'Código do produto'),
            h('span', { style: { fontSize: 14, color: INK, fontWeight: 700 } }, '6942160474694')
          )
        ])
      ),

      // Bottom: Price block
      h('div', {
        style: { display: 'flex', flexDirection: 'column', gap: 0 }
      },

        // Price divider
        h('div', { style: { width: '100%', height: 1, background: '#E0E0E0', marginBottom: 16 } }),

        // Prices + badge row
        h('div', {
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }
        },

          // Prices column
          h('div', {
            style: { display: 'flex', flexDirection: 'column', gap: 8 }
          },

            // "de" price (strikethrough)
            h('div', {
              style: { display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 8 }
            },
              h('span', { style: { fontSize: 18, color: GRAY_MID, fontWeight: 500 } }, 'de:'),
              h('span', {
                style: {
                  fontSize: 24,
                  color: GRAY_MID,
                  fontWeight: 500,
                  textDecoration: 'line-through',
                }
              }, 'R$1.818,08')
            ),

            // "por" price
            h('div', {
              style: { display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 6 }
            },
              h('span', { style: { fontSize: 18, color: INK, fontWeight: 600 } }, 'por:'),
              h('div', {
                style: { display: 'flex', flexDirection: 'row', alignItems: 'baseline' }
              },
                h('span', { style: { fontSize: 28, fontWeight: 700, color: INK, marginRight: 2 } }, 'R$'),
                h('span', { style: { fontSize: 64, fontWeight: 700, color: INK, letterSpacing: -2, lineHeight: 1 } }, '1.393'),
                h('span', { style: { fontSize: 32, fontWeight: 700, color: INK, alignSelf: 'flex-start', marginTop: 8 } }, ',20')
              )
            )
          ),

          // 23% OFF badge
          h('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: YELLOW,
              border: `3px solid ${YELLOW_DARK}`,
              flexShrink: 0,
            }
          },
            h('span', { style: { fontSize: 28, fontWeight: 700, color: INK, lineHeight: 1 } }, '23%'),
            h('span', { style: { fontSize: 20, fontWeight: 700, color: INK, lineHeight: 1 } }, 'OFF')
          )
        )
      )
    )
  ),

  // ── PROMO NOTE ──
  h('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: LIGHT_BG,
      height: PROMO_H,
      flexShrink: 0,
    }
  },
    h('span', {
      style: { fontSize: 16, color: GRAY_TEXT, textAlign: 'center' }
    }, 'Promoção válida enquanto durarem os estoques.')
  ),

  // ── ESI EXATA FOOTER (dark background) ──
  h('div', {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: ESI_DARK,
      height: FOOTER_H,
      padding: '0 52px',
      flexShrink: 0,
    }
  },
    h('img', {
      src: logos.horizontalNegativa,
      height: 56,
      style: { objectFit: 'contain' },
    }),
    h('div', {
      style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }
    },
      h('span', { style: { fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 500 } }, 'Fale com nossa equipe'),
      h('span', { style: { fontSize: 22, color: WHITE, fontWeight: 700 } }, '(41) 3527-7007')
    )
  ),

  // ── BOTTOM RED BAR ──
  h('div', { style: { width: '100%', height: BOT_BAR, background: ESI_RED, flexShrink: 0 } }),
);

// ─────────────────────────────────────────────
//  Render + save
// ─────────────────────────────────────────────
const outputPath = path.resolve(__dirname, '../public/instagram/post-hikvision-kit-wifi.png');
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const resp = new ImageResponse(element, {
  width: W,
  height: H,
  fonts: [
    { name: 'Geist', data: fontRegular, style: 'normal', weight: 400 },
    { name: 'Geist', data: fontRegular, style: 'normal', weight: 700 },
  ],
});

resp.arrayBuffer().then(buf => {
  fs.writeFileSync(outputPath, Buffer.from(buf));
  console.log('✓ Imagem gerada com sucesso!');
  console.log('  Arquivo:', outputPath);
  console.log('  Tamanho:', (buf.byteLength / 1024).toFixed(1), 'KB');
  console.log('  Dimensões: 1080×1350px (Instagram 4:5)');
}).catch(err => {
  console.error('Erro ao gerar imagem:', err.message);
  process.exit(1);
});
