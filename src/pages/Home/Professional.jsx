import tw from 'twin.macro';
import Users from '~/components/Users';
import { Container } from '~/constants/styled';

function Professional() {
    return (
        <Container>
            <div tw="mt-[100px] mb-[87px] max-w-[848px] mx-auto text-center">
                <h3 className="text-heading">Professional Teams</h3>
                <p className="text-title">The Professional expert</p>
                <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>

            <Users />
        </Container>
    );
}

export default Professional;
