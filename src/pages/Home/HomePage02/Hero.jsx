import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import HeroImg from '~/assets/HomeBG01.png';
import Play from '~/assets/Play.svg';

function Hero() {
    return (
        <div tw="pt-[204px] lg:pb-[314px] pb-[240px]" className="hero-homepage">
            <img loading="lazy" src={HeroImg} alt="HeroImg" className="hero-homepage-img" />
            <Container>
                <div tw="flex lg:justify-between items-start lg:items-center lg:flex-row flex-col justify-start">
                    <div tw="max-w-[501px]">
                        <p tw="text-[48px] font-semibold text-white">Your beauty center place</p>
                        <p tw="text-[#D8DCFF] tracking-[1.6px] font-medium mb-[34px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu
                            fusce et magna consequat neque vitae lobortis.
                        </p>
                        <button tw="py-[14px] px-[31px] hover:bg-[var(--primary)] hover:text-white transition-colors tracking-[1.6px] font-semibold text-white border border-white rounded-[15px]">
                            More Details
                        </button>
                    </div>
                    <div tw="flex items-center gap-[46px]">
                        <img src={Play} alt="Play" />
                        <span tw="tracking-[1.6px] font-semibold text-white">Tour Video</span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Hero;
