# Next.js + Strapi Fullstack Project

This is a fullstack boilerplate project using [Next.js](https://nextjs.org/) for the frontend and [Strapi](https://strapi.io/) as the backend CMS. Both apps are managed together with `concurrently` for smooth local development.

---

## 📁 Project Structure

```
nextjs-strapi-project/
├── frontend/   # Next.js app
├── backend/    # Strapi CMS
└── package.json  # Root-level with scripts and dev dependencies
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/dmayes77/nextjs-strapi-project.git
cd nextjs-strapi-project
```

### 2. Install Dependencies

```bash
npm install         # Installs root-level dev dependencies (e.g. concurrently)
cd frontend && npm install
cd ../backend && npm install
```

### 3. Start Both Frontend and Backend

From the root directory:

```bash
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:1337](http://localhost:1337)

> ⚠️ If port 3000 is taken, Next.js will automatically move to 3001.

---

## 🌐 Environment Variables

Make sure to configure the following in `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:1337
```

Use this in your frontend when making API calls to Strapi.

---

## 📦 Scripts

| Command           | Location    | Description                    |
| ----------------- | ----------- | ------------------------------ |
| `npm run dev`     | Root        | Runs both frontend and backend |
| `npm run dev`     | `frontend/` | Runs the Next.js frontend only |
| `npm run develop` | `backend/`  | Runs the Strapi backend only   |

---

## ⚙️ Tech Stack

- **Frontend:** Next.js 15 (Turbopack)
- **Backend:** Strapi 4 with SQLite
- **Dev Tooling:** npm + concurrently

---

## 📌 Notes

- You can replace SQLite with PostgreSQL for production use.
- A `.gitignore` is included to ignore `node_modules`, `.cache`, and `.env` files.
- Feel free to customize the project structure or scripts to fit your needs.

---

## 🛠 Author

Built by [David Mayes](https://github.com/dmayes77)
