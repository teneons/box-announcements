import React from 'react';
import '../Header/Header.css';

export default function Headder() {
    
    return(
        <nav className="navbar d-flex justify-content-between flex-column flex-md-column flex-lg-row bg-transparent shadow-sm">
            <div className="d-flex flex-row">
                <div className='JustLogo'></div>
                <span className="navbar-brand font-weight-bold text-uppercase text-warning TextNameApp">Box announcements</span>
            </div>
            <button type="button" className="btn btn-lg btn-warning font-weight-bold text-uppercase">Add</button>
            <form className="form-inline mt-2 d-flex justify-content-center flex-column flex-lg-row col-12 col-lg-4">
                <input className="form-control mr-1 col-12 col-lg-9" type="search" placeholder="Search to announcements" aria-label="Search" />
                <button className="btn btn-outline-warning my-2 font-weight-bold text-uppercase" type="submit">Search</button>
            </form>
        </nav>
    )
}