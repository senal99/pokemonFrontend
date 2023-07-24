import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouterFile from './routes/route.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'

//StickMode is disabled cus it makes the components render two times. i think.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <RouterFile />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode> 
)
