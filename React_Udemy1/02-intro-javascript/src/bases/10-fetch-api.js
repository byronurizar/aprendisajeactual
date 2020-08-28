//Fetch API
//https://developers.giphy.com/
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API

const apikey="d0PmO2HJ6rNB07BoVztioBy0OeJHxLfb";

const peticion=fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion.then((response)=>response.json())
.then(({data})=>{
    const {url}=data.images.original;

    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(console.warn)