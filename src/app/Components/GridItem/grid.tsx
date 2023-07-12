import './grid.css'
export interface IGridElementProps{
    Count:number
}
export  function GridElement({Count}:IGridElementProps){
    return (
        <div className='grid_item'>
            Image {Count}
        </div>
    )
}