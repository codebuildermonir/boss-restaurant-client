import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
//import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyCart = () => {

      const[cart, refetch ]=useCart();
      //const axiosSecure = useAxiosSecure()

      const axiosSecure= useAxiosSecure();

      const totalPrice= cart.reduce((sum , item)=> sum + item.price ,0)

      const handleDelete=(id)=>{
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                  if (result.isConfirmed) {
                    
                  axiosSecure.delete(`/api/v1/carts/${id}`)
                  .then(res=>{
                        console.log(res.data)
                        if(res.data.deletedCount>0 ){
                              Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });


                                refetch()
                        }


                  })
                  .catch(error=>{
                        console.log(error)
                  })
                  
                  
                  }
                });

      }



      return (
            <div className="  max-w-screen-lg mx-auto">

                  <SectionTitle 
                  subHeading={'---My Cart---'}
                  Heading={'WANNA ADD MORE?'}
                  ></SectionTitle>

                  <div className=" uppercase text-[#151515] flex flex-col md:flex-row justify-around my-10 ">
                        <h1 className="text-[#151515] md:text-2xl font-semibold">Total orders:{cart.length} </h1>
                        <h1 className="text-[#151515] md:text-2xl font-semibold">total price: ${totalPrice.toFixed(2)} </h1>
                        <button className="btn btn-sm bg-[#D1A054] border-none hover:bg-[#D1A054] hover:border-none text-white ">Pay</button>

                  </div>


                  <div className="overflow-x-auto">
                  <table className="table">
                  {/* head */}
                  <thead>
                  <tr>
                  <th>
                   Number
                  </th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* row 1 */}

                  {
                              cart.map((items,index)=><tr key={items._id} >
                                    <th>
                                          {index+1}
                                    
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                    <img src={items.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    
                                    </div>
                                    </td>
                                    <td>
                                          {items.name}
                                    
                                    </td>
                                    <td> ${items.price}</td>
                                    <th>
                                    <button onClick={()=>handleDelete(items._id)} className="btn btn-ghost btn-xs"><RiDeleteBin6Fill className="text-xl"></RiDeleteBin6Fill></button>
                                    </th>
                                    </tr> )
                        }

                  </tbody>
                  {/* foot */}


                  </table>
                  </div>

                  
                  
            </div>
      );
};

export default MyCart;







