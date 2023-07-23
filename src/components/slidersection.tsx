import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Item = (props: { title: string }) => {
    return (
        <div className="item">
            <div className="wrapper flex justify-center mb-2">
                <img
                    className="w-16 h-16"
                    src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png"
                    alt="ico"
                />
            </div>
            <h1 className="text-center font-bold text-sm">{props.title}</h1>
        </div>
    );
};

const NextArrow = (props: any) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <MdKeyboardArrowRight size={16} className="text-black" />
        </button>
    );
};

const PrevArrow = (props: any) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <MdKeyboardArrowLeft size={16} className="text-black" />
        </button>
    );
};

export const SliderSection = () => {
    const settings = {
        dots: false,
        infinite: false,
        arrow: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 9,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="SliderSection w-full h-36 flex items-center">
            <div className="slider-wrapper w-901  mx-auto">
                <Slider {...settings}>
                    <Item title="Sana Özel1" />
                    <Item title="2" />
                    <Item title="3" />
                    <Item title="4" />
                    <Item title="5" />
                    <Item title="6" />
                    <Item title="7" />
                    <Item title="8" />
                    <Item title="9" />
                    <Item title="10" />
                    <Item title="11" />
                    <Item title="12" />
                    <Item title="13" />
                    <Item title="14" />
                    <Item title="15" />
                    <Item title="16" />
                    <Item title="17" />
                    <Item title="18" />
                    <Item title="19" />
                    <Item title="20" />
                </Slider>
            </div>
        </div>
    );
};
