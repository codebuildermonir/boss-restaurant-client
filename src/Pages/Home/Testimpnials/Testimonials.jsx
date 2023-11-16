import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import{BiSolidQuoteLeft} from 'react-icons/bi'


const Testimonials = () => {
      const [reviews, setReviews]= useState([]);
      useEffect(()=>{
            fetch('http://localhost:5006/api/v1/reviews')
            .then(res=> res.json())
            .then(data=> setReviews(data))
      },[])

      console.log(reviews)


      return (
            <section>

                  <SectionTitle
                  subHeading={'---What Our Clients Say---'}
                  Heading={ 'TESTIMONIALS' }
                  ></SectionTitle>

            
            {/* Slide */}

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
                  

                  {
                        reviews.map(review=> <SwiperSlide
                        key={review._id}>

                               <div className="flex flex-col justify-center items-center mb-16 mx-20">
                                    <Rating 
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    />
                                    <BiSolidQuoteLeft className="text-7xl my-5 text-[#151515] "></BiSolidQuoteLeft>
                               <p>{review.details}</p>
                               <h2 className="text-[#CD9003] font-medium text-3xl ">{review.name}</h2>
                              </div>


                              


                        </SwiperSlide> )
                  }
                  
      </Swiper>




                  


            </section>
      );
};

export default Testimonials;


