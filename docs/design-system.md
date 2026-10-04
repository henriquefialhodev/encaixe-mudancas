# Design system: Encaixe Mudanças

Sistema visual do site. Os valores de cor, fontes e regras base vêm da ficha do projeto (`ficha.md`). Os contrastes foram calculados com a fórmula da WCAG 2.1.

---

## 1. Direção visual

**Etiqueta de expedição: papel, tinta, fita, sinal.**

- **Papel:** o fundo é cor de papel e os conteúdos vivem em cartões brancos, como etiquetas coladas numa caixa.
- **Tinta:** texto, bordas e ícones na mesma cor escura. Cantos retos e bordas de 2px, como uma etiqueta impressa.
- **Fita:** tiras de fita kraft separam as secções.
- **Sinal:** o laranja aparece só em ações. Se é laranja, faz alguma coisa.

**O que transmite a quem visita:** uma empresa organizada, que identifica e trata cada objeto com método. Tudo tem etiqueta, número e volume. O preço é claro e o processo tem passos contados. É a sensação de "isto está controlado", que é o que preocupa quem vai mudar de casa.

**O que evitar:**

- Gradientes, sombras suaves, cantos arredondados e efeitos de vidro.
- O "neo-brutalismo" de sombras deslocadas a preto e cores saturadas. Parece o mesmo estilo, mas é um tique visual muito repetido e cansa.
- Ilustrações de stock e fotografias com pessoas geradas por IA.
- Laranja como decoração (títulos, ícones, fundos de secção).
- Texto por cima de fotografias.
- Maiúsculas fora das etiquetas em mono. Se tudo estiver em maiúsculas, as etiquetas deixam de se destacar.

---

## 2. Logótipo

Logótipo tipográfico, com um símbolo opcional para o favicon e a imagem de Open Graph.

### Wordmark

Duas linhas dentro de um retângulo de borda 2px, como uma etiqueta de envio.

| Linha | Texto | Fonte | Peso | Tamanho no cabeçalho | Espaçamento entre letras |
|---|---|---|---|---|---|
| 1 | ENCAIXE | Barlow Condensed | 700 | 2.8rem (28px) | 0.02em |
| 2 | MUDANÇAS | IBM Plex Mono | 500 | 1.4rem (14px) | 0.2em |

- As duas linhas ficam alinhadas à esquerda. Com 14px e o espaçamento largo, "MUDANÇAS" ocupa 87px, praticamente a mesma largura que "ENCAIXE" (88,5px). As duas linhas formam um bloco.
- Margem interna do retângulo: 4px em cima e em baixo, 8px dos lados (`--space-1` e `--space-2`).
- As maiúsculas são feitas com `text-transform: uppercase`. No HTML o texto fica "Encaixe Mudanças", para o leitor de ecrã o ler como palavras e não letra a letra.
- **No cabeçalho, o logótipo é texto HTML dentro do link para a página inicial, não uma imagem.** As fontes já estão carregadas, por isso não custa nenhum pedido extra, cresce com o zoom e o nome do link é o próprio texto.

### Símbolo

Um quadrado em traço de 2px com o canto superior direito em falta. Nesse espaço encaixa um quadrado mais pequeno, cheio. É uma caixa com uma peça a encaixar, que é o nome da empresa.

- Usa-se no favicon, no ícone do manifest e na imagem de Open Graph.
- Nestas versões, o ficheiro é SVG com o texto convertido em contornos (no Figma, "Outline stroke" e "Flatten"). Um SVG usado como imagem não carrega as fontes do site, por isso o texto tem de passar a formas.
- No favicon a 16px e 32px usa-se só o símbolo, com traço mais grosso (3px numa grelha de 32px), para não desaparecer.

### Versões

| Versão | Cor do logótipo | Fundo | Contraste |
|---|---|---|---|
| Fundo claro | ink `#1D1C1A` | paper ou surface | 14,73 / 17,03 |
| Fundo escuro (rodapé) | paper `#F3EEE4` | ink | 14,73 |

- Nunca em laranja, porque o laranja está reservado às ações.
- Nunca em kraft nem sobre fotografias.
- Área de proteção à volta: no mínimo a altura da linha "MUDANÇAS".
- Tamanho no cabeçalho: 108,5 × 58,2px, com a borda incluída. É também o tamanho mínimo do wordmark. Abaixo disso usa-se só o símbolo.

---

## 3. Cores

| Token | Hex | Papel |
|---|---|---|
| `paper` | `#F3EEE4` | Fundo das páginas. Texto do rodapé e de botões em `:active` |
| `surface` | `#FFFFFF` | Cartões, formulário, campos, painel da estimativa, barra fixa no fundo |
| `ink` | `#1D1C1A` | Texto principal, bordas de cartões e botões, ícones, fundo do rodapé, texto dos botões primários |
| `muted` | `#5A554D` | Texto secundário, ajudas dos campos, **bordas dos campos de formulário**, estados desativados |
| `kraft` | `#C49A6C` | Só decorativo: tiras de fita e destaque do total. O único texto permitido por cima é ink |
| `signal` | `#E4570F` | Fundo do botão primário, com texto ink de peso 600. Link em `:hover` no rodapé |
| `signal-hover` | `#F07A3C` | Fundo do botão primário em `:hover`. É mais claro que signal, para o contraste subir |
| `signal-dark` | `#A8400A` | Links sobre fundo claro e contorno de foco de 3px sobre fundo claro |
| `error` | `#B42318` | Mensagens de erro e borda dos campos com erro |
| `success` | `#1E6B3A` | Confirmação do pedido em `obrigado.html` |
| `line` | `#D9CFBF` | Só divisores decorativos finos (por exemplo, entre itens da calculadora) |

