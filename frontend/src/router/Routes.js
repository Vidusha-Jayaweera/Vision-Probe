import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Marketplace from '../components/marketplace/Marketplace'
import Cart from '../components/cart/Cart'
import Sample from '../components/Sample'


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sample" element={<Sample />} />

            {/* Here define all the routes to views */}

        </Routes>
    )
}

export default Router;