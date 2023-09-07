import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Here define all the routes to views */}

        </Routes>
    )
}

export default Router;