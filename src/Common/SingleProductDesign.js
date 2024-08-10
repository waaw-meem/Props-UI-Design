import React from 'react'
import ButtonStyle from './ButtonStyle';
import "./index.css"

const SingleProductDesign = ({ products }) => {
    const renderedProducts = products.map((product) => {
        return (

            <div className='productCard' key={product.id}>
                <div className="content">
                <h3 className='tertiary_heading'>{product.name}</h3>
                <p className='p'>{product.price}</p>
                <span className='cat_tag'>{product.tag}</span>
                {product.stock ? <ButtonStyle danger>BUY PRODUCT</ButtonStyle> : <ButtonStyle outOfStock>Out of Stock</ButtonStyle>}
                </div>
                <div className='img_wrapper'>
                    <img src={product.imagesrc} alt="working"/>
                </div>
            </div>

        );
    });
    return (
        <div className='main_wrapper'>
            {renderedProducts}
        </div>
    )
}

export default SingleProductDesign
