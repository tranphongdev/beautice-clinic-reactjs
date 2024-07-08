import tw from 'twin.macro';
import { Container } from '~/constants/styled';
import phonevolume from '~/assets/phone-volume.svg';

function Request() {
    return (
        <Container>
            <div tw="flex justify-between items-center lg:flex-row flex-col mb-[109px] gap-4">
                <div tw="lg:max-w-[391px] w-full flex flex-col items-center lg:items-start">
                    <h3 className="text-title">Request call services</h3>
                    <p className="text-desc">
                        Lorem ipsum dolor sit amet, consect adipiscing elit <span>Contact Us.</span>
                    </p>
                </div>

                <div tw="flex relative">
                    <div tw="lg:w-[658px] w-[90vw]">
                        <input
                            type="text"
                            tw="m-0"
                            className="form-control"
                            placeholder="Insert your phone number here ..."
                        />
                    </div>
                    <button tw="bg-[var(--primary)] rounded-tr-[15px] rounded-br-[15px] absolute right-0 top-0 lg:px-[34px] px-5 h-full">
                        <img src={phonevolume} alt="phonevolume" />
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default Request;
