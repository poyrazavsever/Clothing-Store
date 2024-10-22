import ReactIcon from "./ReactIcon";

function Star({star}) {

    switch (star) {
        case 1: return (
            <div className='flex items-center gap-1'>
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
            </div>

        );
        case 2: return (
            <div className='flex items-center gap-1'>
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400  text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
            </div>
        );
        case 3: return (
            <div className='flex items-center gap-1'>
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400  text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
            </div>
        );
        case 4 : return (
            <div className='flex items-center gap-1'>
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400  text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiOutlineHeart" iconColor="text-neutral-400 text-lg" />
            </div>
        );
        case 5: return (
            <div className='flex items-center gap-1'>
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400  text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
            </div>
        );
        default: return (
            <div className='flex items-center gap-1'>
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400  text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
                <ReactIcon iconType="ai" iconName="AiFillHeart" iconColor="text-amber-400 text-lg" />
            </div>
        );
    }
}

export default Star