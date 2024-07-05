import tw from 'twin.macro';

const styles = {
    pink: tw`bg-[#FF64AE] hover:bg-[#e84393]`,
};

const Button = ({ children, clickAction, color, type }) => (
    <button
        type={type || 'button'}
        css={[
            tw`flex justify-center items-center gap-1.5 py-[14px] px-[41px]`,
            tw`font-medium text-white tracking-[1.6px]`,
            tw`rounded-[50px] transition-colors`,
            styles[color],
        ]}
        onClick={clickAction}
    >
        {children}
    </button>
);

export default Button;
