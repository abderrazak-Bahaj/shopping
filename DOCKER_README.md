# Laravel Shopping App - Docker Setup

This document provides instructions for running the Laravel Shopping Application using Docker.

## Prerequisites

- Docker
- Docker Compose
- Git

## Quick Start

### Option 1: Using Makefile (Recommended)

1. **Clone the repository and navigate to the project directory**
   ```bash
   cd shopping
   ```

2. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

3. **Update your .env file with the following values:**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=db_laravel
   DB_USERNAME=root
   DB_PASSWORD=password

   MAIL_MAILER=smtp
   MAIL_HOST=mailpit
   MAIL_PORT=1025
   MAIL_USERNAME=null
   MAIL_PASSWORD=null
   MAIL_ENCRYPTION=null
   MAIL_FROM_ADDRESS="hello@example.com"
   MAIL_FROM_NAME="${APP_NAME}"

   APP_NAME=Laravel
   APP_ENV=local
   APP_KEY=base64:JKrO89Ijwxg4uv37pfyRovCMYdqZNcyKP+RmXilk9Ss=
   APP_DEBUG=true
   APP_URL=http://localhost:8000
   ```

4. **Run complete setup (one command)**
   ```bash
   make setup
   ```

### Option 2: Manual Setup

1. **Clone the repository and navigate to the project directory**
   ```bash
   cd shopping
   ```

2. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

3. **Update your .env file with the following values:**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=db_laravel
   DB_USERNAME=root
   DB_PASSWORD=password

   MAIL_MAILER=smtp
   MAIL_HOST=mailpit
   MAIL_PORT=1025
   MAIL_USERNAME=null
   MAIL_PASSWORD=null
   MAIL_ENCRYPTION=null
   MAIL_FROM_ADDRESS="hello@example.com"
   MAIL_FROM_NAME="${APP_NAME}"

   APP_NAME=Laravel
   APP_ENV=local
   APP_KEY=base64:JKrO89Ijwxg4uv37pfyRovCMYdqZNcyKP+RmXilk9Ss=
   APP_DEBUG=true
   APP_URL=http://localhost:8000
   ```

4. **Build and start the containers**
   ```bash
   docker-compose up -d --build
   ```

5. **Install PHP dependencies**
   ```bash
   docker-compose exec app composer install
   ```

6. **Generate application key (if not already set)**
   ```bash
   docker-compose exec app php artisan key:generate
   ```

7. **Run database migrations**
   ```bash
   docker-compose exec app php artisan migrate
   ```

8. **Seed the database (optional)**
   ```bash
   docker-compose exec app php artisan db:seed
   ```

9. **Install and compile frontend assets**
   ```bash
   docker-compose exec node npm install
   docker-compose exec node npm run dev
   ```

## Services

The Docker setup includes the following services:

- **App** (Laravel): `http://localhost:8000`
- **MySQL**: `localhost:3306`
- **Redis**: `localhost:6379`
- **Mailpit** (Email testing): `http://localhost:8025`
- **Node.js** (Asset compilation): Development only

## Useful Commands

### Using Makefile (Recommended)

```bash
# Show all available commands
make help

# Quick setup
make setup

# Development workflow
make dev

# Container management
make up          # Start containers
make down        # Stop containers
make restart     # Restart containers
make rebuild     # Rebuild containers
make logs        # View logs
make ps          # Show running containers

# Laravel commands
make install     # Install PHP dependencies
make migrate     # Run migrations
make seed        # Seed database
make cache       # Clear all caches
make optimize    # Optimize for production
make tinker      # Start Tinker

# Frontend commands
make npm-install # Install Node.js dependencies
make npm-dev     # Build for development
make npm-watch   # Watch for changes
make npm-prod    # Build for production

# Database commands
make db-backup   # Backup database
make db-restore  # Restore database
make db-shell    # Access MySQL shell

# Development tools
make shell       # Access Laravel container
make test        # Run tests
make status      # Show application status
make info        # Show application info
```

### Manual Docker Commands

#### Container Management
```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f app

# Rebuild containers
docker-compose up -d --build

# Remove all containers and volumes
docker-compose down -v
```

#### Laravel Commands
```bash
# Run artisan commands
docker-compose exec app php artisan migrate
docker-compose exec app php artisan make:controller ExampleController
docker-compose exec app php artisan tinker

# Clear caches
docker-compose exec app php artisan cache:clear
docker-compose exec app php artisan config:clear
docker-compose exec app php artisan route:clear
docker-compose exec app php artisan view:clear
```

#### Database Commands
```bash
# Access MySQL
docker-compose exec mysql mysql -u root -p db_laravel

# Backup database
docker-compose exec mysql mysqldump -u root -p db_laravel > backup.sql

# Restore database
docker-compose exec -T mysql mysql -u root -p db_laravel < backup.sql
```

#### Frontend Development
```bash
# Install dependencies
docker-compose exec node npm install

# Development build
docker-compose exec node npm run dev

# Watch for changes
docker-compose exec node npm run watch

# Production build
docker-compose exec node npm run prod
```

## Development Workflow

### Using Makefile (Recommended)

1. **Start development environment:**
   ```bash
   make dev
   ```

2. **Make changes to your code** (files are mounted as volumes)

3. **For PHP changes:** No restart needed, changes are immediate

4. **For frontend changes:** Assets are automatically watched with `make dev`

5. **For database changes:** Run `make migrate`

### Manual Workflow

1. **Start the environment:**
   ```bash
   docker-compose up -d
   ```

2. **Make changes to your code** (files are mounted as volumes)

3. **For PHP changes:** No restart needed, changes are immediate

4. **For frontend changes:** Run `docker-compose exec node npm run dev` or `npm run watch`

5. **For database changes:** Run `docker-compose exec app php artisan migrate`

## Troubleshooting

### Common Issues

1. **Port conflicts:**
   - Change ports in `docker-compose.yml` if 8000, 3306, 6379, or 8025 are in use

2. **Permission issues:**
   ```bash
   docker-compose exec app chown -R www-data:www-data storage bootstrap/cache
   ```

3. **Database connection issues:**
   - Ensure MySQL container is running: `docker-compose ps`
   - Check logs: `docker-compose logs mysql`

4. **Asset compilation issues:**
   - Clear node_modules: `docker-compose exec node rm -rf node_modules`
   - Reinstall: `docker-compose exec node npm install`

### Logs
```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs app
docker-compose logs mysql
docker-compose logs redis
```

## Production Deployment

For production deployment:

1. Update `.env` with production values
2. Set `APP_ENV=production` and `APP_DEBUG=false`
3. Use production database credentials
4. Configure proper mail settings
5. Set up SSL certificates
6. Use a reverse proxy (nginx) in front of Apache

## Environment Variables

The following environment variables are used from your `.env` file:

- Database: `DB_*`
- Mail: `MAIL_*`
- Application: `APP_*`
- Redis: `REDIS_*`

## Security Notes

- Change default passwords in production
- Use strong database passwords
- Enable SSL in production
- Set proper file permissions
- Keep containers updated

## Performance Optimization

- Enable OPcache (already configured)
- Use Redis for caching
- Optimize database queries
- Use CDN for static assets
- Enable compression (already configured in Apache) 