import tw from 'twin.macro';
import { images } from '~/constants';
import slogangallry from '~/assets/slogan-gallry.png';

function Our() {
    return (
        <div>
            <div tw="flex lg:flex-row flex-col mt-[132px] mb-[75px] items-center lg:gap-[98px] gap-10">
                <div>
                    <h3 className="text-heading">Our Gallery</h3>
                    <p className="text-title">Check out the collection pictures from our clinic</p>
                </div>
                <p className="text-desc" tw="lg:max-w-[407px] w-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                </p>
            </div>

            <div tw="grid lg:grid-cols-3 md:grid-cols-2 gap-[36px] mb-[66px]">
                {images?.map((img) => (
                    <img key={img?.id} src={img?.src} alt="img" tw="w-full" />
                ))}
            </div>

            <p tw="text-[var(--gray)] max-w-[660px] mb-[126px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,{' '}
                <span tw="text-[var(--text-blue-dark)] font-semibold">our teams.</span>
            </p>
        </div>
    );
}

export default Our;
