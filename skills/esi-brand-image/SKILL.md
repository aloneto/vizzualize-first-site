---
name: esi-brand-image
description: >
  Gera posts visuais para Instagram seguindo a identidade visual ESI Exata.
  Usa brand-spec.json como referência, OpenAI Image Generation API (gpt-image-1),
  e aplica checklist de validacao automaticamente.
---

# ESI Brand Image — Skill de Geracao de Posts Visuais

Gera imagens de posts para Instagram seguindo rigorosamente a identidade visual da ESI Exata.

## Quando usar

- Quando pedirem para criar um post para Instagram da ESI Exata
- Quando precisar gerar imagens que sigam a identidade visual da marca
- Quando receber um briefing de conteudo com segmento, topico e tom

## Referencia obrigatoria

Antes de gerar qualquer imagem, **SEMPRE** leia o arquivo `docs/brand/brand-spec.json` no repositorio do projeto ESI Exata. Este arquivo contem TODA a especificacao de identidade visual.

## Input necessario

Para gerar um post, voce precisa de:

| Campo | Tipo | Obrigatorio | Descricao |
|-------|------|-------------|-----------|
| `segment` | string | sim | ID do segmento: `varejo`, `porto`, `energia`, `agro`, `healthcare`, `condominio`, `corporativo` |
| `topic` | string | sim | Tema curto (ex: "leitor biometrico", "deteccao de gas em planta") |
| `tone` | string | nao | `default` (padrao), `urgente`, ou `celebrativo` |
| `hero_image_description` | string | nao | Descricao da foto hero desejada (se nao fornecida, gerar baseada no segmento) |

## Pipeline de geracao

### Passo 1 — Ler brand-spec.json

```
Leia docs/brand/brand-spec.json e extraia:
- color (paleta de cores)
- typography (tipografia)
- layout_templates (templates disponiveis)
- copy_system (sistema de copy)
- automation_recipe (receita de automacao)
- validation_checklist
```

### Passo 2 — Selecionar template

Siga as regras de `automation_recipe.step_1_pick_template`:

- **Default:** `T01_centered_dark` ou `T02_bottom_dark`
- **Se imagem tem grande area neutra lateral:** `T03_blob_lateral`
- **Se marco ou evento:** `T05_oversized_type`
- **Se anuncio de segmentacao simples:** `T04_split_color` (raro)

### Passo 3 — Gerar headline

Siga `automation_recipe.step_2_generate_headline`:

- Escolha formula F01-F09 alinhada ao tom:
  - `default` → F01, F05, F02
  - `urgente` → F03, F09
  - `celebrativo` → F08, F04
- Headline: 2-6 palavras, fechar com `.` ou `!`
- Quebra de linha intencional a cada 2-3 palavras

### Passo 4 — Gerar imagem com OpenAI

Use a API de geracao de imagens da OpenAI com o modelo `gpt-image-1`:

```bash
curl -s https://api.openai.com/v1/images/generations \
  -H "Authorization: Bearer $OPENAI_API" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-image-1",
    "prompt": "<PROMPT CONSTRUIDO CONFORME REGRAS ABAIXO>",
    "size": "1024x1536",
    "quality": "high"
  }'
```

**Regras para o prompt de imagem:**

O prompt DEVE incluir TODAS estas instrucoes visuais:

