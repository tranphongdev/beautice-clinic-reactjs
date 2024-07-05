import tw from 'twin.macro';
import Recent01 from '~/assets/recent01.svg';
import Recent02 from '~/assets/recent02.svg';
import Recent03 from '~/assets/recent03.svg';
import TwitterBlog from '~/assets/Twitter-Blog.svg';
import InstagramBlog from '~/assets/Instagram-Blog.svg';
import Linkedin from '~/assets/Linkedin.svg';
import Facebook from '~/assets/Facebook.svg';
import { iconUserSocial } from '~/constants';

function Widgets() {
    return (
        <div>
            {/* Search */}
            <div className="shadow" tw="rounded-[50px] overflow-hidden flex justify-between">
                <input type="text" tw="py-5 w-full pl-[27px] outline-none" placeholder="Search here ..." />
                <div tw="h-full text-center text-white text-[18px] cursor-pointer py-5  bg-[var(--text-blue-dark)] min-w-[76px]">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            {/* Recent Posts */}
            <div className="shadow" tw="rounded-[25px] mt-[76px] mb-[83px] pt-[58px] pl-[49px] pr-[28px] pb-[65px]">
                <h3 tw="text-[#091156] mb-[30px] font-semibold">Recent Posts</h3>
                <div tw="flex justify-between items-center mb-[26px]">
                    <div>
                        <img src={Recent01} alt="Recent01" />
                    </div>
                    <div tw="max-w-[165px]">
                        <h4 tw="text-[#FF64AE] text-sm tracking-[1.4px] font-semibold">01 jan 2021</h4>
                        <p tw="text-[#8B8B8B] text-xs tracking-[1.2px] mt-[6px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>

                <div tw="flex justify-between items-center mb-[26px]">
                    <div>
                        <img src={Recent02} alt="Recent01" />
                    </div>
                    <div tw="max-w-[165px]">
                        <h4 tw="text-[#FF64AE] text-sm tracking-[1.4px] font-semibold">01 jan 2021</h4>
                        <p tw="text-[#8B8B8B] text-xs tracking-[1.2px] mt-[6px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>

                <div tw="flex justify-between items-center">
                    <div>
                        <img src={Recent03} alt="Recent01" />
                    </div>
                    <div tw="max-w-[165px]">
                        <h4 tw="text-[#FF64AE] text-sm tracking-[1.4px] font-semibold">01 jan 2021</h4>
                        <p tw="text-[#8B8B8B] text-xs tracking-[1.2px] mt-[6px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="shadow" tw="rounded-[25px] pt-[58px] pb-[49px] pl-[49px]">
                <h4 tw="text-[#091156] mb-[22px] font-semibold text-base">Categories</h4>
                <ul>
                    <li tw="text-[#8B8B8B] text-sm tracking-[1.4px] mb-1">Consultation</li>
                    <li tw="text-[#8B8B8B] text-sm tracking-[1.4px] mb-1">Beauty</li>
                    <li tw="text-[#8B8B8B] text-sm tracking-[1.4px] mb-1">Treatments</li>
                    <li tw="text-[#8B8B8B] text-sm tracking-[1.4px] mb-1">News</li>
                </ul>
            </div>

            {/* Tags */}
            <div className="shadow" tw="rounded-[25px] my-[83px] pt-[58px] pb-[49px] px-[49px]">
                <h3 tw="text-[#091156] mb-[22px] font-semibold text-base">Cloud Tags</h3>
                <div tw="grid grid-cols-3 gap-5">
                    <span className="tag">beauty</span>
                    <span className="tag">cute</span>
                    <span className="tag">skin</span>
                    <span className="tag">glow</span>
                    <span className="tag">style</span>
                    <span className="tag">clinic</span>
                    <span className="tag">style</span>
                    <span className="tag">great</span>
                    <span className="tag">cute</span>
                </div>
            </div>

            {/* Social Connect */}
            <div className="shadow" tw="rounded-[25px] my-[83px] pt-[58px] pb-[49px] px-[49px]">
                <h3 tw="text-[#091156] mb-[22px] font-semibold text-base">Social Connect</h3>

                <div tw="flex items-center gap-[34px]">
                    {iconUserSocial?.map((icon) => (
                        <div
                            key={icon?.id}
                            className="shadow-icon"
                            tw="w-[43px] h-[43px] rounded-full bg-white flex items-center justify-center"
                        >
                            <img src={icon?.src} alt="icon" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Widgets;
