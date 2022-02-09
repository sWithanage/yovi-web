import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {

    render() {
        return (
            <Html lang={'eng'}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="robots" content="index, follow"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta name="language" content="English"/>
                    <meta name="revisit-after" content="7 days"/>
                    <meta name="author" content="Expergen"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument