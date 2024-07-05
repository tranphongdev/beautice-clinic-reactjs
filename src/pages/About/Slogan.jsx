import tw from 'twin.macro';
import { Container } from '~/constants/styled';

function Slogan() {
    return (
        <div className="slogan">
            <Container>
                <div tw="pt-[164px] pb-[168px] text-white">
                    <h3 tw="text-[#ABB4FF] font-semibold text-base">Business Slogan</h3>
                    <p tw="my-3 text-[36px] font-semibold">
                        Best responsibility and service <br /> for our customers
                    </p>
                    <p tw="text-[#CACACA] tracking-[1.6px] text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus
                        venenatis
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default Slogan;
