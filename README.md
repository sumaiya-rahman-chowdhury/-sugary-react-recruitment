
# React application

### 🔐 Authentication System 

This project includes a full authentication system using the following stack:

* React for UI

* Axios for HTTP requests

* TanStack Query (@tanstack/react-query) for API state management

* React Router for navigation and route protection
* React Hook Form


### 🔐 Authentication Module

This app uses a modular structure to implement login and token handling.

#### 📁 File Overview

* **`api/auth.js`**
  Handles API requests for authentication:

  * `login()` — Authenticates user via `POST /AdminAccount/Login`
  * `refreshToken()` — Renews token via `POST /Account/RefreshToken`

* **`auth/AuthProvider.jsx`**
  Provides global authentication state using React Context:

  * Stores tokens and user info in `localStorage`
  * Exposes `loginUser()` and `logoutUser()` methods
  * Accessible via `useAuth()` hook

* **`pages/Login.jsx`**
  Renders the login form and manages authentication flow:

  * Uses TanStack Query’s `useMutation` to call the login API
  * Saves tokens on success and redirects to the dashboard

> This structure ensures a clean separation between API logic, global state, and UI, making the auth system easy to maintain and scale.

---



