const Card = ({headerImg='', bodyText='', outlined}) => {
    let dummyText = "Tempus consequat netus morbi nascetur vel ex condimentum mattis ligula ultrices mollis. Lobortis pretium libero ut torquent massa non sed curabitur eros platea. Venenatis malesuada sollicitudin vel habitasse laoreet. Litora aliquet lorem finibus amet justo curabitur nam quisque neque laoreet mattis.";

    return(
        <div className={`rounded-5 overflow-hidden ${outlined ? "border" : ""}`}>
            <div>
                <img className='w-100' src={headerImg} alt=''></img>
            </div>
            <div className="px-3 w-100 py-4">
                <p>{bodyText !== '' ? bodyText : dummyText}</p>
            </div>
        </div>
    )
}

export default Card