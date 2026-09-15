# Guía de Despliegue de OmniDock

Esta guía describe los pasos para desplegar el backend de OmniDock en tu servidor host (Ubuntu Linux).

## Requisitos Previos

Asegúrate de que tu servidor Ubuntu tenga instalados:
- **Docker**: `sudo apt install docker.io`
- **Docker Compose**: `sudo apt install docker-compose`
- **Git**: `sudo apt install git`

## Pasos para Desplegar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/omaramryplm-sketch/OmniDock.git
   cd OmniDock
   ```

2. **Configurar Variables de Entorno**
   ```bash
   cp .env.example .env
   # Edita el archivo .env con tus credenciales reales de base de datos y JWT_SECRET
   nano .env
   ```

3. **Ejecutar el Script de Instalación Desatendida**
   Dale permisos de ejecución al script y córrelo:
   ```bash
   chmod +x install.sh
   ./install.sh
   ```
   Esto levantará los contenedores (app y db), correrá las migraciones de Prisma y ejecutará el seeder para crear al usuario SuperAdmin (`admin@omnidock.com` / `superadmin123`).

## Comandos Útiles

- **Ver logs de la aplicación:**
  ```bash
  docker-compose logs -f app
  ```

- **Respaldar la Base de Datos:**
  ```bash
  docker exec -t omnidock_db pg_dumpall -c -U postgres > dump_$(date +%Y-%m-%d_%H_%M_%S).sql
  ```

- **Aplicar Actualizaciones Futuras:**
  ```bash
  git pull origin main
  docker-compose up -d --build app
  docker-compose exec app npx prisma migrate deploy
  ```
