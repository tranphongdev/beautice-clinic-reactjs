import { Global } from '@emotion/react';
import { css, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
    :root {
        --primary: #ff64ae;
        --primary-dark: #e84393;
        --text-blue: #414880;
        --text-blue-dark: #091156;
        --gray: #8b8b8b;
        --white: #fff;
        --black: #000;
    }

    html {
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    @keyframes slideIn {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    .show-menu {
        animation: slideIn 0.3s ease forwards;
    }

    .close-menu {
        animation: slideOut 0.3s ease forwards;
    }

    .text-heading {
        color: var(--primary);
        font-size: 16px;
        line-height: 125%;
        font-weight: 600;
        font-family: Poppins;
        text-transform: capitalize;
    }

    .text-title {
        color: var(--text-blue-dark);
        font-family: Poppins;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        margin: 12px 0;
    }

    .text-desc {
        color: var(--gray);
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.6px;
    }

    /* Hero */
    .hero {
        position: relative;
    }

    .hero-bubble {
        position: absolute;
        z-index: -9999;
        left: 0;
        top: -265px;
    }

    .hero-bubble-item {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 97%;
    }

    /* Service Home */
    .service {
        position: relative;
    }

    .service-item {
        border-radius: 42px;
        background: #fff;
        box-shadow: 0px 25px 50px 25px #f6f7ff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 35px;
        text-align: center;
        cursor: pointer;
    }

    .service-bubble {
        position: absolute;
        top: 47%;
        right: 0;
        z-index: -999;
    }

    .service-bubble-item {
        position: absolute;
        right: 0;
        top: 14px;
    }

    .shadow-icon {
        box-shadow: -2px 6px 16px #e6e9fd;
    }

    /* Contact Home */
    .contact {
        position: relative;
        margin-bottom: 70px;
    }
    .contact-bubble {
        position: absolute;
        top: -200px;
        left: 0;
        z-index: -9999;
    }
    .contact-bubble-item {
        position: absolute;
        left: 0;
        top: 24px;
        z-index: -9999;
    }

    /* Forms */
    .form-control {
        display: block;
        width: 100%;
        margin-bottom: 39px;
        background-color: var(--white);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1.6px;
        border-radius: 15px;
        border: 1px solid #d9ddfe;
        outline-color: var(--primary);
        transition: all 0.5s;
        padding: 17px 24px;
        color: var(--gray);
        caret-color: var(--primary);
        /* position: relative; */
    }

    .form-control::placeholder {
        color: #c5c5c5;
    }

    /* Footer */
    .footer {
        position: relative;
        background-repeat: no-repeat;
        background-image: url('./src/assets/footer-bg-dark.svg');
        background-size: cover;
        overflow: hidden;
    }
    .footer-bg-bottom {
        position: absolute;
        bottom: 0;
        z-index: -10;
        width: 100%;
        height: 300px;
        background-color: #0d165c;
    }
    .footer-bubble-item {
        position: absolute;
        z-index: -9;
        width: 100%;
    }

    #btnScrollToTop {
        display: none;
        position: fixed;
        bottom: 60px;
        right: 65px;
        z-index: 99;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: var(--primary);
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 5px;
        width: 36px;
        height: 36px;
        transition: all 0.5s;
    }

    #btnScrollToTop:hover {
        background-color: #d15d95;
    }

    .active {
        color: var(--text-blue-dark);
        border-bottom: 2px solid var(--primary);
        transition: all 0.3s ease-in-out;
    }

    .about-page {
        position: relative;
    }
    .about-page-bubble {
        position: absolute;
        top: 408px;
        right: 0;
        z-index: -9999;
    }
    .about-page-bubble-item {
        position: absolute;
        top: 30px;
        right: 0;
    }
    .slogan {
        background-image: url('./src/assets/bgSlogan.png');
        margin: 149px 0 112px;
        text-align: center;
    }

    .our {
        position: relative;
    }
    .our-bubble {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -9999;
    }
    .our-bubble-item {
        position: absolute;
        top: 50px;
        left: 0;
    }
    .our-service {
        position: relative;
        margin: 102px 0 130px;
    }
    .our-service-bubble {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -9999;
    }
    .our-service-bubble-item {
        position: absolute;
        top: 31px;
        left: 0;
        width: 100%;
    }
    .slogan-service {
        background-image: url('./src/assets/slogan-service.png');
        background-repeat: no-repeat;
        background-size: cover;
        margin: 160px 0 116px;
    }

    @keyframes down {
        from {
            transform: translateY(-50px);
            opacity: 0;
            visibility: hidden;
        }
        to {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }

    @keyframes downSubmenu {
        from {
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
        }
        to {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }

    .submenu-down {
        animation: downSubmenu 0.3s ease forwards;
        transition: all 0.3s ease-out;
        background-color: var(--white);
        position: absolute;
        top: 100%;
        width: 100%;
        margin-top: 10px;
        z-index: 9999;
    }

    .tab-content-down {
        animation: down 0.3s ease forwards;
        border-radius: 0px 0px 20px 20px;
        /* background: #f6f7ff; */
        transition: all 0.3s ease-in-out;
    }
    .block {
        display: block;
    }
    .hidden {
        display: none;
    }

    .slogan-gallery {
        background-image: url('./src/assets/slogan-gallry.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .quota {
        position: relative;
        margin-bottom: 74px;
    }
    .quota-bubble {
        position: absolute;
        top: -120px;
        right: 0;
        z-index: -9999;
    }
    .quota-bubble-item {
        position: absolute;
        top: 0;
        right: 0;
    }
    .blog {
        background-image: url('./src/assets/blog-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        margin: 36px 0 108px;
    }
    .shadow {
        box-shadow: -2px 4px 31px 9px #f2f4ff;
    }
    .tag {
        color: #8b8b8b;
        text-align: center;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.4px;
        border-radius: 50px;
        background: #fff;
        box-shadow: 0px 4px 17px 0px #eef0ff;
        padding: 2px 6px;
    }
    .active-pagi {
        background-color: var(--primary);
        color: var(--white);
        width: 35px;
        height: 35px;
        border-radius: 50%;
        font-weight: 600;
    }
    .unactive-pagi {
        color: #c7c7c7;
        width: 35px;
        border-radius: 50%;
        height: 35px;
        text-align: center;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
    }

    /* HTML: <div class="loader"></div> */
    .loader {
        width: 50px;
        padding: 8px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--primary);
        --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
        -webkit-mask: var(--_m);
        mask: var(--_m);
        -webkit-mask-composite: source-out;
        mask-composite: subtract;
        animation: l3 1s infinite linear;
    }
    @keyframes l3 {
        to {
            transform: rotate(1turn);
        }
    }

    .team-bubble {
        position: absolute;
        z-index: -9999;
        right: 0;
    }
`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
);

export default GlobalStyles;
