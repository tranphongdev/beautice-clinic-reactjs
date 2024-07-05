import tw from 'twin.macro';
import { iconUserSocial, users } from '~/constants';

function Users() {
    return (
        <div tw="flex flex-col lg:flex-row justify-between">
            {users?.map((user) => (
                <div
                    key={user?.id}
                    tw="px-[77px] flex flex-col items-center text-center rounded-[42px] hover:bg-white hover:shadow-2xl cursor-pointer transition-all"
                >
                    <div tw="pt-[91px] pb-[53px]">
                        <img src={user?.avatar} alt={user?.name} tw="w-[146px] h-[146px] object-cover" />
                    </div>

                    <div>
                        <h3 className="text-heading">{user?.name}</h3>
                        <h4 tw="text-[var(--text-blue-dark)] text-[18px] font-semibold my-3">{user?.lastName}</h4>
                        <p tw="text-[#8B8B8B] text-[15px]">{user?.desc}</p>
                    </div>

                    <div tw="flex items-center gap-[34px] mt-[50px] mb-[96px]">
                        {iconUserSocial?.map((icon) => (
                            <div
                                key={icon?.id}
                                className="shadow-icon"
                                tw="w-[49px] h-[49px] rounded-full bg-white flex items-center justify-center"
                            >
                                <img src={icon?.src} alt="icon" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Users;
