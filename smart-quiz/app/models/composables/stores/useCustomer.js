import { ConsoleClient } from "~/models/clients/ConsoleClient"

export const useCustomer = () => {

    const client = new ConsoleClient();

    const saveCustomer = (customer = {}) => {
        try {
            client.saveCustomer(customer);
        } catch (error) {
            console.error({
                message: "Some error occure while saving customer",
                error: error
            });
        }
    }

    return {
        saveCustomer
    }
}