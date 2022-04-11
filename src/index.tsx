import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DragonsSite } from './Sites/Dragons/component'
import { RocketsSite } from './Sites/Rockets/component'
import { NotFound } from './Sites/NotFound/component'
import { Default } from './Sites/Default/component'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Default/>}/>
        <Route path='/dragons' element={<DragonsSite/>}/>
        <Route path='/rockets' element={<RocketsSite/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals