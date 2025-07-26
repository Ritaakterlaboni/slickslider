import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const About = () => {
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:1000,
    arrows: true,                      //jodi arrow na dite chai taile false dile hobe r arrow age thake e dawya thake
  };
  return (
    <>
    <div className="bg-red-400 p-[330px] text-white text-6xl">
           
        <Slider {...settings}>
            <h1>Background one</h1>
            <h1>Background two</h1>
            <h1>Background three</h1>
            <h1>Background four</h1>
            <h1>Background five</h1>
            <h1>Background six</h1>
            <h1>Background seven</h1>

        </Slider>
    </div>


   
    
    </>
  )
}

export default About