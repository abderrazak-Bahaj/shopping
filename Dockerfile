FROM php:8.1-apache

# Install required PHP extensions
RUN docker-php-ext-install pdo_mysql
RUN apt-get update && apt-get install -y libzip-dev zip && docker-php-ext-install zip

# Enable Apache Rewrite Module
RUN a2enmod rewrite

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the code to the container
COPY . /var/www/html

# Set the working directory
WORKDIR /var/www/html

# Expose port 80 for Apache
EXPOSE 80

# Copy virtual host file
COPY docker/vhost.conf /etc/apache2/sites-available/000-default.conf

# Run migrations
RUN composer install && php artisan migrate

# Start Apache
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
