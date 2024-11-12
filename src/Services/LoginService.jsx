import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";

export const Login = async({company, role, username, password}) => {
    try {
        const data = {
            site: company,
            role:role,
            username: username,
            password: password,
        }
        const urlCall = URL + "auth/login";
        const response = await CallAPI({url:urlCall, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}