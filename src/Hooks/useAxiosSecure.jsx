/* import axios from "axios";

export const axiosSecure = axios.create({
      baseURL:'http://localhost:5006'

})

const useAxiosSecure = () => {
      return axiosSecure
};

export default useAxiosSecure;
 */

import axios from "axios";

 const axiosSecure = axios.create({
      baseURL:'http://localhost:5006'
})

const useAxiosSecure = () => {
      return axiosSecure
};

export default useAxiosSecure;