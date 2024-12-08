import './styles.css';
import React, { useState } from 'react';

export default function CssPage() {
  const [expandedItem, setExpandedItem] = useState(null);

  const items = [
    { property: "color", description: "Define a cor do texto de um elemento. Pode ser especificada com nomes de cores, códigos hexadecimais ou valores RGB." },
    { property: "background-color", description: "Define a cor de fundo de um elemento. Semelhante à cor do texto, você pode usar nomes, hexadecimais ou RGB." },
    { property: "font-size", description: "Controla o tamanho da fonte de um elemento. Pode ser especificado em pixels, em, rem ou porcentagens." },
    { property: "margin", description: "Cria espaço em volta de um elemento, afastando-o dos outros. Você pode definir margens específicas para cada lado (topo, direita, fundo e esquerda)." },
    { property: "padding", description: "Cria espaço entre o conteúdo de um elemento e sua borda. Semelhante a margens, você pode especificar padding para cada lado." },
    { property: "border", description: "Define a borda ao redor de um elemento. Você pode especificar a largura, estilo (sólido, tracejado, etc.) e cor." },
    { property: "display", description: "Controla como um elemento é exibido na página. As opções incluem block, inline, flex, grid, entre outros." },
    { property: "position", description: "Define como um elemento é posicionado na página. Você pode usar valores como static, relative, absolute e fixed." },
    { property: "Curiosidades", description: "1. CSS foi criado em 1996, quase ao mesmo tempo que a web estava se estruturando. Ele foi desenvolvido pela W3C para separar a estrutura do conteúdo (HTML) da apresentação (design). 2. O CSS foi inspirado em estilos de impressora! A ideia de separar o conteúdo da formatação veio da necessidade de controlar a aparência de documentos impressos. 3. CSS tem propriedades extremamente peculiares e avançadas! O CSS oferece muitas propriedades que podem parecer estranhas, mas são extremamente poderosas. Por exemplo 'clip-path': Permite cortar partes de elementos com formas personalizadas.filter: Você pode aplicar filtros fotográficos como brilho, contraste, desaturação, ou até mesmo borrão (blur) apenas com CSS.backdrop-filter: Um recurso para adicionar efeitos de desfoque ao fundo de elementos." }
  ];

  const handleExpand = (property) => {
    setExpandedItem(property === expandedItem ? null : property);
  };

  return (
    <div className="css-container">
      <h1>Introdução ao CSS 🎨</h1>
      <p className="description">
        CSS (Cascading Style Sheets) é uma linguagem utilizada para descrever a apresentação de documentos HTML. Com o CSS, você pode aplicar estilos a elementos HTML, controlando cores, fontes, espaçamentos e muito mais. Aqui estão algumas propriedades CSS importantes:
      </p>

      <h2>Propriedades CSS Importantes</h2>
      <p>Clique em cada propriedade para expandir e aprender mais:</p>

      <div className="properties-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`property ${expandedItem === item.property ? 'expanded' : ''}`}
            onClick={() => handleExpand(item.property)}
          >
            <span className="property-name">{item.property}</span>
            {expandedItem === item.property && (
              <p className="property-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
