import React from 'react'

function ProductDetail() {

    const imageStyle = "w-48"

    return (
        <div>
            <div className='flex'>

                <div>
                    <img src="/Product/1.png" alt="product detail" className={imageStyle} />
                    <img src="/Product/2.png" alt="product detail" className={imageStyle} />
                </div>

                <div>
                    <img src="/Product/3.png" alt="product detail" className={imageStyle} />
                    <img src="/Product/4.png" alt="product detail" className={imageStyle} />
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductDetail