import tw from 'twin.macro';
import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

import { Container } from '~/constants/styled';
import { menus } from '~/constants';
import Logo from '~/assets/logo-blue.svg';
import Button from '~/components/Button';
import { Fragment } from 'react';

const Footer = React.lazy(() => import('~/components/Footer'));

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSupMenu, setShowSubMenu] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
        // Xoá sự kiện khi component unmout
        return () => {
            window.onscroll = null;
        };
    }, []);

    const scrollFunction = () => {
        const btnScrollToTop = document.getElementById('btnScrollToTop');
        // Hiển thị nút khi scroll xuống 20px từ đầu trang
        if (btnScrollToTop) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnScrollToTop.style.display = 'flex';
            } else {
                btnScrollToTop.style.display = 'none';
            }
        }
    };

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <Suspense
            fallback={
                <div tw="w-screen h-screen flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            }
        >
            <Container>
                <header tw="mt-[41px] flex justify-between items-center bg-transparent">
                    {/* Logo */}
                    <Link to="/">
                        <div tw="cursor-pointer w-[258px] h-[63px]">
                            <img src={Logo} alt="Logo" tw="w-full h-full object-cover" />
                        </div>
                    </Link>

                    {/* Header Right */}
                    <div tw="lg:flex hidden items-center gap-[52px]">
                        {/* Menu */}
                        <ul tw="flex items-center gap-[47px]">
                            {menus?.map((menu, index) => (
                                <Fragment key={menu?.key}>
                                    {index === 0 ? (
                                        <li tw="text-[#8B8B8B] hover:text-[#414880]">
                                            <NavLink
                                                to={menu?.path}
                                                tw="tracking-[1.6px] font-medium transition-colors"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                            >
                                                {menu?.title} +
                                            </NavLink>
                                        </li>
                                    ) : (
                                        <li tw="text-[#8B8B8B] hover:text-[#414880]">
                                            <NavLink
                                                to={menu?.path}
                                                tw="tracking-[1.6px] font-medium transition-colors"
                                                className={({ isActive }) => (isActive ? 'active' : '')}
                                            >
                                                {menu?.title}
                                            </NavLink>
                                        </li>
                                    )}
                                </Fragment>
                            ))}
                        </ul>

                        {/* Btn Contact */}
                        <div tw="relative">
                            <button onClick={() => setShowSubMenu(!showSupMenu)} tw="text-white">
                                <Button color="pink">
                                    More <i className="fa-solid fa-chevron-down"></i>
                                </Button>
                            </button>

                            {/* Sub menu */}
                            {showSupMenu && (
                                <ul
                                    tw="bg-white shadow-lg flex flex-col rounded-[20px] px-3 py-3"
                                    className={`${showSupMenu ? 'submenu-down' : ''}`}
                                >
                                    <Link
                                        onClick={() => setShowSubMenu(!showSupMenu)}
                                        tw="py-2 px-2 transition-colors rounded-[8px] hover:text-white hover:bg-[var(--primary)]"
                                        to="/teams"
                                    >
                                        Teams
                                    </Link>
                                    <Link
                                        onClick={() => setShowSubMenu(!showSupMenu)}
                                        tw="py-2 px-2 transition-colors rounded-[8px] hover:text-white hover:bg-[var(--primary)]"
                                        to="/contact"
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        onClick={() => setShowSubMenu(!showSupMenu)}
                                        tw="py-2 px-2 transition-colors rounded-[8px] hover:text-white hover:bg-[var(--primary)]"
                                        to="/home"
                                    >
                                        Home Page 2
                                    </Link>
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Button Bars */}
                    <FaBars
                        onClick={() => setShowMenu(!showMenu)}
                        tw="lg:hidden block w-7 h-7 cursor-pointer text-[var(--primary)] hover:text-[var( --primary-dark)] transition-colors"
                    />

                    {/* Menu Mobile */}
                    {showMenu && (
                        <div
                            className={`${showMenu ? 'show-menu' : 'close-menu'}`}
                            tw="lg:hidden block fixed top-0 left-0 w-[280px] h-[100vh] bg-white shadow-2xl z-10 px-2"
                        >
                            {/* Logo */}
                            <div tw="max-w-[200px] mx-auto my-6 cursor-pointer">
                                <img src={Logo} alt="" tw="w-full" />
                            </div>

                            {/* Menu */}
                            <ul>
                                {menus?.map((menu) => (
                                    <li key={menu?.key}>
                                        <NavLink
                                            onClick={() => setShowMenu(false)}
                                            to={menu?.path}
                                            tw="inline-block font-medium py-2 px-10 w-full rounded transition-all hover:text-white text-[var(--text-blue-dark)] text-[16px] hover:bg-[var(--primary)]"
                                        >
                                            {menu?.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Close */}
                            <div
                                onClick={() => setShowMenu(!showMenu)}
                                tw="absolute top-[30px] right-[15px] cursor-pointer"
                            >
                                <i
                                    className="fa-regular fa-circle-xmark"
                                    tw="text-3xl text-[var(--primary)] hover:text-[var(--primary-dark)]"
                                ></i>
                            </div>
                        </div>
                    )}
                </header>
            </Container>

            <Outlet />

            <Footer />

            <button onClick={scrollToTop} id="btnScrollToTop" title="Go to top">
                {/* <img src={arrowUp} alt="Arrow Up" /> */}
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </Suspense>
    );
}

export default Header;
