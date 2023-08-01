import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ShopProvider } from './SHopContext';
import { Provider } from 'react-redux';
import { store } from './store';


const container = document.getElementById('root');


const root = createRoot(container);


root.render(

    // <ShopProvider>

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    // </ShopProvider>


)