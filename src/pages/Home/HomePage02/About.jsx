import tw from 'twin.macro';

import aboutHomepage from '~/assets/about-homepage.svg';
import Button from '~/components/Button';
import { Container } from '~/constants/styled';

function About() {
    return (
        <Container>
            <div tw="lg:mt-[158px] mt-0 flex lg:flex-row flex-col justify-between lg:gap-0 gap-5">
                <div>
                    <img src={aboutHomepage} alt="aboutHomepage" tw="w-full" />
                </div>
                <div tw="max-w-[483px]">
                    <h3 className="text-heading">About Us</h3>
                    <p className="text-title">We are the best beauty clinic</p>
                    <p className="text-desc" tw="mb-[35px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus
                        in suspendisse placerat.
                    </p>
                    <Button color="pink">Learn More</Button>
                </div>
            </div>
        </Container>
    );
}

export default About;
