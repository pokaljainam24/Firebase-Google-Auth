# 🔐 Firebase Auth App – Email/Password + Google Login

A modern authentication app built with **React** and **Firebase**, supporting both **Email/Password** signup/login and **Google OAuth**. Styled with custom CSS for a clean, professional UI.

---

## ✨ Features

- ✅ Email & Password Authentication
- 🔒 Secure Firebase Auth integration
- 🔁 Google OAuth Login/Signup
- 🔥 Firebase Firestore integration
- 💻 Beautiful Login & Signup UI
- 🌐 React Router Navigation

---

## 🛠️ Tech Stack

- **React** (Vite)
- **Firebase Authentication**
- **Firestore (Database)**
- **React Router DOM**
- **Custom CSS**

---

## 📁 Folder Structure

```
FIREBASE-GOOGLE-AUTH/
├── public/
├── src/
│ ├── app/
│ ├── assets/
│ ├── components/
│ │ ├── Login.jsx
│ │ └── Signup.jsx
│ ├── firebase/
│ │ └── config.js
│ ├── App.css
│ ├── App.jsx
│ ├── Login.css
│ └── main.jsx
├── index.html
├── vite.config.js
├── .gitignore
├── package.json
└── README.md
```


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/FIREBASE-GOOGLE-AUTH.git
cd FIREBASE-GOOGLE-AUTH
```

### 3. Configure Firebase

Go to Firebase Console

Create a new project

Enable Authentication:

Email/Password

Google Sign-In

Create a Firestore database

Copy the config into: src/firebase/config.js

```
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
```

## 🤝 Contribute

---

### 🔁 Next Steps

- ✅ Replace `pokaljainam24` with your GitHub username
- ✅ Add preview screenshots in `src/assets/` as `signup-preview.png` and `login-preview.png`
- ✅ Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/FIREBASE-GOOGLE-AUTH.git
git push -u origin main
```

## 🧑‍💻 Author
Jainam Pokal
 - 📧 pokaljainam24
 - 🌐 GitHub: @your-username
