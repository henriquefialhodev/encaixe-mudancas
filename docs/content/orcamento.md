# Página de orçamento (orcamento.html)

Tudo o que precisas para construir a página: textos, campos, mensagens de erro, dados da calculadora, valores do preço, formato do resumo, medidas do mockup e o que não deves copiar dele.

As regras de comportamento estão na ficha (F3 a F7) e as visuais no design system. Aqui ficam reunidas e, onde faltava um valor, proposto.

**Marcas usadas neste ficheiro:**

- **[NOVO]:** texto que não estava no mockup aprovado. Revê antes de usar.
- **[A CONFIRMAR]:** decisão tua. Está proposta, mas não a uses sem dizeres que sim.

Os nomes entre parênteses (h1, h2, etiqueta) dizem que papel cada texto tem na página. Os `id` e os valores estão em inglês, como o resto do código.

---

## 0. Decisões tomadas

Decididas a 17 de outubro de 2026. A ficha e o design system já estão atualizados.

1. **Valores do preço e limites dos veículos:** os da secção 11. Dão o resultado do mockup (18,5 m³, camião, 350 € a 420 €).
2. **Os itens da calculadora não têm ícones**, como no mockup. Só o nome e o volume.
3. **O erro do passo 2 aparece por baixo do texto de introdução do passo**, dentro do cartão. O foco vai para o primeiro botão +, que leva a mensagem no `aria-describedby`. Os sofás e os roupeiros passam a tamanhos com intervalo, e o maior apanha tudo o que é maior (secção 6).
4. **Uma única mensagem escondida com `aria-live="polite"`** anuncia o que mudou: "Cadeira: 4. Volume: 18,7 m³." ao clicar em − ou +, e "Estimativa: 350 € a 420 €." quando muda outro campo que conta para o preço. O painel não tem `aria-live`.
5. **Sem JavaScript, ficam escondidos o indicador de passos e o painel**, além dos botões de navegação.
6. **A frase passa a ser só "Estimativa indicativa"** e aparece no painel do desktop e no resumo do passo 4. Na barra do telemóvel não aparece. Que o negócio é fictício já está na fita do topo e no rodapé.
7. **O link da política de privacidade abre noutro separador**, com o aviso no próprio texto do link (secção 8).

---

## 1. Head

- **title:** [NOVO] Pedir orçamento | Encaixe Mudanças
- **meta description:** [NOVO] Peça um orçamento de mudança em Braga em 4 passos. Indique o recheio e veja o volume em m³ e uma estimativa de preço. Projeto fictício.

- **canonical:** https://encaixe-mudancas.netlify.app/orcamento.html

### Open Graph

As mesmas etiquetas da página inicial. Mudam só o título, a descrição e o endereço.

| Propriedade | Valor |
|---|---|
| `og:type` | website |
| `og:locale` | pt_PT |
| `og:site_name` | Encaixe Mudanças |
| `og:title` | Igual ao title |
| `og:description` | Igual à meta description |
| `og:url` | https://encaixe-mudancas.netlify.app/orcamento.html |
| `og:image` | https://encaixe-mudancas.netlify.app/assets/images/og/og-image.jpg |
| `og:image:width` | 1200 |
| `og:image:height` | 630 |
| `og:image:alt` | Logótipo da Encaixe Mudanças, o título «Mudanças em Braga, com o volume contado peça a peça» e caixas de cartão etiquetadas |

- **Twitter:** `<meta name="twitter:card" content="summary_large_image" />`, como na página inicial.

- Os dados estruturados `MovingCompany` ficam só na `index.html`. Não se repetem aqui.
- O `noindex` vem do `public/_headers` (ficha F8), por isso não leva meta robots.

---

## 2. Fita do topo, cabeçalho e rodapé

Iguais aos da página inicial (`home.md`), com duas diferenças:

- **Links do menu:** apontam para as secções da página inicial, com `index.html#` antes do id (por exemplo `index.html#` + o id que deste à secção dos serviços). Só com `#`, o browser procurava a secção nesta página.
- **"Pedir orçamento":** no cabeçalho e no rodapé, leva `aria-current="page"`. No cabeçalho mostra o sublinhado fixo de 3px (design system, secção 9, Navegação).

---

## 3. Topo da página

- **h1:** Pedir orçamento
- **Texto de entrada:** Quatro passos. O volume e a estimativa atualizam à medida que preenche.
- **Aviso sem JavaScript** (no início do formulário, antes do indicador): Para enviar o pedido, precisa de ter o JavaScript ativo no browser.
  - É um elemento normal, não um `<noscript>` (ficha F3). O JavaScript esconde-o.

---

## 4. Indicador de passos

