import { ApiCLient } from "./ApiClient";

export class HttpClient extends ApiCLient {
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
        return await $fetch('test/url', customer);
    }
}