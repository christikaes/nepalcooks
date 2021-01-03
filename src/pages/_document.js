import Document, { Html, Head, Main, NextScript } from 'next/document';
import ScriptTag from 'react-script-tag';
import { withPrefix } from '../utils';


class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/public/favicon/favicon.ico" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-L0HBFLFLJH"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-L0HBFLFLJH');
                        `
                    }}>
                    </script>
                </Head>
                <body>
                    <Main />
                    <ScriptTag src={withPrefix('assets/js/plugins.js')}/>
                    <ScriptTag src={withPrefix('assets/js/main.js')}/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
