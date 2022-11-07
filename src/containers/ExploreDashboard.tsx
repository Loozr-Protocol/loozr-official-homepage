import React from 'react'
import Dashboard from '../components/Layout/dashboard'
import ArtisteDashboard from './ArtisteDashboard'

export default function ExploreDashboard() {
    return (
        <Dashboard>
            <ArtisteDashboard />
        </Dashboard>
    )
}
