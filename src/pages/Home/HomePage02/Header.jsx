import { Link, NavLink } from 'react-router-dom';
import { Container } from '~/constants/styled';
import Logo from '~/assets/logo-white.svg';
import { menus } from '~/constants';
import { Fragment } from 'react';
import Button from '~/components/Button';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import tw from 'twin.macro';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSupMenu, setShowSubMenu] = useState(false);
    return (
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
                            <Fragment key={index}>
                                {index === 0 ? (
                                    <li tw="text-[#D8DCFF] hover:text-white">
                                        <NavLink
                                            to={menu?.path}
                                            tw="tracking-[1.6px] font-medium transition-colors"
                                            className={({ isActive }) => (isActive ? 'active' : '')}
                                        >
                                            {menu?.title} +
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li tw="text-[#D8DCFF] hover:text-white">
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
                        <div onClick={() => setShowSubMenu(!showSupMenu)} tw="text-white">
                            <Button color="pink">
                                More <i className="fa-solid fa-chevron-down"></i>
                            </Button>
                        </div>

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
    );
}

export default Header;
