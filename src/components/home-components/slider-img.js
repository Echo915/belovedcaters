const SliderImg = ({active=false, source=null}) => {
    return (
        <>
        <div className={"carousel-item" + !active ? "" : " active"}>
            <img src={source} className="d-block w-100" alt="slider-img" />
        </div>
        </>
    )
}

export default SliderImg;