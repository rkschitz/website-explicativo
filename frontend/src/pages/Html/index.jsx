import './styles.css';
import { useState } from 'react';

export default function HtmlPage() {
  const [expandedTag, setExpandedTag] = useState(null);

  const elements = [
    { 
      tag: "h1 - h6", 
      description: `Cabeçalhos usados para títulos e subtítulos, variando de <h1> (mais importante) a <h6> (menos importante). 
                    O <h1> representa o título principal, enquanto os demais definem seções e subseções da página, 
                    ajudando a organizar o conteúdo e melhorar a acessibilidade.`
    },
    { 
      tag: "p", 
      description: "Define um parágrafo de texto, ideal para agrupar e formatar blocos de texto com espaçamento adequado entre parágrafos." 
    },
    { 
      tag: "a", 
      description: "Cria um link que permite ao usuário navegar para outra página ou documento. Pode ter atributos como 'href' para definir o destino e 'target' para abrir em uma nova guia." 
    },
    { 
      tag: "img", 
      description: "Exibe uma imagem na página. Atributos como 'src' definem a URL da imagem e 'alt' fornece uma descrição alternativa para acessibilidade." 
    },
    { 
      tag: "div", 
      description: "É um contêiner genérico usado para agrupar e organizar outros elementos, essencial para o layout da página. É amplamente utilizado com CSS para estilização e posicionamento." 
    },
  ];

  const handleExpand = (tag) => {
    setExpandedTag(tag === expandedTag ? null : tag);
  };

  return (
    <div className="html-container">
      <h1>Introdução ao HTML 🌐</h1>
      <p className="description">
        HTML (HyperText Markup Language) é a linguagem padrão para estruturar páginas web. Com HTML, você define títulos, parágrafos, imagens, links e outros elementos que compõem uma página.
      </p>

      <h2>Elementos Importantes do HTML</h2>
      <p>Clique em cada elemento para expandir e aprender mais:</p>

      <div className="elements-container">
        {elements.map((element, index) => (
          <div 
            key={index} 
            className={`element ${expandedTag === element.tag ? 'expanded' : ''}`}
            onClick={() => handleExpand(element.tag)}
          >
            <span className="element-tag">{element.tag}</span>
            {expandedTag === element.tag && ( 
              <p className="element-description">{element.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
