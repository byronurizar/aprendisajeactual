import React from 'react'
import { departamentos } from '../datos/departamentos';
import { useMapbox } from '../hooks/useMapbox';
const puntoInicial = {
    lng: -89.9832,
    lat: 15.5722,
    minZoom: 6.5,
    zoom: 7
}
// const puntoInicial = {
//     lng: -122.4725,
//     lat: 37.8010,
//     zoom: 13.5
// }
export const MapaPage = () => {
    const { setRef, coords, deptoSelected,mostrarTodosLosDeptos } = useMapbox(puntoInicial);
    // const mapaDiv = useRef();
    // // const [mapa, setMapa] = useState();
    // const mapa = useRef();
    // const [coords, setCoords] = useState(puntoInicial);
    // useEffect(() => {
    //     var map = new mapboxgl.Map({
    //         container: mapaDiv.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [puntoInicial.lng, puntoInicial.lat],
    //         zoom: puntoInicial.zoom
    //     });
    //     // setMapa(map);
    //     mapa.current = map;
    // }, []);

    // useEffect(() => {
    //     mapa.current?.on('move', () => { //Creamos el listener del mapa
    //         const { lng, lat } = mapa.current.getCenter();
    //         setCoords({
    //             lng: lng.toFixed(4),
    //             lat: lat.toFixed(4),
    //             zoom: mapa.current.getZoom().toFixed(2)
    //         })
    //     });
    //     //return mapa?.off('move'); //Destruimos el listener del mapa
    // }, []);

    return (

        <>
            
            {
                deptoSelected &&
                <button className="info" onClick={()=>{mostrarTodosLosDeptos();}}>Mostrar todos los departamentos</button>
            }
            <div
                ref={setRef}
                className="mapContainer" />

                    <div id="state-legend" className="legend">
                        <h4>Cantidad</h4>
                        <div className="texto"><span className="nivel1"></span>Mayor a 110</div>
                        <div className="texto"><span className="nivel2"></span>81 a 110</div>
                        <div className="texto"><span className="nivel3"></span>51 a 80</div>
                        <div className="texto"><span className="nivel4"></span>41 a 50</div>
                        <div className="texto"><span className="nivel5"></span>31 a 40</div>
                        <div className="texto"><span className="nivel6"></span>21 a 30</div>
                        <div className="texto"><span className="nivel7"></span>11 a 20</div>
                        <div className="texto"><span className="nivel8"></span>1 a 10</div>
                        <div className="texto"><span className="nivel9"></span>0</div>
                    </div>
                    
                    {/* // <div id="county-legend" className="legend">
                    //     <h4>Cantidad en Municipios</h4>
                    //     <div className="texto"><span className="nivel1"></span>Mayor a 28</div>
                    //     <div className="texto"><span className="nivel2"></span>21 a 28</div>
                    //     <div className="texto"><span className="nivel3"></span>16 a 20</div>
                    //     <div className="texto"><span className="nivel4"></span>13 a 15</div>
                    //     <div className="texto"><span className="nivel5"></span>10 a 12</div>
                    //     <div className="texto"><span className="nivel6"></span>7 a 9</div>
                    //     <div className="texto"><span className="nivel7"></span>4 a 6</div>
                    //     <div className="texto"><span className="nivel8"></span>1 a 3</div>
                    //     <div className="texto"><span className="nivel0"></span>0</div>
                    // </div> */}
            
        </>

    )
}
