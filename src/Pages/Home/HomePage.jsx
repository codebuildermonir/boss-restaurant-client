
import Category from "./Category";
import Feature from "./Feature/Feature";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";
import Testimonials from "./Testimpnials/Testimonials";


const HomePage = () => {
      return (
            <div>
                  <Slider></Slider>
                  <div className='max-w-screen-lg mx-auto my-10'>

                  <Category></Category>
                  <PopularMenu></PopularMenu>
                  <Feature></Feature>
                  <Testimonials></Testimonials>
                  </div>   
            </div>
      );
};

export default HomePage;