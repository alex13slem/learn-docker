FROM node:alpine
WORKDIR /app

ENV CHOKIDAR_USEPOLLING=true

# Порт ДЛЯ ИНФОРМАЦИИ
EXPOSE 5000

# Копирование package.json и package-lock.json
# 
# Копирование и установка зависимостей отдельно 
# от всех остальных файлов для оптимизации кеширования
# при создании контейнера из образа
COPY package*.json ./
RUN npm install

COPY . ./
CMD [ "npm", "run", "dev" ]