import tw from 'twin.macro';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('~/pages/About/AboutPage'));
const ServicePage = React.lazy(() => import('./pages/Service/ServicePage'));
const GalleryPage = React.lazy(() => import('./pages/Gallery/GalleryPage'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const Team = React.lazy(() => import('~/pages/Team/Team'));

function App() {
    return (
        <>
            <Suspense
                fallback={
                    <div tw="w-screen h-screen flex justify-center items-center">
                        <div className="loader"></div>
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<ServicePage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/teams" element={<Team />} />
                    </Route>
                </Routes>
            </Suspense>

            <ToastContainer />
        </>
    );
}

export default App;
