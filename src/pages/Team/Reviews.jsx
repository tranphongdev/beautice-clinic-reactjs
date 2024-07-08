import tw from 'twin.macro';
import girl from '~/assets/girl.svg';
import Star from '~/assets/Star.svg';
import Right from '~/assets/Right.svg';

function Reviews() {
    return (
        <div tw="relative">
            <img src={Right} alt="" tw="absolute right-0 top-[189px]" />
            <div tw="lg:max-w-[775px] w-full mx-auto mb-[86px] ">
                <div tw="lg:max-w-[680px] w-full px-2 lg:px-0 mx-auto text-center mt-[153px] mb-[110px]">
                    <h3 className="text-heading">Our Testimonials</h3>
                    <p className="text-title">What our customer says</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div tw="flex justify-between items-center gap-[40px] max-w-full">
                    <div tw="px-2">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div tw="flex flex-col items-center text-center">
                        <div>
                            <img src={girl} alt="girl" />
                        </div>
                        <p tw="mt-[44px] mb-[33px] text-[var(--gray)] tracking-[1.4px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet
                            ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui
                            dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis
                            gravida blandit.
                        </p>
                        <div>
                            <img src={Star} alt="Star" />
                        </div>
                    </div>
                    <div tw="px-2">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
