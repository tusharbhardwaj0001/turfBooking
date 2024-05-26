import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import { UserAuthContextProvider} from '../context/Authcontext.jsx'
import { TurfzListing } from '../pages/TurfListing.jsx'
import { ProtectedRoute } from '../components/ProtectedRoute.jsx'
import { Payment } from '../pages/Payment.jsx'
import { Bookings } from '../pages/Bookings.jsx'

export const AllRoutes = () => {
  return (
    <UserAuthContextProvider>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path="/turf" element={
            // <ProtectedRoute>
              <TurfzListing/>
            // </ProtectedRoute>
        }/>
       <Route path="/payment" element={<Payment/>}/>
       <Route path="/booking" element={<Bookings/>}/>
    </Routes>
    </UserAuthContextProvider>
  )
}
