#Gympass Style API

Backend API inspired by applications like **Gympass**, built with **Node.js** and focused on **software architecture**, **SOLID principles**, **Design Patterns**, and **automated testing**.

## Project Goals

- Apply **clean and scalable software architecture**
- Practice **Design Patterns**
- Implement **real business rules**
- Build the application **from scratch to production**
- Write automated tests **from the very beginning**
- Apply concepts such as **TDD**, **Dependency Inversion**, and **Clean Architecture**

---

## Functional Requirements

- It should be possible for users to **register**
- It should be possible for users to **authenticate**
- It should be possible to **retrieve the authenticated user profile**
- It should be possible to **get the number of check-ins performed by the user**
- It should be possible to **retrieve the user's check-in history**
- It should be possible to **search for nearby gyms**
- It should be possible to **search gyms by name**
- It should be possible to **check in at a gym**
- It should be possible to **validate a user's check-in**
- It should be possible to **register a gym**

---

##  Business Rules

- A user **cannot register with a duplicated email**
- A user **cannot perform more than one check-in per day**
- A user **can only check in if they are within 100 meters of the gym**
- A check-in **must be validated within 20 minutes after being created**
- A check-in **can only be validated by administrators**
- Gyms **can only be registered by administrators**

---

##  Non-Functional Requirements

- User passwords must be **encrypted**
- Application data must be persisted in **PostgreSQL**
- All data lists must be **paginated (20 items per page)**
- Users must be identified using **JWT (JSON Web Token)**
  
---

## Tech Stack

- Node.js
- TypeScript
- PostgreSQL
- JWT
- Jest
- Supertest
- Docker
- CI/CD

---

## Running the Project

```bash
npm install
npm run dev