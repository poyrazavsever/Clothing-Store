import { useState } from "react"
import Icon from "../Icon"
import classNames from "classnames"
import Link from "next/link"

function LoginModal({ isLoginVisible, setIsLoginVisible }) {

    const [visiblePassword, setVisiblePassword] = useState(false)
    const passwordBtn = "text-2xl absolute top-[9px] right-3"
    const lineStyle = "h-[1px] w-full rounded bg-neutral-200"

    const handlePassword = (e) => {
        e.preventDefault()
        setVisiblePassword(!visiblePassword)
    }

    return (
        <div className={classNames({
            "animate-card absolute flex items-center justify-center w-screen h-screen backdrop-blur-3xl backdrop-opacity-10 backdrop-brightness-50 !z-50 overflow-hidden": true,
            "flex": isLoginVisible,
            "hidden": !isLoginVisible
        })}>

            <div className='h-[580px] w-[400px] bg-neutral-600 bg-opacity-50 border border-neutral-600 p-8 border-tert-200 rounded-md'>

                <form className="flex flex-col items-start gap-10 w-full">

                    <div className="w-full flex flex-col gap-3">
                        <label htmlFor="email" className="text-white text-xs font-semibold uppercase tracking-widest">E-mail</label>

                        <input id="email" type="email" placeholder='example@outlook.com' className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white' />
                    </div>

                    <div className="w-full flex flex-col gap-3">
                        <label htmlFor="email" className="text-white text-xs font-semibold uppercase tracking-widest">Password</label>

                        <div className="w-full relative">
                            <input type={visiblePassword ? "text" : "password"} placeholder='********' className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white' />
                            {!visiblePassword ?
                                (<button onClick={handlePassword}>
                                    <Icon iconType="ai" iconName="AiOutlineEye" iconColor="text-neutral-400" classname={passwordBtn} />
                                </button>) :
                                (<button onClick={handlePassword}>
                                    <Icon iconType="ai" iconName="AiOutlineEyeInvisible" iconColor="text-neutral-400" classname={passwordBtn} />
                                </button>)}
                        </div>
                    </div>



                    <button className="flex uppercase tracking-widest text-sm font-semibold items-center justify-center w-full px-4 py-3 rounded-sm bg-amber-600 text-white hover:bg-orange-700 transition-all">Log In</button>

                </form>

                <div className="pt-5 flex flex-col items-start gap-3">
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-xs text-neutral-400">Forgot your password?  <Link href="/" className="font-medium  text-neutral-200">Reset it here</Link></p>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <p className="text-xs text-neutral-400">Not registered yet?  <Link href="/" className="font-medium  text-neutral-200">Register here.</Link></p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-8 mt-8">
                    <div className={lineStyle}></div>
                    <h4 className="uppercase text-lg font-medium text-neutral-200 w-48 text-center">OR</h4>
                    <div className={lineStyle}></div>
                </div>

                <div className="flex flex-col items-start gap-4 mt-5">

                    <button className="flex font-medium hover:bg-neutral-700 items-center text-sm gap-2 justify-center w-full px-4 py-3 rounded-sm bg-neutral-800 text-neutral-200 tracking-wider transition-all ">
                        <Icon iconType="fc" iconName="FcGoogle" classname="text-xl" iconColor="text-neutral-600" />
                        <span>Log in with google</span>
                    </button>

                    <button className="flex font-medium hover:bg-neutral-700 items-center text-sm gap-2 justify-center w-full px-4 py-3 rounded-sm bg-neutral-800 text-neutral-200 tracking-wider transition-all ">
                        <Icon iconType="bi" iconName="BiLogoFacebookCircle" classname="text-xl " iconColor="text-blue-400" />
                        <span>Login with facebook</span>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default LoginModal