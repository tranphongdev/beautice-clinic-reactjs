import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import PlayButton from '~/assets/Play_button.svg';
import ab from '~/assets/about.png';
import Vector1 from '~/assets/Vector1.svg';
import Vector2 from '~/assets/Vector2.svg';

function About() {
    return (
        <div className="about-page">
            <Container>
                <div tw="mt-[125px] mb-[136px] flex flex-col items-start">
                    <div>
                        <h3 className="text-heading">About</h3>
                        <p className="text-title">
                            We are a leading beauty clinic that has <br /> been around since 2002
                        </p>
                        <p className="text-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </p>
                    </div>

                    <div tw="relative mt-[58px]">
                        <img src={ab} alt="AboutBanner" tw="rounded-[45px]" />
                        <img
                            src={PlayButton}
                            alt="PlayButton"
                            tw="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[88px] lg:h-[88px] w-auto cursor-pointer"
                        />
                    </div>
                </div>
            </Container>

            <div className="about-page-bubble">
                <img loading="lazy" src={Vector1} alt="Vector1" />
                <img loading="lazy" src={Vector2} alt="Vector2" className="about-page-bubble-item" />
            </div>
        </div>
    );
}

export default About;
