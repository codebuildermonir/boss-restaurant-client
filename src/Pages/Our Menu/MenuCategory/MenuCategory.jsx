import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../Home/MenuItem";


const MenuCategory = ({items, title,image}) => {

      
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


            </div>
      );
};

export default MenuCategory;