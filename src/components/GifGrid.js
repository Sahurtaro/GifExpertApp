import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';
import styles from './gifgrid.module.css'
// import {getGifs} from '../helpers/getGifs'


export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data: images, loading} = useFetchGifs( category );

    

    

  return (
      <>
    <h3> {category} </h3>

    { loading && <p>Loading</p>}

      <div className={styles.cardGrid}>
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
    </>
  )
}
