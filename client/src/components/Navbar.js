import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { PAGE_CHANGE } from '../utils/actions';

const Navbar = () => {
    const [state, dispatch] = useStoreContext();

    // function handlePageChange(page){
    //     dispatch({
    //         type: PAGE_CHANGE,
    //         page: page,
    //     })
    // }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <a className="navbar-brand" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className={state.currentPage === 'Search' ? "nav-item active": "nav-item"}>
                    <a className="nav-link" href="/" >Search</a>
                </li>
                <li className={state.currentPage === 'Saved' ? "nav-item active": "nav-item"}>
                    <a className="nav-link" href="/saved" >Saved</a>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;