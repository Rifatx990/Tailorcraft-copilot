# Folder structure for backend project

/backend
  /controllers
    - userController.js
  /routes
    - authRoutes.js
  /middlewares
    # Optional middlewares (e.g., for validating requests)
  /models
  /services
  /config
  seed.sql

# Notes:
- `seed.sql`: Optional SQL script for database seeding.
- All sensitive information should be stored in environment variables.