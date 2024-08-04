import { useState } from "react"
import ReactIcon from "../ReactIcon"
import classNames from "classnames"


function RegisterModal({ isRegisterVisible, setIsLoginVisible, setIsRegisterVisible }) {

    const [visiblePassword, setVisiblePassword] = useState(false)

    const passwordBtn = "text-2xl absolute top-[9px] right-3"
    const lineStyle = "h-[2px] w-full rounded bg-tert-200"

    const handlePassword = (e) => {
        e.preventDefault()
        setVisiblePassword(!visiblePassword)
    }

    return (
        <div className={classNames({
            "animate-card absolute flex items-center justify-center w-screen h-screen backdrop-blur-3xl !z-50 overflow-hidden backdrop-brightness-50": true,
            "flex": isRegisterVisible,
            "hidden": !isRegisterVisible
        })}>

            <div className='h-[560px] w-[400px] bg-neutral-600 bg-opacity-50 border border-neutral-600 p-8 border-tert-200 rounded-md'>

                <div className="flex w-full items-start justify-between">

                    <h2 className='text-2xl font-semibold text-neutral-200'>Sign in</h2>

                    <button onClick={() => setIsRegisterVisible(false)}>
                        <ReactIcon iconType="ai" iconName="AiOutlineCloseCircle" iconColor="text-neutral-200" classname="text-2xl pr-8" />
                    </button>


                </div>

                <form className="flex flex-col items-start gap-8 w-full">

                    <div className="w-full flex flex-col gap-3">
                        <label htmlFor="name" className="text-white text-xs font-semibold uppercase tracking-widest">Your Name</label>

                        <input id="name" type="text" placeholder='David Jhone' className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white' />
                    </div>

                    <div className="w-full flex flex-col gap-3">
                        <label htmlFor="email" className="text-white text-xs font-semibold uppercase tracking-widest">E-mail</label>

                        <input id="email" type="email" placeholder='example@outlook.com' className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white' />
                    </div>

                    <div className="w-full flex flex-col gap-3">
                        <label htmlFor="password" className="text-white text-xs font-semibold uppercase tracking-widest">Password</label>

                        <div className="w-full relative">
                            <input id="password" type={visiblePassword ? "text" : "password"} placeholder='********' className='w-full px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 text-white' />
                            {!visiblePassword ?
                                (<button onClick={handlePassword}>
                                    <ReactIcon iconType="ai" iconName="AiOutlineEye" iconColor="text-neutral-400" classname={passwordBtn} />
                                </button>) :
                                (<button onClick={handlePassword}>
                                    <ReactIcon iconType="ai" iconName="AiOutlineEyeInvisible" iconColor="text-neutral-400" classname={passwordBtn} />
                                </button>)}
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 w-full">
                        <div className="flex flex-col items-start gap-1">
                            <p className="text-xs text-neutral-400">Already Registered? <button className="font-medium  text-neutral-200" onClick={() => {
                                event.preventDefault();
                                setIsRegisterVisible(false)
                                setIsLoginVisible(true)
                            }}>Log in here.</button></p>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                            <input id="privacy" type="checkbox" className='px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 ' />
                            <label htmlFor="privacy" className="text-zinc-200 text-xs tracking-wide">I accept the terms and conditions</label>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <input id="privacy" type="checkbox" className='px-4 py-2 bg-neutral-950 opacity-80 focus:outline-none border-neutral-950 placeholder:text-sm placeholder:tracking-wide placeholder:text-zinc-500 ' />
                            <label htmlFor="privacy" className="text-zinc-200 text-xs tracking-wide">I accept the Privacy Policy</label>
                        </div>

                    </div>


                    <button className="flex uppercase tracking-widest text-sm font-semibold items-center justify-center w-full px-4 py-3 rounded-sm bg-amber-600 text-white hover:bg-orange-700 transition-all">Sign in</button>

                </form>

            </div>

        </div>
    )
}

export default RegisterModal