1. **Formato:** Post Instagram 4:5 (1080x1350px equivalente)
2. **Foto hero:** Descricao da foto tematica conforme `photography.subjects_allow` — NUNCA usar subjects de `photography.subjects_avoid`
3. **Tratamento da foto:** Tons frios/azulados ou laranjas industriais, saturacao media. SEMPRE overlay escuro (scrim) com minimo 40% opacidade onde o texto pousa
4. **Headline:** Texto exato gerado no Passo 3, em Barlow Condensed Italic 800, branco #FFFFFF, line-height 0.92, posicionado conforme template
5. **Logo:** Lockup `dual_esi_exata` (logo "esi solucoes integradas" + "esi|exata" com seta vermelha), bottom-center, altura 56-72px, clear-space 24px
6. **Vermelho ESI (#E11D2A):** APENAS no logo e na seta-grafismo, NUNCA no headline
7. **Grafismo (se aplicavel):** Seta ESI conforme treatment do template selecionado
8. **Sem emoji no criativo**

**Exemplo de prompt completo:**

```
Create an Instagram post (4:5 aspect ratio, 1080x1350px).

PHOTO: A professional CCTV security camera mounted on a retail store ceiling, 
shallow depth of field, cool blue-toned color grading, medium saturation. 
The camera is positioned off-center following rule of thirds.

OVERLAY: Dark gradient overlay (scrim) covering the entire image, at least 40% 
opacity where text appears, ensuring high contrast for white text.

HEADLINE TEXT: "Tecnologia\nque protege." in white (#FFFFFF), bold condensed 
italic sans-serif font (similar to Barlow Condensed Italic 800), centered 
vertically and horizontally. Line-height tight (0.92). Letter-spacing -0.01em.

LOGO: At bottom-center, the "esi | solucoes integradas" logo paired with 
"esi|exata" featuring red triple arrow (chevron) marks in #E11D2A. 
Small size (about 56-72px height equivalent), with 24px clear space around it.

STYLE: Professional, confident, B2B security technology aesthetic. 
No emojis, no decorative shapes except the red ESI arrow if used as graphic device.
Clean, modern, editorial feel.
```

### Passo 5 — Gerar caption

Siga `copy_system.caption_template`:

```
Linha 1: Reformulacao ou expansao da chamada do post (1 frase)
Linha 2 (opcional): Bullet curto explicando o que / pra quem
Linha 3: CTA — "Fale com nossa equipe", link na bio, telefone, ou pergunta provocativa
[linha em branco]
Hashtags: 4 a 7, #esiexata sempre em primeiro + rotation_by_segment do segmento
```

### Passo 6 — Validar

Aplique TODOS os itens do `validation_checklist`:

- [ ] Headline em Barlow Condensed Italic 800 branco, com quebra de linha intencional?
- [ ] Pontuacao fechada (. ou !)?
- [ ] Foto com scrim escuro garantindo legibilidade?
- [ ] Logo no rodape com clear-space minimo?
- [ ] Vermelho ESI usado APENAS em logo/seta-grafismo?
- [ ] Sem emoji no criativo (legenda OK com moderacao)?
- [ ] Sem palavras-cliche do lexicon_avoid?
- [ ] Headline <= 7 palavras?
- [ ] Hashtags entre 4 e 7, com #esiexata em primeiro?

Se qualquer item falhar, regenerar corrigindo o problema.

## Output esperado

Entregar ao solicitante:

1. **Imagem do post** (URL ou arquivo salvo)
2. **Caption completa** (texto + hashtags)
3. **Checklist de validacao** preenchido
4. **Metadados:** template usado, formula de headline, segmento

## Boas praticas OpenAI Image Generation

- Sempre usar modelo `gpt-image-1` (versao 2 do gerador)
- Tamanho: `1024x1536` (mais proximo de 4:5)
- Quality: `high`
- Prompts detalhados e especificos produzem melhores resultados
- Incluir instrucoes de tipografia, posicionamento e cores no prompt
- Se o resultado nao atender, iterar refinando o prompt (nao gerar multiplas vezes o mesmo prompt)

## Palavras proibidas no copy

Nunca usar: "solucoes inteligentes", "transformacao digital", "parceiro estrategico", "excelencia", "vanguarda", "sinergia", "robusto", "disruptivo", "incrivel", "amazing"

## Palavras preferidas

Preferir: "tecnologia", "seguranca", "protecao", "inovacao", "controle", "comunicacao", "engenharia", "operacao", "prevencao", "perda", "missao critica", "tempo real", "auditavel", "inteligencia", "monitoramento", "perimetro"
