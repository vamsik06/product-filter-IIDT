import React from 'react';

const ProductsMenu = (props) => {
    const {resData}= props
 const {title,image,price} = resData
    return (
        <div className='relative bottom-[300px] left-52  w-56 mx-5 hover:border-4 bg-slate-100'>
            <div>
                <img className='w-auto h-60' src={image} alt="" />
                <h2 className='p-4 font-bold'>{title}</h2>
                <h4 className='p-4 font-light leading-6 '>{price}</h4>
            </div>
            
        </div>
    );
};

export default ProductsMenu;