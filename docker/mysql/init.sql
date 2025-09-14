-- MySQL initialization script for Laravel Shopping App
-- Set proper character set and collation
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- Create database if not exists (this is handled by environment variables)
-- ALTER DATABASE db_laravel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Set timezone
SET time_zone = '+00:00';

-- Enable strict mode
SET sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO';

SET FOREIGN_KEY_CHECKS = 1; 