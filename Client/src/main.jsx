import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './index.scss'
import Sidebarprovider from './Context/SidebarContext.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate  persistor={persistor}>
            <Sidebarprovider>
                <App />
            </Sidebarprovider>
        </PersistGate>
    </Provider>
)