- **Etiqueta mono (`aria-hidden="true"`):** Passo 01 / 04, Passo 02 / 04, Passo 03 / 04, Passo 04 / 04
- **Texto só para leitores de ecrã:** Passo 1 de 4 (e assim por diante)
- **Nome da lista (`aria-label`):** Progresso do pedido
- **Itens:**

| Número | Nome |
|---|---|
| 01 | Origem e destino |
| 02 | Recheio |
| 03 | Data e extras |
| 04 | Contacto e resumo |

- **Texto escondido nos passos concluídos:** concluído
- Em mobile, o nome fica escondido visualmente (continua no HTML). A partir de 768px, vê-se o número e o nome.
- O passo atual leva `aria-current="step"`.
- Sem JavaScript, a etiqueta e a lista ficam escondidas. Não levam `hidden` no HTML: o bloco tem `display: none` no CSS, e `.js .site-quote-progress` mostra-o. A classe `js` é posta no `<html>` pelo script do `<head>` antes de a página ser desenhada. Se fosse o JavaScript do formulário a mostrá-lo, o indicador aparecia depois e empurrava o formulário para baixo.
- O nome do passo fica escondido em mobile com as mesmas propriedades da `.visually-hidden`, escritas na própria regra do nome, e volta a aparecer a partir de 768px.

---

## 5. Passo 1: Origem e destino

- **h2 (dentro do `<legend>`, com `tabindex="-1"`):** Origem e destino
- O passo tem dois grupos, cada um com o seu `<fieldset>` e um h3 no `<legend>`: **Origem** e **Destino**. Os campos são iguais nos dois.

### Campos

| Etiqueta | Ajuda | `id` | Tipo | Obrigatório |
|---|---|---|---|---|
| Código postal | Formato 0000-000 | `origin-postcode` e `destination-postcode` | `text` | Sim |
| Andar | | `origin-floor` e `destination-floor` | `select` | Sim |
| Tem elevador? (é o `<legend>` do grupo) | | `name="origin-lift"` e `name="destination-lift"` | `radio` | Sim |
| Distância entre as duas moradas | Se não souber ao certo, escolha a mais próxima. | `distance` | `select` | Sim |

**Código postal:**

- `pattern` para `0000-000`, `maxlength="8"`.
- `autocomplete="section-origin postal-code"` na origem e `autocomplete="section-destination postal-code"` no destino. **Conceito novo:** o prefixo `section-` diz ao browser que são duas moradas diferentes. Sem ele, o preenchimento automático punha o mesmo código postal nos dois campos.
- **Hífen automático:** enquanto a pessoa escreve, o JavaScript tira tudo o que não seja algarismo e põe o hífen depois do quarto. Quem escreve `4700000` vê `4700-000`. Se a pessoa escrever o hífen, também funciona. Ao corrigir um algarismo a meio, o cursor não pode saltar para o fim. Entra na `feat/quote-validation`.
- **`inputmode="numeric"` volta quando o hífen automático estiver feito.** O mockup tem-no, e tinha sido tirado porque o teclado numérico do telemóvel pode não ter o hífen. Com o hífen automático já não é preciso escrevê-lo. Sem JavaScript, a pessoa escreve o hífen à mão, como diz a ajuda.

**Opções do andar:**

| Texto | `value` | Andares a contar no preço |
|---|---|---|
| Escolha o andar | (vazio) | |
| Rés-do-chão | `0` | 0 |
| 1.º andar | `1` | 1 |
| 2.º andar | `2` | 2 |
| 3.º andar | `3` | 3 |
| 4.º andar | `4` | 4 |
| 5.º andar | `5` | 5 |
| 6.º andar ou mais | `6` | 6 |

**Opções do elevador:** Sim (`value="yes"`) e Não (`value="no"`). Nenhuma começa marcada.

**Opções da distância:**

| Texto | `value` | Texto no resumo |
|---|---|---|
| Escolha a distância | (vazio) | |
| No mesmo concelho | `same-municipality` | no mesmo concelho |
| Até 25 km | `up-to-25` | até 25 km |
| De 25 a 50 km | `25-to-50` | de 25 a 50 km |
| De 50 a 100 km | `50-to-100` | de 50 a 100 km |
| Mais de 100 km | `over-100` | mais de 100 km |

### Mensagens de erro

| Campo | Mensagem |
|---|---|
| Código postal (os dois) | Escreva o código postal no formato 0000-000, por exemplo 4700-000. |
| Andar da origem | Escolha o andar da origem. |
| Andar do destino | Escolha o andar do destino. |
| Elevador na origem | Indique se há elevador na origem. |
| Elevador no destino | Indique se há elevador no destino. |
| Distância | [NOVO] Escolha a distância entre as duas moradas. |

