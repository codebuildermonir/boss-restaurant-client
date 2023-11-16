import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import shopImage from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/UseMenu";
//import FoodCart from "../../Components/FoodCart/FoodCart";
import OrderTab from "./Order/OrderTab";
import { useParams } from "react-router-dom";


const OurShop = () => {
      const categories=['salad','pizza','soup','dessert','drinks'];
      const {category}= useParams();
      const initialIndex= categories.indexOf(category)
      console.log(initialIndex)
      const[tabIndex , setTabIndex]= useState(initialIndex)
      console.log(tabIndex)
      const [menu]= useMenu();
      //console.log(menu)
      const salad= menu.filter(item=>item.category ==="salad");
      const pizza= menu.filter(item=>item.category ==="pizza");
      const soup= menu.filter(item=>item.category ==="soup");
      const dessert=menu.filter(item=>item.category ==="dessert");
      const drinks=menu.filter(item=>item.category ==="drinks");



      return (
            <div>
                  <Cover
                  image={shopImage}
                  subTitle={'Would you like to try a dish?'}
                  title={`OUR SHOP`}
                  ></Cover>
                  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                  <TabList className='uppercase text-center my-5'>
                  <Tab>salad</Tab>
                  <Tab>pizza</Tab>
                  <Tab>soups</Tab>
                  <Tab>desserts</Tab>
                  <Tab>drinks</Tab>
                  </TabList>

                  <TabPanel><OrderTab items={salad} ></OrderTab></TabPanel>
                  <TabPanel><OrderTab items={pizza} ></OrderTab></TabPanel>
                  <TabPanel><OrderTab items={soup} ></OrderTab></TabPanel>
                  <TabPanel><OrderTab items={dessert} ></OrderTab></TabPanel>
                  <TabPanel><OrderTab items={drinks} ></OrderTab></TabPanel>
                  
                  </Tabs>
                  
            </div>
      );
};

export default OurShop;


