# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição do problema bem como a ideia de solução abordados neste projeto foram solidificadas através da criação de evidências empíricas do contexto de desigualdade social do nosso país, ampliada pela pandemia de COVID-19, amparadas por pesquisa realizada pelos membros da equipe tendo como fonte os principais portais de notícias do país.

As particularidades verificadas neste processo serão apresentadas na forma de personas, histórias de usuários, definição de requisitos funcionais e não funcionais além das restrições do projeto.


## Personas

Nos quadros abaixo são apresentadas as personas definidas durante o processo de entendimento do problema.

|<img src="img/joao.jpg" width="100" height="100">   | **João Mendes** <br> 48 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** |<br> Responsável pelas campanhas de doação de alimentos organizadas nas unidades dos mercados pão de açucar.<br> Tem ensino superior em administração|
|**Motivação** |<br>Aumentar a quantidade de doações coletadas pelo mercado
|**Dispositivos** |Possui um samsung de última geração e um laptop |
|**Aplicativos** |Facebook<br>App do G1|

<br><br>

|<img src="img/anita.jpg" width="100">  | **Anita Camões** <br> 40 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação** | Voluntária em uma instutuição de caridade que ajuda pessoas em situação de rua|
|**Motivação** | Religiosa, com ensino médio, viu seu filho perder a luta contra o vício em crack e quer ajudar para que outras famílias<br> não passem pela mesma perda|
|**Dispositivos** |Tem um android de segunda mão |
|**Aplicativos** |Whatsapp<br>Facebook|

<br><br>

|<img src="img/camila.jpg" width="100" height="100">   | **Camila Themes** <br> 35 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação**| <br> Advogada |
|**Motivação** | <br> Trabalha de casa e está esperando chegarmos em um alto nível de imunização com as vacinas antes de voltar a vida normal. <br>Assiste a muitas notícias e sente um dever de contribuir, visto que sua situação financeira não foi afetada na pandemia|
|**Dispositivos** |Tem um iphone de última geração |
|**Aplicativos** |Facebook|

<br><br>

|<img src="img/otavio.jpg" width="100" height="100">   | **Otávio Cardoso** <br> 27 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação**| <br> Administrador |
|**Motivação** | <br> Trabalha em uma escola. Quer aumentar a arrecadação de peças para sua campanha do agasalho<br>Assiste a muitas notícias e sente um dever de contribuir, visto que sua situação financeira não foi afetada na pandemia|
|**Dispositivos** |Tem um android de uns 3 anos |
|**Aplicativos** |instagram, twitter e tik tok|

<br><br>

|<img src="img/griselda.jpg" width="100" height="100">   | **Griselda Barbosa** <br> 61 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação**| <br> Aposentada |
|**Motivação** | <br> Costura por hobbie e quer começar a doar suas peças para pessoas necessitadas|
|**Dispositivos** |Tem um iphone que era do seu neto |
|**Aplicativos** |whatsapp|

<br><br>

|<img src="img/fred.jpg" width="100" height="100">   | **Fred Silva** <br> 33 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação**| <br> Dono de restaurante |
|**Motivação** | <br> Deseja doar os produtos que não foram vendidos e estão próximos do vencimento|
|**Dispositivos** |Tem um Motorola de última geração |
|**Aplicativos** |instagram, telegram|

<br><br>

|<img src="img/jessica.jpg" width="100" height="100">   | **Jéssica Prates** <br> 23 anos   |
|:---------------------------------------:|:-------------------------------:|
|**Ocupação**| <br> Estudante |
|**Motivação** | <br> Após estar com as duas doses, deseja participar de doaçoes para fazer sua parte para ajudar os que precisam|
|**Dispositivos** |Tem um iphone de última geração |
|**Aplicativos** |instagram, whatsapp, tik tok|

<br><br>

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Mendes  | criar um cadastro como coletor  | acessar a plataforma              |
|João Mendes  | registrar um ponto de coleta   | atingir mais doadores             |
|João Mendes  | registrar o tipo de produtos que recebe   | evitar doações de produtos que não tem um distribuidor definido             |
|Anita Camões  | criar um cadastro como coletora   | acessar a plataforma              |
|Anita Camões  | registrar um ponto de coleta   | atingir mais doadores             |
|Anita Camões  | registrar a data da próxima distribuição   | conseguir ajuda de mais voluntários             |
|Camila Themes  | encontrar pontos de coleta perto de sua residência   | marcar a coleta da doação            |
|Fred Silva  | favoritar pontos de coleta perto de sua residência   | registrar os pontos onde a experiência de doação foi mais satisfatória             |
|Griselda Barbosa  | ver contato de um ponto de coleta   | tirar dúvidas sobre melhor momento para a entrega e se há alguma restrição para pessoas com baixa mobilidade             |
|Jéssica Prates  | ver contato de um ponto de coleta   | tirar dúvidas sobre como participar da entrega das doações             |

