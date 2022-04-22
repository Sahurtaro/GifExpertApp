import React, { useEffect } from 'react'
import { useState } from 'react';
import { GifGridItem } from './GifGridItem';
import styles from './gifgrid.module.css'


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [] )

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=PdL52NXNmOfmPw5382NZ36YyRFiVAUDX'
        const resp = await fetch ( url );
        const {data} = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,

            }
        })

        console.log(gifs)
        setImages(gifs);

    }

    // getGifs();

  return (
    <div className={styles.cardGrid}>
        <h3> {category} </h3>
        <ol>
            {
                    images.map( img => (
                    
                    <GifGridItem 
                        key = { img.id }
                        { ...img }/>
                        ) )
                }
        </ol>
    </div>
  )
}
