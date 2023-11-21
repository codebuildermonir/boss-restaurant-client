import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./UseAuth";



const useCart = () => {

      const axiosSecure = useAxiosSecure()
      const{user}=useAuth()
      
      const { refetch, data:cart=[]}= useQuery({
            queryKey:['cart', user?.email],
            queryFn:async ()=>{
                  const res = await axiosSecure.get(`/api/v1/cart?email=${user?.email}`)
                  return res.data

            }
                  

      })

      return [cart, refetch]
};

export default useCart;