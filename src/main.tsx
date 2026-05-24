import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
// import { MyAwesomeApp } from './MyAwesomeApp'
// import ItemCounter from './shopping-cart/ItemCounter';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp/>
  </StrictMode>,
)
