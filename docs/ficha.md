# Ficha do projeto: Encaixe Mudanças

## 1. Negócio

- **Nome:** Encaixe Mudanças (fictício)
- **Setor:** automóvel e transportes
- **Local:** Braga, Portugal. Site em pt-PT.
- **O que faz:** mudanças de casa pequenas e médias, pequenos transportes, embalagem e guarda-móveis.
- **Para quem:** quem vive num apartamento, estudantes e pequenos escritórios da região de Braga.

## 2. Tipo de site, nível e estilo visual

- **Tipo:** site multipágina pequeno, centrado num pedido de orçamento em vários passos com calculadora de volume.
- **Nível:** desafiante.
- **Estilo visual: "etiqueta de expedição".**
  - Fundo cor de papel e cartões brancos com cantos retos e rebordo a tinta de 2px.
  - Etiquetas em letra monoespaçada e maiúsculas, por exemplo "PASSO 02 / 04" e "VOL. 18,5 M³".
  - Faixas kraft a imitar fita adesiva a separar as secções.
  - O laranja de sinalização fica reservado às ações.
  - Sem gradientes, sem sombras suaves genéricas e sem ilustrações de stock.

## 3. Backend

Não tem backend. Escolha para cada funcionalidade que o precisaria:

| Funcionalidade | Opção | Porquê |
|---|---|---|
| Envio do pedido de orçamento | Simulado | Com o Formspree, a única forma de não sair da página é usar `fetch`, que ainda não está em uso. O envio HTML normal leva o visitante para a página do serviço a meio do fluxo. Um negócio fictício também não deve receber dados pessoais reais de quem experimenta o portefólio. O que se treina aqui é o JavaScript do formulário, não a ligação a um serviço. |
| Datas disponíveis para a mudança | Simulado | As datas ocupadas são geradas em JavaScript a partir do dia de hoje (hoje mais 3, 8 e 15 dias) e guardadas num array. Assim a demonstração nunca fica desatualizada. Uma mudança ocupa o dia inteiro, por isso uma ferramenta de marcações por hora como o Calendly não encaixa. Um widget externo também tirava o exercício de validar as datas. |

A estimativa de preço e a calculadora não precisam de backend. São só JavaScript.

## 4. Páginas e secções

- **`index.html` (Início):** cabeçalho, hero com o botão "Pedir orçamento", serviços, "como funciona" em 4 etapas numa linha temporal, zonas servidas (lista de concelhos, sem mapa), perguntas frequentes, contactos e rodapé.
- **`orcamento.html`:** formulário em 4 passos.
  - No desktop, um painel lateral fixo mostra o volume e a estimativa.
  - No telemóvel, esse painel passa a ser uma barra fixa no fundo do ecrã.
- **`obrigado.html`:** número de referência, resumo do pedido e próximos passos.
- **Páginas legais:** `privacidade.html`, `cookies.html` e `termos.html`.
- **`404.html`.**
- **Rodapé em todas as páginas:** aviso de projeto fictício e link para o Livro de Reclamações Eletrónico.

## 5. Funcionalidades

### Mínimo para a primeira versão

**F1. Menu responsivo**
- No telemóvel, um botão abre e fecha o menu, e o `aria-expanded` acompanha o estado.
- O menu funciona só com teclado e a tecla Esc fecha-o.
- A partir da largura do tablet, o menu aparece sempre e o botão desaparece.

**F2. Perguntas frequentes**
- Feitas com `<details>` e `<summary>`, sem JavaScript. O HTML já faz o acordeão sozinho e com boa acessibilidade.

**F3. Formulário em 4 passos**
- Os passos são:
  1. Origem e destino: código postal, andar, elevador e escalão de distância.
  2. Recheio: a calculadora.
  3. Data e serviços extra.
  4. Contacto e resumo.
- Só se vê um passo de cada vez. O indicador mostra "Passo X de 4" e o nome de cada passo.
- "Seguinte" valida apenas os campos do passo atual. Se houver erros:
  - não avança
  - mostra a mensagem junto ao campo, ligada com `aria-describedby`
  - põe o foco no primeiro campo com erro
- Quando o passo muda, o foco vai para o título do novo passo.
- "Anterior" nunca apaga dados.
- No passo 4, o resumo tem botões "Editar" que levam ao passo certo.
- Tudo funciona só com teclado.
- **Sem JavaScript:**
  - Os 4 passos aparecem seguidos (um `fieldset` cada) e todos os campos podem ser preenchidos.
  - No início do formulário, antes do passo 1, aparece um aviso visível: "Para enviar o pedido, precisa de ter o JavaScript ativo no browser." Fica no início para o visitante saber antes de começar a preencher.
  - O botão de envio fica escondido. Os botões "Seguinte" e "Anterior" também, porque sem JavaScript não fazem nada.
  - O JavaScript mostra estes botões e esconde o aviso.
  - O aviso é um elemento normal da página e não um `<noscript>`. Se o JavaScript estiver ativo mas o ficheiro falhar a carregar, o `<noscript>` não aparece e o visitante ficava sem botão e sem explicação. Com um elemento normal, o aviso só desaparece quando o JavaScript corre mesmo.
