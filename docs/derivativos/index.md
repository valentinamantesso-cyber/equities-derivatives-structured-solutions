# Guia Básico - Equities, Derivatives e Structured Solutions

## 1. O que são derivativos?

Derivativo é um instrumento financeiro cujo valor depende de outro ativo, chamado **ativo-objeto**. Esse ativo pode ser uma ação, um índice, uma moeda, uma taxa de juros ou uma commodity.

Em vez de comprar diretamente o ativo, as partes negociam um contrato cujo resultado varia de acordo com o comportamento desse ativo.

No Brasil, grande parte dos derivativos padronizados é negociada na B3. Nessas operações, a câmara de compensação atua entre compradores e vendedores e, dependendo do produto e da posição, pode exigir margem de garantia para reduzir o risco de inadimplência.

Também existem derivativos negociados diretamente entre duas contrapartes, com condições definidas de forma personalizada. Esse ambiente é chamado de **mercado de balcão**, ou OTC.

## 2. Para que servem os derivativos?

Os derivativos surgiram principalmente para permitir a transferência de riscos.

Um produtor agrícola, por exemplo, pode fixar hoje o preço pelo qual venderá sua safra no futuro. Do outro lado, uma empresa pode fixar antecipadamente o custo de compra dessa produção. Os dois reduzem a incerteza, mesmo que, para isso, abram mão de parte de um possível ganho.

Na prática, os derivativos podem ser usados para quatro finalidades principais:

| Finalidade | Como funciona |
|---|---|
| **Hedge ou proteção** | Uma empresa ou um investidor reduz sua exposição a oscilações de preços, juros, moedas ou outros fatores de risco. |
| **Especulação** | O investidor assume uma posição esperando lucrar com determinado movimento de mercado. |
| **Arbitragem** | Busca-se aproveitar diferenças de preço entre ativos ou contratos que deveriam apresentar valores equivalentes. |
| **Estruturação** | Diferentes derivativos são combinados para criar um perfil específico de risco e retorno. Essa é a base das operações de Structured Solutions. |

## 3. Os quatro principais tipos de derivativos

| Tipo | Característica principal | Onde é negociado |
|---|---|---|
| **Termo** | Obrigação de comprar ou vender no futuro por um preço definido hoje. Normalmente possui condições personalizadas. | Balcão ou B3, como no termo de ações |
| **Futuro** | Exposição semelhante ao termo, mas por meio de contratos padronizados e com ajuste diário. | Bolsa |
| **Opções** | O comprador adquire o direito, mas não a obrigação, de comprar ou vender um ativo. | Bolsa e balcão |
| **Swaps** | Duas partes trocam resultados financeiros, como taxa fixa por taxa variável. | Principalmente balcão |

## 4. Contratos a termo

No contrato a termo, duas partes se comprometem a comprar e vender um ativo por um preço definido hoje, com liquidação em uma data futura.

As duas partes assumem uma obrigação. Isso diferencia o termo de uma opção, em que o comprador possui um direito e pode decidir se deseja exercê-lo.

!!! example "Exemplo"
    Um investidor compra a termo 1.000 ações de XYZ3 por R$ 20,00, com vencimento em 90 dias.

    - Se a ação estiver valendo R$ 23,00 no vencimento, o resultado será positivo em R$ 3,00 por ação, pois ele poderá comprar por R$ 20,00.
    - Se a ação cair para R$ 17,00, o investidor continuará obrigado a comprar por R$ 20,00, tendo resultado negativo de R$ 3,00 por ação.

## 5. Contratos futuros

Os contratos futuros seguem uma lógica parecida com a dos contratos a termo, mas possuem características que facilitam sua negociação e aumentam sua liquidez.

| Característica | Termo | Futuro |
|---|---|---|
| **Padronização** | Condições definidas entre as partes | Contrato padronizado pela bolsa |
| **Resultado financeiro** | Normalmente concentrado na liquidação ou no encerramento | Ganhos e perdas são realizados diariamente |
| **Liquidez** | Geralmente menor | Normalmente maior |
| **Uso comum** | Operações específicas, como termo de ações | Juros, moedas, índices e commodities |

No Brasil, alguns dos contratos futuros mais relevantes são:

- DI futuro, ligado às expectativas para as taxas de juros
- Dólar futuro, ligado à cotação do dólar
- Índice e mini-índice futuro, ligados ao Ibovespa

