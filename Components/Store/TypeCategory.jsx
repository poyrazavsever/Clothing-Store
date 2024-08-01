import { useState } from "react"
import ReactIcon from "../Icon"
import classNames from "classnames"

function TypeCategory() {

    const [isVisible, setIsVisible] = useState(true)

    return (
        <div>

            <div className="flex flex-col items-start gap-4">

                <button className="flex items-center gap-1" onClick={() => setIsVisible(!isVisible)}>
                    <ReactIcon iconType="ai" iconName="AiOutlineArrowRight" iconColor="text-neutral-700" classname={classNames({
                        "text-sm transition-all": true,
                        "rotate-0": !isVisible,
                        "rotate-90": isVisible,
                    })} />
                    <span className="text-base md:text-lg font-medium text-neutral-400 uppercase">Kategoriler</span>
                </button>

                <div className={classNames({
                    "flex-col items-start gap-3 animate-card": true,
                    "hidden": !isVisible,
                    "flex": isVisible,
                })}>
                    <div className="flex items-center gap-2 cursor-pointer" key="yeni gelen elibseler">
                        <input type="checkbox" className="accent-neutral-200" id="new staff" />
                        <label htmlFor="new staff" className="cursor-pointer">yeni gelen elibseler</label>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TypeCategory