import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {TonConnectUIProvider} from '@tonconnect/ui-react';

const manifestUrl = 'https://cronnoss.github.io/counter-front-end/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App/>
    </TonConnectUIProvider>,
)