Uma característica importante dos futuros é o **ajuste diário**. Ao final de cada pregão, os ganhos e as perdas da posição são calculados e movimentados financeiramente na conta do investidor.

## 6. Opções — visão geral

Uma opção dá ao seu comprador, chamado **titular**, o direito de comprar ou vender um ativo por um preço previamente definido.

Para adquirir esse direito, o titular paga um valor chamado **prêmio** ao vendedor da opção, chamado **lançador**.

Existem dois tipos principais:

- **Call:** direito de comprar o ativo
- **Put:** direito de vender o ativo

Para quem compra uma opção isolada, a perda máxima é limitada ao prêmio pago. Já o lançador recebe o prêmio, mas assume uma obrigação caso a opção seja exercida.

### Quando usar opções em vez de termo ou futuro?

As opções são úteis quando o investidor quer manter a possibilidade de desistir da operação caso o mercado se mova contra ele. Essa flexibilidade tem um custo: o prêmio.

O termo e o futuro são mais adequados quando a intenção é fixar uma exposição de forma bilateral, sem pagar um prêmio inicial pela possibilidade de desistência.

A seção específica de [Opções](../opcoes/index.md) apresenta esses contratos com mais detalhes.

## 7. Swaps

Um swap é um contrato em que duas partes trocam resultados financeiros futuros.

Esses resultados são calculados sobre um valor de referência, chamado **valor nocional**. Em geral, o nocional não é transferido entre as partes: ele serve como base para calcular os pagamentos.

Os swaps são muito utilizados para ajustar ou proteger exposições a juros, moedas, índices e outros fatores de risco.

!!! example "Exemplo — swap CDI x dólar"
    Uma empresa possui uma dívida em dólar, mas recebe suas receitas em reais. Nesse caso, ela corre o risco de sua dívida ficar mais cara caso o dólar suba.

    Para reduzir essa exposição, a empresa pode contratar um swap no qual:

    - paga uma remuneração em reais, como 100% do CDI
    - recebe a variação do dólar acrescida do cupom cambial
    - os dois resultados são calculados sobre o mesmo valor nocional

    Na liquidação, normalmente é paga apenas a diferença entre as duas pontas do contrato, sem troca do valor principal.

| Tipo de swap | O que é trocado |
|---|---|
| **Taxa fixa x flutuante** | Uma parte paga uma taxa prefixada e a outra paga uma taxa variável, como o CDI. |
| **Moedas ou cross-currency swap** | Fluxos ligados a uma moeda são trocados por fluxos ligados a outra. |
| **Total return swap** | O retorno total de um ativo, incluindo valorização e rendimentos, é trocado por uma taxa de financiamento. |
| **Credit default swap (CDS)** | O comprador paga um prêmio para receber uma compensação caso ocorra um evento de crédito, como inadimplência. |

### CDS e a crise de 2008

O CDS funciona de maneira parecida com uma proteção contra o risco de calote. O comprador da proteção paga um prêmio periódico ao vendedor. Caso ocorra o evento de crédito previsto no contrato, o vendedor deve compensá-lo.

Antes da crise de 2008, alguns investidores compraram CDS ligados a títulos formados por financiamentos imobiliários. Eles acreditavam que muitos daqueles empréstimos não seriam pagos.

Quando os calotes aumentaram e os títulos perderam valor, os CDS geraram ganhos para quem havia comprado essa proteção.

O comprador de um CDS não precisa necessariamente possuir o título de dívida relacionado ao contrato. Por isso, o instrumento também pode ser usado para assumir uma posição sobre a melhora ou a piora do risco de crédito.

## 8. Riscos dos derivativos

Os derivativos podem ser usados para reduzir riscos, mas também podem criar exposições relevantes.

- **Risco de mercado:** o ativo-objeto pode se mover em direção contrária à posição assumida.
- **Risco de contraparte:** uma das partes pode não conseguir cumprir sua obrigação. Esse risco é mais relevante em contratos bilaterais de balcão.
- **Chamadas de margem:** posições como contratos futuros e opções vendidas podem exigir garantias. Se o risco aumentar e as garantias se tornarem insuficientes, o investidor poderá precisar depositar recursos adicionais.
- **Alavancagem:** a exposição financeira pode ser muito maior que o capital inicialmente utilizado, ampliando ganhos e perdas.
- **Marcação a mercado:** mudanças no valor do contrato podem gerar efeitos financeiros antes do vencimento.
- **Complexidade de precificação:** o valor de opções e swaps pode depender de fatores como volatilidade, prazo e curva de juros.
