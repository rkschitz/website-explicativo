import './styles.css';
import React, { useState } from 'react';

export default function ReactPage() {
  const [expandedElement, setExpandedElement] = useState(null);

  const elements = [
    { element: "Components", description: "São os blocos de construção fundamentais de uma aplicação React, responsáveis por dividir a interface do usuário em partes independentes e reutilizáveis. Cada componente geralmente é implementado em um arquivo separado e pode ser uma função ou uma classe. Componentes podem receber dados através de 'props' (propriedades) e gerenciar seu próprio estado interno com 'useState' ou outras hooks. Eles permitem abstrair a lógica, estilização e comportamento de diferentes partes da aplicação, promovendo a modularidade e a reutilização de código." },
    { element: "JSX", description:  "É uma extensão de sintaxe do JavaScript que permite escrever estruturas semelhantes a HTML diretamente dentro do código JavaScript. JSX é utilizado principalmente com React para definir a estrutura visual dos componentes de forma declarativa e intuitiva. Cada elemento JSX é traduzido para chamadas de funções JavaScript por um compilador, como Babel, antes de ser executado no navegador. Além disso, JSX facilita a integração de atributos HTML (como 'className' no lugar de 'class') e a passagem de propriedades para componentes React. Embora não seja obrigatório em React, o JSX melhora a legibilidade e a manutenção do código, proporcionando uma abordagem mais visual e próxima da interface final desejada. Boas práticas incluem a utilização de fragmentos ('<>...</>') para evitar elementos desnecessários no DOM e a nomeação adequada de componentes personalizados com a primeira letra maiúscula." },
    { element: "Props", description: "Abreviação de 'propriedades', permite passar dados de um componente pai para um componente filho. As props são imutáveis e fornecem uma maneira de configurar ou personalizar o comportamento de um componente. Elas podem ser de qualquer tipo, como texto, números, arrays, funções ou objetos. Em React, as props são passadas de um componente pai para um componente filho como atributos, permitindo que o componente filho tenha acesso a essas informações e possa utilizá-las de forma dinâmica." },
    { element: "State", description: "É um objeto que representa a parte da aplicação que pode mudar. Quando o estado muda, o componente re-renderiza, permitindo que a interface seja atualizada de acordo com as novas informações. Em React, o estado é uma forma de gerenciar dados dinâmicos dentro de um componente, e cada vez que o estado é alterado, o React executa um novo ciclo de renderização para refletir as mudanças na UI, sem a necessidade de recarregar a página. O estado pode ser modificado por meio de funções específicas, como setState ou, em componentes funcionais, utilizando hooks como useState. No React, esses métodos são chamados de lifecycle methods (métodos do ciclo de vida) e são comumente usados em componentes de classe, como componentDidMount, componentDidUpdate e componentWillUnmount. Eles permitem que o desenvolvedor execute ações como a solicitação de dados de uma API, a modificação do estado ou a limpeza de recursos ao longo da vida do componente." },
    { element: "Lifecycle Methods", description: "Métodos que permitem executar código em pontos específicos do ciclo de vida de um componente, como quando ele é montado ou atualizado." },
    { element: "Curiosidades", description: "1. Criado para o Facebook: O React foi desenvolvido para resolver o problema de 'feed lento' do Facebook. Ele foi tão bom que virou uma biblioteca independente. 2. JSX parece estranho?: JSX, a sintaxe usada no React, parece uma mistura de HTML e JavaScript. Mas sabia que o navegador não entende JSX? Ele é convertido em JavaScript puro antes de ser executado! 3. O mascote não oficial: Apesar de não ser oficial, a comunidade React ama usar o 'Reactocat', uma versão do mascote do GitHub (Octocat) com o logo do React." },
  ];

  const handleExpand = (element) => {
    setExpandedElement(element === expandedElement ? null : element);
  };

  return (
    <div className="react-container">
      <h1>Introdução ao React ⚛️</h1>
      <p className="description">
        React é uma biblioteca JavaScript para construir interfaces de usuário. Com React, você pode criar aplicações de forma modular e reutilizável.
      </p>

      <h2>Elementos Importantes do React</h2>
      <p>Clique em cada elemento para expandir e aprender mais:</p>

      <div className="elements-container">
        {elements.map((item, index) => (
          <div 
            key={index} 
            className={`element ${expandedElement === item.element ? 'expanded' : ''}`}
            onClick={() => handleExpand(item.element)}
          >
            <span className="element-tag">{item.element}</span>
            {expandedElement === item.element && (
              <p className="element-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
