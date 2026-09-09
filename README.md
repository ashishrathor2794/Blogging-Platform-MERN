# Skillfied Mentor - Blogging Platform
MERN full-stack blogging application.

Features:
- Register/login with JWT HTTP-only cookie
- CRUD blog posts (owner protected)
- Search and pagination
- Comments (create/delete protected)
- React responsive frontend
- Node/Express REST API
- MongoDB/Mongoose

Run backend:
cd Backend
npm install
copy .env.example .env
npm run dev

Run frontend:
cd frontend
npm install
npm run dev

.env:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogging_platform
JWT_SECRET=change_this_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
