export const getGifs = async (category) => {
    //encodeURI nos ayuda a remplazar los espacios por caracteres aceptados en la url
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=d0PmO2HJ6rNB07BoVztioBy0OeJHxLfb`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //? pregunta si vienen las imagenes para utilizarla
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;    
}