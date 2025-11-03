document.addEventListener("DOMContentLoaded", function () {

    healthCheck();

});

const BACKEND_SERVICES = [
    "bookstore-service",
    "shipping-service",
    "email-sender-service",
    "payments-service",
    "user-management-service"
]

const FRONTEND_SERVICES = [
    "bookstore"
]

async function healthCheck() {

    while (true) {

        BACKEND_SERVICES.forEach(service => {
            checkBackendHealth(service)
        })

        FRONTEND_SERVICES.forEach(service => {
            checkFrontendHealth(service)
        })

        await sleep(5000);

    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkBackendHealth(service) {

    try {
        let response = await fetch(`http://localhost/${service}/actuator/health`);

        updateStatusDashboard(service, response.ok)

    } catch {

        updateStatusDashboard(service, false)

    }

}

async function checkFrontendHealth(service) {

    try {
        let response = await fetch(`http://localhost/${service}`);

        updateStatusDashboard(service, response.ok)

    } catch {

        updateStatusDashboard(service, false)

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