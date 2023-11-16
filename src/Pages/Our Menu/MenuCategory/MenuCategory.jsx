import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../Home/MenuItem";


const MenuCategory = ({items, title,image}) => {
      //console.log(items)
      //const{category}= items

      
      return (

            <div >

                  {
                        title&&<Cover image={image} title={title} ></Cover>
                  }
                  <div className="grid md:grid-cols-2 gap-8 'max-w-screen-lg mx-auto my-16">
                 {
                        items.map(ItemCart=><MenuItem

                              key={ItemCart._id}
                              ItemCart={ItemCart}
                        
                        ></MenuItem>  )
                  }

                 </div>
                        <div className="card-actions justify-center mb-6">
                        <Link to={`/OurShop/${title}`}>
                        <button className=" rounded-md hover:bg-[#111827] py-2 px-6 bg-[#E8E8E8] border-b-2 border-[#BB8506] hover:border-[#BB8506] btn-primary text-[#BB8506] ">ORDER YOUR FAVOURITE FOOD</button>
                        </Link>
                        </div>
                        


            </div>
      );
};

export default MenuCategory;