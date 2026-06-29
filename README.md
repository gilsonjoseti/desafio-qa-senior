# Desafio Técnico QA Sênior - Automação de Testes

# Desafio QA Senior
Este projeto demonstra a implementação de testes automatizados de UI e API, testes de performance e integração contínua (CI/CD), seguindo as melhores práticas de arquitetura e desenvolvimento de testes.

## 1. Como executar o projeto localmente

### Pré-requisitos
Certifique-se de ter os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Docker](https://www.docker.com/get-started/) (necessário para executar os testes de performance com k6)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd desafio-qa-senior
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Instale os navegadores do Playwright:
   ```bash
   npx playwright install --with-deps chromium
   ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
   ```
   BASE_URL=https://www.saucedemo.com
   API_URL=https://jsonplaceholder.typicode.com
   STANDARD_USER=standard_user
   PASSWORD=secret_sauce
   ```

### Execução dos Testes

#### Testes de UI e API (Playwright)
Para executar todos os testes de UI e API:
```bash
npx playwright test
```

Para executar apenas os testes de UI:
```bash
npx playwright test tests/ui/
```

Para executar apenas os testes de API:
```bash
npx playwright test tests/api/
```

#### Testes de Performance (k6)
Para executar os testes de performance, certifique-se de que o Docker esteja em execução:
```bash
Com o Docker rodando na máquina
docker run --rm -v ${PWD}:/scripts grafana/k6 run /scripts/performance/api_load_test.js
```
### Comando:
Para executar todos os testes em sequencia e já abrir automaticamente o relatorio
```bash
npm run test:report
```

## 2. Tecnologias utilizadas

- **Playwright**: Framework de automação para testes de UI e API. Escolhido pela sua capacidade de cobrir ambos os tipos de testes em uma única ferramenta, robustez, suporte a múltiplos navegadores e relatórios ricos.
- **Node.js/TypeScript**: Linguagem de programação e superset para o desenvolvimento dos testes.
- **k6**: Ferramenta de teste de carga e performance. Escolhida pela sua leveza, facilidade de uso e capacidade de integração em pipelines de CI/CD.
- **Allure Report**: Gerador de relatórios de teste que oferece uma visualização clara e detalhada dos resultados, incluindo evidências de execução e identificação de falhas.
- **GitHub Actions**: Plataforma de CI/CD para automatizar a execução dos testes em um pipeline.

## 3. Estrutura do projeto

```
desafio-qa-senior/
├── .github/
│   └── workflows/
│       └── main.yml           # Configuração do pipeline CI/CD
├── tests/
│   ├── api/
│   │   └── users.spec.ts      # Testes de API (JSONPlaceholder)
│   └── ui/
│       └── login_and_cart.spec.ts # Testes de UI (SauceDemo)
├── pages/
│   ├── LoginPage.ts           # Page Object para a página de Login
│   └── ProductsPage.ts        # Page Object para a página de Produtos
├── performance/
│   └── api_load_test.js       # Script de teste de performance (k6)
├── playwright.config.ts       # Configuração do Playwright
├── .env                       # Variáveis de ambiente
├── package.json               # Dependências e scripts do projeto
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação do projeto
```

## 4. Decisões técnicas tomadas

- **Escolha do Playwright**: Optou-se pelo Playwright devido à sua capacidade de realizar testes de UI e API de forma integrada, o que simplifica a manutenção e a curva de aprendizado. Além disso, oferece recursos avançados como auto-waits, retries e relatórios detalhados, essenciais para testes estáveis e confiáveis.
- **Page Object Model (POM)**: Implementado para os testes de UI para promover a reutilização de código, facilitar a manutenção e melhorar a legibilidade dos testes, separando a lógica de interação com a interface dos cenários de teste.
- **API Pública**: Inicialmente, a API `reqres.in` foi considerada, mas devido a um comportamento inesperado de `status 401` em algumas requisições, optou-se por `jsonplaceholder.typicode.com` para os testes de API, que oferece um ambiente mais estável e previsível para os cenários de CRUD. A adaptação foi documentada conforme o requisito do desafio.
- **Testes de Performance com k6**: A escolha do k6 se deu pela sua eficiência e sintaxe clara para a criação de scripts de teste de carga. A execução via Docker no pipeline garante um ambiente consistente e isolado.
- **Relatórios Allure**: Integrado para fornecer relatórios ricos em detalhes, com passos de teste, screenshots em caso de falha e informações de ambiente, facilitando a depuração e a comunicação dos resultados.
- **GitHub Actions para CI/CD**: Selecionado por ser uma solução robusta e amplamente utilizada, permitindo a automação da execução dos testes de UI, API e performance a cada push ou pull request, garantindo feedback rápido sobre a qualidade do código.

## 5. Estratégia de testes adotada

A estratégia de testes abrange diferentes camadas para garantir a qualidade da aplicação:

- **Testes de API**: Foco na validação de endpoints, status codes (200, 201, 204, 404), e contrato das respostas (estrutura e tipos de dados). Cenários de CRUD (Criação, Leitura, Atualização, Deleção) foram implementados para garantir a integridade dos dados e o comportamento esperado da API.
- **Testes de UI**: Concentrados em fluxos críticos da aplicação web (login, adição de itens ao carrinho). Utilização do POM para organização e testes estáveis com validações visuais e funcionais. Uso de variáveis de ambiente para dados parametrizados (usuário e senha).
- **Testes de Performance**: Realizados em um endpoint da API para simular carga básica com múltiplos usuários, verificando o tempo de resposta e a taxa de erros através de thresholds definidos.

## 6. Como rodar testes de performance

Os testes de performance são executados utilizando o k6. Certifique-se de ter o Docker instalado e em execução. O script `performance/api_load_test.js` simula 10 usuários virtuais por 10 segundos em um endpoint da API. Os thresholds definidos garantem que 95% das requisições tenham tempo de resposta abaixo de 500ms e a taxa de erros seja inferior a 1%.

Para executar:
```bash
docker run --rm -v ${PWD}:/scripts grafana/k6 run /scripts/performance/api_load_test.js
```

## 7. Como acessar os relatórios

Após a execução dos testes do Playwright, os relatórios HTML podem ser visualizados localmente. Se você executou os testes via `npx playwright test`, um relatório HTML será gerado na pasta `playwright-report/`.

Para abrir o relatório HTML:
```bash
npx playwright show-report
```

Para os relatórios Allure (configurados no `playwright.config.ts`):

1. Instale as dependências do projeto (inclui `allure-commandline`):
   ```bash
   npm install
   ```
2. Gere o relatório Allure a partir dos resultados:
   ```bash
   npx allure generate allure-results --clean -o allure-report
   ```
3. Abra o relatório no navegador:
   ```bash
   npx allure open allure-report
   ```

## 8. Possíveis melhorias

- **Integração Allure no CI/CD**: Atualmente, o relatório Allure é gerado localmente. Uma melhoria seria configurar o pipeline para publicar o relatório Allure como um artefato, ou integrar com um servidor Allure para visualização centralizada.
- **Mais cenários de Testes de Performance**: Expandir a cobertura dos testes de performance para outros endpoints e cenários mais complexos, incluindo testes de estresse e pico.
- **Testes de Segurança**: Adicionar testes de segurança automatizados, como varreduras de vulnerabilidades ou testes de injeção de SQL/XSS.
- **Testes de Acessibilidade**: Integrar ferramentas de acessibilidade para garantir que a aplicação seja utilizável por pessoas com deficiência.
- **Testes Visuais**: Implementar testes de regressão visual para detectar alterações indesejadas na interface do usuário.
- **Parametrização de Dados Avançada**: Utilizar geradores de dados ou ferramentas de massa de dados para cenários de teste mais complexos e realistas.
- **Integração com Ferramentas de Monitoramento**: Conectar os resultados dos testes de performance com ferramentas de monitoramento de APM (Application Performance Monitoring) para uma visão mais completa do desempenho da aplicação.

## 9. Solução de Problemas

### Erro: `Playwright Test did not expect test.describe() to be called here.`

Este erro geralmente ocorre quando o Playwright tenta interpretar um arquivo de teste como um arquivo de configuração ou quando há um problema com a forma como os arquivos TypeScript estão sendo compilados ou importados. As seguintes ações foram tomadas para mitigar este problema:

- **`tsconfig.json`**: Um arquivo `tsconfig.json` foi adicionado à raiz do projeto para garantir que o TypeScript seja compilado corretamente, definindo as opções do compilador e os arquivos a serem incluídos.
- **`playwright.config.ts`**: O arquivo de configuração do Playwright foi ajustado para incluir `testMatch: /.*\.spec\.ts/`, garantindo que apenas arquivos com a extensão `.spec.ts` sejam reconhecidos como arquivos de teste. Além disso, a importação do `dotenv` foi alterada para `import 'dotenv/config';` para evitar possíveis conflitos de módulos.

Se você encontrar este erro, certifique-se de que seu ambiente Node.js e TypeScript estão configurados corretamente e que o Playwright está usando a configuração de teste adequada.
