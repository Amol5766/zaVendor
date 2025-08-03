# 🧾 zaVendor

**zaVendor** is a full-stack web application designed to securely store and manage vendor details. It implements full CRUD (Create, Read, Update, Delete) functionality and integrates authentication using **Auth0**.

---

## 🚀 Features

- 🧑‍💼 Vendor Management (Add, View, Edit, Delete)
- 🔐 Auth0 Authentication
- 🌐 Fully responsive UI
- ⚡ Real-time form validation & toast notifications
- 🔍 Pagination & searchable records
- 🔄 Backend REST API (Express + MongoDB)

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- React Router
- Auth0 React SDK
- MUI (Material UI)
- Toastify

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- CORS, dotenv, etc.

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/zavendor.git
cd zavendor
```

---

### 2. Setup `.env` for Frontend (`/client`)

```env
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_API_BASE_URL=http://localhost:5000/api/vendor
```

---

### 3. Setup `.env` for Backend (`/server`)

```env
PORT=5000
MONGODB_URI=mongodb+srv://<your-connection-string>
```

---

### 4. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 5. Run the Application

#### Start Backend

```bash
cd server
npm run dev
```

#### Start Frontend

```bash
cd client
npm run dev
```

---

## 🔒 Auth0 Setup

Make sure to create an app in your [Auth0 dashboard](https://auth0.com/) and configure:

- Callback URLs (e.g. `http://localhost:5173`)
- Allowed logout URLs
- Frontend `.env` with correct domain/client ID

---

## 📷 Screenshots

> _Add screenshots here for UI/UX_

---

## 🌐 Live URL (if deployed)

[https://your-live-url.com](https://your-live-url.com)

---

## 📄 License

MIT License

---

> Made with ❤️ by [Your Name]