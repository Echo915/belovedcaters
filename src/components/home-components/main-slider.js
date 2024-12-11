import slider1 from '../../images/sliders/slider1.jpg';
import slider2 from '../../images/sliders/slider2.jpg';
import slider3 from '../../images/sliders/slider3.jpg';
import SliderImg from './slider-img';

const SLIDERDATA = [
    {key:1, image:slider1},
    {key:2, image:slider2},
    {key:3, image:slider3},
];

const Sliders = () => {
    return (
        <>

        </>
    )
}

const MainSlider = () => {
    // const Sliders = () => {
    //     return (
    //         SLIDERDATA.map((slider) => (
    //             <SliderImg active={slider.key !== 1 ? false : true } source={slider.image} />
    //         ))
    //     );
    // }

    // return (
    //     <div>
    //         {/* MainSlider content */}
    //         {/* Main Slider*/}
    //         {/* Slider*/}
    //         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    //             <div className="carousel-inner">
    //                 <Sliders />
    //             </div>
    //             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //                 <span className="visually-hidden">Previous</span>
    //             </button>
    //             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //                 <span className="visually-hidden">Next</span>
    //             </button>
    //         </div>
    //         {/* Slider END*/}
    //         {/* Main Slider*/}
    //     </div>
    // );
};

export default MainSlider;