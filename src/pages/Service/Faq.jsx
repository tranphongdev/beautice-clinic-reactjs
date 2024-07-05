import tw from 'twin.macro';
import LineTitle from '~/assets/LineTittle.svg';
import { useState } from 'react';
import { faqs } from '~/constants';

function Faq() {
    const [show, setShow] = useState(false);
    const [indexItem, setIndexItem] = useState({});
    const handleShow = (index) => {
        setShow(!show);
        setIndexItem((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div tw="max-w-[972px] px-[20px] mx-auto">
            <div tw="flex flex-col justify-center items-center mb-[68px]">
                <h3 className="text-title">Services FAQ’s</h3>
                <div>
                    <img src={LineTitle} alt="LineTitle" />
                </div>
            </div>

            <div>
                {faqs?.map((faq, index) => (
                    <div key={index}>
                        <div tw="flex justify-between items-center border-b border-[var(--text-blue-dark)]">
                            <p tw="text-[var(--text-blue-dark)] font-semibold tracking-[1.6px] py-4 ">{faq?.title}</p>
                            <div onClick={() => handleShow(index)} tw="w-10 cursor-pointer flex justify-end">
                                {indexItem[index] && show ? (
                                    <i className="fa-solid fa-chevron-up"></i>
                                ) : (
                                    <i className="fa-solid fa-chevron-down"></i>
                                )}
                            </div>
                        </div>
                        <div
                            tw="py-[52px] px-[76px] bg-[#f6f7ff]"
                            className={`${show && 'tab-content-down'} ${indexItem[index] ? 'block' : 'hidden'}`}
                        >
                            <div>
                                <p tw="text-[#8B8B8B] italic text-sm tracking-[1.4px]">{faq?.content1}</p>
                                <br />
                                <p tw="text-[#8B8B8B] italic text-sm tracking-[1.4px]">{faq?.content2}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
