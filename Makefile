# Laravel Shopping App - Makefile
# Usage: make <command>

# Variables
COMPOSE_FILE = docker-compose.yml
COMPOSE_OVERRIDE = docker-compose.override.yml
COMPOSE_PROD = docker-compose.prod.yml

# Colors for output
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[1;33m
BLUE = \033[0;34m
NC = \033[0m # No Color

# Default target
.DEFAULT_GOAL := help

# Help target
help: ## Show this help message
	@echo "$(BLUE)Laravel Shopping App - Available Commands:$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(NC) %s\n", $$1, $$2}'
	@echo ""

# =============================================================================
# DOCKER COMMANDS
# =============================================================================

up: ## Start all containers in background
	@echo "$(YELLOW)Starting Docker containers...$(NC)"
	docker-compose -f $(COMPOSE_FILE) up -d

down: ## Stop and remove all containers
	@echo "$(YELLOW)Stopping Docker containers...$(NC)"
	docker-compose -f $(COMPOSE_FILE) down

restart: ## Restart all containers
	@echo "$(YELLOW)Restarting Docker containers...$(NC)"
	docker-compose -f $(COMPOSE_FILE) restart

rebuild: ## Rebuild and start containers
	@echo "$(YELLOW)Rebuilding Docker containers...$(NC)"
	docker-compose -f $(COMPOSE_FILE) up -d --build

logs: ## Show logs from all containers
	docker-compose -f $(COMPOSE_FILE) logs -f

logs-app: ## Show logs from Laravel app
	docker-compose -f $(COMPOSE_FILE) logs -f app

logs-mysql: ## Show logs from MySQL
	docker-compose -f $(COMPOSE_FILE) logs -f mysql

logs-redis: ## Show logs from Redis
	docker-compose -f $(COMPOSE_FILE) logs -f redis

ps: ## Show running containers
	docker-compose -f $(COMPOSE_FILE) ps

clean: ## Remove all containers, networks, and volumes
	@echo "$(RED)Removing all containers, networks, and volumes...$(NC)"
	docker-compose -f $(COMPOSE_FILE) down -v --remove-orphans
	docker system prune -f

# =============================================================================
# LARAVEL COMMANDS
# =============================================================================

install: ## Install PHP dependencies
	@echo "$(YELLOW)Installing PHP dependencies...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app composer install

install-prod: ## Install PHP dependencies (production)
	@echo "$(YELLOW)Installing PHP dependencies for production...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app composer install --no-dev --optimize-autoloader

update: ## Update PHP dependencies
	@echo "$(YELLOW)Updating PHP dependencies...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app composer update

migrate: ## Run database migrations
	@echo "$(YELLOW)Running database migrations...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan migrate

storage-link: ## Run database migrations
	@echo "$(YELLOW)Running storage link...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan storage:link

passport: ## Run database migrations
	@echo "$(YELLOW)Running passport...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan passport:client --personal
	docker-compose -f $(COMPOSE_FILE) exec app php artisan passport:keys --force

migrate-fresh: ## Fresh migration with seeding
	@echo "$(RED)Fresh migration with seeding...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan migrate:fresh --seed

migrate-rollback: ## Rollback last migration
	@echo "$(YELLOW)Rolling back last migration...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan migrate:rollback

seed: ## Seed the database
	@echo "$(YELLOW)Seeding the database...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan db:seed

key: ## Generate application key
	@echo "$(YELLOW)Generating application key...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan key:generate

cache: ## Clear all caches
	@echo "$(YELLOW)Clearing all caches...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan cache:clear
	docker-compose -f $(COMPOSE_FILE) exec app php artisan config:clear
	docker-compose -f $(COMPOSE_FILE) exec app php artisan route:clear
	docker-compose -f $(COMPOSE_FILE) exec app php artisan view:clear

optimize: ## Optimize for production
	@echo "$(YELLOW)Optimizing for production...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan config:cache
	docker-compose -f $(COMPOSE_FILE) exec app php artisan route:cache
	docker-compose -f $(COMPOSE_FILE) exec app php artisan view:cache

tinker: ## Start Laravel Tinker
	docker-compose -f $(COMPOSE_FILE) exec app php artisan tinker

# =============================================================================
# FRONTEND COMMANDS
# =============================================================================

npm-install: ## Install Node.js dependencies
	@echo "$(YELLOW)Installing Node.js dependencies...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec node npm install

npm-dev: ## Build assets for development
	@echo "$(YELLOW)Building assets for development...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec node npm run watch

npm-watch: ## Watch for asset changes
	@echo "$(YELLOW)Watching for asset changes...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec node npm run watch

npm-prod: ## Build assets for production
	@echo "$(YELLOW)Building assets for production...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec node npm run prod

# =============================================================================
# DATABASE COMMANDS
# =============================================================================

db-backup: ## Backup database
	@echo "$(YELLOW)Backing up database...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec mysql mysqldump -u root -p$(shell grep DB_PASSWORD .env | cut -d '=' -f2) $(shell grep DB_DATABASE .env | cut -d '=' -f2) > backup_$(shell date +%Y%m%d_%H%M%S).sql

db-restore: ## Restore database (usage: make db-restore FILE=backup.sql)
	@echo "$(YELLOW)Restoring database from $(FILE)...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec -T mysql mysql -u root -p$(shell grep DB_PASSWORD .env | cut -d '=' -f2) $(shell grep DB_DATABASE .env | cut -d '=' -f2) < $(FILE)

db-shell: ## Access MySQL shell
	docker-compose -f $(COMPOSE_FILE) exec mysql mysql -u root -p$(shell grep DB_PASSWORD .env | cut -d '=' -f2) $(shell grep DB_DATABASE .env | cut -d '=' -f2)

# =============================================================================
# DEVELOPMENT COMMANDS
# =============================================================================

shell: ## Access Laravel container shell
	docker-compose -f $(COMPOSE_FILE) exec app bash

shell-mysql: ## Access MySQL container shell
	docker-compose -f $(COMPOSE_FILE) exec mysql bash

shell-redis: ## Access Redis container shell
	docker-compose -f $(COMPOSE_FILE) exec redis sh

test: ## Run PHP tests
	@echo "$(YELLOW)Running PHP tests...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan test

test-coverage: ## Run tests with coverage
	@echo "$(YELLOW)Running tests with coverage...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan test --coverage

# =============================================================================
# SETUP COMMANDS
# =============================================================================

setup: ## Initial setup of the application
	@echo "$(BLUE)Setting up Laravel Shopping App...$(NC)"
	@make up
	@echo "$(YELLOW)Waiting for containers to be ready...$(NC)"
	@sleep 10
	@make install
	@make key
	@make migrate
	@make seed
	@make passport
	@make storage-link
	@make npm-install
	@make npm-dev
	@echo "$(GREEN)Setup complete! Access your app at http://localhost:8000$(NC)"

setup-prod: ## Setup for production
	@echo "$(BLUE)Setting up Laravel Shopping App for production...$(NC)"
	@make up
	@echo "$(YELLOW)Waiting for containers to be ready...$(NC)"
	@sleep 10
	@make install-prod
	@make key
	@make migrate
	@make passport
	@make storage-link
	@make optimize
	@make npm-install
	@make npm-prod
	@echo "$(GREEN)Production setup complete!$(NC)"

# =============================================================================
# UTILITY COMMANDS
# =============================================================================

status: ## Show application status
	@echo "$(BLUE)=== Application Status ===$(NC)"
	@make ps
	@echo ""
	@echo "$(BLUE)=== Container Health ===$(NC)"
	@docker-compose -f $(COMPOSE_FILE) ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"

info: ## Show application information
	@echo "$(BLUE)=== Laravel Shopping App Information ===$(NC)"
	@echo "App URL: http://localhost:8000"
	@echo "phpMyAdmin: http://localhost:8080"
	@echo "Mailpit: http://localhost:8025"
	@echo "MySQL: localhost:3306"
	@echo "Redis: localhost:6379"
	@echo ""
	@echo "$(BLUE)=== Environment ===$(NC)"
	@echo "APP_ENV: $(shell grep APP_ENV .env | cut -d '=' -f2)"
	@echo "APP_DEBUG: $(shell grep APP_DEBUG .env | cut -d '=' -f2)"
	@echo "DB_DATABASE: $(shell grep DB_DATABASE .env | cut -d '=' -f2)"

logs-all: ## Show logs from all services with timestamps
	docker-compose -f $(COMPOSE_FILE) logs -f --timestamps

# =============================================================================
# PRODUCTION COMMANDS
# =============================================================================

prod-up: ## Start production containers
	@echo "$(YELLOW)Starting production containers...$(NC)"
	docker-compose -f $(COMPOSE_PROD) up -d

prod-down: ## Stop production containers
	@echo "$(YELLOW)Stopping production containers...$(NC)"
	docker-compose -f $(COMPOSE_PROD) down

prod-logs: ## Show production logs
	docker-compose -f $(COMPOSE_PROD) logs -f

# =============================================================================
# MAINTENANCE COMMANDS
# =============================================================================

maintenance-on: ## Enable maintenance mode
	@echo "$(YELLOW)Enabling maintenance mode...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan down

maintenance-off: ## Disable maintenance mode
	@echo "$(YELLOW)Disabling maintenance mode...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app php artisan up

# =============================================================================
# SECURITY COMMANDS
# =============================================================================

permissions: ## Fix file permissions
	@echo "$(YELLOW)Fixing file permissions...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app chown -R www-data:www-data storage bootstrap/cache
	docker-compose -f $(COMPOSE_FILE) exec app chmod -R 775 storage bootstrap/cache

# =============================================================================
# MONITORING COMMANDS
# =============================================================================

monitor: ## Monitor container resources
	@echo "$(BLUE)=== Container Resource Usage ===$(NC)"
	@docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}"

health: ## Check container health
	@echo "$(BLUE)=== Container Health Check ===$(NC)"
	@docker-compose -f $(COMPOSE_FILE) ps --format "table {{.Name}}\t{{.Status}}"

# =============================================================================
# CLEANUP COMMANDS
# =============================================================================

clean-logs: ## Clean up log files
	@echo "$(YELLOW)Cleaning up log files...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app find storage/logs -name "*.log" -delete
	docker-compose -f $(COMPOSE_FILE) exec app find storage/framework/cache -name "*" -delete

clean-cache: ## Clean up cache files
	@echo "$(YELLOW)Cleaning up cache files...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec app rm -rf storage/framework/cache/*
	docker-compose -f $(COMPOSE_FILE) exec app rm -rf storage/framework/sessions/*
	docker-compose -f $(COMPOSE_FILE) exec app rm -rf storage/framework/views/*
	docker-compose -f $(COMPOSE_FILE) exec app rm -rf bootstrap/cache/*

# =============================================================================
# DEVELOPMENT WORKFLOW
# =============================================================================

dev: ## Start development environment
	@echo "$(BLUE)Starting development environment...$(NC)"
	@make up
	@make npm-watch

dev-reset: ## Reset development environment
	@echo "$(RED)Resetting development environment...$(NC)"
	@make down
	@make clean
	@make setup

# =============================================================================
# DEPLOYMENT COMMANDS
# =============================================================================

deploy: ## Deploy to production
	@echo "$(BLUE)Deploying to production...$(NC)"
	@make maintenance-on
	@make prod-up
	@make install-prod
	@make migrate
	@make optimize
	@make npm-prod
	@make maintenance-off
	@echo "$(GREEN)Deployment complete!$(NC)"

deploy-rollback: ## Rollback deployment
	@echo "$(RED)Rolling back deployment...$(NC)"
	@make maintenance-on
	@make prod-down
	@make prod-up
	@make maintenance-off
	@echo "$(GREEN)Rollback complete!$(NC)"

.PHONY: help up down restart rebuild logs logs-app logs-mysql logs-redis ps clean install install-prod update migrate migrate-fresh migrate-rollback seed key cache optimize tinker npm-install npm-dev npm-watch npm-prod db-backup db-restore db-shell shell shell-mysql shell-redis test test-coverage setup setup-prod status info logs-all prod-up prod-down prod-logs maintenance-on maintenance-off permissions monitor health clean-logs clean-cache dev dev-reset deploy deploy-rollback 