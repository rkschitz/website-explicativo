import './styles.css';
import { useState } from 'react';

export default function DevOps() {
  const [expandedTag, setExpandedTag] = useState(null);

  const elements = [
    {
      tag: "Integração Contínua (CI)",
      description: `A Integração Contínua é uma prática do DevOps onde os desenvolvedores enviam suas alterações de código frequentemente 
      para um repositório compartilhado. A ideia é automatizar testes para garantir que essas mudanças não causem problemas no projeto. 
      Assim, erros são identificados rapidamente.`
    },
    {
      tag: " Entrega Contínua (CD)",
      description: `Entrega Contínua vai além da integração contínua, automatizando o processo para que as mudanças no código 
      sejam facilmente preparadas e prontas para implantação em produção. O objetivo é sempre manter o software em um estado funcional,
       pronto para entrega ou implantação.`
    },
    {
      tag: "Infraestrutura como Código (IaC)",
      description: `Infraestrutura como Código se refere ao uso de código para gerenciar e provisionar a
      infraestrutura de TI (servidores, redes, armazenamento etc.), em vez de fazer isso manualmente.
       Ferramentas como Terraform, Ansible e AWS CloudFormation são usadas para descrever e automatizar esses recursos.`
    },
    {
      tag: "Monitoramento e Observabilidade",
      description: `O Monitoramento e Observabilidade envolvem a coleta de dados, 
      métricas e logs para analisar a saúde e desempenho de aplicações e infraestrutura.
       Ferramentas como Prometheus, Grafana, ELK Stack e Datadog ajudam equipes a identificar falhas, gargalos e problemas em tempo real.`
    },
    {
      tag: "Contêineres e Orquestração com Docker e Kubernetes",
      description: `Os contêineres (como os do Docker) permitem empacotar aplicações e suas dependências em unidades isoladas
       e leves que podem ser executadas de forma consistente em qualquer ambiente. O Kubernetes é a ferramenta líder
        para orquestrar esses contêineres, gerenciando sua escalabilidade, alta disponibilidade e resiliência.`

    },
    {
      tag: "Curiosidades",
      description: `1. Origem do termo: O termo "DevOps" foi cunhado em 2009 por Patrick Debois e Andrew Shafer durante uma conferência em Ghent, Bélgica.
      2. Camiseta preta: A camiseta preta é um símbolo da cultura DevOps, representando a colaboração entre equipes de desenvolvimento e operações.
      3. O primeiro conceito de CI/CD foi criado nos anos 2000! Embora o conceito moderno de DevOps tenha ganhado popularidade nos anos 2010, 
      a ideia de Integração Contínua e Entrega Contínua começou a surgir no início dos anos 2000 com práticas como "build automation". 
       Desde então, ferramentas como Jenkins e GitLab ajudaram a transformar esses conceitos.
 `
    }
  ];

  const handleExpand = (tag) => {
    setExpandedTag(tag === expandedTag ? null : tag);
  };

  return (
    <div className="html-container">
      <h1>Introdução a DevOps 🤖</h1>
      <p className="description">
        DevOps é uma abordagem que integra práticas de Desenvolvimento (Dev) e Operações (Ops) com o objetivo de melhorar a
        colaboração entre equipes, aumentar a eficiência no desenvolvimento de software e garantir entregas mais rápidas e seguras.
      </p>

      <h2>Elementos Importantes de DevOps</h2>
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
