import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* 
                favicon
                fuentes 
                permite agregar estilos externos
                Otros Javascript
                */}
            </Head>
            <body className='my-body-class'>
                <Main />
                <NextScript />
                {/* 
                Se pueden agregar elementos adicionales, pero que esten por fuera de nuestra aplicación 
                */}
            </body>
        </Html>
    )
}