import { Suspense } from 'react';
import { Container } from '~/constants/styled';

const Our = React.lazy(() => import('./Our'));
const Slogan = React.lazy(() => import('./Slogan'));
const Quota = React.lazy(() => import('./Quota'));

function GalleryPage() {
    return (
        <Suspense
            fallback={
                <div tw="w-screen h-screen flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            }
        >
            <Container>
                <Our />
            </Container>

            <Slogan />
            <Quota />
        </Suspense>
    );
}

export default GalleryPage;
