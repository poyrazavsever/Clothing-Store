
function SizeCategory() {

    const labelStyle = "text-neutral-200 text-xs"

    return (
        <div className="w-fit flex flex-col items-start gap-4 bg-transparent border-neutral-600 rounded border px-4 py-6">
            <span className="text-sm font-medium tracking-widest text-neutral-100 uppercase">Category</span>

            <div className="w-fit min-w-[200px]">

                <div className="flex flex-col items-start gap-5 relative">

                    <div className=" flex flex-col items-start gap-3 animate-card pr-10">
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>STD</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>XS </label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>S</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>M</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>L</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>XL</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>XXL</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>FX</label>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer" key="Lorem, ipsum.">
                            <input type="checkbox" className="accent-neutral-200" id="Lorem, ipsum." />
                            <label htmlFor="Lorem, ipsum." className={labelStyle}>FFX</label>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SizeCategory