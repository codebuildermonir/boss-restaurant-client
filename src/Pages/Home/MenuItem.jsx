
const MenuItem = ({ItemCart}) => {

      const{name,recipe,image,price}= ItemCart


      return (
            <div className="flex space-x-4">
                  <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]  object-cover " src={image} alt="" />
                  <div>
                        <h3 className=" text-xl Uppercase text-[#151515] font-normal"> {name}-------- </h3>
                        <p className="text-[#737373] text-base font-normal ">{recipe}</p>
                  </div>
                  <p className="text-[#BB8506]">${price}</p>
                  
            </div>

            
      );
};

export default MenuItem;