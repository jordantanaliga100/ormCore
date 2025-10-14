# 🧱 Inventory Management System (TypeORM + Express + PostgreSQL)

A modular and scalable inventory & POS system built using **TypeORM**, **Express**, and **PostgreSQL**, containerized with **Docker**.  
It demonstrates how to structure entities, relationships, and CRUD operations in a clean TypeORM project.

---

## ⚙️ Tech Stack

- **Node.js / Express** – Web framework
- **TypeScript** – Static typing
- **TypeORM** – ORM for database entities & relations
- **PostgreSQL** – Primary database
- **Docker + Docker Compose** – Containerized runtime
- **dotenv** – Environment variable management

---

## 🧩 Core Entities

| #   | Entity                    | Purpose                          | Key Relationships                                                          |
| --- | ------------------------- | -------------------------------- | -------------------------------------------------------------------------- |
| 1   | **User**                  | Handles authentication and roles | One-to-Many with `Sale`                                                    |
| 2   | **Supplier**              | Stores supplier details          | One-to-Many with `Product`                                                 |
| 3   | **Product**               | Core inventory item              | Many-to-One `Supplier`, One-to-Many `SaleItem`, One-to-Many `StockHistory` |
| 4   | **Sale**                  | Represents a transaction         | Many-to-One `User`, One-to-Many `SaleItem`                                 |
| 5   | **SaleItem**              | Line item within a sale          | Many-to-One `Sale` and `Product`                                           |
| 6   | **StockHistory**          | Logs stock movements             | Many-to-One `Product`                                                      |
| 7   | **Category** _(optional)_ | Groups products                  | One-to-Many `Product`                                                      |

---

## 🗃️ Entity Relationship Diagram (ERD)

```mermaid
erDiagram

    USER ||--o{ SALE : "records"
    SUPPLIER ||--o{ PRODUCT : "supplies"
    CATEGORY ||--o{ PRODUCT : "categorizes"
    PRODUCT ||--o{ SALEITEM : "appears in"
    PRODUCT ||--o{ STOCKHISTORY : "has history"
    SALE ||--o{ SALEITEM : "contains"

    USER {
        int id
        string username
        string password
        enum role
        date createdAt
        date updatedAt
    }

    SUPPLIER {
        int id
        string name
        string contactPerson
        string phone
        string address
    }

    PRODUCT {
        int id
        string name
        string sku
        decimal price
        int stock
        int reorderLevel
        int supplierId
        int categoryId
        date createdAt
        date updatedAt
    }

    SALE {
        int id
        string invoiceNumber
        date saleDate
        decimal totalAmount
        int userId
    }

    SALEITEM {
        int id
        int saleId
        int productId
        int quantity
        decimal price
        decimal subtotal
    }

    STOCKHISTORY {
        int id
        int productId
        int change
        string reason
        date createdAt
    }

    CATEGORY {
        int id
        string name
        string description
    }

```

| #   | Milestone                       | Status      | Notes                                             |
| --- | ------------------------------- | ----------- | ------------------------------------------------- |
| ✅  | **Project Initialization**      | Done        | Created base Express + TypeScript setup           |
| ✅  | **Docker Environment**          | Done        | Added Dockerfile + docker-compose.yml             |
| ✅  | **Environment Variables Setup** | Done        | `.env` + `dotenv` working                         |
| ✅  | **TypeORM Configuration**       | Done        | Connected to PostgreSQL via `AppDataSource`       |
| ✅  | **User Entity Created**         | Done        | Auto-generated DB table using `synchronize: true` |
| ⏳  | **Add More Entities**           | In Progress | Next: `Supplier`, `Product`, etc.                 |
| ⏳  | **Repository + Routes (User)**  | Planned     | Build CRUD endpoints for `User`                   |
| ⏳  | **Migrations Setup**            | Planned     | Switch from `synchronize: true` to migrations     |
| ⏳  | **Seeding + Data Fixtures**     | Planned     | Insert initial sample data                        |
| ⏳  | **CRUD API for Inventory**      | Planned     | Add endpoints for `Product`, `Sale`, etc.         |
| ⏳  | **Testing & CI/CD (Optional)**  | Planned     | Automate build + test pipeline                    |
