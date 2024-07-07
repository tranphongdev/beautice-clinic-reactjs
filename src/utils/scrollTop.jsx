import { useEffect } from 'react';

function ScrollTop() {
    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };

        return () => {
            window.onscroll = null;
        };
    }, []);

    const scrollFunction = () => {
        const btnScrollToTop = document.getElementById('btnScrollToTop');

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
        <button onClick={scrollToTop} id="btnScrollToTop" title="Go to top">
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default ScrollTop;
