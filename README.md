# ⚔️ Calculadora de Partidas Rankeadas

Este projeto é um desafio de lógica de programação desenvolvido em JavaScript para classificar o nível de um herói com base no seu saldo de vitórias em partidas competitivas.

## 📝 Descrição

O programa utiliza funções para calcular o saldo de vitórias (vitórias - derrotas) e determina o ranking do jogador seguindo uma estrutura de decisão.

### Tabela de Ranks

| Saldo de Vitórias | Nível |
| :--- | :--- |
| Menor ou igual a 10 | **Ferro** |
| Entre 11 e 20 | **Bronze** |
| Entre 21 e 50 | **Prata** |
| Entre 51 e 80 | **Ouro** |
| Entre 81 e 90 | **Diamante** |
| Entre 91 e 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

---

## 🚀 Tecnologias e Dependências

* **JavaScript** (Node.js)
* **prompt-sync**: Biblioteca utilizada para permitir a entrada de dados via terminal.

## 🛠️ Como Instalar e Rodar

1. Certifique-se de ter o **Node.js** instalado.

2. No terminal do seu projeto, instale a dependência de entrada de dados:
   ```bash
   npm install prompt-sync
   ```
3. Execute o script:
   ```bash
   node index.js
   ```
   ```
