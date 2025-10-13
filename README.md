# ModernShop - React E-Commerce Application
A modern, responsive e-commerce web application built with React. Users can browse products, manage their shopping cart, and enjoy a smooth single-page application experience.
🔗 Live Demo: https://modernshop-react-demo.netlify.app/shop


## ✨ Features

Product Browsing - Fetches and displays products from FakeStore API with a clean grid layout
Shopping Cart Management - Add items to cart with custom quantity controls (increment/decrement/manual input)
Real-time Cart Updates - Cart badge in header shows total item count, updates instantly
Cart Page - View all cart items with ability to update quantities, remove items, and see order summary with calculated totals
Global State Management - Context API manages cart state across the entire application
Client-side Routing - React Router enables smooth navigation between Home, Shop, and Cart pages
Responsive Design - Fully responsive layout adapting to mobile, tablet, and desktop screens
Modern UI - Clean design with gradient hero section, feature cards, and intuitive controls

## 🛠️ Technologies Used

React - Component-based UI library
React Router DOM - Client-side routing for SPA navigation
Context API - Global state management for cart functionality
CSS Modules - Scoped styling to avoid conflicts
FakeStore API - Product data source
Lucide React - Modern icon library
Vite - Fast build tool and development server

## 📦 Installation & Setup
bash# Clone the repository
git clone https://github.com/BeTous8/shopping-cart.git

### Navigate to project directory
cd shopping-cart

### Install dependencies
npm install

### Start development server
npm run dev
The application will open at http://localhost:5173
🎯 How to Use

Browse Products - Visit the Shop page to see all available products
Add to Cart - Select quantity and click "Add to Cart" button
Manage Cart - Navigate to Cart page to review items, update quantities, or remove items
View Summary - See subtotal, shipping, tax, and total calculations in the Order Summary

## 📁 Project Structure
src/
├── components/
│   ├── Header/
│   ├── ProductCard/
│   └── CartItem/
├── pages/
│   ├── Home/
│   ├── Shop/
│   └── Cart/
├── context/
│   └── CartContext.jsx
├── App.jsx
└── main.jsx

## 🚀 Future Improvements

Wishlist Feature - Add ability to save favorite items with star/heart icon
Page Animations - Implement fade-in effects and smooth transitions like modern websites
Cart Persistence - Save cart data to localStorage so it persists after page refresh
Payment Integration - Connect "Proceed to Checkout" button to actual payment processing (Stripe/PayPal)
Product Search & Filter - Add search bar and category filters for easier product discovery
User Authentication - Login/signup functionality to save user data and order history
Product Reviews - Display and allow users to leave product ratings and reviews
Advanced Testing - Comprehensive test coverage using React Testing Library
Loading States - Better loading indicators while fetching data
Error Handling - Improved error messages and fallback UI for failed requests
Accessibility - Enhanced keyboard navigation and screen reader support

## 📝 What I Learned

Implementing React Router for single-page application navigation
Using Context API to manage global state without prop drilling
Fetching and displaying data from external APIs
Building reusable components with props
Creating responsive layouts with CSS Grid and Flexbox
Managing complex state logic (adding, updating, removing cart items)
Structuring a React project with modular components

### 👤 Author
Benjamin Tousifar
### 📄 License
This project is open source and available under the MIT License.
