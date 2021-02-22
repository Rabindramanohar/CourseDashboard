import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className = "jumbotron">
            <h1>Course Admisnistration</h1>
            <p>React with redux router web application</p>
            <Link to = "about" className = "btn btn-primary btn-lg">Lear more</Link>
        </div>
    )
}

export default HomePage
