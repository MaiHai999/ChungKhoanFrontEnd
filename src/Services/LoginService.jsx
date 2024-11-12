import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";

export const Login = async({company, role, username, password}) => {
    try {
        const data = {
            site: isNaN(Number(company)) ? company : Number(company),
            role:role,
            username: username,
            password: password,
        }
        console.log(data);
        const urlCall = URL + "auth/login";
        const response = await CallAPI({url:urlCall, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}