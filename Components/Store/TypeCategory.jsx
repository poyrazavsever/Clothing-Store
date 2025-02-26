
function TypeCategory() {

    const labelStyle = "text-neutral-200 text-xs"

    return (
        <div className="w-fit flex flex-col items-start gap-4 bg-transparent border-neutral-600 rounded border px-4 py-6 z-20">
            <span className="text-sm font-medium tracking-widest text-neutral-100 uppercase">Category</span>

            <div className="w-fit min-w-[200px] h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-950 scrollbar-track-white">

                <div className="flex flex-col items-start gap-5 relative">

                    <div className=" flex flex-col items-start gap-3 animate-card pr-10">
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum. </label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>Lorem, ipsum.</label>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TypeCategory