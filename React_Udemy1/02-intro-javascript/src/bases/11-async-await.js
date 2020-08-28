//Async Await
const getImagen=async()=>{
    try{
    const apikey="d0PmO2HJ6rNB07BoVztioBy0OeJHxLfb";
    const respuesta=await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const {data}=await respuesta.json();

  const {url}=data.images.original;
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
    // throw new Error('Error de');
    }catch(error){
        console.log('error', error)
    }
    return 'url Imagen';
}

getImagen();






// peticion.then((response)=>response.json())
// .then(({data})=>{
//     const {url}=data.images.original;

//     const img=document.createElement('img');
//     img.src=url;
//     document.body.append(img);
// })
// .catch(console.warn)