<br><br>

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

<br>

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|---------|
|RF-001​​ | Permitir que o usuário crie cadastro como coletor​ | ALTA​​ |
|RF-002 | Permitir que o usuário crie cadastro como doador​ | ALTA​​ |
|RF-003​ | Permitir que o usuário efetue login​​ | ALTA​​ |
|RF-004​​ | Permitir que o usuário efetue logout​​ | ALTA​​ |
|RF-005​​ | Permitir que o usuário visualize um ponto de coleta​​ | ALTA |​​
|RF-006​​ | Permitir que o usuário coletor cadastre um ponto de coleta​​ | ALTA​​ |
|RF-007​​ | Permitir que o usuário coletor edite um ponto de coleta​​ | ALTA​ |​
|RF-008​​ | Permitir que o usuário coletor delete um ponto de coleta​​ | ALTA |​​
|RF-009 | Permitir que o usuário procure por estabelecimentos próximos de sua localização​​ | ALTA |
|RF-010 | Permitir que o usuário coletor cadastre um evento de distribuição | MÉDIA |
|RF-011 | Permitir que o usuário coletor edite um evento de distribuição | MÉDIA |​
|RF-012​​ | Permitir que o usuário coletor delete um evento de distribuição | MÉDIA |​​
|RF-013 | Permitir que o usuário filtre os pontos de coleta pelo tipo de doação que deseja fazer​​ | BAIXA​​ |
|RF-014​​ | Permitir que o usuário envie mensagem para um ponto de coleta​​ | BAIXA​​ |
|RF-015 | Permitir que o usuário doador favorite pontos de coleta​ | BAIXA |​

<br>

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|-----------|
|RNF-001| O sistema deve focado para o uso em mobile (mobile-first) | ALTO | 
|RNF-002| O sistema deve funcionar nos principais browsers para mobile (chrome e safari) | ALTO | 
|RNF-003| O sistema deve ser responsivo para rodar em um dispositivos móvel e web | MÉDIA | 
|RNF-004| Deve possibilitar ser aberto através do facebook ou whatsapp para economizar plano de dados que podem ser muito limitados ou inexistentes |  MÉDIO | 
|RNF-005| Deve seguir os padrões de acessibilidade |  MÉDIO | 
|RNF-006| O formulário tem que ser de fácil preenchimento permitindo autocompletar| MÉDIO | 
|RNF-007| As requisições devem ser leves para funcionar bem em áreas mais remotas | BAIXO | 
|RNF-008| Deve exigir o mínimo de RAM possível para funcionar em aparelhos bem simples |  BAIXO | 
|RNF-009| O sistema deve ser implementado na linguagem C# utilizando banco de dados MySQL | ALTO |

<br><br>

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O sistema não permite doações em dinheiro |
|02| O projeto deverá ser entregue até o final do semestre |
|03| O tamanho de armazenamento e quantidade de usuários deve caber nos planos de hospedagem gratuita        |
|04| Não pode depender de uma internet rápida        |
|05| Não pode depender de um hardware potente        |
|06| O projeto deve seguir as regras de acessibilidade da w3c        |
|07| A quantidade de trabalho deve caber na rotina compartilhada com família e trabalho        |
|08| A organização do projeto deve possibilitar o trabalho assíncrono        |

<br><br>

## Descrição dos Casos de Uso

| Caso de Uso     | Descrição      |  
|:----------------|:---------------|
| Gerenciar Ponto de Coleta | <p> Permite que o usuário Coletor cadastre, altere ou delete um ponto de coleta. |
| Gerenciar Evento de Coleta | <p> Permite que o usuário Coletor cadastre, altere ou delete um evento de coleta.|
| Cadastrar Usuário | <p> Permite ao usuário se cadastrar e autenticar no sistema.|
| Visualizar um Ponto de Coleta | <p> Permite que o usuário Doador visualize um ponto de coleta.|
| Contatar um Ponto de Coleta pelo Whatsapp  | <p> Permite que o usuário Doador envie uma mensagem via whatsapp <br>para o ponto de coleta selecionado.|
| Manter Ponto de Coleta Favorito | <p> Permite ao usuário Doador favoritar e desfavoritar pontos de coleta e listar favoritos.|
| Buscar Ponto de Coleta |<p> Permite que o usuário busque pontos de coleta por localização, nome ou<br> tipos de produtos que aceitam.|

<!-- | Manter Doador | <p> Permite que o usuário Doador se cadastre, altere ou delete perifl.| -->

<br>

## Definição dos Atores


|    Ator         |  Definição     |  
|:----------------|:---------------|
| Coletor | Cidadão que recebe doações para encaminhá-las a pessoas necessitadas<br> ou intermediar doações à uma instiutição|
| Doador  | Cidadão que deseja realizar uma doação |
| Sistema | Sistema que mantém cadastro de pontos de coleta de doações diversas |