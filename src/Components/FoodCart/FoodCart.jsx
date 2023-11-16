

const FoodCart = ({item}) => {
      const{name,recipe,image,price}= item

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
            <button className=" rounded-md hover:bg-[#111827] py-2 px-6 bg-[#E8E8E8] border-b-2 border-[#BB8506] hover:border-[#BB8506] btn-primary text-[#BB8506] ">Buy Now</button>
            </div>
            </div>
                  
            </div>
      );
};

export default FoodCart;