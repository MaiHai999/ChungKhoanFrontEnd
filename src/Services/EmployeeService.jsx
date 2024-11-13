import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";

export const getEmployee = async() => {
    try {
        const urlCall = URL + "employee/get";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}