import folder from '~/assets/folder.svg';
import Button from '~/components/Button';
import tw from 'twin.macro';
import post01 from '~/assets/post01.png';
import { posts } from '~/constants';

function Posts() {
    return (
        <div>
            {posts?.map((post) => (
                <div tw="mb-[133px]" key={post?.id}>
                    <div>
                        <img loading="lazy" src={post?.src} alt="post" tw="w-full" />
                    </div>
                    <div
                        className="shadow"
                        tw="pl-[76px] pr-[42px] pt-[56px] pb-[100px] bg-white rounded-bl-[50px] rounded-br-[50px]"
                    >
                        <h3 className="text-heading" tw="flex items-center gap-[15px]">
                            <img src={folder} alt="folder" />
                            {post?.title}
                        </h3>
                        <p className="text-title">{post?.name}</p>
                        <p className="text-desc" tw="mb-[13px]">
                            {post?.desc}
                        </p>
                        <Button color="pink">
                            Read More <i className="fa-solid fa-caret-right"></i>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
