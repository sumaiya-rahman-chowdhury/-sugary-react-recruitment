
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

### 📊 Dashboard Module

Displays a paginated list of materials with infinite scroll behavior, only accessible when the user is authenticated.

#### 📁 File Overview

* **`api/fetchMaterials.js`**
  Encapsulates logic to fetch materials from the API using base64-encoded filters:

  * `fetchMaterials({ pageParam })` — Returns paginated data with `Materials`, `hasMore`, and `nextPage`.

* **`pages/DashboardMaterials.jsx`**
  Renders the list of materials and implements lazy loading using `@tanstack/react-query` and `react-intersection-observer`:

  * Uses `useInfiniteQuery()` to fetch data incrementally.
  * Uses `useInView()` to detect scroll and trigger `fetchNextPage()`.
  * Maps over paginated data to render the full list of materials.
  * Automatically loads more content as user scrolls.

#### ⚙️ Features

* If the user is **logged in**, the Dashboard is shown.
* The Dashboard fetches a **list of materials** with support for:

  * Pagination (20 items per page)
  * Lazy loading (via intersection observer)
* Smooth **infinite scroll** experience without manual page navigation.

> This setup decouples fetching logic from the UI and leverages modern React tooling (TanStack Query) for a clean, scalable data flow.

---





