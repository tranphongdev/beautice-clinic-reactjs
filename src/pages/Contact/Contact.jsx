import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import bubbleContact from '~/assets/ct.svg';
import bubbleContactItem from '~/assets/ct1.svg';
import ContactBg from '~/assets/ContactBg.svg';
import Forms from '~/components/Forms';
import Map from '~/assets/map.png';
import { contacts } from '~/constants';

function Contact() {
    return (
        <div tw="relative">
            <div tw="absolute top-[64px] right-0 z-[-9999]">
                <img loading="lazy" src={bubbleContact} alt="bubbleContact" />
                <img loading="lazy" src={bubbleContactItem} alt="bubbleContactItem" tw="absolute top-[35px] right-0" />
            </div>
            <Container>
                <div tw="flex lg:flex-row flex-col justify-between mt-[132px] items-center lg:gap-[98px] gap-10">
                    <div>
                        <h3 className="text-heading">Contact Us</h3>
                        <p className="text-title">
                            Contact service for our <br /> customers
                        </p>
                    </div>
                    <p className="text-desc" tw="lg:max-w-[407px] w-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis
                    </p>
                </div>
                <div tw="flex lg:flex-row flex-col justify-between items-center mt-[44px]">
                    {/* Contact Image */}
                    <div>
                        <img loading="lazy" src={ContactBg} alt="ContactBg" />
                    </div>

                    {/* Contact Content */}

                    <Forms />
                </div>
            </Container>

            <div tw="my-[112px]">
                <img src={Map} alt="Map" tw="w-full h-[418px] object-cover" />
            </div>

            <div tw="mx-auto max-w-[680px] text-center mb-[93px]">
                <h3 className="text-heading">Get in Touch</h3>
                <p className="text-title">Get direct handling by us</p>
                <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>

            <Container>
                <div tw="flex justify-between items-center lg:flex-row flex-col mb-[112px]">
                    {contacts?.map((item) => (
                        <div
                            key={item?.id}
                            tw="flex flex-col px-[77px] items-center justify-center text-center hover:bg-white hover:shadow-2xl rounded-[42px] transition-all cursor-pointer pt-[79px] pb-[71px]"
                        >
                            <div tw="mb-[46px]">
                                <img loading="lazy" src={item?.src} alt="item" />
                            </div>
                            <div>
                                <h4 className="text-heading">{item?.title}</h4>
                                <p tw="text-[var(--text-blue-dark)] text-[20px] font-semibold py-[12px]">
                                    {item?.content}
                                </p>
                                <p className="text-desc">{item?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Contact;
