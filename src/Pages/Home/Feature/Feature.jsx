import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImage from '../../../assets/home/featured.jpg'
import './Feature.css'

const Feature = () => {
      return (
            <div className=" feature bg-fixed my-20 ">

                  <div className=" bg-black bg-opacity-50" >

                  <div className="pt-10 text-white  ">
                  <SectionTitle
                  subHeading={'---Check it out---'}
                  Heading={<h1 className="text-white" >FROM OUR MENU</h1>}
                  >
                  </SectionTitle>
                  </div>


                  <div className="md:flex gap-10 justify-center items-center text-white pb-20 px-24  ">

                        <div>
                              <img className="" src={featureImage} alt="" />

                        </div>


                        <div className=" " >
                              <h3>March 20, 2023</h3>
                              <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                              <p className=" text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.Error voluptate facere, deserunt dolores maiores quod  nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                              <button className="btn btn-outline mt-5 text-white ">Read More</button>
                        </div>


                  </div>


                  </div>
            </div>
      );
};

export default Feature;



