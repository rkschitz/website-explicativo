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
      description: `Define um parágrafo de texto, sendo um dos elementos fundamentais para estruturar o conteúdo textual
       em uma página HTML. Por padrão, os parágrafos são exibidos com espaçamento vertical entre eles, tornando o texto mais legível.
        Pode conter texto, elementos inline (como 'span', 'a', 'em', 'strong') e entidades HTML. 
        É frequentemente usado em conjunto com CSS para estilização, como ajuste de margens, alinhamento, cor e fontes.`
    },
    {
      tag: "a",
      description: `Define um hyperlink, usado para criar links que permitem aos usuários navegar para outras páginas,
          documentos, seções da mesma página ou até mesmo disparar ações específicas. O principal atributo da tag é 'href',
          que especifica o destino do link, como URLs absolutas ('https://example.com') ou relativas ('/about').
          Pode conter texto, imagens ou outros elementos inline como conteúdo clicável. Outros atributos comuns incluem:
          'target', que define como o link será aberto (por exemplo, '_blank' abre em uma nova aba);"
          'rel', que especifica a relação do link com a página atual (como 'nofollow' ou 'noopener'); e 'download',
          que permite baixar o arquivo referenciado no 'href'. Para links internos dentro da mesma página,
          o 'href' pode usar um identificador (exemplo: '#section1') para navegar até uma âncora. 
          Além disso, a tag 'a' pode ser estilizada com CSS para mudar a aparência (cor, sublinhado, etc.) e oferece suporte a eventos JavaScript,
          como 'onclick', para ações personalizadas. É importante garantir que os links sejam acessíveis, 
          fornecendo descrições claras no texto e evitando URLs vazias ou não funcionais.`
    },
    {
      tag: "img",
      description: "Exibe uma imagem na página, sendo um elemento inline. O atributo obrigatório 'src' define a URL da imagem,"
        + "que pode ser um caminho absoluto (ex: 'https://example.com/image.jpg') ou relativo (ex: '/images/logo.png')."
        + "O atributo 'alt' é essencial para acessibilidade, fornecendo uma descrição textual da imagem para leitores de tela"
        + " ou caso a imagem não possa ser carregada. Outros atributos incluem: 'width' e 'height', que definem as dimensões da imagem"
        + " (em pixels ou porcentagem); 'title', que adiciona um texto explicativo exibido ao passar o mouse sobre a imagem;"
        + " 'loading', que pode ser configurado como 'lazy' para carregar imagens sob demanda, melhorando a performance; e 'crossorigin',"
        + "usado para controle de segurança em imagens de outras origens. A tag pode ser estilizada com CSS para manipular bordas, sombras,"
        + "redimensionamento e alinhamento. Boas práticas incluem o uso de imagens otimizadas para melhorar o desempenho da página"
        + "e manter a proporção correta ao redimensionar. Além disso, é possível combinar a tag `<img>` com `<picture>` e `<source>`"
        + " para adaptar imagens responsivas e específicas para diferentes dispositivos ou resoluções."
    },
    {
      tag: "div",
      description: "É um elemento de bloco genérico usado para agrupar outros elementos HTML e organizar "
        + "o layout da página. Pode conter elementos de bloco (como 'p', 'h1', 'ul') ou inline (como 'span', 'a', 'img'), "
        + "tornando-o extremamente versátil. A tag pode ser estilizada com CSS para definir dimensões, cores de fundo, bordas, alinhamento, "
        + "espaçamento, entre outros. Além disso, é comumente utilizada para criar contêineres que recebem classes "
        + "ou IDs para estilização ou manipulação com scripts. Atributos como 'id' e 'class' são fundamentais para identificar "
        + "e aplicar estilos ou comportamentos específicos a uma `<div>`. Em layouts responsivos, `<div>`s frequentemente "
        + "atuam como contêineres ou colunas, sendo combinados com frameworks CSS ou JavaScript para construir interfaces "
        + "dinâmicas e bem organizadas."

    },
    {
      tag: "Curiosidades",
      description: `1.A origem do nome: HTML significa HyperText Markup Language, mas muita gente já brincou
        que deveria significar How To Meet Ladies, por causa de um meme antigo na comunidade tech",
        2. O HTML é uma linguagem de marcação, não de programação. Isso significa que ele não possui
        lógica de programação, como loops, condicionais e funções. Seu principal objetivo é estruturar
        o conteúdo de uma página web, definindo a hierarquia e organização dos elementos visuais.
        3. O elemento <blink>: Esse elemento fazia o texto piscar e era muito popular nos anos 90. 
        Foi tão odiado que foi praticamente banido dos navegadores modernos`
    }
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
