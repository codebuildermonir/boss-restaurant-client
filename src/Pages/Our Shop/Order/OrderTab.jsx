import FoodCart from "../../../Components/FoodCart/FoodCart";


const OrderTab = ({items}) => {
      return (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto my-10">
                        {
                              items.map(item=><FoodCart
                                    key={item._id} 
                                    item={item}
                              ></FoodCart> )

                        }


                        </div>
      );
};

export default OrderTab;