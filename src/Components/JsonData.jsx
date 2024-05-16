import React from 'react';
import Products from './Products';

const JsonData = ({setCartQuantity}) => {
    const menu=[
        {id:1,dish:"Chicken Fried Rice",Cost:160},
         {id:2,dish:"Mutton Fried Rice",Cost:250},
         {id:3,dish:"Fish Fried Rice",Cost:280},
         {id:4,dish:"Prawn Fried Rice",Cost:280},
        {id:5,dish:"Mixed Fried Rice",Cost:360},
        {id:6,dish:"Veg Fried Rice",Cost:80},
        {id:7,dish:"Mushroom Fried Rice",Cost:100},
        {id:8,dish:"Panner Fried Rice",Cost:100},
    ]


    return (
        <>
        <Products foodmenu={menu} setCartQuantity={setCartQuantity}/>
            
        </>
    );
};

export default JsonData;