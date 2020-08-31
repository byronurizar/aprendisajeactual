import React from 'react'
import GifGridItem from './GifGridItem';
import '../index.css';
import { useFetchGifs } from '../hooks/useFetchGifs';
const GifGrid = ({ category }) => {
    // //Utilizando useEffect se ejecuta cuando el componente es renderizado por primera vz esto si no tiene dependencias
    const {data:images,loading}=useFetchGifs(category);


    console.log({loading});
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className="card-grid">
                {
                    //en map es posible utilizar desestructuración
                    images.map((img)=>{
                    return (
                        //al utilizar {..img} estamos enviando el props img desestructurado
                        <GifGridItem {...img} key={img.id}/>
                    )})
                }
        </div>
        </>
    )
}

export default GifGrid
