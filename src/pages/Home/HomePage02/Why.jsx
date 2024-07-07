import tw from 'twin.macro';

import WhyImg from '~/assets/HomeBG02.png';
import { Container } from '~/constants/styled';
import handshake from '~/assets/handshake.svg';
import brotherhood from '~/assets/brotherhood.svg';
import earth from '~/assets/earth.svg';
import doctor from '~/assets/doctor.svg';

function Why() {
    return (
        <div tw="relative">
            <img src={WhyImg} alt="WhyImg" className="why-homepage" />

            <Container>
                <div tw="lg:pt-[272px] gap-3 pt-[65px] pb-[245px] flex justify-between lg:flex-row flex-col">
                    <div tw="max-w-[486px]">
                        <h3 tw="text-white text-[36px] font-semibold mb-[12px]">Why choosing us?</h3>
                        <p tw="text-[#D8DCFF] tracking-[1.6px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis.
                        </p>
                    </div>

                    <div tw="flex flex-wrap lg:gap-[72px] gap-10">
                        <div tw="flex items-center gap-[11px]">
                            <img src={handshake} alt="handshake" />
                            <div>
                                <p tw="text-[36px] text-white font-semibold">100%</p>
                                <p tw="text-[#D8DCFF]">trusted clinic</p>
                            </div>
                        </div>

                        <div tw="flex items-center gap-[11px]">
                            <img src={brotherhood} alt="brotherhood" />
                            <div>
                                <p tw="text-[36px] text-white font-semibold">99%</p>
                                <p tw="text-[#D8DCFF]">customer love</p>
                            </div>
                        </div>

                        <div tw="flex items-center gap-[11px]">
                            <img src={earth} alt="earth" />
                            <div>
                                <p tw="text-[36px] text-white font-semibold">75+</p>
                                <p tw="text-[#D8DCFF]">asian branch</p>
                            </div>
                        </div>

                        <div tw="flex items-center gap-[11px]">
                            <img src={doctor} alt="doctor" />
                            <div>
                                <p tw="text-[36px] text-white font-semibold">1.200+</p>
                                <p tw="text-[#D8DCFF]">licensed worker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Why;