- **Os dados pessoais nunca vão para o URL:**
  - O formulário usa `method="post"`. Com `get`, que é o valor por omissão, um envio sem JavaScript punha os dados todos no URL, onde ficam no histórico do browser e nos registos do servidor.
  - O botão de envio começa com os atributos `hidden` e `disabled`, e o JavaScript tira os dois. Só com `hidden`, carregar em Enter num campo ainda envia o formulário. Com `disabled`, o Enter não envia.
  - Os botões "Seguinte", "Anterior" e "Editar" têm `type="button"`. Um `<button>` dentro de um formulário é um botão de envio por omissão.
  - O pedido passa para o `obrigado.html` só pelo `sessionStorage` (F7), nunca por parâmetros no URL.

**F4. Validação**
- Código postal no formato `0000-000`.
- A data não pode estar no passado nem ser uma das datas ocupadas, que são geradas a partir de hoje (secção 3).
- As datas comparam-se no formato `AAAA-MM-DD` (o mesmo do `value` de um `<input type="date">`), construído a partir do ano, mês e dia locais. `toISOString()` devolve a data em UTC e, perto da meia-noite, pode dar o dia anterior.
- O email tem de ser válido e o telefone tem de ter 9 dígitos.
- A caixa de consentimento RGPD é obrigatória.
- As mensagens de erro são em pt-PT e dizem como corrigir, não só que está errado.

**F5. Calculadora de volume**
- Os itens estão agrupados por divisão (sala, quartos, cozinha, outros). Cada item tem botões − e + e mostra a quantidade.
- Os botões têm um nome acessível completo, por exemplo "Adicionar sofá de 3 lugares".
- A quantidade nunca desce abaixo de 0 nem passa de 20.
- Os itens e o volume de cada um vêm de um array de objetos, não estão escritos à mão no HTML. O HTML é gerado a partir desse array.
- O total em m³ atualiza a cada clique e é anunciado pelo leitor de ecrã (`aria-live="polite"`).
- O veículo sugerido muda segundo limites que estão num objeto de configuração.
- Sem JavaScript, aparece em vez disso uma caixa de texto: "Descreva o recheio".

**F6. Estimativa de preço**
- Mostra um intervalo arredondado a 10 €, calculado a partir de:
  - volume
  - escalão de distância
  - andares sem elevador na origem e no destino
  - serviços extra
- Todos os valores ficam num único objeto de configuração.
- Atualiza sempre que muda um dado que conta para o preço.
- Tem sempre a frase "Estimativa indicativa de um negócio fictício".

**F7. Envio simulado**
- Só envia com os 4 passos válidos.
- Gera uma referência no formato `ENC-AAAA-NNNN`.
- Guarda o pedido em `sessionStorage` e abre o `obrigado.html`, que lê os dados e mostra o resumo.
- Se alguém abrir o `obrigado.html` diretamente, sem dados guardados, aparece uma mensagem genérica com um link para pedir orçamento. Não pode aparecer nenhum erro na consola.

**F8. Técnico**
- Aviso de projeto fictício visível em todas as páginas.
- Emails com `@example.com` e telefone sem link para ligar.
- Dados estruturados `MovingCompany`, meta tags, Open Graph, `sitemap.xml`, `robots.txt`, favicon e manifest.

### Extras para depois

- Guardar um rascunho do pedido em `localStorage`, para não se perder ao fechar a página.
- Envio real com Formspree, quando começar a usar `fetch`.
- Checklist de mudança para imprimir, com CSS de impressão.
- Um modo "mudança de escritório" com outros itens na calculadora.

## 6. Identidade

### Cores e contrastes

A paleta, os contrastes e as combinações proibidas estão no `design-system.md` (secções 3 e 4).

### Fontes

Todas com licença OFL, alojadas no site em WOFF2 e só com o subconjunto latino.

- **Barlow Condensed 700:** títulos.
- **Barlow 400 e 600:** texto.
- **IBM Plex Mono 500:** etiquetas, números de referência e m³.
- São 4 ficheiros no total. Não acrescentar mais pesos, porque cada ficheiro atrasa o carregamento.

### Tema claro e escuro

Não tem.

### Animações

Só uma transição curta entre passos e o destaque do total quando muda. As duas desligam-se com `prefers-reduced-motion`.

## 7. Imagens

O site precisa de fotografias, porque numa empresa de mudanças a confiança vem de ver o trabalho. Vão sem caras, porque pessoas geradas por IA parecem falsas.

1. **Hero:** `Empty apartment living room in a Portuguese city, stacked brown cardboard boxes with handwritten labels, rolled rug, soft morning light through tall window, wooden floor, no people, documentary photography, natural colors, 35mm, shallow depth of field`
2. **Serviços:** `Plain white medium-size moving van with no logos or text, parked on a narrow granite-paved street in northern Portugal, rear doors open showing wrapped furniture, overcast daylight, documentary photography, no people`
3. **Embalagem:** `Close-up of hands wrapping ceramic plates in brown kraft paper at a kitchen table, cardboard box beside, packing tape roll, natural window light, no faces, documentary photography`

A imagem de Open Graph é um recorte da imagem do hero com o nome do negócio. Os ícones dos itens da calculadora vão no sprite SVG.

## 8. Páginas legais

Sim. O site tem mais de uma página e recolhe dados, mesmo que simulados.

A página de cookies diz que o site não usa cookies. Usa só `sessionStorage`, que é estritamente necessário para o pedido, por isso não precisa de aviso de cookies.

## 9. Conceitos novos

1. **Constraint Validation API** (`checkValidity`, `setCustomValidity`, `validity`), na validação por passo (F3 e F4). É a forma nativa do browser validar campos a partir de JavaScript.
2. **`sessionStorage` com `JSON.stringify` e `JSON.parse`**, para passar o pedido do `orcamento.html` para o `obrigado.html` (F7).

Também se usa o atributo `aria-live` (F5). Não é propriamente um conceito, explica-se quando lá se chegar.

## 10. Referências reais

São só para inspiração, nunca para copiar.

- [Calculadora de volumes da Mudancas.pt](https://www.mudancas.pt/calculadora-empresas-de-mudancas-lisboa-precos-baratos/): calculadora de m³ de uma empresa portuguesa.
- [Pedido de orçamento da Ok Mudanças](https://okmudancas.com/orcamento-mudancas/): formulário de orçamento.
- [Orçamento online da TMI Mudanças](https://www.mudancas-internacionais.pt/orcamento-mudanca-internacional-online): pedido de orçamento online.

## 11. Tarefas por ordem

| # | Branch | Tarefa | Blocos |
|---|---|---|---|
| 1 | `feat/setup` | pastas, CLAUDE.md, `base.css` com tokens, fontes, sprite vazio | 2h |
| 2 | `feat/header-footer` | cabeçalho, menu responsivo (F1), rodapé, aviso de projeto fictício | 2h + 1h |
| 3 | `feat/home-hero-services` | hero, serviços, "como funciona" | 4h |
| 4 | `feat/home-faq-contact` | perguntas frequentes (F2), zonas, contactos | 2h |
| 5 | `feat/quote-markup` | HTML dos 4 passos a funcionar sem JS (aviso visível, botões escondidos, `method="post"`), layout com painel lateral e barra fixa no fundo | 4h |
| 6 | `feat/quote-steps` | navegação entre passos, indicador, gestão do foco, mostrar os botões e esconder o aviso | 2h + 2h |
| 7 | `feat/quote-validation` | validação por passo, datas ocupadas geradas a partir de hoje e mensagens de erro (F4) | 2h + 2h |
| 8 | `feat/volume-calculator` | array de itens, gerar o HTML, contadores, total, veículo | 4h + 2h |
| 9 | `feat/price-estimate` | objeto de configuração, fórmula, resumo do passo 4 | 2h + 2h |
| 10 | `feat/quote-submit` | referência, `sessionStorage`, `obrigado.html` | 2h |
| 11 | `feat/images` | gerar as imagens, converter para WebP, tamanhos, `alt` | 2h |
| 12 | `feat/legal-404` | páginas legais, Livro de Reclamações, 404 | 2h |
| 13 | `feat/seo` | meta tags, Open Graph, JSON-LD, sitemap, robots, favicon, manifest | 2h |
| 14 | `fix/a11y-audit` | testes em Chrome, WebKit e telemóvel, Lighthouse, leitor de ecrã, correções | 4h + 2h |
| 15 | `feat/readme-deploy` | README, publicação, capturas e cartão do portefólio | 2h |

## 12. Tempo total estimado

Cerca de 49h de tarefas. Contar com 55h a 60h, porque os dois conceitos novos e a acessibilidade do formulário vão levar mais tempo. Usando todos os blocos da semana só neste projeto, são 3 a 4 semanas.

## 13. Nome do repositório e da pasta

- **Repositório:** `encaixe-mudancas`
- **Pasta:** `D:\0-projetos\2-projetos-pratica\encaixe-mudancas`

## 14. Texto do cartão do portefólio

- **Título:** Encaixe Mudanças
- **Descrição:** Site de uma empresa de mudanças fictícia em Braga, com pedido de orçamento em 4 passos, calculadora de volume e estimativa de preço em JavaScript puro.

### Linha para o backlog

```
| Encaixe Mudanças | automóvel e transportes | pedido de orçamento em vários passos com calculadora | desafiante | etiqueta de expedição: papel, kraft, tinta e laranja de sinalização, Barlow Condensed e mono | escolhida | Envio simulado. Treina formulário em vários passos, estado em JS e layout com painel fixo. |
```
