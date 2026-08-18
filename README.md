# Store Management System

A full-stack store management application with **role-based access**: an **Admin
dashboard** for managing employees and products, and a **Cashier interface** for
creating orders, handling order items, and reviewing sales. It was originally
built and tested against a structured relational schema that models a real store
workflow (products, customers, employees, orders, order items, deliveries,
pickups, loyalty cards and more).

 **This repository is the public demo build.** To make the app easy to explore
 online (no server or database setup), the backend has been swapped for a small
 in-browser mock-data layer.

## Live Demo

** View the application here: **
https://store-system-psut.vercel.app/


## Features
- **Role-based dashboards** — separate Admin and Cashier experiences.
- **Admin dashboard** — add, edit, delete and search **employees**; manage
  **products** (name, price, color).
- **Cashier dashboard** — view recent orders, edit/delete, and search by customer.
- **Create order flow** — existing vs. new customer, pickup vs. delivery,
  payment method, and a dynamic order-items table with add/edit/remove.
- **Sales analytics** — summary stat cards (revenue, transactions, products sold,
  active customers) and a 7-day revenue chart.
- Clean, responsive UI built with **Bootstrap 5**.

## Tech Stack
**HTML · CSS · JavaScript · Bootstrap 5**


## Project structure
```
.
├─ index.html            # redirects to the landing (Cashier) dashboard
├─ html/                 # all UI pages
│  ├─ cashier_dashboard.html
│  ├─ admin_dashboard.html
│  ├─ add_order.html
│  ├─ add_product.html
│  └─ add_employee.html
├─ js/
│  └─ mock-store.js      # in-browser mock data + CRUD logic          
└─ README.md

## Notes
This project was built as a learning exercise to practice full-stack
fundamentals: relational data modelling, CRUD operations, role-based navigation
and a clean Bootstrap UI. All data in the public demo is fictional sample data.
