import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AdviceApp from './AdviceApp'
// import UsrForm from './formSample/UsrForm'
// import UsrFrm from './formSample/UsrFrm'
// import UsrDet from './formSample/UsrDet'
// import UserDetails from './formSample/UserDetails'
// import Cart from './formSample/Cart'
// import './index.css'
// import '../src/HeaderCss.css'
// import App from './App.jsx'
// import Student from './Components/Student.jsx'
// import Header from './Components/Header.jsx'
// import Card from './Card.jsx'
// import '../src/code.css'
// import QrCode from './QrCode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Header/> */}
    {/* <Student/> */}
    {/* <Card /> */}
    {/* <QrCode/> */}
    {/* <Cart/> */}
    {/* <UserDetails /> */}
    {/* <UsrDet/> */}
    {/* <UsrForm /> */}
    {/* <UsrFrm/> */}
    <AdviceApp/>
  </StrictMode>,
)
