# 🛒 Amazon Clone

> A modern, full-stack Amazon-inspired e-commerce application built with **Next.js**, featuring secure authentication, Stripe payment integration, wishlist management, shopping cart functionality, and a fully responsive user interface powered by Tailwind CSS.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-Framework-black?logo=next.js">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react">
  <img src="https://img.shields.io/badge/Tailwind_CSS-Styling-38BDF8?logo=tailwind-css">
  <img src="https://img.shields.io/badge/Redux-State_Management-764ABC?logo=redux">
  <img src="https://img.shields.io/badge/NextAuth-Authentication-000000">
  <img src="https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe">
  <img src="https://img.shields.io/badge/Status-Completed-success">
</p>

---

# 📖 Overview

Amazon Clone is a feature-rich e-commerce web application inspired by Amazon's shopping experience. It demonstrates modern web development practices by integrating secure authentication, global state management, payment processing, and responsive UI design into a seamless shopping platform.

The project emphasizes scalability, performance, and user experience while showcasing full-stack development concepts using the Next.js ecosystem.

---

# ✨ Features

- 🔐 Secure user authentication using **NextAuth**
- 🔑 Google Sign-In integration
- 🛍️ Browse products
- ❤️ Wishlist management
- 🛒 Shopping cart functionality
- 💳 Secure online payments using **Stripe**
- 📦 Order summary and checkout
- ⚡ Global state management using **Redux Toolkit**
- 📱 Fully responsive design
- 🎨 Modern UI built with **Tailwind CSS**
- 🚀 Optimized performance with **Next.js**

---

# 🌐 Live Demo

**Live Website**

https://your-live-demo-link.com

---

# 🏗 Application Architecture

```text
                    User
                      │
                      ▼
               Next.js Frontend
                      │
         ┌────────────┼─────────────┐
         ▼            ▼             ▼
   NextAuth      Redux Store     Stripe
(Authentication) (State Mgmt.)  (Payments)
         │            │
         └────────────┼─────────────┘
                      ▼
               User Interface
```

---

# 🛠 Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS

### Authentication

- NextAuth.js
- Google OAuth

### State Management

- Redux Toolkit

### Payments

- Stripe

### Language

- JavaScript / TypeScript *(update according to your project)*

### Package Manager

- npm

---

# 📂 Project Structure

```text
amazon-clone/

├── components/
├── pages/
├── public/
├── redux/
├── styles/
├── utils/
├── pages/api/
├── .env.local
├── package.json
├── README.md
└── ...
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/hafidars/Amazon-Clone-Next.js-.git

cd Amazon-Clone-Next.js-
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a file named

```text
.env.local
```

Add your credentials

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

---

## Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🧩 Core Functionalities

## Authentication

- Google Sign-In
- Secure Login
- Secure Logout
- Session Management using NextAuth

---

## Shopping

- Browse Products
- Product Details
- Add to Cart
- Remove from Cart
- Quantity Management

---

## Wishlist

- Save products
- Remove products
- Persistent wishlist

---

## Payments

- Stripe Checkout
- Secure Payment Processing
- Order Confirmation

---

## Responsive UI

Designed to work seamlessly on

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🎯 Key Learning Outcomes

Through this project, I gained practical experience in:

- Full Stack Web Development
- Authentication using OAuth
- Secure Payment Gateway Integration
- Global State Management
- Component-Based Architecture
- Responsive Web Design
- API Integration
- Modern React Development
- Next.js Routing
- Performance Optimization

---

# 💡 Challenges Solved

- Managing global application state using Redux Toolkit.
- Implementing secure authentication with Google OAuth.
- Integrating Stripe payment workflows.
- Maintaining a responsive layout across different screen sizes.
- Synchronizing cart and wishlist data efficiently.

---

# 🔮 Future Enhancements

- Product Search
- Product Filtering
- Product Categories
- User Profiles
- Order History
- Product Reviews
- Admin Dashboard
- Inventory Management
- Dark Mode
- Email Notifications

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve the project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 👨‍💻 Author

**Hafid Rehman**

Bachelor of Engineering in Computer Science & Engineering

- 📧 Email: hafidars8786@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/hafidar
- 💻 GitHub: https://github.com/hafidars

---

# 📄 License

This project is intended for educational purposes.

Feel free to fork, modify, and learn from it.

⭐ If you found this project useful, consider giving it a star!