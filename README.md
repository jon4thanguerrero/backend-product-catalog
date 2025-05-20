# Backend - Product API (Node.js + Clean Architecture)

This is the backend service for the Product Catalog application. It is built using **Node.js**, **Express**, and follows the principles of **Clean Architecture**.

---

## 📦 Features
- Clean separation of concerns (Domain, Use Cases, Interfaces, Infrastructure)
- RESTful API endpoint: `/api/products`
- CORS enabled for frontend communication

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
cd your-workspace
git clone https://github.com/your-user/backend-product-api.git
cd backend-product-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Server
```bash
npm start
```
The API will be available at: `http://localhost:3001/api/products`

---

## 🛠️ Project Structure
```
src/
├── config/                # Server setup
├── domain/                # Core entities
├── infrastructure/        # Data access (e.g., in-memory)
├── interfaces/            # Controllers (routes)
├── usecases/              # Application logic
index.js                   # Entry point
```

---

## 🔧 Environment
- Node.js >= 14
- npm >= 6

---

## 📄 License
MIT License