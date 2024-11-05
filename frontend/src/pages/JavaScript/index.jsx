import './styles.css';
import { useState } from 'react';

export default function JavaScriptPage() {
  const [expandedElement, setExpandedElement] = useState(null);

  const elements = [
    { element: "Variables", description: "Armazenam dados. Usamos 'let', 'const' e 'var' para definir variáveis." },
    { element: "Functions", description: "São blocos de código que podem ser reutilizados. Podem ser definidas de forma declarativa ou como expressões." },
    { element: "Events", description: "Permitem que os usuários interajam com a página. Exemplo: cliques de botão." },
    { element: "DOM Manipulation", description: "Métodos que permitem modificar a estrutura e o estilo da página HTML usando JavaScript." },
    { element: "Asynchronous JavaScript", description: "Permite executar código de forma não bloqueante, utilizando Promises, async/await e callbacks." },
  ];

  const handleExpand = (element) => {
    setExpandedElement(element === expandedElement ? null : element);
  };

  return (
    <div className="javascript-container">
      <h1>Introdução ao JavaScript no Frontend 🌐</h1>
      <p className="description">
        JavaScript é uma linguagem de programação que permite criar interatividade em páginas web. Com ela, você pode manipular o DOM, responder a eventos, e muito mais.
      </p>

      <h2>Elementos Importantes do JavaScript</h2>
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