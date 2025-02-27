# Reverb Demo

This repository showcases a React application integrated with Laravel Reverb, running seamlessly using Herd on macOS.

## Introduction

The Reverb Demo project demonstrates how to set up and integrate a React frontend with a Laravel backend using the Reverb package. It leverages Herd for an efficient local development environment on macOS.

## Features

- **React Frontend**: A modern JavaScript library for building user interfaces.
- **Laravel Backend**: A robust PHP framework for web application development.
- **Reverb Integration**: Simplifies the connection between React and Laravel.
- **Herd Support**: Provides a fast and minimal setup for macOS users.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/): JavaScript runtime environment.
- [Composer](https://getcomposer.org/): Dependency manager for PHP.
- [Herd](https://herd.laravel.com): macOS PHP & Laravel development environment.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/joelbutcher/reverb-demo.git
   cd reverb-demo
   ```

2. **Install PHP Dependencies**

   ```bash
   composer install
   ```

3. **Install Frontend Dependencies**

  ```bash
  npm insall
  ```

4. **Setup Environment**

  ```bash
  cp .env.example .env
  ```

5. **Generate Application Key**

  ```bash
  php artisan key:generate
  ```

6. **Run Database Migrations:**
Ensure your database is configured in the .env file, then run:

  ```bash
  php artisan migrate
  ```

7. **Run the dev server**
  ```bash
  composer dev
  ```

## Usage

Once the servers are running, you can access the application in your browser at http://localhost. The React frontend communicates with the Laravel backend seamlessly, demonstrating the capabilities of the Reverb package.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is open-source and available under the MIT License.

---

For more information, visit the [Reverb package repository](https://github.com/laravel/reverb) and the [Herd documentation for Laravel Reverb]([https://herd.laravel.com/docs](https://herd.laravel.com/docs/macos/herd-pro-services/laravel-reverb)).