- No grupo do elevador, a mensagem fica por baixo das duas opções. O `aria-describedby` vai no `<fieldset>` do grupo e o foco vai para a primeira opção.

---

## 6. Passo 2: Recheio

- **h2:** Recheio
- **Texto:** Indique quantos tem de cada. Conte as caixas de tamanho médio, como as de supermercado. Se tiver alguma coisa que não está na lista, escreva-a nas observações, no passo 4.
- Cada divisão tem um h3 e uma lista (`<ul>`) com os itens.
- **Divisões, por esta ordem:** Sala, Quartos, Cozinha, Casa de banho, Varanda e exterior, Arrumos, Outros.
- **Sem item "outros" por divisão.** A calculadora precisa do volume de cada item para somar os m³ e o preço, e um "outro" escrito pela pessoa não tem volume. O que faltar vai para as observações do passo 4, e a frase do texto diz isso logo no passo 2.

### Itens da calculadora

Todos começam com quantidade 0. As quantidades do mockup são só um exemplo.

Os sofás e os roupeiros têm tamanhos com intervalo, e o maior apanha tudo o que é maior. Assim, quem tem um sofá de 4 lugares ou de canto sabe o que escolher. O que não estiver na lista vai para as observações do passo 4.

| Divisão | `id` | Nome | Volume (m³) |
|---|---|---|---|
| Sala | `sofa-small` | Sofá pequeno (até 2 lugares) | 1,5 |
| Sala | `sofa-medium` | Sofá médio (3 lugares) | 2,0 |
| Sala | `sofa-large` | Sofá grande (4 lugares ou mais, ou de canto) | 3,0 |
| Sala | `armchair` | Poltrona | 0,8 |
| Sala | `coffee-table` | Mesa de centro | 0,3 |
| Sala | `tv-stand` | Móvel de televisão | 0,8 |
| Sala | `television` | Televisão | 0,3 |
| Sala | `bookcase` | Estante | 1,0 |
| Sala | `dining-table` | Mesa de jantar | 1,2 |
| Sala | `chair` | Cadeira | 0,3 |
| Quartos | `double-bed` | Cama de casal com colchão | 2,0 |
| Quartos | `single-bed` | Cama de solteiro com colchão | 1,2 |
| Quartos | `bedside-table` | Mesa de cabeceira | 0,2 |
| Quartos | `wardrobe-small` | Roupeiro pequeno (1 ou 2 portas) | 1,5 |
| Quartos | `wardrobe-large` | Roupeiro grande (3 portas ou mais) | 2,5 |
| Quartos | `chest-of-drawers` | Cómoda | 0,8 |
| Quartos | `desk` | Secretária | 0,8 |
| Quartos | `crib` | Berço | 0,5 |
| Cozinha | `fridge` | Frigorífico | 1,0 |
| Cozinha | `washing-machine` | Máquina de lavar roupa | 0,5 |
| Cozinha | `tumble-dryer` | Máquina de secar roupa | 0,5 |
| Cozinha | `dishwasher` | Máquina de lavar loiça | 0,5 |
| Cozinha | `cooker` | Fogão | 0,5 |
| Cozinha | `microwave` | Micro-ondas | 0,1 |
| Casa de banho | `bathroom-cabinet` | Armário de casa de banho | 0,3 |
| Casa de banho | `mirror` | Espelho | 0,1 |
| Casa de banho | `laundry-basket` | Cesto da roupa | 0,1 |
| Casa de banho | `towel-warmer` | Toalheiro elétrico | 0,1 |
| Varanda e exterior | `outdoor-table` | Mesa de exterior | 0,6 |
| Varanda e exterior | `outdoor-chair` | Cadeira de exterior | 0,2 |
| Varanda e exterior | `grill` | Grelhador | 0,4 |
| Arrumos | `bicycle` | Bicicleta | 0,5 |
| Arrumos | `stepladder` | Escadote | 0,2 |
| Arrumos | `metal-shelving` | Estante metálica | 0,5 |
| Arrumos | `toolbox` | Caixa de ferramentas | 0,1 |
| Outros | `medium-box` | Caixa média | 0,1 |
| Outros | `suitcase` | Mala de viagem | 0,2 |
| Outros | `rolled-rug` | Tapete enrolado | 0,2 |
| Outros | `floor-lamp` | Candeeiro de pé | 0,2 |
| Outros | `vacuum-cleaner` | Aspirador | 0,1 |
| Outros | `ironing-board` | Tábua de engomar | 0,1 |
| Outros | `clothes-airer` | Estendal | 0,1 |
| Outros | `heater` | Aquecedor | 0,1 |
| Outros | `dehumidifier` | Desumidificador | 0,1 |

