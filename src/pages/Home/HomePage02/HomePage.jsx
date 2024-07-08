import tw from 'twin.macro';
import { Suspense } from 'react';
import ScrollTop from '~/utils/scrollTop';
import Footer from '~/components/Footer';

const Header = React.lazy(() => import('./Header'));
const Hero = React.lazy(() => import('./Hero'));
const About = React.lazy(() => import('./About'));
const Service = React.lazy(() => import('./Service'));
const Why = React.lazy(() => import('./Why'));
const Blog = React.lazy(() => import('./Blog'));
const Request = React.lazy(() => import('./Request'));

function HomePage() {
    return (
        <Suspense
            fallback={
                <div tw="w-screen h-screen flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            }
        >
            <Header />
            <Hero />
            <About />
            <Service />
            {/* <Why /> */}
            <Blog />
            <Request />
            <Footer />

            <ScrollTop />
        </Suspense>
    );
}

export default HomePage;
