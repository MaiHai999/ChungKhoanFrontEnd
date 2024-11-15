
import CallAPI from "../Utils/CallAPI";
import { URL } from "../config";
import { createResponseFrame } from "../Utils/createResponseFrame";
import * as tokenHanler from "../Utils/TokenHandler";



export const getReportSoHuCP = async({idNDT}) => {
    try {
        const data = {
            "idNDT": idNDT,
        }
        const urlCall = URL + "report/getSohuu";
        const token = await tokenHanler.getAccessToken();
        const response = await CallAPI({url:urlCall,token:token, data:data})
        return createResponseFrame(true, response.data);
    } catch (error) {
        return createResponseFrame(false, error);
    }
}