- **Volume por baixo do nome (etiqueta mono muted):** o volume com uma casa decimal e vírgula, seguido de "m³". Por exemplo "2,0 m³".
- **Nome acessível dos botões:** "Adicionar " ou "Retirar " seguido do nome com a primeira letra em minúscula. Por exemplo "Adicionar sofá médio (3 lugares)" e "Retirar sofá médio (3 lugares)".
- Quantidade mínima 0 e máxima 20. No limite, o botão leva `aria-disabled="true"` (design system, secção 9).

### Sem JavaScript

A lista é gerada a partir do array, por isso sem JavaScript não existe. Em vez dela aparece uma caixa de texto (ficha F5), que o JavaScript esconde:

- **Etiqueta:** Descreva o recheio
- **Ajuda:** [NOVO] Por exemplo: um sofá de 3 lugares, duas camas de casal e 15 caixas.
- **`id`:** `inventory-description`. `<textarea>` com 6 linhas.

### Mensagem de erro

- [NOVO] Adicione pelo menos um item com o botão +. Sem itens não conseguimos calcular o volume.
- **Onde aparece:** por baixo do texto de introdução do passo, dentro do cartão. O foco vai para o primeiro botão +, que leva a mensagem no `aria-describedby`.

---

## 7. Passo 3: Data e extras

- **h2:** Data e extras

### Data

| Etiqueta | Ajuda | `id` | Tipo | Obrigatório |
|---|---|---|---|---|
| Data da mudança | A partir de hoje. Se o dia já estiver ocupado, avisamos. | `move-date` | `date` | Sim |

- O JavaScript põe no atributo `min` a data de hoje, no formato `AAAA-MM-DD` construído com o ano, mês e dia locais (ficha F4).
- **Datas ocupadas:** hoje mais 3, 8 e 15 dias (ficha, secção 3).

| Situação | Mensagem |
|---|---|
| Sem data | [NOVO] Escolha a data da mudança. |
| Data no passado | [NOVO] Escolha uma data a partir de hoje. |
| Data ocupada | [NOVO] Esse dia já está ocupado. Escolha outra data. |

### Serviços extra

- **h3 (dentro do `<legend>`):** Serviços extra (opcional)
- Caixas de seleção. Nenhuma começa marcada (no mockup, a primeira aparece marcada só como exemplo).

| Etiqueta | Ajuda | `id` | `value` | Texto no resumo |
|---|---|---|---|---|
| Embalagem de objetos frágeis | Loiça, vidros e outros frágeis, em papel kraft e caixas próprias. | `extra-packing` | `packing` | embalagem de objetos frágeis |
| Entrega de caixas antes da mudança | Levamos caixas e fita até 3 dias antes. | `extra-boxes` | `boxes` | entrega de caixas |
| Guarda-móveis | A partir de 1 semana. O preço por semana é confirmado por email. | `extra-storage` | `storage` | guarda-móveis (preço confirmado por email) |

- As três caixas podem ter `name="extras"`, com o `value` de cada uma.

---

## 8. Passo 4: Contacto e resumo

- **h2:** Contacto e resumo

### Campos

| Etiqueta | Ajuda | `id` | Tipo | `autocomplete` | Obrigatório |
|---|---|---|---|---|---|
| Nome | | `full-name` | `text` | `name` | Sim |
| Email | | `email` | `email` | `email` | Sim |
| Telefone | 9 dígitos | `phone` | `tel` | `tel-national` | Sim |
| Observações (opcional) | Por exemplo, um móvel que não está na lista ou o horário que prefere. | `notes` | `textarea`, 6 linhas | | Não |
| (consentimento, texto abaixo) | | `consent` | `checkbox` | | Sim |

- **Porque `full-name` e não `name`:** um campo com `name="name"` fica acessível como `form.name`, e isso tapa a propriedade `name` do próprio formulário. É um erro difícil de encontrar.
- **Porque `tel-national`:** com `tel`, o browser pode preencher o número com o indicativo (+351 912...), e a regra dos 9 dígitos chumbava um número certo.
- **Telefone com espaços automáticos:** enquanto a pessoa escreve, o JavaScript tira tudo o que não seja algarismo e põe um espaço depois do terceiro e do sexto. Quem escreve `910000000` vê `910 000 000`. Entra na `feat/quote-validation`.
  - A validação tira os espaços antes de contar, e depois exige exatamente 9 algarismos.
  - O `pattern` aceita o número com e sem espaços. O valor exato fica para essa tarefa.
  - `maxlength="11"`: 9 algarismos e 2 espaços.
  - O pedido guardado no `sessionStorage` leva só os algarismos, sem espaços.
- **Email:** a validação do `type="email"` aceita `nome@dominio` sem ponto. Para um formulário simulado chega.

**Consentimento:**

- Texto: Li a política de privacidade (abre noutro separador) e aceito que os meus dados sejam usados para responder a este pedido.
  - "política de privacidade (abre noutro separador)" é o link para `privacidade.html`, com `target="_blank"`. Abre noutro separador para a pessoa não perder o que já preencheu, e o aviso faz parte do texto do link para não apanhar ninguém de surpresa.

### Mensagens de erro

| Campo | Situação | Mensagem |
|---|---|---|
| Nome | Vazio | [NOVO] Escreva o seu nome. |
| Email | Vazio | [NOVO] Escreva o seu email. |
| Email | Mal escrito | [NOVO] Escreva o email completo, por exemplo nome@example.com. |
| Telefone | Vazio ou errado | [NOVO] Escreva o telefone com 9 dígitos, sem indicativo, por exemplo 253 000 000. |
| Consentimento | Não marcado | [NOVO] Para enviar o pedido, tem de aceitar a política de privacidade. |

### Resumo do pedido

- Fica por baixo dos campos, dentro do formulário, numa `<section>` com o título **h3: Resumo do pedido**.
- Tem três blocos. Cada um tem uma etiqueta mono, um botão "Editar" com aspeto de link e as linhas de texto.

| Etiqueta | Nome acessível do botão | Linhas (exemplo do mockup) |
|---|---|---|
| Origem e destino | Editar origem e destino | Origem: 4700-000, 3.º andar, sem elevador · Destino: 4710-000, rés-do-chão, com elevador · Distância: até 25 km |
| Recheio | Editar recheio | 36 itens, 18,5 m³ · Veículo sugerido: camião |
| Data e extras | Editar data e extras | Sábado, 24 de outubro de 2026 · Extras: embalagem de objetos frágeis |

Regras das linhas:

- **Andar:** o texto da opção com a primeira letra em minúscula ("rés-do-chão", "3.º andar", "6.º andar ou mais").
- **Elevador:** "com elevador" ou "sem elevador".
- **Itens:** a soma das quantidades. Com 1, "1 item". Com mais, "36 itens".
- **Data:** dia da semana, dia, mês e ano, com a primeira letra em maiúscula. **Conceito novo:** `toLocaleDateString` com opções formata a data em pt-PT, mas devolve o dia da semana em minúscula ("sábado"). Para criar a data a partir do valor do campo, usa o ano, o mês e o dia separados, pela mesma razão do UTC da ficha (F4).
- **Extras:** "Extras: " e os textos da tabela do passo 3, separados por vírgula. Sem nenhum, "Extras: nenhum".
- Por baixo dos três blocos, separado por uma linha de 2px em ink:
  - **Etiqueta:** Estimativa
  - **Valor:** o intervalo, por exemplo "350 € a 420 €"
  - **Frase:** Estimativa indicativa

---

## 9. Botões de navegação

| Botão | Tipo | Ícone | Onde aparece |
|---|---|---|---|
| Anterior | Secundário, `type="button"` | Seta para a esquerda, antes do texto | Passos 2, 3 e 4 |
| Seguinte | Primário, `type="button"` | Seta para a direita, depois do texto | Passos 1, 2 e 3 |
| Enviar pedido | Primário, `type="submit"`, começa com `hidden` e `disabled` | Seta para a direita, depois do texto | Passo 4 |

- No passo 1, o "Seguinte" fica encostado à direita. Nos outros, "Anterior" à esquerda e o botão primário à direita.
- Os três ficam num grupo, `site-quote-navigation-buttons`, no fim do `<form>`, a seguir ao resumo. O grupo tem `display: none` no CSS e aparece com `.js .site-quote-navigation-buttons`, como o indicador e o resumo. Assim, sem JavaScript não aparece nenhum, e com JavaScript aparecem logo no primeiro desenho da página.
- O "Enviar pedido" começa também com `hidden` e `disabled` no HTML. O `disabled` impede que o Enter num campo envie o formulário. O JavaScript tira os dois quando a pessoa chega ao passo 4 (ficha F3).

---

## 10. Painel da estimativa e barra do telemóvel

É o mesmo elemento HTML nos dois casos (design system, secção 9). Um `<aside>` com o nome acessível "Volume e estimativa".

### Textos

| Peça | Antes de haver itens | Com itens |
|---|---|---|
| Etiqueta | Volume | Volume |
| Total | 0,0 m³ | 18,5 m³ |
| Veículo | Adicione itens no passo 2. | Veículo sugerido: camião |
| Etiqueta | Estimativa | Estimativa |
| Preço | Ainda sem estimativa | 350 € a 420 € |
| Frase | Estimativa indicativa | igual |

