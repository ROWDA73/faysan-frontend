# 🛍️ FAYSAN COLLECTION — Luxury E-Commerce Management Platform

A high-performance, full-stack e-commerce store and administration platform built with **Spring Boot 3** and **React (Vite)**. Standardized exclusively on **PostgreSQL** for secure data storage, featuring dedicated modules for User Authentication, Product Inventory Catalogs, Customer Order Management, and an Administrative Control Panel.

---

## 🌟 Architecture & Dedicated Modules

Every feature in the application resides on its own dedicated page accessed cleanly via navigation:

### 🔐 Authentication Module (`/login`, `/register`)

* **Customer Login (`POST /api/auth/login`):** Validates user credentials and issues a secure JSON Web Token (JWT) for session management.
* **User Registration (`POST /api/auth/register`):** Allows new customers to create an account and store their details safely in the PostgreSQL database.

### 🛍️ Product Catalog & Inventory Module (`/products`)

* **Storefront View:** Displays all available luxury perfumes and fragrances with images, descriptions, stock levels, and prices.
* **Admin Inventory Management:** Allows administrators to add new perfumes (`POST`), update existing product details (`PUT`), or remove discontinued items (`DELETE`).

### 📦 Customer Order Processing Module (`/orders`)

* **Checkout & Order Creation (`POST /api/orders`):** Enables customers to place orders for their selected fragrances during checkout.
* **Order Tracking & Fulfillment (`GET /api/orders`, `PUT /api/orders/{id}`):** Allows admins and customers to view order logs, check itemized selections (such as *Afnan 9 PM*), and update fulfillment statuses (e.g., `PENDING` to `COMPLETED`).

---

## 🛠️ Required Tools & Tech Stack

* **Backend Framework:** Java 17 or 21+, Spring Boot 3, Spring Security, Spring Data JPA
* **Frontend Framework:** React, Vite, Tailwind CSS, Axios, React Router
* **Database Engine:** PostgreSQL 14+ (Exclusive database)
* **Authentication:** Stateless JSON Web Tokens (JWT)

| Tool | Required Version | Official Download Link |
| --- | --- | --- |
| **Git** | v2.x+ | [git-scm.com](https://git-scm.com) |
| **Java JDK** | v17 or v21+ | [adoptium.net](https://adoptium.net) |
| **Node.js** | v18.x or v20.x+ | [nodejs.org](https://nodejs.org) |
| **PostgreSQL** | v14 or higher | [postgresql.org](https://postgresql.org) |

---

## 📁 Project Directory Layout

```text
faysan-collection/
├── backend/
│   ├── src/main/java/com/faysan/backend/
│   │   ├── controller/
│   │   │   ├── AuthController.java          # Handles login and registration endpoints
│   │   │   ├── OrderController.java         # Handles customer orders (GET, POST, PUT, DELETE)
│   │   │   └── ProductController.java       # Handles perfume inventory CRUD operations
│   │   ├── entity/
│   │   │   ├── Order.java                   # Order database entity
│   │   │   ├── OrderItem.java               # Itemized order details entity
│   │   │   └── Product.java                 # Perfume product entity
│   │   ├── repository/
│   │   │   ├── OrderRepository.java         # Database access for orders
│   │   │   └── ProductRepository.java       # Database access for products
│   │   └── service/
│   │       └── ProductService.java          # Business logic for products
│   └── src/main/resources/
│       └── application.properties           # PostgreSQL database configuration
├── frontend/
│   ├── public/                      # Static assets and product images (e.g., 9pm1.jpeg)
│   ├── .env                         # Environment configuration (VITE_API_URL)
│   ├── src/
│   │   ├── admin/                   # Admin dashboard views and asset directory
│   │   ├── components/              # Reusable UI components (Navbar, Footer, ProductCard)
│   │   ├── pages/                   # Dedicated page components (Shop, Cart, Checkout, AdminAddProduct)
│   │   ├── services/
│   │   │   ├── api.js               # Axios setup with JWT interceptors
│   │   │   └── authService.js       # Authentication service handler
│   │   ├── App.jsx                  # Main routing component
│   │   └── main.jsx                 # Application entry point
│   ├── package.json
│   └── vite.config.js
└── README.md

```

---

## 🚀 Quick Setup & Execution Guide

### Step 1: Create & Configure PostgreSQL Database

Open your PostgreSQL terminal or pgAdmin tool and run:

```sql
CREATE DATABASE faysan_db;

```

Update your `backend/src/main/resources/application.properties` file with your local database username and password.

### Step 2: Run Spring Boot Backend

Open your terminal inside the backend folder and run:

```bash
cd backend
./mvnw spring-boot:run

```

*The server will start successfully on **http://localhost:8080**.*

### Step 3: Configure Frontend Environment Variables (`.env`)

Create a `.env` file at the root of your frontend folder (right beside `package.json` and `vite.config.js`) and add your backend connection string:

```env
VITE_API_URL=http://localhost:8080/api

```

### Step 4: Run Vite + React Frontend

Open a new terminal window inside the frontend folder and run:

```bash
cd frontend
npm install
npm run dev

```

*Access the interactive web platform in your browser at **http://localhost:5173**.*

---

## 🔑 Pre-Seeded Demo Accounts

### 👑 System Administrator (Password: `admin123`)

* **Username:** `admin` | **Email:** `admin@faysancollection.so` — **ROLE_ADMIN:** Full inventory control, administrative dashboard access, product catalog management, and order fulfillment tracking.

### 🛍️ Customer Account (Password: `customer123`)

* **Username:** `faysan_user` | **Email:** `customer@faysancollection.so` — **ROLE_CUSTOMER:** Storefront product browsing, shopping cart management, secure checkout, and personal order history tracking.

---

## 📡 REST API Summary

### 🔐 Authentication APIs

* `POST /api/auth/register` — Register a new customer account
* `POST /api/auth/login` — Authenticate user credentials and return a secure JWT token

### 🛍️ Product APIs

* `GET /api/products` — Fetch all available perfumes in the store inventory
* `GET /api/products/{id}` — Fetch specific details for a single fragrance item
* `POST /api/products` — Add a new perfume to the catalog (Admin)
* `PUT /api/products/{id}` — Update existing product details (Admin)
* `DELETE /api/products/{id}` — Remove discontinued items from inventory (Admin)

### 📦 Order APIs

* `GET /api/orders` — Fetch all customer orders for tracking (Admin/User views)
* `POST /api/orders` — Enable customers to place a new store order during checkout
* `PUT /api/orders/{id}` — Update an existing order status (e.g., changing fulfillment status from `PENDING` to `COMPLETED`)
* `DELETE /api/orders/{id}` — Delete or cancel an order record

---

## 📜 Project Ownership & Credits

* **Project Leader & Author:** Rowda Abdulkani
* **Development Team:** Team Faysan Collection