import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useStoreContext } from '../utils/GlobalState';
import { LOAD_FAVORITES, PAGE_CHANGE } from '../utils/actions';
import API from '../utils/API';
import SavedBookCard from '../components/SavedBookCard';
import shortid from 'shortid';
import EmptyCard from '../components/EmptyCard';

const SavedBooks = () => {
    const [state, dispatch] = useStoreContext();

    function getSavedBooks() {
        API.getBooks()
            .then((res) => {
                dispatch({
                    type: LOAD_FAVORITES,
                    favorites: res.data,
                    page: 'Saved'
                })
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getSavedBooks();
    }, []);
    
    return (
        <>
        <Navbar />
        <div className="row">
            <div className="col-md-6 offset-md-3 my-3">
                <h2>Saved Books</h2>
            </div>
        </div>
            {
                state.savedBooks.length > 0 ? (
                    state.savedBooks.map((book) => {
                        return <SavedBookCard book={book} key={shortid.generate()}/>
                    })
                ) : <EmptyCard />
            }
        </>
    );
};

export default SavedBooks;