import tw from 'twin.macro';

function Support({ item }) {
    return (
        <div tw="flex lg:gap-[172px] gap-[40px] items-center lg:flex-row flex-col mb-[79px]">
            <div tw="w-full">
                <img src={item?.avatar} alt="item" tw="w-full" />
            </div>
            <div tw="max-w-[434px]">
                <div tw="flex items-center gap-1 mb-5 mt-2">
                    <span tw="text-[var(--text-blue-dark)] font-semibold">{item?.name} / </span>
                    <span tw="text-[var(--gray)] italic text-sm"> {item?.job}</span>
                </div>
                <p className="text-desc">{item?.desc}</p>
            </div>
        </div>
    );
}

export default Support;
