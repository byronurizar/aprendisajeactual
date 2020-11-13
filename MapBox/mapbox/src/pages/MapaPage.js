import React from 'react'
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
    const { setRef, coords } = useMapbox(puntoInicial);
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
            <div className="info">
                Lng:{coords.lng} | Lat:{coords.lat} | zoom:{coords.zoom}
            </div>
            <div
                ref={setRef}
                className="mapContainer" />

            <div id="state-legend" className="legend">
                <h4>Cantidad</h4>
                <div><span className="nivel1"></span>200</div>
                <div><span className="nivel2"></span>100</div>
                <div><span className="nivel3"></span>86</div>
                <div><span className="nivel4"></span>61</div>
                <div><span className="nivel5"></span>40</div>
                <div><span className="nivel6"></span>30</div>
                <div><span className="nivel7"></span>15</div>
                <div><span className="nivel8"></span>11</div>
                <div><span className="nivel9"></span>0</div>
            </div>

            <div id="county-legend" className="legend" style={{ display: "none" }}>
                <h4>Cantidad</h4>
                <div><span className="nivel1"></span>35</div>
                <div><span className="nivel2"></span>30</div>
                <div><span className="nivel3"></span>25</div>
                <div><span className="nivel4"></span>20</div>
                <div><span className="nivel5"></span>15</div>
                <div><span className="nivel6"></span>10</div>
                <div><span className="nivel7"></span>8</div>
                <div><span className="nivel8"></span>5</div>
                <div><span className="nivel0"></span>0</div>
            </div>
        </>

    )
}
