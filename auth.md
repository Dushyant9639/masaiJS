# 🔐 Authentication vs 🛡️ Authorization

Understanding the difference between **Authentication** and **Authorization** is critical in web development and security.

---

## ✅ Authentication

**Definition:**  
Authentication is the process of verifying **who** a user is.

**Purpose:**  
To ensure the user is actually who they claim to be.

**How it works:**
- User enters credentials (email/username & password)
- System checks the credentials against stored data
- If valid, the user is authenticated (logged in)

**Example:**
> A user logs in with email and password.

**Key Characteristics:**
- Comes **before** authorization
- Deals with **identity verification**
- Usually involves login forms, tokens, OTPs, biometrics, etc.

---

## ✅ Authorization

**Definition:**  
Authorization determines **what** a user is allowed to do after authentication.

**Purpose:**  
To control access to resources or actions based on the user's role or permissions.

**How it works:**
- After authentication, system checks user’s role or permissions
- Grants or denies access to specific data, routes, or features

**Example:**
> An admin user can add/delete products, but a regular user can only view them.

**Key Characteristics:**
- Happens **after** authentication
- Deals with **permissions and access control**
- Based on user roles (e.g., admin, editor, viewer)

---

## 🔁 Key Differences

| Feature           | Authentication                      | Authorization                          |
|------------------|--------------------------------------|----------------------------------------|
| **What it does** | Verifies user identity               | Controls user access and permissions   |
| **Order**        | Comes first                          | Comes after authentication             |
| **Is it visible?** | Typically visible to the user (login form) | Often hidden (access denied messages) |
| **Example**      | Logging into an account              | Accessing admin dashboard              |

---

## 🧠 In Summary

- **Authentication = "Who are you?"**
- **Authorization = "What are you allowed to do?"**

Both are **essential** for application security but serve **very different purposes**.
