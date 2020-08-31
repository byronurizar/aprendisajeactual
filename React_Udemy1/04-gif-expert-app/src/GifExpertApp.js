import React,{useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {
    // const categories=['One Puch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['One Puch']);

    // const handleAdd=()=>{
    //     // setCategories([...categories,'Nueva Categoria']); //... se llama operador spread  o operador de propagación
    //     // setCategories(['Nueva Categoria',...categories]); 
    //     setCategories(cats=>[...cats,'Nueva Forma']);
    // }
     console.log(categories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
        
            <ol>
               {
                   //En el key de los items no es recomendable utilizar los indices ya que es muy volatil
                   categories.map((categoria)=>(
                   <GifGrid category={categoria} key={categoria}/>
                   ))
               }
            </ol>
        </>
    )
}

export default GifExpertApp

