import Icon from "../ReactIcon"

function FooterBottom() {

    const linkStyle = "cursor-pointer text-xs md:text-sm text-white relative before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-400 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100"

    return (
        <div className="flex mobile:flex-col mobile:gap-12 items-start justify-between border-t border-neutral-300 py-8">


            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-orange-400 font-bold uppercase'>How Can We Help You</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>
                    <li className={linkStyle}>Home</li>
                    <li className={linkStyle}>Sign</li>
                    <li className={linkStyle}>Store</li>
                    <li className={linkStyle}>Payment</li>
                    <li className={linkStyle}>Cancellation & Refund</li>
                    <li className={linkStyle}>Cargo Tracking</li>
                    <li className={linkStyle}>Delivery</li>
                </ul>

            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-orange-400 font-bold uppercase'>Company</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>
                    <li className={linkStyle}>About</li>
                    <li className={linkStyle}>Our Stores</li>
                    <li className={linkStyle}>Partners</li>
                    <li className={linkStyle}>Corporate Responsibility</li>
                    <li className={linkStyle}>Privacy and Security</li>
                    <li className={linkStyle}>Customer service</li>
                    <li className={linkStyle}>SSS</li>
                </ul>

            </div>

            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-orange-400 font-bold uppercase'>Follow</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillInstagram" />
                        <li>Instagram</li>
                    </div>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillFacebook" />
                        <li>Facebook</li>
                    </div>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="bi" iconName="BiLogoPinterest" />
                        <li>Pinterest</li>
                    </div>

                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillYoutube" />
                        <li>Youtube</li>
                    </div>

                </ul>

            </div>


            <div className='flex flex-col items-start gap-4'>
                <h4 className='text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-orange-400 font-bold uppercase'>Applications</h4>

                <ul className='flex flex-col gap-3 items-start text-neutral-700'>
                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="fa" iconName="FaGooglePlay" />
                        <li>Google Play</li>
                    </div>
                    <div className={`flex items-center gap-1 ${linkStyle}`}>
                        <Icon iconType="ai" iconName="AiFillApple" />
                        <li>Apple Store</li>
                    </div>
                </ul>

            </div>

        </div>
    )
}

export default FooterBottom