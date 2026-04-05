import { ApiCLient } from "./ApiClient";

export class LocalStorageClient extends ApiCLient {
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
        localStorage.setItem("customer_" + String(Date.now()))
    }
}