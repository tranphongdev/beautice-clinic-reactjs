import { Container } from '~/constants/styled';
import bubbleContact from '~/assets/bubble-contact.svg';
import bubbleContactItem from '~/assets/bubble-contact-item.svg';
import ContactBg from '~/assets/ContactBg.svg';
import Forms from '~/components/Forms';
import tw from 'twin.macro';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-bubble">
                <img loading="lazy" src={bubbleContact} alt="bubbleContact" />
                <img loading="lazy" src={bubbleContactItem} alt="bubbleContactItem" className="contact-bubble-item" />
            </div>

            <Container>
                <div tw="flex lg:flex-row flex-col justify-between items-center mt-[144px]">
                    {/* Contact Image */}
                    <div>
                        <img loading="lazy" src={ContactBg} alt="ContactBg" />
                    </div>

                    {/* Contact Content */}
                    <div>
                        <div tw="mb-[44px] flex flex-col lg:items-start items-center">
                            <h3 className="text-heading">Contact Us</h3>
                            <p className="text-title">
                                Send your inquiry to <br /> our expert team
                            </p>
                            <p className="text-desc">Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                        </div>

                        <Forms />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
