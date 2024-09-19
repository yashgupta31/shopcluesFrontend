import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
// import { AuthProvider } from './context/AuthContext.js'
import store from '../src/Redux/store/store.js'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
    </AuthProvider>
    </Provider>
  </React.StrictMode>
)
