import { Suspense } from 'react';

const Professional = React.lazy(() => import('../Home/Professional'));
const About = React.lazy(() => import('./About'));
const Our = React.lazy(() => import('./Our'));
const Slogan = React.lazy(() => import('./Slogan'));

function AboutPage() {
    return (
        <Suspense
            fallback={
                <div tw="w-screen h-screen flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            }
        >
            <About />
            <Professional />
            <Slogan />
            <Our />
        </Suspense>
    );
}

export default AboutPage;
