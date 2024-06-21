# Social Networking API

This API allows you to perform CRUD operations on users (create, read, update, delete), potentially suitable for building a social networking application.

## Technologies
- **Express:** a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
- **PostgreSQL:** a free and open-source relational database management system emphasizing extensibility and SQL compliance
- **SQL:** domain-specific language used to manage data, especially in a relational database management system
- **Jest:** a JavaScript testing framework designed to ensure correctness of any JavaScript codebase
- **Node-pg-migrate:** Node.js database migration management built exclusively for postgres

## Getting Started

1. Clone the repository locally.
2. Install all dependencies:
`npm install`
3. Fill in your `.env` file based on the example:
```javascript
DB_HOST=localhost
DB_PORT=your_port
DB_NAME=name_of_your_database
DB_USER=name_of_user
DB_PASSWORD=your_password

APP_PORT=your_app_port
```
4. Run database migration:
`DATABASE_URL=postgres://USERNAME:PASSWORD@localhost:PORT/DATABASE_NAME npm run migrate up`
5. Start the project:
`npm start`

