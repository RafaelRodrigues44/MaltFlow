# MalFlow

## Fluxo Mermaid (Sequência) 

``` mermaid
sequenceDiagram
    participant G as Gerador (Python)
    participant V as Vendas (Sales)
    participant E as Estoque (Inventory)
    participant M as Cadastro (Master Data)
    participant F as Financeiro (Cash)
    participant T as Fiscal (Tax)

    %% Fluxo de Venda
    G->>V: Solicita Venda (Malte)
    V->>E: Valida Saldo (B2_QATU)
    E-->>V: Saldo Disponível
    V->>T: Gera NF Saída (SF2)
    T->>F: Gera Contas a Receber (SE1)
    V->>E: Baixa Quantidade (B2_QATU)
    V-->>G: Venda Concluída (201)

    %% Fluxo de Reposição Automática
    Note over E, F: Gatilho de Compra (Estoque < Mínimo)
    
    E->>M: Busca Melhor Fornecedor (SA2/SB1)
    M-->>E: Fornecedor e Preço Ok
    E->>F: Valida Saldo Livre (Caixa - Compromissos)
    F-->>E: Compra Liberada
    E->>T: Gera NF Entrada (SF1)
    T->>F: Gera Contas a Pagar (SE2)
    E->>E: Incrementa Saldo (B2_QATU)
```