import React, { useEffect } from 'react';
import '../App.css';
import { useStoreContext } from '../utils/GlobalState';
import { FILTER_SEARCH_RESULTS, ADD_TO_FAVORITES } from '../utils/actions';
import API from '../utils/API';

const Card = (props) => {
    const [state, dispatch] = useStoreContext();
    let etag = '';

    function saveBtnClick(event) {
        etag = event.target.getAttribute('data-tag');
        addToSavedBooks();
        
    }

    function addToSavedBooks() {
        const bookToSave = state.searchResults.filter((book) => etag === book.etag);
        const bookDetails = {
            title: bookToSave[0].volumeInfo.title,
            author: bookToSave[0].volumeInfo.authors[0],
            description: bookToSave[0].volumeInfo.description,
            smallThumbnail: bookToSave[0].volumeInfo.imageLinks.smallThumbnail,
            infoLink: bookToSave[0].volumeInfo.infoLink
        }

        API.saveBook(bookDetails)
            .then(res => {
                // dispatch({
                //     type: ADD_TO_FAVORITES,
                //     book: bookDetails,
                // })
                filterSearchResults();
            })
            .catch((err) => console.log(err));
    }

    function filterSearchResults() {
        const filteredArr = state.searchResults.filter((book) => etag !== book.etag);
        dispatch({
            type: FILTER_SEARCH_RESULTS,
            searchResults: filteredArr,
        });
    }

    useEffect(() => {
        if(etag === '') {
            return
        }
        filterSearchResults();
    }, []);
    
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card mb-2">
                    <div className="row">
                        <div className="col-sm-2">
                        <img src={props.book.volumeInfo.imageLinks.smallThumbnail}></img>
                        </div>
                        <div className="col-sm-10">
                        <h5 className="card-title">{props.book.volumeInfo.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.book.volumeInfo.authors}</h6>
                        <p className="card-text">{props.book.volumeInfo.description}</p>
                        <div className="mt-2 d-flex justify-content-end">
                        <a href={props.book.volumeInfo.canonicalVolumeLink} className="btn btn-raised btn-link" target="_blank">View Details</a>
                        <button type="button" className="ml-2 btn btn-raised btn-info" data-tag={props.book.etag} onClick={(event) => saveBtnClick(event)}>Save</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;