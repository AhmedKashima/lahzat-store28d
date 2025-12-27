# 🕰️ Lahazat Store (لحظات) | Luxury E-Commerce Platform

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20Django%20%7C%20PostgreSQL-blue)
![Style](https://img.shields.io/badge/Style-Luxury%20%26%20Cinematic-gold)

> **"Where details turn into taste... and gifts into unforgettable memories."**

**Lahazat (Moments)** is a full-stack, high-performance e-commerce application designed for luxury goods (Watches, Perfumes, Jewelry). Unlike traditional stores, it focuses on **Direct-to-WhatsApp** commerce, **Cinematic UX**, and a powerful **Role-Based Admin Dashboard**.

---

## 📸 Visual Showcase

| **Cinematic Hero Section** | **Luxury Product Grid** |
|:--------------------------:|:-----------------------:|
| *[Place Hero Screenshot Here]* | *[Place Grid Screenshot Here]* |

| **Admin Dashboard (Dark Mode)** | **Mobile Responsiveness** |
|:-------------------------------:|:-------------------------:|
| *[Place Admin Screenshot Here]* | *[Place Mobile Screenshot Here]* |

---

## 🚀 Key Features

### 💎 User Experience (Frontend)
*   **Cinematic "Ken Burns" Hero:** A slow-motion, auto-zooming background slider representing 7 luxury categories.
*   **Direct WhatsApp Checkout:** No complex carts. Users click "Buy on WhatsApp" to send a pre-filled message with the product name and price directly to the admin.
*   **Dynamic Filtering:** Instant switching between categories (Men's Watches, Perfumes, Gifts, etc.) without page reloads.
*   **Smart Interactions:**
    *   **Quick View Modal:** Browse details without leaving the page.
    *   **Favorites System:** Save items to LocalStorage (works without login).
    *   **Discount System:** Auto-calculates percentage off (e.g., "30% OFF") and displays strikethrough prices.
*   **Social Proof:** Integrated Customer Review Slider.

### 🛠️ Administrative Control (Backend)
*   **Role-Based Authentication:** Secure JWT Login.
    *   **Users:** Can view items, rate, and favorite.
    *   **Admins:** Access a dedicated **Gold & Dark Dashboard**.
*   **Full CRUD Dashboard:**
    *   Add/Edit/Delete Products with image previews.
    *   Manage "Best Sellers" via a simple toggle.
    *   Set Old Price vs. New Price (Auto-discount logic).
*   **Cloud Storage:** All images are securely hosted on **Cloudinary**.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Frontend** | **Next.js 14 (App Router)**, React, Tailwind CSS |
| **Backend** | **Python Django**, Django REST Framework (DRF) |
| **Database** | **PostgreSQL** (Production) / SQLite (Dev) |
| **Authentication** | **SimpleJWT** (Secure Token-Based Auth) |
| **Media Storage** | **Cloudinary CDN** |
| **Icons & UI** | HeroIcons, Swiper.js (Sliders), Google Fonts (Cairo & Amiri) |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone git@github.com:AhmedKashima/lahzat-store28d.git
cd watchstore
2. Backend Setup (Django)

cd backend

# Create Virtual Environment
python -m venv venv
source venv/bin/activate  # (On Windows: venv\Scripts\activate)

# Install Dependencies
pip install -r requirements.txt

# Run Migrations
python manage.py makemigrations
python manage.py migrate

# Create Admin User (Superuser)
python manage.py createsuperuser

# Start Server
python manage.py runserver

The API will run at http://127.0.0.1:8000

3. Frontend Setup (Next.js)

Open a new terminal.

cd frontend

# Install Dependencies
npm install

# Setup Environment Variables
# Create a .env.local file and add:
# NEXT_PUBLIC_API_URL=http://127.0.0.1:8000

# Start Server
npm run dev

The Website will run at http://localhost:3000

📂 Project Structure
code

lahzat-store28d/
├── backend/                 # Django API
│   ├── backend/             # Settings (CORS, Apps)
│   ├── store/               # Main App (Models, Views, URLs)
│   └── manage.py
├── frontend/                # Next.js Application
│   ├── public/              # Static Assets (Logo, Icons)
│   ├── src/
│   │   ├── app/             # Pages (Home, Admin, About)
│   │   ├── components/      # Reusable UI (ProductCard, Navbar)
│   └── tailwind.config.ts
└── README.md
🔐 Security Highlights

Protected Routes: Non-admins cannot access /admin pages (redirects automatically).

Environment Variables: API Keys and Secrets are never hardcoded.

CORS Configuration: Backend only accepts requests from trusted domains.

👤 Author

Ahmed Kashima

Full Stack Developer

Specialized in High-End E-commerce Solutions

© 2025 Lahazat Store. All Rights Reserved.
