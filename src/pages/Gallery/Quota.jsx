import Button from '~/components/Button';
import { Container } from '~/constants/styled';
import BubbleQuota from '~/assets/gallery-bubble.png';
import BubbleQuotaItem from '~/assets/gallery-bubble-item.png';
import tw from 'twin.macro';

function Quota() {
    return (
        <div className="quota">
            <div className="quota-bubble">
                <img src={BubbleQuota} alt="BubbleQuota" />
                <img src={BubbleQuotaItem} alt="BubbleQuotaItem" className="quota-bubble-item" />
            </div>
            <Container>
                <div tw="flex justify-between items-center lg:flex-row flex-col gap-10">
                    <div tw="max-w-[642px]">
                        <h3 className="text-heading">Get The Quota</h3>
                        <p className="text-title">Want to be handled by our professional team immediately?</p>
                        <p className="text-desc">
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                        </p>
                    </div>
                    <div>
                        <Button color="pink">Make an Appointment</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Quota;
