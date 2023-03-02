FROM php:8.1-apache
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libzip-dev \
    && docker-php-ext-install intl pdo_mysql zip \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug
COPY . /var/www/html
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache