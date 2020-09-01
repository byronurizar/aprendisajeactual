import React, { useEffect,useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})
    const {x,y}=coords;
    useEffect(() => {
        console.log("Componente montado");
        const mouseMOve = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
            // console.log({coords});
            // console.log(' :D');
        }

        window.addEventListener('mousemove', mouseMOve);
        return () => {
            //Esto se ejecuta al momento de desmontarse
            console.log("Componente desmontado montado");
            window.removeEventListener('mousemove', mouseMOve);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x: {x}  y:{y}
            </p>
        </div>
    )
}
