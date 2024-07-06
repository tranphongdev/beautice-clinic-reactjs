import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import Play_button from '~/assets/PlayBtn.svg';

function Slogan() {
    return (
        <div className="slogan-gallery">
            <Container>
                <div tw="py-[170px] max-w-[555px] mb-[120px] mx-auto text-center flex flex-col items-center">
                    <div>
                        <h3 tw="text-[36px] text-white font-semibold mb-[13px]">Watch the video tour</h3>
                        <p tw="text-[#CACACA] mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis
                        </p>
                    </div>
                    <div>
                        <img src={Play_button} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Slogan;
