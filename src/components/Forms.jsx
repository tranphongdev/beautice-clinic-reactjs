import tw from 'twin.macro';
import Button from '~/components/Button';

function Forms() {
    return (
        <form>
            <div tw="flex lg:flex-row flex-col items-center gap-0 lg:gap-[36px]">
                <input type="text" className="form-control" placeholder="First name" />
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <input type="text" className="form-control" placeholder="Email address" />

            <input type="text" className="form-control" placeholder="Subject message" />

            <textarea name="" id="" rows={7} placeholder="Your inquiry here" className="form-control"></textarea>

            <Button color="pink">Send Message</Button>
        </form>
    );
}

export default Forms;