**Nota sobre `signal-hover`:** é o único valor que não estava na ficha. Nasce da regra de que o `:hover` não pode escurecer o laranja (ver secção 4).

**Nunca:**

- Texto branco (surface) ou paper sobre signal.
- Signal como cor de texto sobre fundo claro.
- Texto sobre kraft que não seja ink.
- Line como borda de campos de formulário. As bordas dos campos usam muted.
- Signal-dark sobre ink (rodapé), nem em texto nem no contorno de foco.

---

## 4. Contraste

Mínimos da WCAG 2.1 AA:

- Texto normal: 4,5:1 (critério 1.4.3).
- Texto grande (24px, ou 18,66px a negrito): 3:1.
- Limites de componentes, ícones necessários e indicador de foco: 3:1 contra a cor ao lado (critério 1.4.11).

### Texto sobre fundo

| Texto | Fundo | Onde | Rácio | AA |
|---|---|---|---|---|
| ink | paper | texto das páginas | 14,73 | Sim (também AAA) |
| ink | surface | texto em cartões e campos | 17,03 | Sim (também AAA) |
| muted | paper | texto secundário fora de cartões | 6,39 | Sim |
| muted | surface | ajudas dos campos, texto secundário em cartões | 7,39 | Sim (também AAA) |
| signal-dark | paper | links | 5,34 | Sim |
| signal-dark | surface | links em cartões | 6,17 | Sim |
| ink | kraft | etiquetas sobre a fita, total durante o destaque | 6,64 | Sim |
| paper | ink | texto e links do rodapé | 14,73 | Sim (também AAA) |
| error | surface | mensagens de erro nos passos | 6,57 | Sim |
| error | paper | mensagens de erro fora de cartões | 5,69 | Sim |
| success | surface | confirmação | 6,52 | Sim |
| success | paper | confirmação fora de cartões | 5,64 | Sim |

### Estados dos botões e links

| Estado | Texto | Fundo | Rácio | AA |
|---|---|---|---|---|
| Primário normal | ink | signal | 4,60 | Sim, à justa. Por isso o texto tem peso 600 |
| Primário `:hover` | ink | signal-hover | 6,13 | Sim |
| Primário `:focus-visible` | ink | signal | 4,60 | Sim. O fundo não muda, só aparece o contorno |
| Primário e secundário `:active` | paper | ink | 14,73 | Sim (também AAA) |
| Secundário normal | ink | surface | 17,03 | Sim |
| Secundário `:hover` | ink | paper | 14,73 | Sim |
| Link `:hover` e `:active` | ink | paper / surface | 14,73 / 17,03 | Sim |
| Link do rodapé `:hover` | signal | ink | 4,60 | Sim |
| Desativado | muted | surface | 7,39 | Sim. A WCAG não o exige em controlos desativados, mas assim continua legível |

**Porque o `:hover` do primário clareia:** ink sobre signal dá 4,60, só 0,10 acima do mínimo. Qualquer laranja mais escuro aproxima-se do ink e o rácio cai abaixo de 4,5. Um laranja mais claro afasta-se do ink e o rácio sobe para 6,13.

**O limite do botão não depende do laranja.** O laranja sobre paper dá só 3,20 e o signal-hover dá 2,40. Não faz mal, porque quem marca o limite do botão é a borda de 2px em ink (14,73 sobre paper). Por isso a borda nunca se retira dos botões.

### Elementos que não são texto (mínimo 3:1)

| Elemento | Cor | Contra | Rácio | AA |
|---|---|---|---|---|
| Borda de cartões e botões | ink | paper / surface | 14,73 / 17,03 | Sim |
| Borda dos campos | muted | surface / paper | 7,39 / 6,39 | Sim |
| Borda dos campos em `:hover` | ink | surface | 17,03 | Sim |
| Borda dos campos com erro | error | surface | 6,57 | Sim |
| Contorno de foco em fundo claro | signal-dark | paper / surface | 5,34 / 6,17 | Sim |
| Contorno de foco no rodapé | signal | ink | 4,60 | Sim |
| Ícones | ink | paper / surface | 14,73 / 17,03 | Sim |

### Combinações proibidas

| Combinação | Rácio | Porquê |
|---|---|---|
| surface (branco) sobre signal | 3,70 | Chumba em texto normal |
| paper sobre signal | 3,20 | Chumba em texto normal |
| signal como texto sobre paper / surface | 3,20 / 3,70 | Chumba em texto normal |
| signal-dark sobre ink | 2,76 | Chumba em texto e em foco. No rodapé, os links são paper e o foco é signal |
| muted sobre ink | 2,30 | Chumba. No rodapé, o texto secundário também é paper |
| kraft sobre paper | 2,22 | Só decoração |
| line sobre paper / surface | 1,33 / 1,54 | Nunca como borda de campo nem como texto |

---

## 5. Tipografia

### Famílias e ficheiros

Todas com licença SIL Open Font License 1.1. São 4 ficheiros WOFF2, só com o subconjunto latino, alojados no site.

