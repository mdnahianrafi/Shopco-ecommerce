import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
<PersistGate loading={<LoadingSpinner loading={true}/>} persistor={persistor}>
    <App/>
</PersistGate>
</Provider>
  </StrictMode>,

)
