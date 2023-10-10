import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ColorVisionTest from '../views/ColorVisionTest';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Here define all the routes to views */}
            <Route path="vision-probe/color-vision-test" element={<ColorVisionTest />} />

        </Routes>
    )
}

export default Router;