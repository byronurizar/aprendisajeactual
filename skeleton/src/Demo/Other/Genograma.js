import React, { useEffect } from "react";
import { Stage, Layer, Circle, Line, Text, Rect } from "react-konva";

function generateShapes() {
    const shapes = [];
    let x = 80;
    for (var i = 0; i < 10; i++) {
        shapes.push({
            id: i,
            x: x,
            y: 100
        });
        x += 120;
    }
    return shapes;
}

const INITIAL_SHAPES = generateShapes();

export const Genograma = () => {
    const [shapes, setShapes] = React.useState(INITIAL_SHAPES);
    const [connectors, setConnectors] = React.useState([]);

    const [fromShapeId, setFromShapeId] = React.useState(null);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {connectors.map((con) => {
                    const from = shapes.find((s) => s.id === con.from);
                    const to = shapes.find((s) => s.id === con.to);

                    return (
                        <Line
                            key={con.id}
                            points={[from.x, from.y, to.x, to.y]}
                            stroke="gray"
                            strokeWidth={1}
                        />
                    );
                })}

                {
                    shapes.map((shape) => (
                    <>
                        <Masculino
                            elemento={shape}
                            nombre="Jose Luis Ixpata Roman" />
                        <Femenino
                            elemento={shape}
                            nombre="Maria Teresa"
                        />
                    </>
                    ))
                }
            </Layer>
        </Stage>
    );
};

const Masculino = ({ elemento, padres = false, nombre }) => {
useEffect(() => {
    let items=datos.filter(i=>(i.padre===null || i.padre===0) && (i.madre===null || i.madre===0));
    let idEsposo=0;
    let idEsposa=0;
    items.map((i)=>{
        let hijos=datos.filter(a=>Number(a.padre)===i.id) ||[];
        console.log("Hijos",hijos)
    })
}, []);

    return (
        <>
            <Rect
                x={elemento.x}
                y={600}
                width={60}
                height={60}
                fill="white"
                shadowBlur={5}
            />
            {
                padres === true &&
                <Line
                    key={`linea${elemento.x}`}
                    points={[elemento.x + 30, 600, elemento.x + 30, 600 - 30]}
                    stroke="gray"
                    strokeWidth={1}
                />
            }
            <Text
                fontSize={10}
                text={nombre}
                wrap="char"
                align="center"
                fontFamily='Calibri'
                fill='gray'
                x={elemento.x - 10} y={600 + 65}
                width={80}
            />
        </>
    )
}
const Femenino = ({ elemento, padre = false, nombre }) => {
    return (
        <>
            <Circle
                x={elemento.x}
                y={elemento.y}
                key={elemento.id}
                fill="white"
                radius={30}
                shadowBlur={5}
            />
            {
                padre === true &&
                <Line
                    key={`linea${elemento.x}`}
                    points={[elemento.x, elemento.y - 30, elemento.x, elemento.y - 60]}
                    stroke="gray"
                    strokeWidth={1}
                />
            }
            <Text
                fontSize={10}
                text={nombre}
                wrap="char"
                align="center"
                fontFamily='Calibri'
                fill='gray'
                x={elemento.x - 40}
                y={elemento.y + 35}
                width={80}
            />
        </>
    )
}



var datos = [
    {
        id: 1,
        nombre: 'Bernardino Ixpata',
        genero: 'M',
        vive: false,
        esposa: 2,
        padre: null,
        madre: null,
        atributos: ["A", "B"]
    },
    {
        id: 2,
        nombre: 'Francisca López',
        genero: 'F',
        vive: false,
        esposo: 1,
        padre: null,
        madre: null,
        atributos: ["A", "B"]
    },
    {
        id: 3,
        nombre: 'Nicolas Ixpata',
        genero: 'M',
        vive: false,
        padre: 1,
        madre: 2,
        esposa: 4,
        atributos: ["A", "B"]
    },
    {
        id: 4,
        nombre: 'Ciriaca Roman',
        genero: 'F',
        vive: true,
        padre: null,
        madre: null,
        esposo: 3,
        atributos: ["A", "B"]
    },
    {
        id: 5,
        nombre: 'Julian Ixpata',
        genero: 'M',
        vive: true,
        padre: 1,
        madre: 2,
        atributos: ["A", "B"]
    },
    {
        id: 6,
        nombre: 'Eusebio Ixpata',
        genero: 'M',
        vive: true,
        padre: 1,
        madre: 2,
        atributos: ["A", "B"]
    },
    {
        id: 7,
        nombre: 'Carmen Ixpata',
        genero: 'F',
        vive: true,
        padre: 1,
        madre: 2,
        atributos: ["A", "B"]
    },
    {
        id: 8,
        nombre: 'Pedrina Ixpata',
        genero: 'F',
        vive: true,
        padre: 1,
        madre: 2,
        atributos: ["A", "B"]
    },
    {
        id: 9,
        nombre: 'Lucia Ixpata',
        genero: 'F',
        vive: true,
        padre: 1,
        madre: 2,
        atributos: ["A", "B"]
    },
    {
        id: 10,
        nombre: 'Lucia Ixpata',
        genero: 'F',
        vive: true,
        padre: 1,
        madre: 2,
        atributos: ["A", "B"]
    },
    {
        id: 11,
        nombre: 'Jose Luis',
        genero: 'M',
        vive: true,
        padre: 3,
        madre: 4,
        atributos: ["A", "B"]
    },
    {
        id: 12,
        nombre: 'Maria Teresa',
        genero: 'F',
        vive: false,
        padre: 3,
        madre: 4,
        atributos: ["A", "B"]
    },
    {
        id: 13,
        nombre: 'Pedro Xitumul',
        genero: 'M',
        vive: true,
        esposa: 14,
        atributos: ["A", "B"]
    },
    {
        id: 14,
        nombre: 'Martina Ixpata',
        genero: 'E',
        vive: true,
        padre: 3,
        madre: 4,
        atributos: ["A", "B"]
    },
    {
        id: 15,
        nombre: 'Pedro Iboy',
        genero: 'M',
        vive: true,
        esposa: 14,
        atributos: ["A", "B"]
    },
    {
        id: 16,
        nombre: 'Maria Xitumul',
        genero: 'E',
        vive: true,
        padre: 13,
        madre: 14,
        atributos: ["A", "B"]
    },
    {
        id: 17,
        nombre: 'Mariana Iboy',
        genero: 'E',
        vive: true,
        padre: 13,
        madre: 15,
        atributos: ["A", "B"]
    },
]