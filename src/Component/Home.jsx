import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    //arrows:false  arrow off chaile
  };
  return (
    <>


<div className="text-white">
      <Slider {...settings}>
      <div className="bg-image p-[330px] text-white text-6xl">
            <h1>Background one</h1>
      </div>
      <div className="bg-img2 p-[330px] text-white text-6xl">
        <h1>Background two</h1>
      </div>
      <div className="bg-img3 p-[330px] text-white text-6xl">
        <h1>Background three</h1>
      </div>
      <div className="bg-img4 p-[330px] text-white text-6xl">
        <h1>Background four</h1>
      </div>
      <div className="bg-img5 p-[330px] text-white text-6xl">
        <h1>Background five</h1>
      </div>
      <div className="bg-img6 p-[330px] text-white text-6xl">
        <h1>Background six</h1>
      </div>

    </Slider>
</div>

   
    
    </>
  )
}

export default Home