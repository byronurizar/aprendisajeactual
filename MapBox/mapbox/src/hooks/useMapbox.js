import { useState, useRef, useEffect, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';
import { departamentos } from '../datos/departamentos';
import municipios from '../datos/municipios';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnlyb25sb3BleiIsImEiOiJja2hleDVoMzUwY2hrMnpwZnFidWVqNTQzIn0.xXx6TJV1ugsMnMrmK3e7ng';
export const useMapbox = (puntoInicial) => {
    const mapaDiv = useRef();
    const setRef = useCallback((node) => {
        mapaDiv.current = node;
    }, []);
    // const [mapa, setMapa] = useState();

    //Refencia a los marcadores
    const marcadores = useRef({});
    // const departamentos = useRef({});

    //Mapa y coords
    const mapa = useRef();
    const [coords, setCoords] = useState(puntoInicial);
    const [geoJson, setGeoJson] = useState(departamentos);
    const [deptoSelected, setDeptoSelected] = useState(false);

    const mostrarTodosLosDeptos=()=>{
        setCoords(puntoInicial);
        setDeptoSelected(false);
        setGeoJson(departamentos);
    }
    //Funciones para agregar marcadores
    const agregarMarcadores=useCallback(()=>{

    },[]);

    const getData=(nombre)=>{
        let nuevo={
            "type": "FeatureCollection",
            features:[]
        };
        var municipios_depto=municipios.features.filter(item=>item.properties.departamento===nombre);
        
        nuevo.features=municipios_depto;

        var deptos_noSeleccionados=departamentos.features.filter(item=>item.properties.nombre!=nombre);

        let feach=deptos_noSeleccionados.concat(municipios_depto);
        console.log({feach})
        nuevo.features=feach;
        setGeoJson(nuevo);
    }
    useEffect(() => {
       var map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [coords.lng, coords.lat],
            minZoom:coords.minZoom,
            zoom: coords.zoom,
        });
        // setMapa(map);
        mapa.current = map;
    }, [coords]);

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

    //Agregar marcadores cuando hacemos click

    useEffect(() => {
        mapa.current?.on('click', (ev) => {
            // const { lng, lat } = ev.lngLat;
            // const marker = new mapboxgl.Marker();
            // marker.id = v4(); //Si el marcador ya tiene ID

            // marker
            //     .setLngLat([lng, lat])
            //     .addTo(mapa.current)
            //     .setDraggable(true); //Para que se pueda mover

            // marcadores.current[marker.id] = marker;
        });

        
        mapa.current?.on('load', function () {
            console.log({geoJson});
            
            mapa.current?.addSource('mapa_guatemala', {
                'type': 'geojson',
                'data': geoJson
            });
    
            mapa.current?.addLayer({
                'id': 'colores_gt',
                'type': 'fill',
                'source': 'mapa_guatemala',
                'filter ': ['==', '$type', 'Polygon'],
                'paint': {
                        'fill-color': [
                            'interpolate',
                            ['linear'],
                            ['get', 'total'],
                            0,
                            '#F2F12D',
                            11,
                            '#EED322',
                            15,
                            '#E6B71E',
                            30,
                            '#DA9C20',
                            40,
                            '#CA8323',
                            61,
                            '#B86B25',
                            86,
                            '#A25626',
                            100,
                            '#8B4225',
                            200,
                            '#723122'
                        ],
                        'fill-opacity': 1
                        }
                
            }); //Mostrar labels 'admin-1-boundary-bg'  'waterway-label'
    
           
            mapa.current?.addLayer({
                'id': 'state-borders',
                'type': 'line',
                'source': 'mapa_guatemala',
                'layout': {},
                'paint': {
                'line-color': '#627BC1',
                'line-width': 2
                }
                });

                mapa.current?.on('click', 'colores_gt', function (e) {
                    // const nombreDepto=new mapboxgl.Popup();
                    // nombreDepto
                    // .setLngLat(e.lngLat)
                    // .setHTML(e.features[0].properties.nombre)
                    // .addTo(mapa.current);
                    
                    let nombre=e.features[0].properties.nombre ?? '';
                    getData(nombre);
                    const { lng, lat } = e.lngLat;;
                    setCoords({
                        lng: lng.toFixed(4),
                        lat: lat.toFixed(4),
                        minZoom:6.5,
                        zoom: nombre==='Petén' ? 8 :8.8,
                    });
                    setDeptoSelected(true);
                   // mapa.current?.getSource('mapa_guatemala').setData(nuevo);
            
                    // departamentos.current[e.features[0].properties.cartodb_id] = nombreDepto;
                    });

                // mapa.current?.addLayer({
                //     'id': 'titulo_departamento',
                //     'type': 'symbol',
                //     'source': 'mapa_guatemala',
                //     'layout': {
                //     'text-field': ['get', 'departamentos'],
                // 'icon-text-fit': 'both',
                // 'icon-image': ['get', 'image-name'],
                // 'icon-allow-overlap': true,
                // 'text-allow-overlap': true
                //     }
                //     });

                mapa.current?.addLayer({
                    'id': 'off-leash-areas',
                    'type': 'symbol',
                    'source': 'mapa_guatemala',
                    'layout': {
                    'text-field': [
                    'format',
                    ['upcase', ['get', 'nombre']],
                    { 'font-scale': 0.6 },
                    ],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 0.6],
                    'text-anchor': 'top'
                    }
                    });


                    // mapa.current?.on('zoom', function () {
                    //     if (mapa.current?.getZoom() <10) {
                    //     mostrarTodosLosDeptos();
                    //     }
                    //     });

        });

        
    }, [coords]);
    return {
        coords,
        marcadores,
        setRef,
        deptoSelected,
        mostrarTodosLosDeptos
    }
}
