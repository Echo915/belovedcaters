import ContactForm from "../components/contact-components/contact-form";
import SimpleMap from "../components/contact-components/map";

const Contact = () => {
    return (
        <div>
            {/* Component content */}
            <div>
                <SimpleMap />
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;