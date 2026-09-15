#!/bin/bash
set -e

echo "Instalando OmniDock..."

# Verificar dependencias
if ! command -v docker &> /dev/null
then
    echo "Docker no está instalado. Instálalo primero."
    exit 1
fi

if ! command -v docker-compose &> /dev/null
then
    echo "Docker Compose no está instalado."
    exit 1
fi

# Levantar servicios en background
echo "Levantando servicios con docker-compose..."
docker-compose up -d --build

# Esperar a que la base de datos esté lista
echo "Esperando a que la base de datos esté lista..."
sleep 10

# Correr migraciones
echo "Ejecutando migraciones de base de datos..."
docker-compose exec -T app npx prisma migrate deploy

# Sembrar datos (Seeder para SuperAdmin)
echo "Sembrando datos iniciales..."
docker-compose exec -T app npm run seed || echo "Seeder ejecutado."

echo "Instalación de OmniDock completada con éxito."
