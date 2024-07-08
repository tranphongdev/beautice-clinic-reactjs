import { Container } from '~/constants/styled';
import OurBubble from '~/assets/our-bubble.svg';
import OurBubbleItem from '~/assets/our-bubble-item.svg';
import ourBg from '~/assets/vision.svg';
import mision from '~/assets/mision.svg';
import tw from 'twin.macro';
import { brands } from '~/constants';

function Our() {
    return (
        <div className="our">
            <div className="our-bubble">
                <img src={OurBubble} alt="OurBubble" />
                <img src={OurBubbleItem} alt="OurBubble" className="our-bubble-item" />
            </div>

            <Container>
                <div tw="flex justify-between lg:flex-row flex-col mb-[106px]">
                    <div>
                        <img src={ourBg} alt="ourBg" tw="w-full" />
                    </div>
                    <div tw="lg:max-w-[475px] w-full flex flex-col items-center justify-center">
                        <h3 className="text-heading">Our Vision</h3>
                        <p className="text-title">Be the best and go international</p>
                        <div>
                            <p className="text-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero.
                            </p>
                            <br />
                            <p className="text-desc">
                                Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container>
                <div tw="flex justify-between lg:flex-row flex-col mb-[123px]">
                    <div tw="lg:max-w-[545px] w-full flex flex-col items-center justify-center">
                        <h3 className="text-heading">Our Mission</h3>
                        <p className="text-title">
                            Special & premium service <br />
                            to any clients
                        </p>
                        <div>
                            <p className="text-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                                amet. Egestas volutpat facilisi eu libero.
                            </p>
                            <br />
                            <p className="text-desc">
                                Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={mision} alt="mision" tw="w-full" />
                    </div>
                </div>
            </Container>

            <div tw="max-w-[962px] mx-auto text-center mb-[123px]">
                <div tw="mb-[94px]">
                    <h4 className="text-heading">Our Clients</h4>
                    <p className="text-title">Well-known agencies</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div tw="flex justify-between items-center flex-wrap gap-2">
                    {brands?.map((item) => (
                        <img loading="lazy" key={item?.id} src={item?.src} alt={item?.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Our;
