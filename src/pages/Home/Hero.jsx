import tw from 'twin.macro';
import { Container } from '~/constants/styled';

import HeroImg from '~/assets/hero-img.svg';
import Bubble from '~/assets/bubble-bg.svg';
import BubbleItem from '~/assets/bubble-bg-item.svg';
import Button from '~/components/Button';
import SliderButton from '~/assets/slide-btn.svg';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-bubble">
                <img src={Bubble} alt="Bubble" />
                <img src={BubbleItem} alt="BubbleItem" className="hero-bubble-item" />
            </div>

            <Container>
                <div css={[tw`mt-[159px] flex flex-col lg:flex-row justify-between gap-[22px]`]}>
                    {/* Hero content */}
                    <div tw="flex flex-col lg:items-start items-center">
                        <h1 tw="text-[var(--text-blue-dark)] lg:text-[48px] text-[43px] font-semibold">
                            Clinic & beauty <br /> consultant
                        </h1>
                        <p tw="text-[var(--text-blue-dark)] font-medium text-base tracking-[1.6px] mb-[28px]">
                            It is a long established fact that a reader will be by the readable content of a page.
                        </p>
                        <Button color="pink">More Details</Button>
                    </div>

                    {/* Hero img */}
                    <div tw="lg:min-w-[602px] min-w-[100px] lg:h-[398px] h-auto">
                        <img src={HeroImg} alt="HeroImg" tw="w-full h-full" />
                    </div>
                </div>
            </Container>

            <div tw="lg:mt-[136px] my-[90px] lg:mb-[131px] flex justify-center">
                <img src={SliderButton} alt="SliderButton" />
            </div>
        </div>
    );
}

export default Hero;
