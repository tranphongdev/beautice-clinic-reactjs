import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import layout from '~/assets/layout.svg';
import layoutItem from '~/assets/layout-item.svg';

import bgsrc1 from '~/assets/bgsrc1.svg';
import bgsrc2 from '~/assets/bgsrc2.svg';
import bgsrc3 from '~/assets/bgsrc3.svg';
import bgsrc4 from '~/assets/bgsrc4.svg';
import angledoubleright from '~/assets/angle-double-right.svg';
import Animation1 from '~/assets/Animation1.svg';
import Animation2 from '~/assets/Animation2.svg';
import Animation3 from '~/assets/Animation3.svg';
import Slogan from './Slogan';
import Faq from './Faq';

function ServicePage() {
    return (
        <div className="our-service">
            <div className="our-service-bubble">
                <img loading="lazy" src={layout} alt="layout" />
                <img loading="lazy" src={layoutItem} alt="layoutItem" className="our-service-bubble-item" />
            </div>
            <Container>
                <div>
                    <div tw="max-w-[600px] mx-auto text-center mb-[70px]">
                        <h3 className="text-heading">Our Services</h3>
                        <p className="text-title">We focus on your beauty</p>
                        <p className="text-desc">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div>
                        <div tw="flex justify-between items-center gap-[60px] lg:flex-row flex-col mb-[68px]">
                            <img loading="lazy" src={bgsrc1} alt="bgsrc1" tw="w-full lg:w-[291px]" />
                            <img loading="lazy" src={bgsrc2} alt="bgsrc1" />
                        </div>
                        <div tw="flex justify-between items-center gap-[60px] lg:flex-row flex-col">
                            <img loading="lazy" src={bgsrc3} alt="bgsrc1" />
                            <img loading="lazy" src={bgsrc4} alt="bgsrc1" tw="w-full lg:w-[291px]" />
                        </div>
                    </div>
                </div>

                <div tw="flex justify-between items-center lg:flex-row flex-col mt-[141px]">
                    <div>
                        <img src={Animation1} alt="Animation1" />
                    </div>
                    <div tw="max-w-[475px]">
                        <h3 className="text-heading">Beauty Consultation</h3>
                        <p className="text-title">We services beauty consultation</p>
                        <p className="text-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero.
                        </p>
                        <div tw="flex gap-3 mt-3">
                            <span tw="text-[var(--text-blue-dark)] font-semibold tracking-[1.6px] cursor-pointer">
                                Make an Appointment
                            </span>
                            <img loading="lazy" src={angledoubleright} alt="angledoubleright" />
                        </div>
                    </div>
                </div>

                <div tw="flex justify-between items-center lg:flex-row flex-col my-[92px]">
                    <div tw="max-w-[475px]">
                        <h3 className="text-heading">Skin Treatements</h3>
                        <p className="text-title">Skin care and treatment by expert</p>
                        <p className="text-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero.
                        </p>
                        <div tw="flex gap-3 mt-3">
                            <span tw="text-[var(--text-blue-dark)] font-semibold tracking-[1.6px] cursor-pointer">
                                Make an Appointment
                            </span>
                            <img loading="lazy" src={angledoubleright} alt="angledoubleright" />
                        </div>
                    </div>

                    <div>
                        <img loading="lazy" src={Animation2} alt="Animation1" />
                    </div>
                </div>

                <div tw="flex justify-between items-center lg:flex-row flex-col">
                    <div>
                        <img loading="lazy" src={Animation3} alt="Animation1" />
                    </div>
                    <div tw="max-w-[475px]">
                        <h3 className="text-heading">Beauty Product</h3>
                        <p className="text-title">We present quality beauty products</p>
                        <p className="text-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero.
                        </p>
                        <div tw="flex gap-3 mt-3">
                            <span tw="text-[var(--text-blue-dark)] font-semibold tracking-[1.6px] cursor-pointer">
                                Make an Appointment
                            </span>
                            <img loading="lazy" src={angledoubleright} alt="angledoubleright" />
                        </div>
                    </div>
                </div>
            </Container>

            <Slogan />
            <Faq />
        </div>
    );
}

export default ServicePage;
