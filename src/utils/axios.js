/* eslint-disable no-console */
import axios from 'axios';
import config from '../config';


const getDefaultHeaders = () => ({
    'X-Auth-Token': `${config.xAuthToken}`
});

  
const axiosWrapper = async ({
  method = 'GET',
  url = '',
  params = {},
  headers = {}
}) => {
    try {
      const response = await axios({
        method,
        url,
        params,
        headers: {
          ...getDefaultHeaders(),
          ...headers,
        }
      });

      return response;
    } catch(err){
      console.log(err, 'axiosWrapper err');
      throw (err);
    }
}

export default axiosWrapper;