// change 'server-ip' with the appropriate ip or domain name
import { ChocolateData } from '@/types';
import axios from 'axios'
export default {
    fetchChocolates(): Promise<ChocolateData> {
        return axios
            .get('https://server-ip/chocolates')
            .then(response => response.data)
            .catch((error) => {
                if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_API_CLIENT === 'server') {
                    // the request is expected to land here for production build
                    // get the production mock data
                    return axios.get('chocolate-data.json')
                        .then(response => response.data)
                        .catch(error => console.log(error))
                }
                return error;
            });
    }
}