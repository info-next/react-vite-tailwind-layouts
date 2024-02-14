import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Layout from '../Layouts/Layout'
import Auths from '../Layouts/Auths'
import Signup from '../Auth/Signup/Signup'
import Login from '../Auth/Login/Login'

import React from 'react'
import Home from '../Pages/Home/Home'

function Router() {
  return (
    
 <Routes>
  <Route path="/auth" element={<Auths />}>
    <Route index element={<Login />} />
    <Route path="sign-up" element={<Signup />} />
  </Route>
  <Route element={<Layout />}>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>
  )
}

export default Router

// const Router = 
    // createBrowserRouter(
    //     createRoutesFromElements(
    //         <Route path="/" element={<RootLayout />} >
    //             <Route index element={<Layout />} />
    //             <Route path="auth" element={<Auths />} >
    //                 <Route path="login" element={<Login />} />
    //                <Route path="sign-up" element={<Signup />} />
    //            </Route>,
    //         </Route>,
            
    //     )
    // )


// export default Router