- **Total sempre com uma casa decimal e vírgula.** O mockup mostra "0 m³" no início. Com uma regra só, fica "0,0 m³".
- Antes de haver itens, o veículo e o preço ficam em muted. Com itens, em ink.
- O total recebe o destaque kraft quando muda (design system, secção 12).
- O painel não tem `aria-live`. O leitor de ecrã ouve uma única mensagem escondida com `aria-live="polite"`, fora do painel, que o JavaScript preenche só com o que mudou:
  - num clique em − ou +: "Cadeira: 4. Volume: 18,7 m³."
  - quando muda outro campo que conta para o preço: "Estimativa: 350 € a 420 €."
- Sem JavaScript, o painel fica escondido da mesma forma que o indicador: `.display: none` no CSS, e mostrado pela classe `js` no `<html>`. Não leva `hidden` no HTML

### Na barra (abaixo de 1024px)

- Mostra só a etiqueta "Volume", o total e o preço, numa linha. O veículo e a frase ficam escondidos.
- No mockup a etiqueta aparece como "Vol.". Usa "Volume", porque é o mesmo texto do painel e não há espaço a ganhar com a abreviatura.
- Sem itens, o preço na barra diz "Sem estimativa" (mais curto, para caber na linha). Isto obriga a ter os dois textos no HTML, um visível em cada tamanho. Se preferires simplificar, usa "Ainda sem estimativa" nos dois, mas confirma no browser, a 360px, que cabe na mesma linha que "VOLUME 0,0 M³".

---

## 11. Dados e configuração

Todos os valores ficam em objetos de configuração (ficha F5 e F6). Pela tua convenção de nomes, os valores fixos ficam em `UPPER_SNAKE_CASE` (por exemplo `ITEMS`, `VEHICLES`, `PRICING`, `BUSY_DAY_OFFSETS`) e o que é calculado ao correr fica em camelCase (por exemplo as datas ocupadas, calculadas a partir de hoje).

### Veículo sugerido

Lê-se de cima para baixo e fica o primeiro cujo limite não é ultrapassado.

| Volume até | Texto |
|---|---|
| 6 m³ | carrinha pequena |
| 12 m³ | carrinha média |
| 30 m³ | camião |
| mais de 30 m³ | camião, em mais de uma viagem |

### Preço

| Parcela | Valor |
|---|---|
| Valor base (deslocação e equipa) | 40 € |
| Por cada m³ | 12 € |
| Distância: no mesmo concelho | 0 € |
| Distância: até 25 km | 25 € |
| Distância: de 25 a 50 km | 50 € |
| Distância: de 50 a 100 km | 100 € |
| Distância: mais de 100 km | 180 € |
| Por cada andar sem elevador, na origem e no destino | 10 € |
| Embalagem de objetos frágeis | 35 € |
| Entrega de caixas | 15 € |
| Guarda-móveis | 0 € (o preço por semana é confirmado por email) |
| Margem do intervalo | o máximo é o mínimo mais 20% |

**Fórmula:**

1. Soma: valor base + volume × preço por m³ + preço da distância + andares sem elevador × 10 € + extras escolhidos.
2. Mínimo: a soma arredondada a 10 €.
3. Máximo: a soma × 1,2, arredondada a 10 €.

- **Andares sem elevador:** o número do andar quando a resposta ao elevador é "Não". Com elevador, conta 0. Somam-se a origem e o destino.
- **A estimativa só aparece com volume maior que 0.** A distância e os andares já estão escolhidos nessa altura, porque o passo 1 é validado antes.

**Exemplo do mockup** (18,5 m³, origem num 3.º andar sem elevador, destino num rés-do-chão com elevador, até 25 km, com embalagem):

| Parcela | Valor |
|---|---|
| Base | 40 € |
| 18,5 m³ × 12 € | 222 € |
| Até 25 km | 25 € |
| 3 andares sem elevador × 10 € | 30 € |
| Embalagem | 35 € |
| **Soma** | **352 €** |
| Mínimo (arredondado a 10 €) | 350 € |
| Máximo (352 € × 1,2 = 422,4 €, arredondado a 10 €) | 420 € |

Resultado: **350 € a 420 €**, como no mockup.

**Atenção às contas com decimais (conceito novo):** o JavaScript guarda os números em binário e alguns decimais não têm representação exata. 15 × 0,1 dá 1,5000000000000002, e um total que devia ser 6,0 pode passar ligeiramente de 6 e mudar o veículo. Arredonda o total a uma casa decimal antes de o comparar com os limites e de calcular o preço.

