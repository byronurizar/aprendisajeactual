import React from "react";
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

export const Genograma2 = () => {
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
                {shapes.map((shape) => (
                    <>
                        {/* <Circle
                            x={shape.x}
                            y={shape.y}
                            key={shape.id}
                            fill={fromShapeId === shape.id ? "gray" : "white"}
                            radius={30}
                            shadowBlur={5}
                            onClick={() => {
                                if (fromShapeId) {
                                    const newConnector = {
                                        from: fromShapeId,
                                        to: shape.id,
                                        id: connectors.length
                                    };
                                    setConnectors(connectors.concat([newConnector]));
                                    setFromShapeId(null);
                                } else {
                                    setFromShapeId(shape.id);
                                }
                            }}
                        />
                        <Line
                            key={`linea${shape.x}`}
                            points={[shape.x, shape.y - 30, shape.x, shape.y - 60]}
                            stroke="gray"
                            strokeWidth={1}
                        />
                        <Text fontSize={10} text="Esposa Apellidos" wrap="char" align="center" fontFamily='Calibri' fill='gray' x={shape.x - 40} y={shape.y + 35} width={80} /> */}
                        <Masculino
                            shape={shape}
                            nombre="Jose Luis Ixpata Roman" />
                        <Femenino
                            shape={shape}
                            nombre="Maria Teresa"
                        />
                    </>
                ))}
                {/* <Text text="Click on on circle then on another to connect them" /> */}

            </Layer>
        </Stage>
    );
};

const Masculino = ({ shape, padres = false, nombre }) => {
    return (
        <>
            <Rect
                x={shape.x}
                y={600}
                width={60}
                height={60}
                fill="white"
                shadowBlur={5}
            />
            {padres == true &&
                <Line
                    key={`linea${shape.x}`}
                    points={[shape.x + 30, 600, shape.x + 30, 600 - 30]}
                    stroke="gray"
                    strokeWidth={1}
                />
            }
            <Text fontSize={10} text={nombre} wrap="char" align="center" fontFamily='Calibri' fill='gray' x={shape.x - 10} y={600 + 65} width={80} />
        </>
    )
}
const Femenino = ({ shape, padre = false, nombre }) => {
    return (
        <>
            <Circle
                x={shape.x}
                y={shape.y}
                key={shape.id}
                fill="white"
                radius={30}
                shadowBlur={5}
            />
            {padre === true &&
                <Line
                    key={`linea${shape.x}`}
                    points={[shape.x, shape.y - 30, shape.x, shape.y - 60]}
                    stroke="gray"
                    strokeWidth={1}
                />}
            <Text fontSize={10} text={nombre} wrap="char" align="center" fontFamily='Calibri' fill='gray' x={shape.x - 40} y={shape.y + 35} width={80} />
        </>
    )
}



var datos = [
    {
        id: 1,
        nombre: 'Byron López',
        g: 'M',
        e: '1',
        w: 2,
        p: null,
        m: null,
        a: ["A", "B"]
    },
    {
        id: 2,
        nombre: 'Oneida Perez',
        g: 'F',
        e: '1',
        h: 1,
        p: null,
        m: null,
        a: ["A", "B"]
    },
    {
        id: 3,
        nombre: 'Nataly Lopez',
        g: 'M',
        e: '0',
        p: 1,
        m: 2,
        a: ["A", "B"]
    },
    {
        id: 4,
        nombre: 'Alice López',
        g: 'F',
        e: '1',
        p: 1,
        m: 1,
        a: ["A", "B"]
    },


]