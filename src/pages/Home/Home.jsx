import { Suspense } from 'react';

const Hero = React.lazy(() => import('./Hero'));
const Services = React.lazy(() => import('./Services'));
const About = React.lazy(() => import('./About'));
const Professional = React.lazy(() => import('./Professional'));
const Contact = React.lazy(() => import('./Contact'));

function Home() {
    return (
        <>
            <Suspense
                fallback={
                    <div tw="w-screen h-screen flex justify-center items-center">
                        <div className="loader"></div>
                    </div>
                }
            >
                <Hero />
                <Services />
                <About />
                <Professional />
                <Contact />
            </Suspense>
        </>
    );
}

export default Home;
