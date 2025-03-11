import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import './Slider.scss'
//slides
import Image1 from '../../assets/f4.png';
import Image2 from '../../assets/f2.png'
import Image3 from '../../assets/f3.png';
import { NavLink } from 'react-router-dom';
const slides = [
    {
        id: 1,
        img: Image1,
        title: "Get instant loans disbursed to your M-Pesa",
        link: "/apply"
    },
    {
        id: 2,
        img: Image2,
        title: "Flexible loan options with low interest rates",
        link: "/apply"
    },
    {
        id: 3,
        img: Image3,
        title: "Fast approval process with no guarantor required",
        link: "/apply"
    }
];


export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slides[slideIndex].img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };


    return (
        <div className="slider container">

            <div className="arrow" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>

            <div className="wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {
                    slides && slides.map(slide => {
                        return (
                            <div className="slider" style={backgroundStyle} key={slide.id}>
                                {/*<div className="image-container">
                                    <img src={slide.img} alt={slide.title.split(" ").join("_")} />
                                </div>*/}
                                <div className="info">
                                    <h1>{slide.title}</h1>
                                    <NavLink to={slide.link} className='btn' title={"apply now"}>APPLY NOW</NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="arrow" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </div>
    );
}