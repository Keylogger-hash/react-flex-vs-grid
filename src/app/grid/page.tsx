import { ReactElement } from 'react'
import styles from './page.module.css'
import {IGridElementProps,GridElement} from '../Components/GridItem/grid';
function InitializeArray():number[]{
    return Array.from(Array(9).keys()).map(x=>x+1)
}

export default function Grid(){
    let count = 0;
    let numbersArray = InitializeArray();

    const gridArray:ReactElement[] = numbersArray.map((number)=>{
        const props: IGridElementProps = {
            Count:number
        }
        return (
            <GridElement {...props} key={number}/>
        )
        }
    );
    return (
        <div className={styles.grid_content}>
            <div className={styles.grid_wrapper}>
                {gridArray}
            </div>
        </div>
    )
}