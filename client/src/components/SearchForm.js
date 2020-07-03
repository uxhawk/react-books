import React, { useRef, useEffect } from 'react';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_SEARCH_RESULTS } from '../utils/actions';
import Card from './Card';
import shortid from 'shortid';

const SearchForm = () => {
    const [state, dispatch] = useStoreContext();
    let searchRef = useRef();

    function searchBtnClick(event) {
        if (searchRef.current.value === '') {
            return
        }
        event.preventDefault();
        fetchBooks(searchRef.current.value);

    }

    function fetchBooks(string) {
        API.searchForBooks(string)
        .then((res) => {
            // dispatch goes here
            dispatch({
                type: UPDATE_SEARCH_RESULTS,
                searchResults: res.data.items,
            })
        })
        .catch((err) => console.log(err));
    searchRef.current.value = '';
    }

    useEffect(() => {
        if (state.searchResults.length === 0) {
            return;
        }
        fetchBooks(searchRef.current.value);
    }, []);
    
    return (
        <>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className="mt-5">
                        <div className="form-group">
                            <input ref={searchRef} type="text" className="form-control" id="bookSearchInput" aria-describedby="emailHelp" placeholder="Search for books and autors" />
                        </div>
                        <button type="submit" className="btn btn-raised btn-primary" onClick={(event) => searchBtnClick(event)}>Search</button>
                    </form>
                </div>
            </div>

            {
                state.searchResults.length === 0 ? "" : (
                    state.searchResults.map((book) => {
                        return <Card book={book} key={shortid.generate()} />
                    })
                )
            }
        </>
    );
};

export default SearchForm;