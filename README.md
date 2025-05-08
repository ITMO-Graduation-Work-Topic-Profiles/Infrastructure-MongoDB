# Инфраструктура MongoDB

## Требования

- Docker и Docker Compose
- Make (опционально, для использования команд из Makefile)

## Быстрый старт

1. Клонируйте репозиторий:
   ```bash
   git clone <url-репозитория>
   cd Infrastructure-MongoDB
   ```

2. Создайте файл `.env` на основе примера:
   ```bash
   cp .env.example .env
   ```

3. Отредактируйте файл `.env`, установив необходимые значения

4. Запустите инфраструктуру:
   ```bash
   ./scripts/bootstrap.sh
   ```
   или
   ```bash
   make up
   ```

## Структура проекта

```
Infrastructure-MongoDB/
├── Dockerfile                      # Конфигурация Docker образа
├── docker-compose.yml              # Конфигурация Docker Compose
├── Makefile                        # Команды для управления проектом
├── .env.example                    # Пример файла с переменными окружения
├── scripts/
│   ├── bootstrap.sh                # Скрипт для быстрого запуска
│   └── initialization/             # Скрипты инициализации MongoDB
│       ├── create-collections.js   # Создание коллекций
│       └── create-indexes.js       # Создание индексов
└── data/                           # Директория для хранения данных (создается автоматически)
    └── mongodb/                    # Данные MongoDB
```

## Доступные команды

Проект включает следующие команды Makefile для управления инфраструктурой:

- `make build` - Сборка Docker образа
- `make up` - Запуск контейнеров в фоновом режиме
- `make down` - Остановка и удаление контейнеров и томов
