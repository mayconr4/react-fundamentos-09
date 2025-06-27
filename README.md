# Fundamentos de React

## 08_props

Props (abreviação de properties/propriedades) são parâmetros que um componente pode receber.

Elas funcionam como argumentos de uma função, que podem receber dados de um componente pai para um componente filho.

Props basicamente são uma forma de comunicação entre componentes.

- Criação de props e definição de tipos para as props
- Desestruturação de props
- Manipulação de props opcionais
- Renderização condicional

## 07_tailwindcss

**Tailwind CSS** é um framework CSS utilitário que permite estilizar elementos diretamente no HTML, usando classes pré-definidas. Em vez de escrever CSS personalizado, você aplica estilos combinando classes como `bg-blue-500`, `text-center`, `p-4`, etc.

### Vantagens do Tailwind:

- **Produtividade**: agiliza o desenvolvimento, evitando ir e voltar entre HTML e arquivos CSS.
- **Consistência visual**: promove um design coeso por usar um sistema padronizado de cores, espaçamentos e tipografia.
- **Customização fácil**: o `tailwind.config.js` permite ajustar temas, cores, breakpoints e mais.
- **Evita classes genéricas**: como você aplica os estilos diretamente nas classes, reduz a necessidade de inventar nomes para cada estilo.
- **Menos CSS final**: com ferramentas como `PurgeCSS`, o CSS final pode conter apenas o que foi usado de fato, diminuindo o tamanho do arquivo.

É especialmente útil em projetos modernos com componentes (como React ou Vue), onde o estilo fica acoplado ao markup.

### Sites importantes

- Site oficial: https://tailwindcss.com/
- Documentação para uso com Vite: https://tailwindcss.com/docs/installation/using-vite

## 06_styled-components

Styled Components é uma biblioteca (lib) muito usada com projetos React que permite escrever estilos CSS dentro do JavaScript usando a própria sintaxe do CSS. Os estilos ficam acoplados ao componente em que foram declarados.

### Instalação

- npm install styled-components
- npm install --save-dev @types/styled-components
- Extensão vscode-styled-components

Ao trabalhar Styled Components você pode criar regras com qualquer seletor e usar lógica JavaScript dentro de template string.

## 05_modulos-css

Módulos CSS (CSS Modules) são uma maneira de escrever CSS em arquivos separados de extensão `.module.css` em que cada classe e estilo fica isolado para um único componente. Há um **acoplamento** entre o módulo e seu componente, permitindo um escopo bem definido sobre os estilos.

- Criação de módulos para cada componente (exceto Rodape)
- Importação do módulo (chamado de styles ou estilos)
- Aplicação das classes usando className={}
- Reorganização de componentes e seus módulos em pastas
- Instalação da extensão CSS Modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline aplicado via style e escrevendo CSS In JS (objeto com propriedades CSS)
- CSS inline criando um objeto do tipo CSSProperties e passando-o para o style do componente

## 03_componentes-filhos-ou-internos

- Criação de um componente filho (Menu) e importação/uso no pai (Cabecalho)
- Criação de um componente filho (Artigo) e importação/uso no pai (Conteudo)
- Instalação da extensão ES7+ React

## 02_criando-e-organizando-componentes

- Separação de trechos do App em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxe-JSX-no-App

- Construção de um componente único (App.tsx) usando elementos HTML e Fragmento React
- Referência sobre Componentes e JSX: https://react.dev/reference/react/Component
- Instalação da extensão React Developer Tools

## 00_projeto-zerado

- Remoção do CSS
- Remoção da pasta assets
- Simplificação do componente App.tsx e do main.tsx
