import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import blog1 from '~/assets/blog1.svg';
import blog2 from '~/assets/blog2.svg';
import blog3 from '~/assets/blog3.svg';

function Blog() {
    return (
        <Container>
            <div tw="text-center mb-[79px]">
                <h3 className="text-heading">The Blog</h3>
                <p className="text-title">Our latest news</p>
                <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div tw="flex lg:flex-row flex-col gap-[49px] mb-[169px]">
                <div tw="">
                    <img loading="lazy" src={blog1} alt="blog1" tw="w-full" />

                    <div
                        tw="rounded-bl-[25px] rounded-br-[25px] pl-[38px] pr-[21px] pt-[56px] pb-[72px]"
                        className="shadow"
                    >
                        <h3 tw="text-[#091156] font-semibold text-[18px]">
                            How much does a consultation cost at our clinic?
                        </h3>
                        <p tw="text-[#8B8B8B] text-sm tracking-[1.4px] my-3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </p>
                        <p tw="flex gap-2 items-center text-[var(--primary)] font-semibold">
                            Learn more{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M8.00938 9.06416L3.75938 13.5798C3.46563 13.8919 2.99063 13.8919 2.7 13.5798L1.99375 12.8294C1.7 12.5173 1.7 12.0126 1.99375 11.7038L5.00625 8.50303L1.99375 5.30225C1.7 4.99014 1.7 4.48545 1.99375 4.17666L2.69687 3.41963C2.99062 3.10752 3.46562 3.10752 3.75625 3.41963L8.00625 7.93525C8.30312 8.24736 8.30312 8.75205 8.00938 9.06416ZM14.0094 7.93525L9.75937 3.41963C9.46562 3.10752 8.99062 3.10752 8.7 3.41963L7.99375 4.17002C7.7 4.48213 7.7 4.98682 7.99375 5.29561L11.0063 8.49639L7.99375 11.6972C7.7 12.0093 7.7 12.514 7.99375 12.8228L8.7 13.5731C8.99375 13.8853 9.46875 13.8853 9.75937 13.5731L14.0094 9.05752C14.3031 8.75205 14.3031 8.24736 14.0094 7.93525Z"
                                    fill="#FF64AE"
                                />
                            </svg>
                        </p>
                    </div>
                </div>

                <div tw="rounded-[25px]">
                    <img loading="lazy" src={blog2} alt="blog1" tw="w-full" />

                    <div
                        tw="pl-[38px] rounded-bl-[25px] rounded-br-[25px] pr-[21px] pt-[56px] pb-[72px]"
                        className="shadow"
                    >
                        <h3 tw="text-[#091156] font-semibold text-[18px]">
                            How much does a consultation cost at our clinic?
                        </h3>
                        <p tw="text-[#8B8B8B] text-sm tracking-[1.4px] my-3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </p>
                        <p tw="flex gap-2 items-center text-[var(--primary)] font-semibold">
                            Learn more{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M8.00938 9.06416L3.75938 13.5798C3.46563 13.8919 2.99063 13.8919 2.7 13.5798L1.99375 12.8294C1.7 12.5173 1.7 12.0126 1.99375 11.7038L5.00625 8.50303L1.99375 5.30225C1.7 4.99014 1.7 4.48545 1.99375 4.17666L2.69687 3.41963C2.99062 3.10752 3.46562 3.10752 3.75625 3.41963L8.00625 7.93525C8.30312 8.24736 8.30312 8.75205 8.00938 9.06416ZM14.0094 7.93525L9.75937 3.41963C9.46562 3.10752 8.99062 3.10752 8.7 3.41963L7.99375 4.17002C7.7 4.48213 7.7 4.98682 7.99375 5.29561L11.0063 8.49639L7.99375 11.6972C7.7 12.0093 7.7 12.514 7.99375 12.8228L8.7 13.5731C8.99375 13.8853 9.46875 13.8853 9.75937 13.5731L14.0094 9.05752C14.3031 8.75205 14.3031 8.24736 14.0094 7.93525Z"
                                    fill="#FF64AE"
                                />
                            </svg>
                        </p>
                    </div>
                </div>

                <div tw="rounded-[25px]">
                    <img loading="lazy" src={blog3} alt="blog1" tw="w-full" />

                    <div
                        tw="pl-[38px] rounded-bl-[25px] rounded-br-[25px] pr-[21px] pt-[56px] pb-[72px]"
                        className="shadow"
                    >
                        <h3 tw="text-[#091156] font-semibold text-[18px]">
                            How much does a consultation cost at our clinic?
                        </h3>
                        <p tw="text-[#8B8B8B] text-sm tracking-[1.4px] my-3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                        </p>
                        <p tw="flex gap-2 items-center text-[var(--primary)] font-semibold">
                            Learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M8.00938 9.06416L3.75938 13.5798C3.46563 13.8919 2.99063 13.8919 2.7 13.5798L1.99375 12.8294C1.7 12.5173 1.7 12.0126 1.99375 11.7038L5.00625 8.50303L1.99375 5.30225C1.7 4.99014 1.7 4.48545 1.99375 4.17666L2.69687 3.41963C2.99062 3.10752 3.46562 3.10752 3.75625 3.41963L8.00625 7.93525C8.30312 8.24736 8.30312 8.75205 8.00938 9.06416ZM14.0094 7.93525L9.75937 3.41963C9.46562 3.10752 8.99062 3.10752 8.7 3.41963L7.99375 4.17002C7.7 4.48213 7.7 4.98682 7.99375 5.29561L11.0063 8.49639L7.99375 11.6972C7.7 12.0093 7.7 12.514 7.99375 12.8228L8.7 13.5731C8.99375 13.8853 9.46875 13.8853 9.75937 13.5731L14.0094 9.05752C14.3031 8.75205 14.3031 8.24736 14.0094 7.93525Z"
                                    fill="#FF64AE"
                                />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Blog;
