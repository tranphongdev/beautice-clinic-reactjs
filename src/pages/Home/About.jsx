import { Container } from '~/constants/styled';
import AboutImg from '~/assets/about-img.svg';
import Button from '~/components/Button';
import Play_button from '~/assets/Play_button.svg';
import tw from 'twin.macro';

function About() {
    return (
        <Container>
            <div tw="flex mt-[135px] items-center lg:flex-row flex-col">
                {/* About content */}
                <div>
                    <h3 className="text-heading">About Us</h3>
                    <p className="text-title" tw="lg:w-[600px] w-auto">
                        We are the best beauty clinic
                    </p>
                    <div className="text-desc" tw="max-w-[483px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec
                            amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.
                            Varius tellus in suspendisse placerat.
                        </p>
                        <br />
                        <p>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                    </div>

                    <div tw="flex lg:flex-row flex-col items-center gap-[44px] mt-[49px]">
                        <Button color="pink">Learn More</Button>
                        <div tw="flex items-center gap-3">
                            <img src={Play_button} alt="Play_button" />
                            <span tw="text-[#8B8B8B] font-semibold tracking-[1.6px]">Watch Video</span>
                        </div>
                    </div>
                </div>

                {/* About image */}
                <div>
                    <img src={AboutImg} alt="AboutImg" />
                </div>
            </div>
        </Container>
    );
}

export default About;
