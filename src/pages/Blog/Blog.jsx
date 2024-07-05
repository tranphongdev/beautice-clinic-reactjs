import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import Posts from './Posts';
import Widgets from './Widgets';
import { useState } from 'react';

function Blog() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className="blog">
                <Container>
                    <div tw="flex justify-between items-center lg:py-[131px] py-[40px] text-white">
                        <span tw="text-[36px] font-semibold">Blog</span>
                        <p tw="text-[#D9D9D9] font-medium tracking-[1.6px]">Home • Blog</p>
                    </div>
                </Container>
            </div>

            <Container>
                <div tw="flex lg:gap-[60px] justify-between lg:items-start items-center lg:flex-row flex-col">
                    {/* Posts */}
                    <div tw="lg:w-[730px] w-full">
                        <Posts />
                    </div>

                    {/* Widgets */}
                    <div tw="lg:max-w-[350px] w-full">
                        <Widgets />
                    </div>
                </div>
            </Container>

            {/* Pagination */}
            <div tw="flex justify-center gap-4 mb-[56px]">
                {[1, 2, 3, 4].map((num, index) => (
                    <button
                        key={index}
                        tw="transition-all"
                        className={index === activeIndex ? 'active-pagi' : 'unactive-pagi'}
                        onClick={() => handleClick(index)}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Blog;
