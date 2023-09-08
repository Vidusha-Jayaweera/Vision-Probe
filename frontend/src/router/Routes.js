import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Marketplace from '../components/marketplace/Marketplace'


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />
            <Route path="/marketplace" element={<Marketplace />} />

            {/* Here define all the routes to views */}

        </Routes>
    )
}

export default Router;