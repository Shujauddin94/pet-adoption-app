# Pet Adoption App

A full-stack pet adoption application built with **Strapi v5 backend** and **React + MUI frontend**.

## Repository Structure

``` pet-adoption-app/
 ├─ backend/ # Strapi backend
 └─ frontend/ # React + MUI frontend

markdown
Copy code

## Features

- List all pets
- Add new pets
- Edit existing pets
- Delete pets
- View pet details
- Responsive UI with Material-UI
- Works with Strapi v5 `documentId`

## Tech Stack

- **Backend:** Strapi v5 (Node.js)
- **Frontend:** React, Vite, Material-UI
- **HTTP Client:** Axios

## Setup Instructions

### 1. Backend

```bash
cd backend
npm install
npm run develop
Strapi backend runs at http://localhost:1337

Make sure Pets collection exists and Public role has find and findOne permissions

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
Frontend runs at http://localhost:5173

Connects to backend API at http://localhost:1337/api

### Usage

```bash
Open frontend in browser

View, add, edit, delete pets

Uses documentId for Strapi v5 endpoints