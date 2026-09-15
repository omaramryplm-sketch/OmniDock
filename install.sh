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

cp .env.example .env

echo ""
read -p "Ingresa el nombre del cliente/empresa (ej. logistica-norte): " CLIENT_NAME
read -p "Ingresa la dirección IP de este servidor (ej. 192.168.1.50): " SERVER_IP
DOMAIN="${CLIENT_NAME}.${SERVER_IP}.nip.io"

echo "DOMAIN=$DOMAIN" >> .env
echo "FRONTEND_URL=http://$DOMAIN:8080" >> .env

echo ""
echo "=================================================="
echo "🌐 OmniDock será configurado para el dominio:"
echo "👉 http://$DOMAIN:8080"
echo "=================================================="
echo ""

echo "Levantando servicios con docker-compose..."
docker-compose up -d --build

# Esperar a que la base de datos esté lista
echo "Esperando a que la base de datos esté lista..."
sleep 10

# Crear tablas de base de datos
echo "Creando tablas de base de datos..."
docker-compose exec -T app npx prisma db push

# Sembrar datos (Seeder para SuperAdmin)
echo "Sembrando datos iniciales..."
docker-compose exec -T app npm run seed || echo "Seeder ejecutado."

echo "Instalación de OmniDock completada con éxito."
