import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store ,persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'
import ThemeProvider from './Components/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
  </PersistGate> 
)
