import { ReactElement } from 'react'
import { useState } from 'react';
import styles from './page.module.css'
import GridElement from './grid';

export default function Grid(){
    let count = 0;

    let gridArray:ReactElement[] = new Array(9);
    for(let i:number=2;i<11;i++){
        gridArray.push(
            <GridElement ></GridElement>
        )
        console.log(count)
    }   
    return (
        <div className={styles.grid_wrapper}>
            {gridArray}
            {/* <div>
                Image
            </div>
            <div>
                Image
            </div>
            <div>
                Image
            </div>
            <div>
                Image
            </div>
            <div>
                Image
            </div>
            <div>
                Image
            </div>
            <div>
                Image
            </div>
            <div>
                Image
            </div>
            <div>
                Image
            </div> */}
        </div>
    )
}