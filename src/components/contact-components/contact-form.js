import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import avatar1 from "../../images/avatars/avatar.1.jpg";
import { Animated } from "react-animated-css";
import Aos from "aos";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []); 

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangePhone = (e) => {
        let text = e.target.value;
        if (/^\d+$/.test(text) || text==="") { // text string only contains numbers or is empty (incase the last char is deleted)
            setPhone(text);
        }
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className="row w-80" style={{margin: "6rem auto"}}>
            {/* Component content */}
            <div className="col-lg-6 col-md-6 pe-3">
                <form data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-sine">
                    <label className='text-primary fw-bold fs-4 mb-3'>Send Us a Message</label>
                    <div>
                        <input className="form-control border border-primary mb-3 text-primary" type="text" placeholder="Your Name" value={name} onChange={onChangeName} maxLength={100} required />
                        <input className="form-control border border-primary mb-3 text-primary" type="text" placeholder="Phone Number" value={phone} onChange={onChangePhone} maxLength={10} />
                        <input className="form-control border border-primary mb-3 text-primary" type="email" placeholder="Your Email" value={email} onChange={onChangeEmail} maxLength={255} required />
                        <textarea className="form-control border border-primary mb-3 text-primary bg-primary-light" placeholder="Message" rows={6} value={message} onChange={onChangeMessage} required />
                    </div>
                </form>
            </div>
            <div className="col-lg-6 col-md-6 ps-3">
                <div className="w-100 h-100 rounded-4 p-4" data-aos="fade-left" data-aos-duration="600">
                    <div>
                        <Animated className="infinite" animationInDuration={2500} animationIn="pulse" isVisible={true}>
                            <Link>
                                <img src={avatar1} alt="avatar" className="rounded-circle bg-primary ms-3" style={{width: '12%', aspectRatio: 1}} />
                                {/* <span className="position-absolute top-0 start-100 translate-middle p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                    </svg>
                                </span> */}
                            </Link>
                        </Animated>
                        <div className="clearfix"></div>
                        <hr />
                        <div className="">
                            <div className="mt-3">
                                <p className="text-primary">Morbi netus odio ligula lobortis letius vitae hendrerit sodales phasellus libero. Parturient tempor nullam hac conubia lobortis class mattis 
                                    ultrices aptent rutrum neque. Ante accumsan lectus litora habitant amet ultrices.
                                </p>
                                <div className="row">
                                    <div className="col-6">
                                        <p className="h6 text-primary">Address:</p>
                                        <p className="text-primary">Lorem ipsum st. dolor consti</p>
                                        <p className="h6 text-primary">Email:</p>
                                        <p className="text-primary">example@example.com</p>
                                    </div>
                                    <div className="col-6">
                                        <p className="h6 text-primary">Telephone:</p>
                                        <p className="text-primary">054 123 4567</p>
                                        <p className="text-primary">020 123 4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;