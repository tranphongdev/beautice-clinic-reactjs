import { Container } from '~/constants/styled';
import PlayButton from '~/assets/PlayButton.svg';
import tw from 'twin.macro';

function Slogan() {
    return (
        <div className="slogan-service">
            <Container>
                <div tw="py-[182px] flex items-center justify-between lg:flex-row flex-col">
                    <div>
                        <p tw="text-[36px] font-semibold text-white max-w-[600px] mb-3">
                            Best responsibility and service for our customers
                        </p>
                        <p tw="text-[#CACACA] tracking-[1.6px] max-w-[555px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </p>
                    </div>

                    <div>
                        <img src={PlayButton} alt="PlayButton" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Slogan;
