# Como o Projeto Foi Realizado - Passo a Passo

Este documento detalha o processo de desenvolvimento do projeto de automação de testes, desde a análise inicial do desafio até a entrega final, incluindo as decisões tomadas e as etapas executadas.

## Fase 1: Análise do Documento do Desafio Técnico e Mapeamento de Requisitos

1.  **Leitura e Compreensão do Desafio**: O primeiro passo foi ler cuidadosamente o documento `desafio_qa_senior.pdf` para entender os objetivos, cenários, requisitos obrigatórios e diferenciais.
2.  **Extração de Requisitos**: Foram identificados e listados todos os requisitos, incluindo automação de UI e API, testes de performance, arquitetura, tecnologias sugeridas, relatórios e CI/CD.
3.  **Definição de Hipóteses Iniciais**: Com base nos requisitos, foram formuladas hipóteses sobre as ferramentas e abordagens a serem utilizadas, como a escolha do Playwright para UI/API e k6 para performance, e a seleção de APIs e sites públicos para os testes.
4.  **Registro dos Requisitos**: Os requisitos foram sumarizados e salvos em um arquivo Markdown (`desafio_qa_requisitos.md`) para fácil consulta durante o desenvolvimento.

## Fase 2: Configuração do Ambiente e Estrutura do Projeto de Automação de Testes

1.  **Criação do Diretório do Projeto**: Um novo diretório (`desafio-qa-senior`) foi criado para abrigar todos os arquivos do projeto.
2.  **Inicialização do Projeto Node.js**: O projeto foi inicializado com `npm init -y` para criar o arquivo `package.json` e gerenciar as dependências.
3.  **Instalação de Dependências**: As bibliotecas essenciais foram instaladas:
    *   `@playwright/test`: Framework principal para automação.
    *   `@types/node`: Tipagem para Node.js.
    *   `dotenv`: Para gerenciar variáveis de ambiente.
    *   `allure-playwright`: Para integração com relatórios Allure.
4.  **Instalação dos Navegadores do Playwright**: O comando `npx playwright install chromium` foi executado para baixar o navegador Chromium necessário para os testes de UI.
5.  **Criação da Estrutura de Pastas**: Uma estrutura de diretórios organizada foi estabelecida para separar os diferentes tipos de testes e componentes do projeto (`tests/api`, `tests/ui`, `pages`, `fixtures`, `utils`, `performance`, `.github/workflows`).
6.  **Configuração do Playwright**: O arquivo `playwright.config.ts` foi criado e configurado para:
    *   Definir o diretório de testes (`./tests`).
    *   Habilitar a execução paralela (`fullyParallel: true`).
    *   Configurar retries para CI (`retries: process.env.CI ? 2 : 0`).
    *   Especificar os reporters (`html` e `allure-playwright`).
    *   Definir a `baseURL` e opções de trace/screenshot/video.
    *   Configurar o projeto para Chromium.
7.  **Criação do Arquivo .env**: Um arquivo `.env` foi criado para armazenar variáveis de ambiente como `BASE_URL` (para o site de UI), `API_URL` (para a API) e credenciais de login, permitindo a parametrização e externalização de configurações.

## Fase 3: Desenvolvimento dos Testes Automatizados e Código do Projeto

### Testes de UI (SauceDemo)

1.  **Page Object Model (POM)**:
    *   `LoginPage.ts`: Criado para encapsular os elementos e ações da página de login do SauceDemo.
    *   `ProductsPage.ts`: Criado para encapsular os elementos e ações da página de produtos do SauceDemo.
2.  **Cenários de Teste de UI**: O arquivo `tests/ui/login_and_cart.spec.ts` foi desenvolvido para cobrir:
    *   Login bem-sucedido com credenciais válidas.
    *   Exibição de mensagem de erro com credenciais inválidas.
    *   Adição de um item ao carrinho.

### Testes de API (JSONPlaceholder)

1.  **Seleção da API**: Inicialmente, `reqres.in` foi considerada. No entanto, durante a validação, foi observado que a API estava retornando `status 401` para algumas requisições sem uma chave de API clara, o que inviabilizava a validação dos cenários de CRUD e status codes esperados. Por isso, foi feita a decisão de trocar para `jsonplaceholder.typicode.com`, que oferece um comportamento mais consistente para testes públicos.
2.  **Cenários de Teste de API**: O arquivo `tests/api/users.spec.ts` foi implementado para cobrir:
    *   `GET /users`: Validação de status 200 e contrato da resposta (array de usuários).
    *   `POST /posts`: Criação de um novo post com status 201 e validação dos dados retornados.
    *   `PUT /posts/1`: Atualização de um post existente com status 200 e validação da atualização.
    *   `DELETE /posts/1`: Deleção de um post com status 200.
    *   `GET /users/999`: Cenário de erro para usuário não existente, esperando status 404.

