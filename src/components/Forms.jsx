import tw from 'twin.macro';
import Button from '~/components/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Forms() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitLogIn = () => {
        if (errors.lastName) {
            toast.error('Please Enter Info!');
        } else {
            toast.success('Submit successful!');
        }
    };

    return (
        <form onSubmit={handleSubmit(submitLogIn)}>
            <div tw="flex lg:flex-row flex-col items-center gap-0 lg:gap-[36px]">
                <input
                    type="text"
                    {...register('firstName', { required: true })}
                    className="form-control"
                    placeholder="First name"
                />

                <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    {...register('lastName', { required: true })}
                />
            </div>

            <input
                type="text"
                {...register('mail', { required: 'Email Address is required' })}
                aria-invalid={errors.mail ? 'true' : 'false'}
                className="form-control"
                placeholder="Email address"
            />

            <input
                type="text"
                className="form-control"
                {...register('subject', { required: true })}
                placeholder="Subject message"
            />

            <textarea name="" id="" rows={7} placeholder="Your inquiry here" className="form-control"></textarea>

            <Button color="pink" type="submit">
                Send Message
            </Button>
        </form>
    );
}

export default Forms;
