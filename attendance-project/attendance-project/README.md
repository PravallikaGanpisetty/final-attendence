# Attendance Management System (MERN)

## Structure
- backend/ — Node.js + Express API
- frontend/ — React (Vite)
- docker-compose.yml — optional local multi-container setup

## Run locally
1. Start MongoDB (or use Docker compose)
2. Backend:
   - cd backend
   - npm install
   - copy .env.example to .env and set MONGO_URI
   - npm run dev
3. Frontend:
   - cd frontend
   - npm install
   - npm run dev

## Docker (optional)
- docker-compose up --build

