import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../assets/css/style.scss';
import '../assets/css/responsive.scss';

import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';

import { initGA, logPageView } from '../utils/Analytics'

export default class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        }
    }

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }
        logPageView()
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <DefaultSeo
                    title="Blog - Desenvolvido com Next.js - tutorial Madai."
                    description="Adicione aqui uma descrição."
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://seusite.com.br/',
                        site_name: 'Blog - Blog com vercel e next.js.',
                    }}
                />

                <Component {...pageProps} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}