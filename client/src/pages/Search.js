import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import { useStoreContext } from '../utils/GlobalState';
import { PAGE_CHANGE } from '../utils/actions';

const Search = () => {
    const [state, dispatch] = useStoreContext();

    function setPage() {
        dispatch({
            type: PAGE_CHANGE,
            page: 'Search'
        })
    }
    

    useEffect(() => {
        setPage();
    }, [])
    
    return (
        <>
        <Navbar />
        <SearchForm />
        </>
    );
};

export default Search;