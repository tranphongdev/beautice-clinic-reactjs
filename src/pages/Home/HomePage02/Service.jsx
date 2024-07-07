import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import Icon1 from '~/assets/icon-1.svg';
import Icon2 from '~/assets/icon-2.svg';
import Icon3 from '~/assets/icon-3.svg';

function Service() {
    return (
        <div tw="mt-[150px] mb-[128px]">
            <Container>
                <div tw="text-center mb-[68px]">
                    <h3 className="text-heading">Main Services</h3>
                    <p className="text-title">Our focus services</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet.</p>
                </div>

                <div tw="flex justify-between items-center gap-[66px] lg:flex-row flex-col">
                    <div tw="border-[#E2E2E2] max-w-[261px] cursor-pointer rounded-[25px] pt-[31px] pl-[36px] pb-[47px] border-[2px] pr-[37px] bg-white hover:border-[#9BA2E0] transition-colors">
                        <img src={Icon1} alt="Icon" tw="mb-[25px]" />
                        <p tw="text-[#091156] font-semibold">Beauty consultation</p>
                        <p tw="my-3 text-[#8B8B8B] font-normal text-sm tracking-[1.6px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div tw="flex text-[var(--primary)] items-center gap-3 font-semibold">
                            Learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z"
                                    fill="#FF64AE"
                                />
                            </svg>
                        </div>
                    </div>

                    <div tw="border-[#E2E2E2] max-w-[261px] cursor-pointer rounded-[25px] pt-[31px] pl-[36px] pb-[47px] border-[2px] pr-[37px] bg-white hover:border-[#9BA2E0] transition-colors">
                        <img src={Icon2} alt="Icon" tw="mb-[25px]" />
                        <p tw="text-[#091156] font-semibold">Skin treatments</p>
                        <p tw="my-3 text-[#8B8B8B] font-normal text-sm tracking-[1.6px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div tw="flex text-[var(--primary)] items-center gap-3 font-semibold">
                            Learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z"
                                    fill="#FF64AE"
                                />
                            </svg>
                        </div>
                    </div>

                    <div tw="border-[#E2E2E2] max-w-[261px] cursor-pointer rounded-[25px] pt-[31px] pl-[36px] pb-[47px] border-[2px] pr-[37px] bg-white hover:border-[#9BA2E0] transition-colors">
                        <img src={Icon3} alt="Icon" tw="mb-[25px]" />
                        <p tw="text-[#091156] font-semibold">Beauty product</p>
                        <p tw="my-3 text-[#8B8B8B] font-normal text-sm tracking-[1.6px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div tw="flex text-[var(--primary)] items-center gap-3 font-semibold">
                            Learn more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                            >
                                <path
                                    d="M8.00938 9.0644L3.75938 13.58C3.46563 13.8921 2.99063 13.8921 2.7 13.58L1.99375 12.8296C1.7 12.5175 1.7 12.0128 1.99375 11.7041L5.00625 8.50327L1.99375 5.30249C1.7 4.99038 1.7 4.48569 1.99375 4.1769L2.69687 3.41987C2.99062 3.10776 3.46562 3.10776 3.75625 3.41987L8.00625 7.9355C8.30312 8.24761 8.30312 8.75229 8.00938 9.0644ZM14.0094 7.9355L9.75937 3.41987C9.46562 3.10776 8.99062 3.10776 8.7 3.41987L7.99375 4.17026C7.7 4.48237 7.7 4.98706 7.99375 5.29585L11.0063 8.49663L7.99375 11.6974C7.7 12.0095 7.7 12.5142 7.99375 12.823L8.7 13.5734C8.99375 13.8855 9.46875 13.8855 9.75937 13.5734L14.0094 9.05776C14.3031 8.75229 14.3031 8.24761 14.0094 7.9355Z"
                                    fill="#FF64AE"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Service;
