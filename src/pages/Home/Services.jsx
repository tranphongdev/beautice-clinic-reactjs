import tw from 'twin.macro';
import { servicesMain } from '~/constants';
import { Container } from '~/constants/styled';
import ServiceBubble from '~/assets/bubble-service.svg';
import ServiceBubbleItem from '~/assets/bubble-service-item.svg';

function Services() {
    return (
        <div className="service">
            <Container>
                <div tw="text-center max-w-[848px] mx-auto mb-[82px]">
                    <h3 className="text-heading">Main Services</h3>
                    <p className="text-title">
                        Learn services to focus <br />
                        on your beauty
                    </p>
                    <p className="text-desc">
                        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                        feugiat tellus sagittis, scelerisque eget nulla turpis.
                    </p>
                </div>

                <div tw="flex flex-col lg:flex-row justify-between items-center gap-[56px]">
                    {servicesMain?.map((item) => (
                        <div key={item?.id} className="service-item">
                            <div tw="my-[58px]">
                                <img src={item?.src} alt={item?.title} />
                            </div>
                            <div>
                                <h3 tw="text-[#091156] font-semibold text-[18px] mb-3">{item?.title}</h3>
                                <p tw="text-[var(--gray)] pb-[52px] text-[14px] tracking-[1.4px]">{item?.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <div className="service-bubble">
                <img src={ServiceBubble} alt="ServiceBubble" />
                <img src={ServiceBubbleItem} alt="ServiceBubble" className="service-bubble-item" />
            </div>
        </div>
    );
}

export default Services;
