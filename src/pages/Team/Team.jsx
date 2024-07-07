import tw from 'twin.macro';
import { Suspense } from 'react';

import team from '~/assets/team.png';
import team1 from '~/assets/team1.png';
import { supportteams } from '~/constants';
import { Container } from '~/constants/styled';
import TeamSlogan from '~/assets/SectionTeamSlogan.svg';

const Professional = React.lazy(() => import('~/pages/Home/Professional'));
const Support = React.lazy(() => import('~/pages/Team/Support'));
const Reviews = React.lazy(() => import('~/pages/Team/Reviews'));

function Team() {
    return (
        <Suspense
            fallback={
                <div tw="w-screen h-screen flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            }
        >
            <div tw="relative">
                <div className="team-bubble">
                    <img src={team} alt="team" />
                    <img src={team1} alt="" tw="absolute right-0 top-[30px]" />
                </div>
                <Professional />
            </div>

            <Container>
                <div tw="max-w-[680px] mx-auto text-center mt-[153px] mb-[125px]">
                    <h3 className="text-heading">Assistance Team</h3>
                    <p className="text-title">Meet the pro assistance</p>
                    <p className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>
                <div>
                    {supportteams?.map((item, index) => (
                        <Support key={index} item={item} />
                    ))}
                </div>
            </Container>

            <div>
                <img src={TeamSlogan} alt="TeamSlogan" tw="w-full" />
            </div>
            <Reviews />
        </Suspense>
    );
}

export default Team;