### Testes de Performance (k6)

1.  **Script k6**: O arquivo `performance/api_load_test.js` foi criado para simular uma carga básica no endpoint `/users` da API JSONPlaceholder.
2.  **Configuração de Carga**: Definido para 10 usuários virtuais (`vus`) por 10 segundos (`duration`).
3.  **Thresholds**: Incluídos thresholds para garantir que 95% das requisições tenham tempo de resposta abaixo de 500ms e a taxa de erros seja inferior a 1%.

### Integração Contínua (CI/CD) com GitHub Actions

1.  **Workflow `main.yml`**: Um arquivo de workflow foi configurado em `.github/workflows/main.yml` para:
    *   Disparar o pipeline em `push` e `pull_request` nas branches `main` e `master`.
    *   Instalar Node.js e as dependências do projeto.
    *   Instalar os navegadores do Playwright.
    *   Executar os testes de UI e API com `npx playwright test`.
    *   Executar os testes de performance usando Docker para o k6.
    *   Publicar o relatório do Playwright como um artefato.

## Fase 4: Validação dos Requisitos do Desafio Contra o Projeto Implementado

1.  **Execução Inicial dos Testes**: Os testes de UI e API foram executados localmente para verificar a funcionalidade básica.
2.  **Correção de Erros de Ambiente**: Durante a primeira execução, o Playwright reportou que o navegador não existia. Isso foi corrigido executando `npx playwright install --with-deps chromium` novamente para garantir que todas as dependências do navegador estivessem instaladas.
3.  **Correção de Erros de Código (UI)**: Um erro de `ReferenceError: page is not defined` foi identificado nos testes de UI. A correção envolveu adicionar `page` como argumento para a função `test` no cenário específico.
4.  **Revisão e Adaptação da API**: Após a correção dos testes de UI, os testes de API falharam com `status 401` na `reqres.in`. Uma investigação com `curl` confirmou que a API estava retornando 401. A decisão foi adaptar o projeto para usar `jsonplaceholder.typicode.com` e reescrever os testes de API e o script k6 para se adequarem à nova API e seus contratos.
5.  **Validação Final dos Testes**: Após as adaptações, todos os testes de UI e API foram executados novamente com sucesso. O script k6 também foi ajustado para validar o corpo da resposta da JSONPlaceholder corretamente.

## Fase 5: Correção do Erro `Playwright Test did not expect test.describe() to be called here.`

1.  **Diagnóstico do Erro**: O erro indica que o Playwright está tentando interpretar um arquivo de teste como um arquivo de configuração ou que há um problema na compilação/importação de arquivos TypeScript.
2.  **Criação do `tsconfig.json`**: Um arquivo `tsconfig.json` foi adicionado à raiz do projeto para configurar o compilador TypeScript, garantindo que os arquivos `.ts` sejam tratados corretamente.
3.  **Ajuste do `playwright.config.ts`**: O arquivo de configuração do Playwright foi modificado para:
    *   Incluir `testMatch: /.*\.spec\.ts/` para que apenas arquivos com a extensão `.spec.ts` sejam reconhecidos como testes, evitando que outros arquivos TypeScript sejam interpretados erroneamente.
    *   Alterar a importação do `dotenv` para `import 'dotenv/config';` para uma compatibilidade mais robusta.
4.  **Validação da Correção**: Os testes foram executados novamente no ambiente do sandbox e passaram sem o erro reportado, confirmando a eficácia das alterações.

## Fase 6: Criação da Documentação Completa

1.  **Elaboração do README.md**: Um arquivo `README.md` abrangente foi criado e atualizado, cobrindo todos os pontos solicitados no desafio, incluindo a nova seção de solução de problemas para o erro `test.describe()`.
2.  **Criação e Atualização do HOW_IT_WAS_DONE.md**: Este documento foi criado e atualizado para detalhar o processo iterativo de desenvolvimento, as decisões e as correções realizadas ao longo do projeto, incluindo as etapas de correção do erro `test.describe()`.

## Fase 7: Empacotamento do Projeto e Entrega ao Usuário

1.  **Verificação Final**: Uma última verificação foi realizada para garantir que todos os arquivos necessários estivessem presentes e que a documentação estivesse clara e completa.
2.  **Preparação para Entrega**: O projeto está pronto para ser empacotado e entregue, contendo o código-fonte, a documentação de instalação e o passo a passo de como foi realizado.

Este processo iterativo garantiu que todos os requisitos do desafio fossem abordados, com a flexibilidade de adaptar as soluções conforme as necessidades e os desafios encontrados durante a implementação.
