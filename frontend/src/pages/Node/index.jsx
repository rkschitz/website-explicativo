// src/pages/Node/index.jsx
import './styles.css';
import { useState } from 'react'; 'react';

export default function NodePage() {
  const [expandedElement, setExpandedElement] = useState(null);

  const elements = [
    { element: "NPM", description: "O Node Package Manager é usado para gerenciar pacotes e dependências em aplicações Node.js." },
    { element: "Express", description: "Um framework web minimalista para Node.js, que facilita a criação de servidores e APIs." },
    { element: "Middleware", description: "Funções que têm acesso ao objeto de solicitação e resposta, permitindo manipular requisições e respostas." },
    { element: "Asynchronous Programming", description: "Node.js é projetado para operações assíncronas, utilizando callbacks, Promises e async/await." },
    { element: "RESTful APIs", description: "Node.js é amplamente usado para construir APIs RESTful, permitindo que diferentes aplicações se comuniquem." },
    { element: "Curiosidades ", description: "1. Baseado em café: O logo oficial do Node.js tem um design que lembra grãos de café. Isso porque seu criador, Ryan Dahl, é fã de café, assim como muitos programadores. 2. Primeira aplicação de Node.js: Uma das primeiras coisas feitas com Node.js foi um servidor que simplesmente respondia 'Hello World' para qualquer requisição. Isso virou o exemplo mais famoso para iniciantes. 3. Node.js tornou o JavaScript um super-herói!Antes do Node.js, o JavaScript era basicamente usado apenas para desenvolvimento front-end no navegador. Com ele, o JavaScript foi para o servidor, fazendo com que desenvolvedores pudessem usar a mesma linguagem no backend, o que muitos chamaram de 'superpoderes'." },
  ];

  const handleExpand = (element) => {
    setExpandedElement(element === expandedElement ? null : element);
  };

  return (
    <div className="node-container">
      <h1>Introdução ao Node.js 🚀</h1>
      <p className="description">
        Node.js é um ambiente de execução JavaScript no lado do servidor. Permite criar aplicações de rede escaláveis e eficientes.
      </p>

      <h2>Elementos Importantes do Node.js</h2>
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