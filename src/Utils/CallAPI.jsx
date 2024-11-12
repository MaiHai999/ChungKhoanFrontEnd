import axios from 'axios';

const CallAPI = async ({url, method = 'POST', data = null, params = null}) => {
    const config = {
        method,
        url,
        data, 
        params, 
    };

    const response = await axios(config);

    return response;
    
};

export default CallAPI;
