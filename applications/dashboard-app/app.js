document.addEventListener("DOMContentLoaded", function () {

    healthCheck();

});


const SERVICES = [
    // {
    //     name: "pgadmin",
    //     url: "http://localhost:15432/misc/ping"
    // },
    {
        name: "grafana",
        url: "http://localhost/grafana"
    },
    {
        name: "rabbitmq",
        url: "http://localhost/rabbitmq"
    },
    {
        name: "postgresexporter",
        url: "http://localhost/pgexporter"
    },
    {
        name: "mongoexporter",
        url: "http://localhost/mongoexporter"
    },
    // {
    //     name: "mailhog",
    //     url: "http://localhost:8025"
    // },
    {
        name: "jaeger",
        url: "http://localhost/jaeger"
    },
    {
        name: "prometheus",
        url: "http://localhost/prometheus"
    },
    {
        name: "bookstore-service",
        url: "http://localhost/bookstore-service/actuator/health"
    },
    {
        name: "shipping-service",
        url: "http://localhost/shipping-service/actuator/health"
    },
    {
        name: "email-sender-service",
        url: "http://localhost/email-sender-service/actuator/health"
    },
    {
        name: "payments-service",
        url: "http://localhost/payments-service/actuator/health"
    },
    {
        name: "user-management-service",
        url: "http://localhost/user-management-service/actuator/health"
    },
    {
        name: "bookstore",
        url: "http://localhost/bookstore"
    }

]

async function healthCheck() {

    while (true) {

        SERVICES.forEach(service => {
            checkHealthService(service)
        })

        await sleep(5000);

    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkHealthService(service) {

    let options = {
        method: 'GET',
        mode: 'no-cors'
    }

    try {

        let response = await fetch(service.url, options);
        updateStatusDashboard(service.name, response.ok)

    } catch {

        updateStatusDashboard(service.name, false)

    }

}

function updateStatusDashboard(service, health) {
    let element = document.getElementById(service);

    if (health) {
        element.title = "Service is Health"
        element.className = "left-space bi bi-check-circle health"
    } else {
        element.title = "Service is Unhealth"
        element.className = "left-space bi bi-ban unhealth"
    }
}