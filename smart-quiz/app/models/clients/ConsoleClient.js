import { ApiCLient } from "./ApiClient";

export class ConsoleClient extends ApiCLient {
    async saveCustomer(customer = {
        "room_type": "",
        "zones": [],
        "area": 0,
        "style": "",
        "budget": "",
        "name": "",
        "phone": "",
        "email": "",
        "comment": "",
        "page_url": "",
        "utm_source": ""
    }) {
        console.info("Customer info is: " + JSON.stringify(customer));
    }
}