---

## 12. Envio simulado

- **Referência:** `ENC-` + ano atual + `-` + 4 algarismos aleatórios, com zeros à esquerda quando o número é pequeno (por exemplo `ENC-2026-0482`). **Conceito novo:** `padStart` acrescenta os zeros à esquerda de um texto até ter o tamanho pedido.
- **Chave no `sessionStorage`:** `quoteRequest`.
- **O que guardar** (proposta, fecha-se quando fizermos os textos do `obrigado.html`):

| Campo | Conteúdo |
|---|---|
| `reference` | A referência |
| `origin` | Código postal, andar e elevador |
| `destination` | Código postal, andar e elevador |
| `distance` | O `value` da distância |
| `items` | Só os itens com quantidade maior que 0: `id`, nome e quantidade |
| `volume` | O total em m³ |
| `vehicle` | O texto do veículo |
| `moveDate` | A data em `AAAA-MM-DD` |
| `extras` | Os `value` dos extras escolhidos |
| `estimate` | O mínimo e o máximo |
| `contact` | Nome, email, telefone e observações |

- Depois de guardar, abre o `obrigado.html`. Os dados nunca vão no URL (ficha F3).

---

## 13. Comportamento

As regras completas estão na ficha. Esta é a lista para conferires no fim de cada tarefa:

- [ ] Só se vê um passo de cada vez (F3).
- [ ] "Seguinte" valida só o passo atual. Com erros: não avança, mostra as mensagens ligadas com `aria-describedby`, o campo leva `aria-invalid="true"` e o foco vai para o primeiro campo com erro (F3).
- [ ] Ao mudar de passo, o foco vai para o h2 do novo passo (F3).
- [ ] "Anterior" nunca apaga dados (F3).
- [ ] Os botões "Editar" levam ao passo certo (F3).
- [ ] O indicador acompanha o passo (concluído, atual, futuro) e não é clicável (design system, secção 9).
- [ ] O total, o veículo e o preço atualizam a cada mudança (F5 e F6).
- [ ] "Enviar pedido" só envia com os 4 passos válidos (F7).
- [ ] Tudo funciona só com teclado (F3).
- [ ] O leitor de ecrã ouve só o que mudou, pela mensagem escondida com `aria-live` (F5).
- [ ] Sem JavaScript: os 4 passos seguidos, o aviso visível, a caixa "Descreva o recheio" no passo 2, e os botões, o indicador e o painel escondidos (F3 e F5).
- [ ] O novo passo entra com a animação de 200ms, sem animação com `prefers-reduced-motion` (design system, secção 12).

---

## 14. Layout e medidas do mockup

As regras gerais estão no design system (secções 6, 7 e 9). Estas são as medidas que o mockup usa e que não estão lá escritas. Os valores entre parênteses são a partir de 768px e a partir de 1024px.

### Página

- Espaço em cima do `<main>`: 32px (48px, 64px). Em  baixo: 64px (64px, 96px), que é o `--section-space`. O mockup tem 40px em mobile, mas esse valor não está na escala de espaços do design system.
- Do bloco do h1 até ao formulário: 32px. Entre o h1 e o texto de entrada: 12px.
- Abaixo de 1024px, o `<body>` leva 64px de margem em baixo, a altura da barra, e o `<html>` o mesmo `scroll-padding-bottom` (design system, secção 7).
- A partir de 1024px: formulário até 640px e painel de 320px, com 48px entre eles. O painel fica preso a 24px do topo.

### Formulário

- Entre o indicador, o cartão do passo, o resumo e os botões: 24px.
- Margem interna dos cartões: 24px (32px a partir de 768px).
- Do h2 do passo ao conteúdo: 24px (16px no passo 2).
- Entre campos: 24px.
- Entre os grupos Origem e Destino: 32px. O Destino e a distância levam por cima uma linha de 1px em line e 24px de espaço.
- Do h3 de um grupo aos campos: 16px.
- Larguras máximas dos campos: código postal 192px, andar e telefone 256px, distância 320px. Os outros ocupam a largura toda.
- Opções Sim e Não: lado a lado, com 32px entre elas.
- Entre os botões de navegação: 12px.

### Indicador

- Da etiqueta à lista: 12px. Entre itens: 8px.
- Cada item: altura mínima 44px, margem interna de 8px em cima e em baixo e 10px dos lados. Entre o número e o nome: 8px. O visto fica à direita, com 16px.

### Calculadora

- Do texto de introdução às divisões: 32px. Entre divisões: 32px.
- Do h3 da divisão à lista: 8px.
- Cada item: 12px em cima e em baixo, com uma linha de 1px em line por baixo (e uma por cima do primeiro). Entre o nome e o volume: 4px. Entre o nome e os botões: 12px no mínimo.

