//import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/UseMenu";
import MenuItem from "./MenuItem";


const PopularMenu = () => {

      const[menu]= useMenu ();
      const popularItem= menu.filter(item=>item.category === "popular");

      return (
            <div>

                  <section>
                        <SectionTitle
                        subHeading={'---Check it out---'}
                        Heading={'FROM OUR MENU'}
                        >
                        </SectionTitle>
                  </section>

                 
                 <div className="grid md:grid-cols-2 gap-8">
                 {
                        popularItem.map(ItemCart=><MenuItem

                              key={ItemCart._id}
                              ItemCart={ItemCart}
                        
                        ></MenuItem>  )
                  }

                 </div>
                  
            </div>
      );
};

export default PopularMenu;