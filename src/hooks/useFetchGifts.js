import React, { useEffect } from "react"
import { getGifts } from "../helpers/getGifs";

import { useState } from "react";


export const useFetchGifts =  ( category ) => {

   const  [images, setImages] = useState([]);
   const  [isLoading, setIsloading] = useState( true );

   const getImages = async() => {
        const newImages = await getGifts( category );
        setImages(newImages);
        setIsloading(false);

   }

    useEffect( () =>{
       getImages();
    }, [])
   

    return {
        images, 
        isLoading
    }

}