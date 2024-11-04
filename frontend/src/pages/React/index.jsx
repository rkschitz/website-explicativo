import './styles.css';
import React, { useState } from 'react';

export default function ReactPage() {
  const [expandedElement, setExpandedElement] = useState(null);

  const elements = [
    { element: "Components", description: "São os blocos de construção de uma aplicação React. Cada componente pode ser um arquivo separado e pode manter seu próprio estado." },
    { element: "JSX", description: "É uma extensão de sintaxe que permite escrever HTML dentro do JavaScript. JSX é convertido em chamadas de funções JavaScript." },
    { element: "Props", description: "Abreviação de 'propriedades', permite passar dados de um componente pai para um componente filho." },
    { element: "State", description: "É um objeto que representa a parte da aplicação que pode mudar. Quando o estado muda, o componente re-renderiza." },
    { element: "Lifecycle Methods", description: "Métodos que permitem executar código em pontos específicos do ciclo de vida de um componente, como quando ele é montado ou atualizado." },
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