### Passo 3

- Da data aos extras: 32px, com uma linha de 1px em line e 24px de espaço.
- Entre os extras: 16px. Da caixa de seleção ao texto: 12px. Da etiqueta à ajuda: 4px.

### Passo 4 e resumo

- O consentimento leva por cima uma linha de 1px em line e 24px de espaço. Da caixa ao texto: 12px.
- Resumo: margem interna igual à dos cartões, 24px entre blocos. Cada bloco leva uma linha de 1px em line por cima e 16px de espaço. Da etiqueta às linhas: 8px.
- Bloco da estimativa: linha de 2px em ink por cima, 16px de espaço, 4px entre as peças. O preço em Barlow 600 a 2.2rem.

### Painel e barra

- Painel: fita kraft de 20px no topo. Margem interna de 24px e 16px entre as peças. O veículo em texto normal. Antes do preço, uma linha de 1px em line com 16px de espaço. Entre a etiqueta "Estimativa" e o preço, 4px. O preço em Barlow 600 a 2.2rem.
- Barra: 64px de altura, margem lateral igual ao `--gutter`, a etiqueta e o total à esquerda, o preço à direita, 12px no mínimo entre eles. O total e o preço a 1.6rem.

---

## 15. Ícones desta página

Todos do sprite, 24px, menos onde se diz outro tamanho.

| Ícone | Onde | Ficheiro |
|---|---|---|
| Menu e fechar | Cabeçalho | Já tens |
| Seta para a direita | "Seguinte" e "Enviar pedido" | Já tens (`icon-arrow-right.svg`) |
| Seta para a esquerda | "Anterior" | Já tens (`icon-arrow-left.svg`) |
| Mais e menos | Calculadora | Já tens |
| Visto, 16px | Passos concluídos no indicador | Já tens (`icon-check.svg`, no sprite com o id `icon-checkup`) |
| Alerta, 16px | Mensagens de erro | Falta |
| Seta para baixo | `<select>` (design system, secção 9) | Já tens (no sprite, `icon-chevron-down`) |

- **A seta do `<select>` não pode vir do sprite pelo CSS.** Um `<use>` só funciona dentro de um `<svg>` no HTML, não num `background-image`. Fica um `<svg>` ao lado do `<select>`, dentro de um contentor, posicionado à direita e com `pointer-events: none` para o clique passar para o `<select>`. **Conceito novo:** o `<select>` precisa de `appearance: none` para o browser deixar de desenhar a seta dele.

---

## 16. O que não deves copiar do mockup

O mockup é só referência visual. Estas diferenças são de propósito:

1. **Os `id` do mockup estão em português** (`cp-origem`, `distancia`). Usa os desta página, em inglês.
2. **O código postal tem `inputmode="numeric"`.** Só entra quando o hífen automático estiver feito (secção 5).
3. **Os campos e as quantidades vêm preenchidos.** É um exemplo. A página começa vazia e com tudo a 0.
4. **Os botões têm 20px de margem lateral.** O design system diz 24px. Segue o design system.
5. **Os botões − e + estão a 8px da quantidade.** O design system diz 16px. Segue o design system.
6. **No rodapé em mobile, a altura mínima de 44px está no `<li>`.** O design system põe-na no `<a>`, porque a área de toque é a caixa do link.
7. **O rodapé em desktop usa colunas `2fr 1fr 1fr`.** O design system diz `3fr 2fr auto`.
8. **As fontes vêm do Google Fonts.** No site ficam alojadas em `assets/fonts/`.
9. **Os ícones estão escritos dentro de cada botão** e a seta para a direita tem a ponta antiga. Usa o sprite e o `icon-arrow-right.svg` atual.
10. **"Vol." na barra e "0 m³" no painel.** Ficam "Volume" e "0,0 m³" (secção 10).
11. **Os `<select>` mostram a seta do browser.** O design system pede a seta do sprite (secção 15).

---

## 17. Ordem das tarefas

As tarefas 5 a 10 da ficha, com a parte deste ficheiro que cada uma usa:

| # | Branch | Secções deste ficheiro |
|---|---|---|
| 5 | `feat/quote-markup` | 1 a 10 (HTML e CSS), 14, 15 |
| 6 | `feat/quote-steps` | 4, 9, 13 |
| 7 | `feat/quote-validation` | as tabelas de mensagens de erro de 5 a 8, as datas da 7 |
| 8 | `feat/volume-calculator` | 6, 10, a tabela dos veículos da 11 |
| 9 | `feat/price-estimate` | 11, o resumo da 8 |
| 10 | `feat/quote-submit` | 12 |
