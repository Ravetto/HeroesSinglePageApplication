import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, MarvelPage } from '../pages'
import { SearchPage } from '../pages'
import { HeroPage } from '../pages'

export const HeroesRouter = () => {
  return (
    <>
        <Navbar />

            <div className="container">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero/:id' element={<HeroPage />} />

        
                    <Route path='/' element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
                
    </>
  )
}