| Família | Peso | Uso | Página oficial | Ficheiro WOFF2 (subconjunto latino) |
|---|---|---|---|---|
| Barlow Condensed | 700 | Títulos e logótipo | [Google Fonts](https://fonts.google.com/specimen/Barlow+Condensed) e [repositório do autor](https://github.com/jpt/barlow) | [latin-700-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/barlow-condensed@latest/latin-700-normal.woff2) |
| Barlow | 400 | Texto | [Google Fonts](https://fonts.google.com/specimen/Barlow) e [repositório do autor](https://github.com/jpt/barlow) | [latin-400-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/barlow@latest/latin-400-normal.woff2) |
| Barlow | 600 | Texto em destaque, botões, etiquetas dos campos | (igual) | [latin-600-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/barlow@latest/latin-600-normal.woff2) |
| IBM Plex Mono | 500 | Etiquetas, números de referência, m³ | [Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Mono) e [repositório da IBM](https://github.com/IBM/plex) | [latin-500-normal.woff2](https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-500-normal.woff2) |

- **Porque estes links:** o download do Google Fonts e os repositórios oficiais dão ficheiros completos (TTF ou OTF, com todos os alfabetos). Os links da última coluna são do Fontsource, que distribui os mesmos ficheiros do Google Fonts já em WOFF2 e cortados por subconjunto. É a forma mais curta de ter exatamente 4 ficheiros pequenos.
- O subconjunto latino cobre tudo o que o site precisa em pt-PT: ã, õ, ç, acentos, €, ³ e º.
- Nomes sugeridos na pasta `assets/fonts/`: `barlow-condensed-700.woff2`, `barlow-400.woff2`, `barlow-600.woff2`, `ibm-plex-mono-500.woff2`.
- Pilhas de recurso, enquanto as fontes carregam: títulos `"Barlow Condensed", "Arial Narrow", sans-serif`, texto `"Barlow", system-ui, sans-serif`, mono `"IBM Plex Mono", ui-monospace, monospace`.

### Escala

**Unidades:** o `html` tem `font-size: 62.5%`. Com a letra do browser no tamanho normal (16px), 1rem passa a valer 10px, e as contas ficam simples: 1.6rem = 16px. Como é uma percentagem, continua a respeitar o tamanho de letra que a pessoa escolher nas definições do browser. Todos os tamanhos de letra são em rem. O `body` tem de definir o tamanho do texto com `--font-size-body`. Sem isso, todo o texto que não tenha um tamanho próprio fica com 10px.

`clamp(mínimo, preferido, máximo)` escolhe um tamanho entre o mínimo e o máximo que cresce com a largura do ecrã. Os valores abaixo vão de 360px a 1280px de largura. O valor preferido junta `rem` e `vw` para que o texto continue a crescer com o zoom do browser (critério 1.4.4).

| Elemento | Mobile | Desktop | Valor | Fonte e peso | Altura de linha | Espaçamento entre letras |
|---|---|---|---|---|---|---|
| h1 | 40px | 64px | `clamp(4rem, 3.061rem + 2.609vw, 6.4rem)` | Barlow Condensed 700 | 1.05 | 0 |
| h2 | 30px | 44px | `clamp(3rem, 2.452rem + 1.522vw, 4.4rem)` | Barlow Condensed 700 | 1.15 | 0 |
| h3 | 22px | 28px | `clamp(2.2rem, 1.965rem + 0.6522vw, 2.8rem)` | Barlow Condensed 700 | 1.15 | 0.01em |
| Texto de entrada (hero) | 18px | 21px | `clamp(1.8rem, 1.683rem + 0.3261vw, 2.1rem)` | Barlow 400 | 1.5 | 0 |
| Texto | 16px | 18px | `clamp(1.6rem, 1.522rem + 0.2174vw, 1.8rem)` | Barlow 400 | 1.6 | 0 |
| Botões e links do menu | 16px | 18px | igual ao texto | Barlow 600 | 1.2 | 0.01em |
| Etiqueta do campo (`<label>`) | 16px | 18px | igual ao texto | Barlow 600 | 1.2 | 0 |
| Texto dentro dos campos | 16px | 16px | `1.6rem` | Barlow 400 | 1.2 | 0 |
| Texto pequeno (ajudas, erros, avisos) | 14px | 14px | `1.4rem` | Barlow 400 (erros 600) | 1.5 | 0 |
| Etiqueta mono ("PASSO 02 / 04") | 14px | 14px | `1.4rem` | IBM Plex Mono 500, maiúsculas | 1.2 | 0.08em |
| Total em m³ | 28px | 36px | `clamp(2.8rem, 2.487rem + 0.8696vw, 3.6rem)` | IBM Plex Mono 500 | 1.2 | 0 |

- **Os títulos não vão em maiúsculas.** As maiúsculas ficam só nas etiquetas mono, para serem o sinal visual de "etiqueta".
- **O texto dentro dos campos fica sempre em 16px.** O Safari do iPhone faz zoom automático ao focar um campo com letra mais pequena, e a página fica desalinhada.
- Largura máxima de linha nos parágrafos: 65 caracteres (`65ch`). Linhas mais compridas cansam a leitura.
- As maiúsculas das etiquetas fazem-se com `text-transform: uppercase`. Alguns leitores de ecrã soletram palavras escritas em maiúsculas no HTML.

---

## 6. Espaçamento

Escala com base de 4px. Todos os valores em px.

| Token | Valor | Onde se usa |
|---|---|---|
| `--space-1` | 4px | **Dentro de componentes:** margem interna do logótipo (vertical), espaço entre o ícone de erro e a mensagem |
| `--space-2` | 8px | **Dentro de componentes:** entre a etiqueta e o campo, entre o ícone e o texto num botão, margem do logótipo (horizontal) |
| `--space-3` | 12px | **Dentro de componentes:** margem interna dos campos, margem vertical dos botões, entre elementos de um cartão |
| `--space-4` | 16px | **Dentro de componentes:** entre os botões − e + e a quantidade, entre itens da calculadora. Margem lateral da página em mobile |
| `--space-5` | 24px | **Dentro e entre componentes:** margem interna dos cartões em mobile, margem horizontal dos botões, entre campos do mesmo passo |
| `--space-6` | 32px | **Entre componentes:** espaço entre cartões numa grelha, margem interna dos cartões a partir de 768px |
| `--space-7` | 48px | **Entre componentes:** entre o título de uma secção e o conteúdo, entre os passos quando aparecem seguidos (sem JavaScript) |
| `--space-8` | 64px | **Entre secções** em mobile |
| `--space-9` | 96px | **Entre secções** a partir de 1024px |

- `--section-space` guarda o espaço entre secções: `--space-8` em mobile e `--space-9` a partir de 1024px.
- Regra para decidir: quanto mais relacionados estão dois elementos, mais pequeno o espaço entre eles. Uma etiqueta fica a 8px do seu campo e a 24px do campo seguinte, e é isso que mostra a que campo pertence.

---

## 7. Layout

### Larguras

- **Largura máxima do conteúdo:** 1152px. Acima disto, as linhas e as grelhas ficam largas demais para ler de uma vez.
- **Largura máxima do texto corrido:** 65ch.
- **Margem lateral (`--gutter`):** 16px em mobile, 24px a partir de 768px, 32px a partir de 1024px.

### Breakpoints

Dois breakpoints, em px: tablet (768px) e desktop (1024px). As media queries são `min-width`: o CSS base é o de mobile e cada breakpoint acrescenta o que muda a partir dessa largura.

| Breakpoint | O que muda | Motivo |
|---|---|---|
| até 767px | Uma coluna. Menu atrás de um botão. Estimativa numa barra fixa no fundo | Num telemóvel só cabe uma coluna legível |
| 768px | Serviços e divisões da calculadora em 2 colunas. Menu sempre visível, o botão "Menu" desaparece (F1). Margem lateral 24px | É a largura de um tablet, onde a ficha pede o menu sempre visível. Dois cartões lado a lado ficam com 344px cada (768px menos as margens de 48px e o espaço de 32px entre eles, a dividir por dois). Confirmar no browser que os links do menu cabem numa linha ao lado do logótipo |
| 1024px | Serviços em 3 colunas. "Como funciona" em linha horizontal. No orçamento, o painel da estimativa passa para o lado do formulário e a calculadora volta a uma coluna. Margem lateral 32px | A 1024px, tirando as margens (64px), o painel (320px) e o espaço entre os dois (48px), o formulário fica com 592px. Abaixo disto, os campos e a calculadora ficavam apertados. Com o painel ao lado, o formulário tem no máximo 640px: em duas colunas, nomes como "Cama de solteiro com colchão" ocupavam três linhas |

**Atenção:** as custom properties não funcionam dentro da condição de um `@media`. Os breakpoints escrevem-se à mão em cada media query. Dentro do `@media` já se pode mudar o valor de uma custom property, por exemplo o `--gutter`.

### Grelhas

- **Página inicial:** grelha de 1, 2 ou 3 colunas para os serviços, com `--space-6` entre cartões.
- **"Como funciona":** lista vertical em mobile (linha temporal a descer). A partir de 1024px, 4 colunas na horizontal.
- **Orçamento em mobile:** uma coluna com o formulário e a barra fixa no fundo. A barra tapa o fim da página, por isso:
  - o `<body>` leva uma margem em baixo igual à altura da barra.
  - o `<html>` leva `scroll-padding-bottom` com essa mesma altura (conceito novo: diz ao browser quanto espaço deixar livre ao fazer scroll até um elemento). Assim, quando o foco passa para um campo junto ao fundo, o campo não fica escondido debaixo da barra.
- **Orçamento a partir de 1024px:** duas colunas. Formulário à esquerda (ocupa o espaço que sobra, até 640px) e painel da estimativa à direita (320px), com `--space-7` entre eles. O painel fica preso ao topo enquanto se faz scroll (`position: sticky`).

---

## 8. Forma

| Propriedade | Valor | Porquê |
|---|---|---|
| Raio dos cantos | 0 em tudo | Uma etiqueta impressa tem cantos retos. Um único elemento arredondado quebrava o estilo |
| Borda de cartões, botões, campos e logótipo | 2px | Linha de tinta visível. Em campos, uma borda mais grossa também ajuda quem vê mal |
| Borda de divisores decorativos | 1px em line | São só uma pista visual, não um limite de componente |
| Borda dos estados desativados | 2px tracejada em muted | O tracejado mostra "não disponível" sem depender só da cor |
| Contorno de foco | 3px, afastado 2px do elemento | O afastamento impede que o contorno se confunda com a borda de 2px em ink |
| Sombras | Nenhuma | A profundidade vem do contraste entre paper e surface e da borda em ink. Sombras suaves eram o look genérico a evitar. Sombras duras deslocadas eram o tique "neo-brutalista" |

---

## 9. Componentes

### Regras comuns

- **Só um botão primário (laranja) por ecrã ou por passo.** Interpretação da regra "laranja só para ações": o laranja aparece só em ações, mas nem todas as ações são laranja. Se fossem, o "Seguinte" deixava de se destacar.
- **Área mínima de toque: 44 × 44px** (`--tap-target`).
- **As mudanças de estado são instantâneas, sem transição.** As únicas animações do site são as da secção 12.
- **Desativar é a exceção.** A ficha já define que "Seguinte" e o envio validam ao clicar, em vez de ficarem desativados. Um botão desativado não diz porque está desativado e perde o foco. O estilo desativado existe para os botões − e + da calculadora e para casos futuros.
- **`disabled` e `aria-disabled` não são a mesma coisa** (conceito novo). Um botão com `disabled` sai da ordem do Tab e, se tinha o foco, o foco perde-se para o início da página. Com `aria-disabled="true"`, o botão continua focável e o leitor de ecrã anuncia "indisponível", mas é o JavaScript que tem de ignorar o clique. Nos botões − e +, usa-se `aria-disabled`.

### Botão primário

Exemplos: "Pedir orçamento", "Seguinte", "Enviar pedido".

- Fundo signal, texto ink Barlow 600, borda 2px ink, cantos retos.
- Margem interna `--space-3` em cima e em baixo, `--space-5` dos lados. Altura mínima 44px.
- Ícone opcional de seta à direita do texto, 24px, a `--space-2` do texto.

| Estado | Aspeto | Contraste |
|---|---|---|
| Normal | Fundo signal, texto ink, borda ink | 4,60 |
| `:hover` | Fundo signal-hover (mais claro). Texto e borda iguais | 6,13 |
| `:focus-visible` | Igual ao normal + contorno 3px signal-dark afastado 2px | texto 4,60, contorno 5,34 / 6,17 |
| `:active` | Fundo ink, texto paper. Efeito de carimbo | 14,73 |
| Desativado | Fundo surface, texto muted, borda 2px tracejada muted, cursor `not-allowed`. Sem laranja, porque o laranja quer dizer "podes clicar" | 7,39 |

### Botão secundário

Exemplos: "Anterior", "Menu".

- Fundo surface, texto ink Barlow 600, borda 2px ink. Mesmas medidas do primário.

| Estado | Aspeto | Contraste |
|---|---|---|
| Normal | Fundo surface, texto ink | 17,03 |
| `:hover` | Fundo paper + texto sublinhado. Surface e paper são muito parecidos (1,16:1), por isso o sublinhado é o que torna o hover visível | 14,73 |
| `:focus-visible` | Igual ao normal + contorno 3px signal-dark afastado 2px | contorno 5,34 / 6,17 |
| `:active` | Fundo ink, texto paper | 14,73 |
| Desativado | Igual ao primário desativado | 7,39 |

### Link

Links no texto e botões com aspeto de link (exemplo: "Editar" no resumo do passo 4).

| Estado | Fundo claro | Rodapé (fundo ink) |
|---|---|---|
| Normal | signal-dark, sublinhado de 1px (5,34 / 6,17) | paper, sublinhado de 1px (14,73) |
| `:hover` | ink, sublinhado de 2px (14,73 / 17,03) | signal, sublinhado de 2px (4,60) |
| `:focus-visible` | contorno 3px signal-dark afastado 2px (5,34 / 6,17) | contorno 3px signal afastado 2px (4,60) |
| `:active` | ink, sem sublinhado | paper, sem sublinhado |
| Desativado | Não existe. Um link sem destino não é um link. Se uma ação não está disponível, não se mostra | (igual) |

- O sublinhado fica sempre nos links dentro de texto, porque a cor sozinha não chega para distinguir um link (critério 1.4.1).
- `:visited` fica igual ao normal. Num site pequeno, mudar a cor só acrescenta uma cor a gerir.

### Campos de formulário

Inputs de texto, email, telefone, data, `<select>` e `<textarea>`.

- `<label>` por cima do campo, Barlow 600, a `--space-2` do campo.
- Texto de ajuda em muted, 14px, entre a etiqueta e o campo, ligado com `aria-describedby`.
- Como quase todos os campos são obrigatórios, marcam-se os opcionais com "(opcional)" na etiqueta, em vez de pôr um asterisco em todos.
- Campo: fundo surface, borda 2px muted, altura mínima 48px (`--input-min-height`), margem interna `--space-3`, texto 16px.
- `<select>`: o mesmo aspeto, com uma seta do sprite à direita.
- `<textarea>` ("Descreva o recheio"): o mesmo aspeto, com 6 linhas de altura inicial.

| Estado | Aspeto | Contraste |
|---|---|---|
| Normal | Borda 2px muted | 7,39 sobre surface |
| `:hover` | Borda ink | 17,03 |
| `:focus-visible` | Borda ink + contorno 3px signal-dark afastado 2px | contorno 6,17 sobre surface |
| `:active` | Não se aplica a campos de texto. Num campo, clicar é focar | |
| Desativado | Fundo paper, borda 2px tracejada muted, texto muted. Não se usa neste projeto | 6,39 |
| Erro | Borda 2px error. Mensagem por baixo do campo em error, 14px, peso 600, com ícone de alerta de 16px antes do texto. O campo leva `aria-invalid="true"` e a mensagem entra no `aria-describedby` | borda 6,57, texto 6,57 |
| Erro + foco | Borda error + contorno signal-dark | |

- O ícone na mensagem de erro existe porque o erro não pode ser comunicado só pela cor (critério 1.4.1).
- **Caixas de seleção e botões de opção** (elevador sim ou não, consentimento RGPD): os nativos do browser, com `accent-color` em ink e 20px de lado. `accent-color` é novo: muda a cor dos controlos nativos sem os ter de redesenhar. A linha inteira, com a etiqueta, tem no mínimo 44px de altura e a etiqueta também marca a caixa.
- **Cada passo é um `<fieldset>`** com o aspeto de cartão. O título do passo vai dentro do `<legend>` como `<h2>` (o HTML permite títulos dentro de `<legend>`). É esse título que recebe o foco quando o passo muda.

### Cartões

Serviços, passos do formulário, painel da estimativa.

- Fundo surface, borda 2px ink, cantos retos, sem sombra.
- Margem interna `--space-5` em mobile, `--space-6` a partir de 768px.
- Ordem interna: etiqueta mono ("SERVIÇO 01") → título h3 → texto → link opcional. `--space-3` entre elementos.

| Estado | Aspeto |
|---|---|
| Normal | Como acima |
| `:hover`, `:focus-visible`, `:active`, desativado | Não existem. O cartão não é clicável. Só o link lá dentro é, e segue os estados do link |

**Porque o cartão inteiro não é um link:** o leitor de ecrã leria o cartão todo como nome do link, e deixava de ser possível selecionar o texto do cartão.

### Navegação

**Cabeçalho:** fundo paper, borda inferior 2px ink. Logótipo à esquerda, menu à direita.

**Links do menu:** Barlow 600, ink, sem sublinhado em repouso. Dentro de um menu, a posição já mostra que são links.

| Estado | Aspeto | Contraste |
|---|---|---|
| Normal | Texto ink | 14,73 |
| `:hover` | Sublinhado de 2px, afastado 0.3em do texto | 14,73 |
| `:focus-visible` | Contorno 3px signal-dark afastado 2px | 5,34 |
| `:active` | Sublinhado de 3px | 14,73 |
| Página atual (`aria-current="page"`) | Sublinhado fixo de 3px. Não depende só da cor | 14,73 |
| Desativado | Não existe | |

**Botão "Menu" (abaixo de 768px):** botão secundário de 44 × 44px no mínimo, com ícone de menu e a palavra "Menu" em etiqueta mono. Com o menu aberto, o ícone passa a uma cruz e o texto a "Fechar". Estados iguais ao botão secundário.

**Menu aberto em mobile:** painel com fundo surface por baixo do cabeçalho, largura total, borda inferior 2px ink. Links um por linha, cada um com 44px de altura no mínimo. Abre e fecha sem animação.

**Rodapé:** fundo ink, texto e links paper. Logótipo na versão para fundo escuro. Aviso de projeto fictício e link do Livro de Reclamações Eletrónico. Links e foco com as regras do rodapé da tabela do link.

### Botões − e + da calculadora

- Quadrados de 44 × 44px, fundo surface, borda 2px ink, ícone de 24px em ink.
- A quantidade fica entre os dois: IBM Plex Mono 500, 18px, centrada, com largura mínima de 2 caracteres (`2ch`), para a linha não mexer quando passa de 9 para 10.
- Por cima, o nome do item em Barlow 400 e o volume unitário em mono muted ("0,8 M³").
- Não são laranja. Há dezenas destes botões na página e o laranja deixava de distinguir o "Seguinte".
- Colunas das divisões: uma em mobile, duas a partir de 768px, e outra vez uma a partir de 1024px, quando o painel da estimativa aparece ao lado do formulário (ver secção 7).

| Estado | Aspeto | Contraste |
|---|---|---|
| Normal | Fundo surface, ícone ink | 17,03 |
| `:hover` | Fundo paper | 14,73 |
| `:focus-visible` | Contorno 3px signal-dark afastado 2px | 6,17 |
| `:active` | Fundo ink, ícone paper | 14,73 |
| No limite (− em 0, + em 20) | `aria-disabled="true"`. Borda 2px tracejada muted, ícone muted, cursor `not-allowed`. Continua focável e o clique não faz nada | 7,39 |

### Indicador de passos

- Lista ordenada (`<ol>`) com 4 itens em linha e `aria-label="Progresso do pedido"`.
- Por cima, a etiqueta mono "PASSO 02 / 04" com `aria-hidden="true"`, e ao lado um texto só para leitores de ecrã: "Passo 2 de 4". Um leitor de ecrã leria "zero dois barra zero quatro".
- Em mobile, cada item mostra só o número ("01"). O nome do passo continua no HTML, escondido visualmente, para o leitor de ecrã ler "01, Origem e destino" e não só "01". Não se repete o nome do passo atual por baixo da lista, porque o título do cartão (h2) aparece logo a seguir e diz o mesmo.
- A partir de 768px, cada item mostra o número e o nome.

| Estado | Aspeto | Contraste |
|---|---|---|
| Concluído | Fundo ink, texto paper, ícone de visto. Texto escondido "concluído" para leitores de ecrã | 14,73 |
| Atual | Fundo surface, borda 2px ink, texto ink peso 600. `aria-current="step"` | 17,03 |
| Futuro | Sem fundo, borda 2px tracejada muted, texto muted | 6,39 |
| `:hover`, `:focus-visible`, `:active`, desativado | Não existem. O indicador não é clicável | |

**Porque não é clicável:** se fosse, dava para saltar para o passo 4 sem validar os anteriores. Para voltar atrás há o "Anterior" e os botões "Editar" do resumo.

### Fita kraft (divisor)

- Tira com fundo kraft, 20px de altura (`--tape-height`), largura do contentor, sem rotação.
- Puramente decorativa: `aria-hidden="true"`.
- Variante com texto: etiqueta mono em ink ("FRÁGIL · ESTE LADO PARA CIMA"), 6,64:1. Se o texto for só decoração, continua com `aria-hidden="true"`.
- Onde: entre as secções da página inicial e no topo do painel da estimativa. No máximo uma fita entre duas secções.

### Painel da estimativa

- **A partir de 1024px:** cartão à direita do formulário, preso ao topo com `position: sticky`. Mostra a etiqueta "VOLUME", o total em m³, o veículo sugerido, o intervalo de preço em Barlow 600 e a frase "Estimativa indicativa de um negócio fictício" em texto pequeno muted.
- **Abaixo de 1024px:** barra fixa no fundo do ecrã, fundo surface, borda superior 2px ink. Mostra só o total em m³ e o intervalo de preço numa linha.
- **É o mesmo elemento HTML nos dois casos.** Só o CSS muda a posição. Se houvesse dois elementos, cada um com `aria-live`, o leitor de ecrã anunciava o total duas vezes.

---

## 10. Ícones

- **Estilo:** traço, sem preenchimento, cantos retos (extremidades `square`, junções `miter`), na cor do texto (`currentColor`).
- **Grelha:** 24 × 24.
- **Espessura do traço:** 2px, igual às bordas.
- **Tamanhos:**

| Token | Tamanho | Onde |
|---|---|---|
| `--icon-sm` | 16px | Ícone de alerta nas mensagens de erro |
| `--icon-md` | 24px | Botões, menu, − e +, indicador de passos |
| `--icon-lg` | 32px | Ícones dos itens da calculadora |

- **Origem:** desenhados à mão ou adaptados do [Lucide](https://lucide.dev) (licença ISC), mudando as extremidades e junções de redondas para retas.
- Ficam no sprite SVG externo e usam-se com `<use>`. Os atributos de traço (`fill="none"`, `stroke="currentColor"`, `stroke-width="2"`) ficam em cada `<symbol>`, porque são lidos a partir do símbolo e não do `<svg>` onde se usa.
- Ícones decorativos ao lado de texto: `aria-hidden="true"` e `focusable="false"`.
- Botões só com ícone (− e +): o nome acessível vem do botão, por exemplo "Adicionar sofá de 3 lugares".
- Ícones necessários: menu, fechar, mais, menos, seta para a direita, seta para a esquerda, visto, alerta, editar e os itens da calculadora (sofá, cama, roupeiro, mesa, cadeira, frigorífico, máquina de lavar, televisão, caixa, entre outros).

---

## 11. Imagens

- **Estilo:** fotografia documental, cores naturais, luz natural, sem pessoas com cara visível (como na ficha). Sem filtros, sem camadas de cor por cima, sem texto em cima.
- **Tratamento:** cantos retos e borda 2px ink, como uma fotografia colada numa etiqueta.

| Imagem | Proporção | Larguras a gerar (WebP) | Carregamento |
|---|---|---|---|
| Hero | 3:2 | 480, 800, 1200, 1600 | Imediato, com `fetchpriority="high"` |
| Serviços | 4:3 | 480, 800, 1200 | `loading="lazy"` |
| Embalagem | 4:3 | 480, 800, 1200 | `loading="lazy"` |
| Open Graph | 1200 × 630 (1,91:1) | só 1200 | Não aparece na página |

- `srcset` com as larguras acima e `sizes` de acordo com a coluna onde a imagem fica.
- `width` e `height` sempre no HTML, para o browser reservar o espaço e a página não saltar enquanto a imagem carrega.
- `alt` descreve o que a imagem mostra e importa para a página, em pt-PT. Exemplo para o hero: "Sala vazia com caixas de cartão empilhadas e etiquetadas à mão".
- Ícones da calculadora: SVG do sprite, não fotografias.

---

## 12. Movimento

Só há duas animações. Todas as outras mudanças de estado (hover, foco, menu, perguntas frequentes, scroll) são instantâneas.

| O que anima | Propriedades | Duração | Curva | Com `prefers-reduced-motion: reduce` |
|---|---|---|---|---|
| Entrada do novo passo | Opacidade de 0 para 1 e deslocamento vertical de 8px para 0 | 200ms (`--duration-step`) | `cubic-bezier(0.2, 0, 0, 1)` (`--ease-out`) | Sem animação. O passo aparece logo |
| Destaque do total quando muda | Fundo do total de kraft para transparente. O texto fica ink (6,64 sobre kraft, 17,03 sobre surface) | 600ms (`--duration-highlight`) | `--ease-out` | Sem animação. O número muda e o `aria-live` anuncia-o |

- **O passo anterior desaparece logo, sem animação de saída.** Assim nunca há dois passos visíveis ao mesmo tempo e o foco vai direto para o título do novo passo.
- **A animação não atrasa o foco.** O foco move-se no mesmo momento em que o passo aparece.
- O destaque repete-se a cada mudança do total. Se houver vários cliques seguidos, recomeça.
- Sem `scroll-behavior: smooth`, porque também é animação.
- Anima-se só `opacity`, `transform` e `background-color`. Nunca `transition: all`, que anima propriedades que não se queria animar.
- `--ease-out` arranca depressa e trava no fim. Parece uma resposta ao clique, não um efeito decorativo.

---

## 13. Tabela de tokens

Os nomes são as custom properties a criar no `tokens.css`. Os breakpoints vêm numa tabela à parte, porque não podem ser custom properties.

**O que passa a variável no `tokens.css`:** as cores, as famílias de letra, os pesos, os tamanhos de letra, o `--gutter`, o `--section-space` e o `--ease-out`. Os restantes nomes destas tabelas servem só para identificar cada valor. No CSS escreve-se o valor diretamente, sem variável.

Unidades: tamanhos de letra em rem, com o `html` a `font-size: 62.5%` (1rem = 10px). Espaçamento entre letras em em. Alturas de linha sem unidade. Largura do texto em ch. Tudo o resto em px.

### Cor

| Custom property | Valor | Onde se usa |
|---|---|---|
| `--color-paper` | `#F3EEE4` | Fundo das páginas, texto do rodapé, texto dos botões em `:active`, fundo dos secundários em `:hover` |
| `--color-surface` | `#FFFFFF` | Cartões, passos, campos, painel da estimativa, barra fixa, botões secundários |
| `--color-ink` | `#1D1C1A` | Texto, bordas de cartões e botões, ícones, rodapé, fundo dos botões em `:active` |
| `--color-muted` | `#5A554D` | Texto secundário, ajudas, bordas dos campos, estados desativados e futuros |
| `--color-kraft` | `#C49A6C` | Fita kraft, destaque do total |
| `--color-signal` | `#E4570F` | Fundo do botão primário, link do rodapé em `:hover`, foco no rodapé |
| `--color-signal-hover` | `#F07A3C` | Fundo do botão primário em `:hover` |
| `--color-signal-dark` | `#A8400A` | Links em fundo claro, contorno de foco em fundo claro |
| `--color-error` | `#B42318` | Mensagens e bordas de erro |
| `--color-success` | `#1E6B3A` | Confirmação do pedido |
| `--color-line` | `#D9CFBF` | Divisores decorativos de 1px |

### Tipografia

| Custom property | Valor | Onde se usa |
|---|---|---|
| `--font-heading` | `"Barlow Condensed", "Arial Narrow", sans-serif` | h1, h2, h3, logótipo |
| `--font-body` | `"Barlow", system-ui, sans-serif` | Texto, botões, campos, menu |
| `--font-mono` | `"IBM Plex Mono", ui-monospace, monospace` | Etiquetas, referência, m³, quantidades |
| `--font-weight-regular` | `400` | Texto |
| `--font-weight-medium` | `500` | Tudo em IBM Plex Mono |
| `--font-weight-semibold` | `600` | Botões, etiquetas dos campos, menu, mensagens de erro |
| `--font-weight-bold` | `700` | Títulos e logótipo |
| `--font-size-h1` | `clamp(4rem, 3.061rem + 2.609vw, 6.4rem)` | h1 |
| `--font-size-h2` | `clamp(3rem, 2.452rem + 1.522vw, 4.4rem)` | h2, títulos dos passos |
| `--font-size-h3` | `clamp(2.2rem, 1.965rem + 0.6522vw, 2.8rem)` | h3, títulos dos cartões |
| `--font-size-lead` | `clamp(1.8rem, 1.683rem + 0.3261vw, 2.1rem)` | Texto de entrada do hero |
| `--font-size-body` | `clamp(1.6rem, 1.522rem + 0.2174vw, 1.8rem)` | Texto, botões, menu, etiquetas dos campos |
| `--font-size-input` | `1.6rem` | Texto dentro dos campos |
| `--font-size-small` | `1.4rem` | Ajudas, erros, avisos, frase da estimativa |
| `--font-size-label` | `1.4rem` | Etiquetas mono |
| `--font-size-total` | `clamp(2.8rem, 2.487rem + 0.8696vw, 3.6rem)` | Total em m³ |
| `--font-size-logo` | `2.8rem` | "ENCAIXE" no logótipo |
| `--font-size-logo-sub` | `1.4rem` | "MUDANÇAS" no logótipo |
| `--line-height-tight` | `1.05` | h1 |
| `--line-height-heading` | `1.15` | h2, h3 |
| `--line-height-ui` | `1.2` | Botões, etiquetas, campos, total, menu |
| `--line-height-small` | `1.5` | Texto de entrada e texto pequeno |
| `--line-height-body` | `1.6` | Texto corrido |
| `--letter-spacing-label` | `0.08em` | Etiquetas mono em maiúsculas |
| `--letter-spacing-heading` | `0.01em` | h3, botões |
| `--letter-spacing-logo` | `0.02em` | "ENCAIXE" no logótipo |
| `--letter-spacing-logo-sub` | `0.2em` | "MUDANÇAS" no logótipo |

### Espaçamento e layout

| Custom property | Valor | Onde se usa |
|---|---|---|
| `--space-1` | `4px` | Dentro de componentes (ver secção 6) |
| `--space-2` | `8px` | Etiqueta e campo, ícone e texto |
| `--space-3` | `12px` | Margem interna de campos, margem vertical de botões |
| `--space-4` | `16px` | Calculadora, margem lateral em mobile |
| `--space-5` | `24px` | Margem interna de cartões em mobile, entre campos |
| `--space-6` | `32px` | Entre cartões, margem interna de cartões a partir de 768px |
| `--space-7` | `48px` | Título da secção e conteúdo, formulário e painel |
| `--space-8` | `64px` | Entre secções em mobile |
| `--space-9` | `96px` | Entre secções a partir de 1024px |
| `--section-space` | `var(--space-8)`, e `var(--space-9)` a partir de 1024px | Espaço entre secções |
| `--gutter` | `16px`, `24px` a partir de 768px, `32px` a partir de 1024px | Margens laterais da página |
| `--container-max` | `1152px` | Largura máxima do conteúdo |
| `--measure` | `65ch` | Largura máxima dos parágrafos |
| `--form-max` | `640px` | Largura máxima da coluna do formulário |
| `--aside-width` | `320px` | Largura do painel da estimativa a partir de 1024px |

### Forma e tamanhos

| Custom property | Valor | Onde se usa |
|---|---|---|
| `--radius` | `0` | Todos os elementos |
| `--border-width` | `2px` | Cartões, botões, campos, logótipo, cabeçalho |
| `--border-width-thin` | `1px` | Divisores decorativos |
| `--focus-width` | `3px` | Contorno de foco |
| `--focus-offset` | `2px` | Afastamento do contorno de foco |
| `--tap-target` | `44px` | Altura e largura mínimas de botões e links do menu mobile |
| `--input-min-height` | `48px` | Altura mínima dos campos |
| `--icon-sm` | `16px` | Ícone de alerta |
| `--icon-md` | `24px` | Ícones de botões e menu |
| `--icon-lg` | `32px` | Ícones da calculadora |
| `--tape-height` | `20px` | Fita kraft |

### Movimento

| Custom property | Valor | Onde se usa |
|---|---|---|
| `--duration-step` | `200ms` | Entrada do novo passo |
| `--duration-highlight` | `600ms` | Destaque do total |
| `--ease-out` | `cubic-bezier(0.2, 0, 0, 1)` | As duas animações |

### Breakpoints (não são custom properties)

| Nome | Valor | Escreve-se em |
|---|---|---|
| Tablet | `768px` | `@media (min-width: 768px)` |
| Desktop | `1024px` | `@media (min-width: 1024px)` |
