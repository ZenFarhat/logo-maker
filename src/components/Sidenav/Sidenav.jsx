import React from 'react'
import './Sidenav.css'

function Sidenav() {
    return (
        <div className="sidenav">
            <p className="sidenav-dropdown">Shapes<span><i class="fas fa-chevron-down"></i></span></p>
            <p className="sidenav-dropdown">Letters<span><i class="fas fa-chevron-down"></i></span></p>
            <p className="sidenav-dropdown">Icons<span><i class="fas fa-chevron-down"></i></span></p>
            <p className="sidenav-dropdown">Animals<span><i class="fas fa-chevron-down"></i></span></p>
            <p className="sidenav-dropdown">Misc.<span><i class="fas fa-chevron-down"></i></span></p>
        </div>
    )
}

export default Sidenav
