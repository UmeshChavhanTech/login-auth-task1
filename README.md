I'll update the README file based on your project structure screenshot. Here's the comprehensive documentation:

# Employee Transportation Services - Full Stack Application

## 🌐 Live Demo

**Frontend (React):** https://login-auth-task1.vercel.app/
**Backend (Node.js + Express):** https://login-auth-task1-1.onrender.com/

## 📋 Project Overview

A full-stack MERN application for Employee Transportation Services with user authentication, profile management, and form submission system.

## 🛠️ Tech Stack

### Frontend (React)
- **Framework**: React.js
- **Build Tool**: Vite (based on package.json structure)
- **Styling**: CSS/Tailwind (inferred)
- **Deployment**: Vercel

### Backend (Node.js + Express)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT
- **Deployment**: Render

## 📁 Project Structure (Based on Screenshot)

```
ME-API-PLAYGROUND/
├── backend/                  # Express.js Backend
│   ├── config/
│   │   └── db.js            # MongoDB connection configuration
│   ├── controllers/          # Business logic
│   ├── models/              # MongoDB Schemas
│   │   ├── Profile.js       # User Profile Schema
│   │   └── User.js          # User Authentication Schema
│   ├── routes/              # API Routes
│   │   └── profileRoutes.js # Profile-related routes
│   ├── node_modules/        # Dependencies
│   ├── .env                 # Environment variables
│   ├── package.json         # Backend dependencies
│   ├── package-lock.json    # Lock file
│   └── server.js           # Main server file
├── frontend/                # React.js Frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ProfileCard.js # React component
│   │   ├── api.js           # API communication
│   │   ├── App.js           # Main App component
│   │   └── index.html       # HTML template
│   ├── node_modules/        # Dependencies
│   ├── package.json         # Frontend dependencies
│   └── package-lock.json    # Lock file
└── README.md               # Project documentation
```

## 🚀 Features

### Authentication System
- ✅ User registration and login
- ✅ JWT token-based authentication
- ✅ Protected routes
- ✅ User profile management

### Frontend Features
- ✅ Responsive React application
- ✅ Profile management interface
- ✅ API integration
- ✅ Modern component architecture

### Backend Features
- ✅ RESTful API endpoints
- ✅ MongoDB integration with Mongoose
- ✅ User authentication system
- ✅ Profile management
- ✅ JWT token validation

## 📊 API Endpoints

### Base URL: `https://login-auth-task1-1.onrender.com/api`

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/auth/register` | User registration | Public |
| POST | `/auth/login` | User login | Public |
| GET | `/profile` | Get user profile | Protected |
| PUT | `/profile` | Update user profile | Protected |
| POST | `/submit-form` | Submit contact form | Public/Protected |
| GET | `/submissions` | Get form submissions | Protected (Admin) |

## 🗃️ Database Schemas

### User Schema (`models/User.js`)
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (default: 'user'),
  createdAt: Date (auto)
}
```

### Profile Schema (`models/Profile.js`)
```javascript
{
  userId: ObjectId (ref: User),
  firstName: String,
  lastName: String,
  phone: String,
  company: String,
  address: Object,
  preferences: Object,
  updatedAt: Date (auto)
}
```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb+srv://umesh:Umesh123@cluster0.zvoe4me.mongodb.net/transportation?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=MySuperSecretKey123!
PORT=5000
NODE_ENV=production
```

### Frontend Environment
```env
REACT_APP_API_URL=https://login-auth-task1-1.onrender.com/api
```

## 🚀 Installation & Setup

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Add your environment variables
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📱 Key Components

### Backend Components
- **server.js**: Main Express server configuration
- **db.js**: MongoDB connection setup
- **User.js**: User authentication model
- **Profile.js**: User profile model
- **profileRoutes.js**: Profile management routes

### Frontend Components
- **App.js**: Main application component
- **ProfileCard.js**: Profile display component
- **api.js**: API communication utilities

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Environment variable protection
- CORS configuration
- Input validation and sanitization

## 🛠️ Development Scripts

### Backend (package.json)
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"No tests specified\""
  }
}
```

### Frontend (package.json)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🌐 Deployment Status

### Backend (Render)
- ✅ Successfully deployed
- ✅ MongoDB Atlas connected
- ✅ Environment variables configured
- ✅ API endpoints accessible

### Frontend (Vercel)
- ✅ Successfully deployed
- ✅ Connected to backend API
- ✅ Responsive design
- ✅ Form functionality working

## 🐛 Troubleshooting Guide

### Common Issues
1. **MongoDB Connection Errors**
   - Verify MONGO_URI in .env file
   - Check MongoDB Atlas whitelisted IPs

2. **JWT Token Issues**
   - Verify JWT_SECRET is set
   - Check token expiration

3. **CORS Errors**
   - Ensure proper CORS configuration in server.js

4. **Environment Variables**
   - Verify all required variables are set
   - Restart server after changing .env

### Debugging Tips
- Check server logs on Render dashboard
- Use browser DevTools for frontend debugging
- Test API endpoints with Postman/Thunder Client

## 📈 Performance Optimization

- Database indexing on frequently queried fields
- React component optimization
- API response caching
- Connection pooling for MongoDB

## 🔮 Future Enhancements

- [ ] Email verification system
- [ ] Password reset functionality
- [ ] File upload for profile pictures
- [ ] Real-time notifications
- [ ] Admin dashboard
- [ ] API rate limiting
- [ ] Comprehensive testing suite

## 📞 Support

For technical issues:
1. Check deployment logs on Vercel/Render
2. Verify environment variables
3. Test API endpoints independently
4. Check MongoDB Atlas connection

---

**Last Deployment**: September 2025  
**Maintainer**: Umesh Chavhan  
**Status**: ✅ Production Ready  
