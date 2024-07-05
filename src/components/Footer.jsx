import tw from 'twin.macro';
import { iconFooterSocials, infoMenu, menus } from '~/constants';
import { Container } from '~/constants/styled';
import FooterBgLight from '~/assets/footer-bg-light.svg';
import FooterLogo from '~/assets/FooterLogo.svg';
import caretRight from '~/assets/caret-right.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-bg-bottom"></div>
            <div className="footer-bubble">
                <img src={FooterBgLight} alt="FooterBgLight" className="footer-bubble-item" />
            </div>

            <Container>
                {/* Footer top */}
                <div tw="mt-[225px] mb-[142px] gap-10 lg:gap-0 items-center flex lg:flex-row flex-col justify-between lg:items-start">
                    <div>
                        <div tw="mb-[33px]">
                            <img src={FooterLogo} alt="FooterLogo" />
                        </div>
                        <p tw="text-[#D7DBFF] font-normal tracking-[1.6px] mb-[26px]">
                            <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                        </p>
                        <p tw="text-[#D7DBFF] tracking-[1.4px] font-medium italic text-sm">
                            Baker Steet 101, NY, United States.
                        </p>
                        <div tw="flex gap-[28px] mt-2">
                            <span tw="text-[#D7DBFF] tracking-[1.4px] font-medium italic text-sm">+521 569 8966.</span>
                            <span tw="text-[#D7DBFF] tracking-[1.4px] font-medium italic text-sm">
                                mail@company.com.
                            </span>
                        </div>
                    </div>

                    <div tw="flex lg:gap-[175px] justify-between w-full lg:w-auto">
                        <div>
                            <h2 tw="text-[18px] tracking-[1.8px] font-semibold text-white mb-6">Pages</h2>
                            <ul>
                                {menus?.map((menu) => (
                                    <li key={menu?.key}>
                                        <Link to={menu?.path} tw="flex items-center gap-[5px] mb-[11px] text-[#D7DBFF]">
                                            <img src={caretRight} alt="caretRight" /> {menu?.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 tw="text-[18px] tracking-[1.8px] font-semibold text-white mb-6">Informations</h2>
                            <ul>
                                {infoMenu?.map((menu) => (
                                    <li key={menu?.id}>
                                        <a href="" tw="flex items-center gap-[5px] mb-[11px] text-[#D7DBFF]">
                                            <img src={caretRight} alt="caretRight" /> {menu?.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div tw="mb-[90px] flex lg:flex-row flex-col gap-5 lg:gap-0 justify-between items-center">
                    <div tw="flex items-center gap-[45px]">
                        {iconFooterSocials?.map((icon) => (
                            <img key={icon?.id} src={icon?.src} alt="icon" />
                        ))}
                    </div>

                    <p tw="tracking-[1.6px] text-[#D7DBFF] font-normal">
                        © AltDesain Studio 2021 - All right reserved.
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
