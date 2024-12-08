import './styles.css';
import { useState } from 'react';

export default function JavaScriptPage() {
  const [expandedElement, setExpandedElement] = useState(null);

  const elements = [
    { element: "Variables", description: "Armazenam dados. Usamos 'let', 'const' e 'var' para definir variáveis. 'let' permite declarar variáveis com escopo de bloco, ou seja, elas estão restritas ao bloco de código em que são definidas. 'const' também possui escopo de bloco, mas a variável declarada com 'const' não pode ser reatribuída após a sua inicialização, tornando-a imutável. 'var', por outro lado, tem escopo de função, o que pode levar a comportamentos inesperados, principalmente em funções aninhadas, sendo geralmente desaconselhado em favor de 'let' e 'const'. As variáveis podem armazenar diferentes tipos de dados, como números, strings, objetos e arrays, e são fundamentais para o controle de fluxos e manipulação de informações dentro do código." },
    { element: "Functions", description: "São blocos de código que podem ser reutilizados. Podem ser definidas de forma declarativa ou como expressões. As funções podem receber parâmetros, que são valores passados para elas quando chamadas, e retornar um valor utilizando a palavra-chave return. Além disso, as funções são fundamentais para a organização do código, permitindo modularização e encapsulamento de comportamentos, o que facilita a manutenção e reutilização do código. Em JavaScript, também podemos criar funções utilizando arrow functions, uma sintaxe mais concisa que mantém o contexto de this da função onde foi definida." },
    { element: "Events", description: "Permitem que os usuários interajam com a página. Exemplo: cliques de botão. Os eventos são disparados em resposta a ações do usuário, como cliques, movimentos do mouse, pressionamento de teclas ou até mesmo carregamento da página. Em JavaScript, os eventos podem ser manipulados usando 'event listeners', que são funções associadas a um determinado evento. Por exemplo, ao clicar em um botão, podemos associar um evento de clique que executa uma função específica. " },
    { element: "DOM Manipulation", description: "Métodos que permitem modificar a estrutura e o estilo da página HTML usando JavaScript. O DOM (Document Object Model) é uma interface que representa a estrutura da página como uma árvore de nós, onde cada nó é um elemento HTML, atributo ou texto. A manipulação do DOM envolve ações como adicionar, remover ou modificar elementos e atributos da página. Usando métodos como getElementById, querySelector, createElement, appendChild e removeChild, é possível dinamicamente alterar a aparência e o conteúdo de uma página." },
    { element: "Asynchronous JavaScript", description: "Permite executar código de forma não bloqueante, utilizando Promises, async/await e callbacks. O código assíncrono permite que operações demoradas, como requisições a APIs ou leituras de arquivos, sejam executadas sem bloquear o fluxo principal da aplicação. As Promises representam operações que podem ser concluídas no futuro, e permitem encadear ações a serem executadas quando a operação for finalizada (com .then() para sucesso ou .catch() para erro). A introdução de async/await torna o código assíncrono mais legível e semelhante ao código síncrono, permitindo aguardar a resolução de uma Promise de maneira mais intuitiva." },
    { element: "Curiosidades", description: "1. Criado em 10 dias: JavaScript foi desenvolvido por Brendan Eich em apenas 10 dias! Inicialmente, era apenas um script para adicionar interatividade básica nas páginas. 2. É brincalhão: Se você digitar typeof NaN no console do navegador, verá que o JavaScript dirá que o 'Não é um Número' (NaN) é, na verdade, um número!. 3. As mensagens ocultas no console: Muitos sites deixam mensagens secretas no console do navegador para desenvolvedores curiosos. Experimente abrir o console de sites como o Google e veja!" },
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