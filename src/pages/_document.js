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

                    {/* Analytics */}
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
                    
                    {/* Cookie consent */}
                    <link rel="stylesheet" type="text/css" href="https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.css"/>
                    <script src="https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.js" defer></script><script>window.addEventListener("load", function(){window.wpcc.init({"colors":{"popup":{"background":"#606060","text":"#ffffff","border":"#f9f9f9"},"button":{"background":"#f9f9f9","text":"#000000"}},"padding":"none","margin":"small","fontsize":"small","content":{"href":"www.nepalcooks.com/cookiepolicy"}})});</script>
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
