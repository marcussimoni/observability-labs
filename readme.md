# 🧪 Microservices & Observability Lab

A comprehensive sandbox environment for studying, experimenting, and demonstrating modern observability practices within microservices architecture. This project integrates multiple Spring Boot microservices with a complete observability stack including Grafana, Prometheus, Tempo, Loki, and Jaeger, all containerized with Docker Compose.

## 🎯 Learning Objectives

This lab provides hands-on experience with:
- **Distributed tracing** and metrics correlation across microservices
- **Resilience patterns** and fault tolerance
- **Real-time monitoring** and alerting strategies
- **Log aggregation** and analysis
- **Event-driven architecture** with Kafka
- **Performance testing** with k6
- **Software architecture** best practices

## 🏗️ Architecture Overview

This project serves as a **comprehensive learning platform** for exploring observability in real-world microservice systems. It's designed as an **educational foundation** rather than a production solution, providing a realistic environment to experiment with modern DevOps and observability concepts.

## 🔗 Related Projects

The core microservices application is maintained separately at:
**[https://github.com/marcussimoni/microservices-labs](https://github.com/marcussimoni/microservices-labs)**

*Note: The microservices are automatically downloaded, built, and started during the initial setup process.*

## 📁 Project Structure

```
observability-labs/
├── 📂 applications/                    # Spring Boot microservices
│   ├── 📂 base-image/                   # Base Docker image for Java apps
│   ├── 📂 bookstore/                    # Bookstore API service
│   ├── 📂 bookstore-app/               # Bookstore frontend application
│   ├── 📂 bookstore-commons/            # Shared utilities
│   ├── 📂 dashboard-app/                # Central dashboard with all service links
│   ├── 📂 email-sender/                 # Email service
│   ├── 📂 healthcheck-app/              # Infrastructure health monitoring
│   ├── 📂 payments/                     # Payment processing service
│   ├── 📂 shipping/                     # Shipping management service
│   └── 📂 user-management/              # User management service
├── 📂 infrastructure/                   # Infrastructure components
│   ├── 📂 configs/                      # Configuration files
│   │   ├── 📂 grafana/                  # Grafana dashboards & datasources
│   │   ├── 📂 jaeger/                   # Jaeger tracing configuration
│   │   ├── 📂 kafka/                    # Kafka setup & connectors
│   │   │   └── 📂 connectors/           # Kafka Connect sink connectors
│   │   ├── 📂 k6/                       # Load testing scripts
│   │   ├── 📂 mockoon/                  # API mocking configuration
│   │   ├── 📂 nginx/                    # Reverse proxy configuration
│   │   ├── 📂 otel/                     # OpenTelemetry collector config
│   │   ├── 📂 pgadmin/                  # PostgreSQL admin interface
│   │   ├── 📂 postgres/                 # PostgreSQL setup
│   │   └── 📂 prometheus/               # Prometheus configuration
│   ├── 📂 docker/                       # Docker Compose files
│   │   ├── 📄 docker-compose-apps.yaml         # Microservices
│   │   ├── 📄 docker-compose-dbs.yaml          # Databases (PostgreSQL, MongoDB, Redis)
│   │   ├── 📄 docker-compose-dbs-exporter.yaml # Database exporters
│   │   ├── 📄 docker-compose-kafka.yaml        # Kafka & Zookeeper
│   │   ├── 📄 docker-compose-nginx.yaml        # Nginx reverse proxy
│   │   ├── 📄 docker-compose-observability.yaml # Observability stack
│   │   ├── 📄 docker-compose-rabbitmq.yaml     # RabbitMQ message broker
│   │   ├── 📄 docker-compose-test.yaml         # k6 testing
│   │   └── 📄 docker-compose-utilities.yaml    # Utilities (MailHog, Mockoon)
│   └── 📂 scripts/                      # Management scripts
│       ├── 📄 build.sh                  # Build applications
│       ├── 📄 start.sh                  # Start all services
│       ├── 📄 stop.sh                   # Stop all services
│       └── 📄 setup-kafka-connect-connections.sh # Kafka Connect setup
├── 📂 images/                           # Documentation images
│   ├── 📄 dashboard.png                # Dashboard screenshot
│   └── 📂 diagrams/                    # Architecture diagrams
└── 📄 readme.md                        # This file
```

## 🛠️ Technology Stack

### Microservices
- **Spring Boot 3.x** with Java 21
- **OpenTelemetry** instrumentation for observability
- **Spring Data JPA** for data persistence
- **Spring Cloud** for microservices patterns

### Infrastructure & Data
- **PostgreSQL 18** - Primary relational database
- **MongoDB** - Document database
- **Redis** - In-memory data store
- **RabbitMQ** - Message broker
- **Apache Kafka** - Event streaming platform
- **Kafka Connect** - Data integration

### Observability Stack
- **Grafana** - Visualization & dashboards
- **Prometheus** - Metrics collection
- **Grafana Loki** - Log aggregation
- **Grafana Tempo** - Distributed tracing
- **Jaeger** - Distributed tracing (alternative)
- **OpenTelemetry Collector** - Telemetry data collection

### Development & Testing
- **Docker & Docker Compose** - Containerization
- **Nginx** - Reverse proxy & load balancer
- **MailHog** - Email testing
- **Mockoon** - API mocking
- **k6** - Performance testing
- **pgAdmin** - PostgreSQL administration

## 🚀 Quick Start

### Prerequisites

Ensure you have installed:
- **Docker** (required for running all services)
- **Docker Compose** (included with Docker Desktop)
- **Java 21** (only needed for local development/IDE usage)

### Running the Complete Environment

1. **Initial Setup & Build** (first time only):
   ```bash
   cd infrastructure/scripts
   sh start.sh build
   ```

2. **Standard Start** (subsequent runs):
   ```bash
   cd infrastructure/scripts
   sh start.sh
   ```

3. **Stop All Services**:
   ```bash
   cd infrastructure/scripts
   sh stop.sh
   ```
4. **After Kafka is running, configure connections used by Kafka Connect**:

   ```bash
   cd infrastructure/scripts && ./setup-kafka-connect-connections.sh
   ```

The startup script will:
- Create the necessary Docker network
- Build and start all microservices
- Launch all infrastructure components
- Open the dashboard in your default browser
- Setup Kafka Connect

## 📊 Generating Load & Metrics

To populate the system with realistic metrics and traces:

```bash
cd infrastructure/docker
docker-compose -f docker-compose-test.yaml up
```

This runs a k6 load test that simulates user interactions, generating:
- Application metrics
- Distributed traces
- Log entries
- Kafka events

## 🌐 Access Points

Once all services are running, access them through the **Central Dashboard**:

### 🎛️ Main Dashboard
**http://localhost/dashboard**

![dashboard](images/dashboard.png)

### Direct Service Access

#### Applications
- **Bookstore App**: http://localhost:8081
- **Healthcheck**: http://localhost:8082
- **User Management**: http://localhost:8083
- **Payments**: http://localhost:8084
- **Shipping**: http://localhost:8085
- **Email Sender**: http://localhost:8086

#### Observability Tools
- **Grafana**: http://localhost:3000 (admin/admin)
- **Prometheus**: http://localhost:9090
- **Jaeger**: http://localhost:16686
- **Loki**: http://localhost:3100

#### Infrastructure
- **pgAdmin**: http://localhost:5050 (admin@admin.com/admin)
- **MailHog**: http://localhost:8025
- **Mockoon**: http://localhost:3001
- **Kafka UI**: http://localhost:8080

## 🏛️ Architecture Diagram

![c4 diagram](images/diagrams/bookstore.png)

## 🔧 Configuration Details

### Kafka Connect Integration

The system includes pre-configured Kafka Connect sink connectors:
- **bookstore-order-connector** - Orders data streaming
- **payments-confirmed-connector** - Payment confirmations
- **payments-declined-connector** - Payment failures
- **shipping-confirmed-connector** - Shipping updates

### OpenTelemetry Configuration

All microservices are instrumented with OpenTelemetry agents that export:
- **Traces** to Grafana Tempo and Jaeger
- **Metrics** to Prometheus
- **Logs** to Grafana Loki

### Monitoring & Alerting

- **Prometheus** scrapes metrics from all services
- **Grafana** provides pre-built dashboards for:
  - Application performance
  - Infrastructure health
  - Business metrics
  - Distributed tracing

**Built for learning and experimentation in modern observability practices** 🚀
