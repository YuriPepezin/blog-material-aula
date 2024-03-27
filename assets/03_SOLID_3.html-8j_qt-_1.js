import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as n,b as e,d as o,e as i,a as d}from"./app-CZtBzwAd.js";const c={},p=d('<h1 id="principio-da-substituicao-de-liskov" tabindex="-1"><a class="header-anchor" href="#principio-da-substituicao-de-liskov"><span>Princípio da substituição de Liskov</span></a></h1><p>Adaptado de <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><p>SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de Programação Orientada a Objetos.</p><p>Michael Feathers criou esse acrônimo após observar cinco princípios da orientação a objetos e design de código criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD</p><p>S.O.L.I.D: Os 5 princípios da POO</p><ol><li>S — Single Responsiblity Principle (Princípio da responsabilidade única)</li><li>O — Open-Closed Principle (Princípio Aberto-Fechado)</li><li>L — Liskov Substitution Principle (Princípio da substituição de Liskov)</li><li>I — Interface Segregation Principle (Princípio da Segregação da Interface)</li><li>D — Dependency Inversion Principle (Princípio da inversão da dependência)</li></ol><p>Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.</p><h2 id="principio-da-substituicao-de-liskov-1" tabindex="-1"><a class="header-anchor" href="#principio-da-substituicao-de-liskov-1"><span>Princípio da substituição de Liskov</span></a></h2><p><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>O Princípio de Substituição de Liskov é uma ferramenta essencial para a identificação de conceitos semelhantes sendo representados por classes diferentes. Ele é baseado na ideia de que uma classe derivada deve ser capaz de substituir sua classe base sem afetar o comportamento do programa. Isso significa que, se um programa pode utilizar objetos de tipos diferentes de maneira intercambiável, então esses objetos deveriam ser de classes que possuem uma relação de herança.</p><p>Ao aplicar o LSP, os desenvolvedores podem garantir que suas classes derivadas respeitem as mesmas regras e comportamentos que suas classes base. Isso ajuda a manter a coerência e consistência do código, bem como a facilitar a manutenção e a evolução do software.</p><p>Por exemplo, imagine que um programa possui uma classe <code>Forma</code> que representa a forma geométrica básica e dela são derivadas duas outras classes <code>Retângulo</code> e <code>Triângulo</code>. Se o programa tem uma função que calcula a área de uma forma, é importante que essa função funcione de maneira consistente para todas as formas, independentemente de serem retângulos ou triângulos.</p><p>Imagine agora que o sistema possui uma classe <code>Circulo</code> e essa classe não faça parte da família <code>Forma</code>. Durante a execução do programa o comportamento de <code>Circulo</code> é muito semelhante aos dos filhos de <code>Forma</code>. <code>Circulo</code> pode ser desenhado na tela, ter suas características de tamanho e cor alteradas e ter uma formula para o calculo de area. Assim como os objetos da família <code>Circulo</code>.</p><h3 id="definicao" tabindex="-1"><a class="header-anchor" href="#definicao"><span>Definição</span></a></h3><p>O Princípio de Substituição de Liskov leva esse nome por ter sido criado por Barbara Liskov, em 1988. A definição formal de Liskov diz que:</p><div class="hint-container tip"><p class="hint-container-title">Definição</p><p>Se para cada objeto <code>o1</code> do tipo <code>S</code> há um objeto <code>o2</code> do tipo <code>T</code> de forma que, para todos os programas <code>P</code> definidos em termos de <code>T</code>, o comportamento de <code>P</code> é inalterado quando <code>o1</code> é substituído por <code>o2</code> então <code>S</code> é um subtipo de <code>T</code></p></div><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><hr class="footnotes-sep">',18),l={class:"footnotes"},m={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"},f={href:"https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530",target:"_blank",rel:"noopener noreferrer"},b=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),h={id:"footnote2",class:"footnote-item"},g={href:"https://stackify.com/solid-design-liskov-substitution-principle/",target:"_blank",rel:"noopener noreferrer"},v=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function _(P,k){const a=t("ExternalLinkIcon");return r(),n("div",null,[p,e("section",l,[e("ol",m,[e("li",u,[e("p",null,[o("João Roberto da Paixão.O que é SOLID: O guia completo para você entender os 5 princípios da POO."),e("a",f,[o("https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530"),i(a)]),o(" (Acessado em 18/03/2022) "),b])]),e("li",h,[e("p",null,[o("Princípios de design SOLID explicados: o princípio de substituição de Liskov com exemplos de código. "),e("a",g,[o("https://stackify.com/solid-design-liskov-substitution-principle/"),i(a)]),o(),v])])])])])}const S=s(c,[["render",_],["__file","03_SOLID_3.html.vue"]]),D=JSON.parse('{"path":"/posts/03_SOLID_3.html","title":"Princípio da substituição de Liskov","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2024-03-27T23:40:00.000Z","tag":["solid"],"category":["aula"],"order":5,"gitInclude":["../../src/bib/bib.md"],"description":"Princípio da substituição de Liskov Adaptado de [1]. SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fác...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/posts/03_SOLID_3.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Princípio da substituição de Liskov"}],["meta",{"property":"og:description","content":"Princípio da substituição de Liskov Adaptado de [1]. SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fác..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"og:updated_time","content":"2024-03-27T23:50:29.000Z"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["meta",{"property":"article:tag","content":"solid"}],["meta",{"property":"article:published_time","content":"2024-03-27T23:40:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-27T23:50:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Princípio da substituição de Liskov\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-27T23:40:00.000Z\\",\\"dateModified\\":\\"2024-03-27T23:50:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Princípio da substituição de Liskov","slug":"principio-da-substituicao-de-liskov-1","link":"#principio-da-substituicao-de-liskov-1","children":[{"level":3,"title":"Definição","slug":"definicao","link":"#definicao","children":[]}]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1711062915000,"updatedTime":1711583429000,"contributors":[{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":2},{"name":"Leandro Souza","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":1.65,"words":496},"filePathRelative":"posts/03_SOLID_3.md","localizedDate":"27 de março de 2024","excerpt":"\\n<p>Adaptado de <sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">.</a></p><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n<p>SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de Programação Orientada a Objetos.</p>\\n<p>Michael Feathers criou esse  acrônimo após observar cinco princípios da orientação a objetos e design de código criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD</p>\\n<p>S.O.L.I.D: Os 5 princípios da POO</p>\\n<ol>\\n<li>S — Single Responsiblity Principle (Princípio da responsabilidade única)</li>\\n<li>O — Open-Closed Principle (Princípio Aberto-Fechado)</li>\\n<li>L — Liskov Substitution Principle (Princípio da substituição de Liskov)</li>\\n<li>I — Interface Segregation Principle (Princípio da Segregação da Interface)</li>\\n<li>D — Dependency Inversion Principle (Princípio da inversão da dependência)</li>\\n</ol>\\n<p>Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.</p>\\n</a>","autoDesc":true}');export{S as comp,D as data};