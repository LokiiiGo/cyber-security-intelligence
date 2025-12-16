# Cyber Security Intelligence Dashboard

<img src="./public/image/background-cyber.png">

Este projeto tem como objetivo principal fornecer uma **Visão de Inteligência de Ameaças Cibernéticas (CTI)** em tempo real. Ele monitora e visualiza os ataques e ameaças que ocorrem diariamente no mundo da tecnologia, categorizando-os para oferecer uma análise rápida e acionável.

## Funcionalidades Principais (Os 3 Pilares da CTI)

É organizado em torno dos três principais tipos de ameaças de segurança cibernética:

### 1. Visão Global (CTI Estratégica)
* **Monitorização em Tempo Real:** Pulso contínuo de ataques e ameaças ativas.

* **Mapeamento de Atores:** Visualização da origem (país/região) e do alvo (vítima/indústria) dos ciberataques.

* **Gráficos de Tendência:** Análise do volume de ataques ao longo do tempo.
 
### 2. Vetores de Ataques (CTI Tática e Operacional)
* **Identificação de Vetores:** Exibição dos métodos mais utilizados para comprometer sistemas.

* **Análise de Malware:** Destaque para as famílias de *malware*, *DDoS*, *Exploits* ou *botnets* (zumbis) mais ativos no período.

* **Vulnerabilidades Exploradas:** Detalhes técnicos sobre os *exploits* que estão a ser utilizados ativamente (se os dados de *feed* suportarem).

### 3. Ameaças de Email (Engenharia Social)
* **Top Phishing Targets:** Identificação das marcas ou setores que são mais frequentemente alvo de tentativas de *phishing*.

* **Detecção de Anexos Maliciosos:** Análise dos tipos de ficheiros (ex: `.zip`, `.pdf`, `.exe`) que estão a ser disseminados via email como vetores de vírus.

* **Alerta de Engenharia Social:** Foco nas táticas utilizadas para enganar o utilizador e fazê-lo clicar em links ou abrir anexos.

#

## Tecnologias Utilizadas

![NextJS](https://img.shields.io/badge/nextjs-black?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/react-2c2c2c?style=for-the-badge&logo=react&logoColor=32c2c2c)
![TailwindsCSS](https://img.shields.io/badge/tailwindcss-000815?style=for-the-badge&logo=tailwindcss&logoColor=whit)
![Vercel](https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

## Como Executar Localmente

1.  Clone o repositório:
    ```bash
    git clone [Link do repositório]
    cd [Nome da Pasta do Projeto]
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  Inicie o projeto:
    ```bash
    npm run dev
    ```