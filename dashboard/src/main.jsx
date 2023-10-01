import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import store from './store/index.js'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'
const App = lazy(() => import('./App.jsx'))
import Loader from './views/components/Loader'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback= {<Loader/>} >
        <App />
        <Toaster toastOptions={{
          position:"top-right",
          style:{
            background:"#283046",
            color:"white"
          }
        }} />
      </Suspense>
    </Provider>
  </BrowserRouter>
)
