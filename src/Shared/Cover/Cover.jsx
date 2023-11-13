

const Cover = ({image, title,subTitle}) => {

      
      return (
            

            <div className="hero min-h-screen" style={{backgroundImage: `url('${image} ')`}}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="bg-black bg-opacity-50 w-1/2 py-16 ">
            <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md ">
            <h1 className="mb-5 md:text-5xl md:font-bold uppercase  ">{title}</h1>
            <p className="mb-5 uppercase ">{subTitle}</p>
            </div>
            </div>
            </div>
            </div>

                  // 
           
      );
};

export default Cover;