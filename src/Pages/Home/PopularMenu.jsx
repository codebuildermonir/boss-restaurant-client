import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";


const PopularMenu = () => {

      const [ menu ,setMenu]= useState([]);
      useEffect(()=>{

            fetch('menu.json')
            .then(res=> res.json())
            .then(data=>{
                  const popularItem=data.filter(item=>item.category === "popular");
                  setMenu(popularItem)
            } )

      }, [])




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
                        menu.map(ItemCart=><MenuItem

                              key={ItemCart._id}
                              ItemCart={ItemCart}
                        
                        ></MenuItem>  )
                  }

                 </div>
                  
            </div>
      );
};

export default PopularMenu;