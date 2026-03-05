## 🚀 Stellar Live Poll – Multi-Wallet Smart Contract dApp

A decentralized live polling application built on Stellar Testnet using Soroban smart contracts, StellarWalletsKit, and real-time event synchronization.

This project demonstrates multi-wallet integration, smart contract deployment, transaction tracking, and real-time blockchain event handling.

## 🌍 Overview

Stellar Live Poll is a transparent, on-chain voting application where:

Users connect using multiple Stellar wallets

Votes are recorded on the blockchain

Results update in real-time

Transaction status is tracked

Critical wallet and transaction errors are handled gracefully

## ✨ Features
🔐 Multi-Wallet Integration

Integrated using StellarWalletsKit

Supports:

Freighter

Albedo (optional)

🧠 Smart Contract (Soroban)

Poll initialized on-chain

Votes stored on-chain

Events emitted on every vote

Results fetched from blockchain

## 📡 Real-Time Event Handling

Listens to contract events

UI auto-refreshes when votes are cast

No manual reload required

## 🔄 Transaction Status Tracking

🟡 Pending

🟢 Success

🔴 Failed

❗ Error Handling (Mandatory)

Wallet not installed

Transaction rejected by user

Insufficient balance

## 🛠 Tech Stack
```
Layer	Technology
Frontend	React + Vite
Blockchain	Stellar Testnet
Smart Contract	Soroban (Rust)
Wallet Integration	StellarWalletsKit
Network API	Horizon
Version Control	Git & GitHub
IDE	VS Code
```

## 📦 Project Structure
```
stellar-livepoll-multiwallet-dapp/
│
├── contract/              # Soroban smart contract
│
├── src/
│   ├── components/        # UI components
│   ├── wallet/            # Wallet integration logic
│   ├── contract/          # Contract interaction functions
│   ├── utils/             # Helpers (error handling, status tracking)
│   └── App.jsx
│
├── public/
├── package.json
└── README.md
```

## ⚙️ Smart Contract Functions
```
init_poll(question: String)
vote(option: u32)
get_results() -> Vec<u32>
```

## 🔁 User Flow

User opens application

Connects wallet via StellarWalletsKit

Poll question loads from contract

User casts vote

Transaction status is displayed

Smart contract emits event

UI updates in real-time

## 🚀 Getting Started
```
1️⃣ Clone Repository
git clone https://github.com/your-username/stellar-livepoll-multiwallet-dapp.git
cd stellar-livepoll-multiwallet-dapp
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm run dev
```

## App runs on:

http://localhost:5173/

## 🔗 Smart Contract Deployment Contract deployed on Stellar Testnet using Soroban CLI.

Network: Testnet
RPC: https://soroban-testnet.stellar.org

After deployment, update:

src/contract/config.js

With your deployed CONTRACT_ID.

## Stellar contract deployed hash :- 
CB6RZBAV2Z2US3HO6XC65HJ5EKA6ZNY62CPQXG6WL5JADIW5LNEJ3TRK

## 🧪 Error Handling Implementation
Error Type	Handling
Wallet Not Found	Display alert & disable interaction
User Rejected	Show transaction failed message
Insufficient Balance	Prevent vote & show warning
📊 Transaction Status Logic

Each vote shows:
```
setStatus("pending")
setStatus("success")
setStatus("failed")
```
Displayed clearly in UI.

🔔 Real-Time Event Sync

Contract emits event on vote

## Frontend listens using:

RPC event subscription

Poll refresh logic

UI updates automatically

## 📝 Commit Requirements
```
✔ Minimum 2+ meaningful commits
✔ Clear commit messages
✔ Clean structured code
```
