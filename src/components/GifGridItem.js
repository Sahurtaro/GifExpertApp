import React from 'react'
import styles from './gifgriditem.module.css';


export const GifGridItem = ( {id, title, url} ) => {
  return (
    <div className={styles.gridContainer}>
        <img src={url} alt={title}></img>
        <p className={styles.title}>{ title }</p>
    </div>
  )
}
