import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import imageMenu from '../../assets/menu/banner3.jpg'
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
//import serveImage from '../../assets/home/chef-service.jpg'


const OurMenu = () => {
      const[menu]=useMenu();
      const offered= menu.filter(item=>item.category === "offered");
      const salad= menu.filter(item=>item.category === "salad");
      const soup= menu.filter(item=>item.category === "soup");
      const dessert= menu.filter(item=>item.category === "dessert");
      const pizza= menu.filter(item=>item.category === "pizza");



      return (
            <div>
                  <Helmet> <title>BISTRO BOSs/Our Menu</title> </Helmet>
                 <Cover
                  image={imageMenu}
                  title={'OUR MENU'}
                  subTitle={'Would you like to try a dish?'}
                  ></Cover>
                        <SectionTitle
                        subHeading={`---Don't miss---`}
                        Heading={`TODAY'S OFFER`}
                        ></SectionTitle> 


      
                  
                  <div className='max-w-screen-lg mx-auto my-10'>
                        {/* Offer menu items */}
                        <MenuCategory items={offered}></MenuCategory> 
                        {/* dessert items */}  
                       <MenuCategory
                        items={dessert}
                        title={`DESSERTS`}
                        image={dessertImage}
                        ></MenuCategory>   
                        {/* pizza items */}  
                       <MenuCategory
                        items={pizza}
                        title={`PIZZA`}
                        image={ pizzaImage}
                        ></MenuCategory>   
                        {/* salad items */}  
                       <MenuCategory
                        items={salad}
                        title={`SALADS`}
                        image={saladImage}
                        ></MenuCategory>   
                        {/* drinks items */}  
                       <MenuCategory
                        items={soup}
                        title={`SALADS`}
                        image={ soupImage}
                        ></MenuCategory>   
                  </div>
                  
                 
                
                
                  
                  
            </div>
      );
};

export default OurMenu;