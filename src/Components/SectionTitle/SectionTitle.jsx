
const SectionTitle = ({Heading,subHeading}) => {
      return (
            <div className=" md:w-4/12 mx-auto my-10">
                  <p className=" text-center text-[#D99904] italic font-normal md:text-lg ">{subHeading}</p>
                  <h3 className=" text-center md:text-3xl text-[#151515] font-normal border-y-2 py-4 " >{Heading}</h3>
                  
            </div>
      );
};

export default SectionTitle;