import http from 'k6/http';
import { sleep } from 'k6';

export default function () {

    http.get('http://host.docker.internal:8080/api/books'); // use the service name

    http.get('http://host.docker.internal:8081/emails?page=0&size=20'); // use the service name   

    http.get('http://host.docker.internal:8082/users/me'); // use the service name

    http.get('http://host.docker.internal:8083/payments?purchaseIds=1');

    http.get('http://host.docker.internal:8084/shipping/public-identifier/d858de5b-ed02-4c89-ac6a-d899a698d4de');

    sleep(1);

}