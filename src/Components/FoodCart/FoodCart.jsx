import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCart = ({item}) => {
      const{name,recipe,image,price,_id}= item
      const axiosSecure = useAxiosSecure();
      const[, refetch]= useCart()

      const{user}=useAuth()
      const navigate= useNavigate()
      const location = useLocation()

      const handleCart=()=>{
            if(user && user.email){
                  
                  const cartInfo= {
                        email:user?.email,
                        menuId:_id,
                        name,
                        image,
                        price
                  }

                  axiosSecure.post('/api/v1/carts', cartInfo)
                  .then(res=>{
                        console.log(res.data)
                        if(res.data.acknowledged==true){
                              Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `${name} added to your cart`,
                                    showConfirmButton: false,
                                    timer: 2000
                                  });

                                  refetch()
                              
                        }
                  })
                  .catch(error=>{
                        console.log(error)
                  })


                  


                  

            }

             else{
                  Swal.fire({
                        title: "Are you not logged in?",
                        text: "please login to add the cart",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes,Login"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate( '/LogIn',{state:{from:location}})
                        }
                      });

            }



      }

      return (
            <div>

            <div className="card bg-[#F3F3F3] shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
              <p className="bg-[#111827] text-white absolute right-2 px-2 top-3 rounded-sm " >${price}</p>
            <div className="card-body text-center md:h-44   ">
            <h2 className=" text-[#151515] font-semibold md:text-2xl  ">{name}</h2>
            <p className="text-base" >{recipe}</p>
            </div>
            <div className="card-actions justify-center mb-6">

            <button onClick={handleCart} className=" rounded-md hover:bg-[#111827] py-2 px-6 bg-[#E8E8E8] border-b-2 border-[#BB8506] hover:border-[#BB8506] btn-primary text-[#BB8506] ">Buy Now</button>

            </div>
            </div>
                  
            </div>
      );
};

export default FoodCart;


