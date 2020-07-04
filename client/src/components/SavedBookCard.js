import React, { useEffect } from 'react';
import '../App.css';
import { useStoreContext } from '../utils/GlobalState';
import { FILTER_SEARCH_RESULTS, ADD_TO_FAVORITES } from '../utils/actions';
import API from '../utils/API';

const SavedBookCard = (props) => {
    const [state, dispatch] = useStoreContext();
    let etag = '';
    
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card mb-2">
                    <div className="row">
                        <div className="col-sm-2">
                        <img src={props.book.smallThumbnail}></img>
                        </div>
                        <div className="col-sm-10">
                        <h5 className="card-title">{props.book.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.book.authors}</h6>
                        <p className="card-text">{props.book.description}</p>
                        <div className="mt-2 d-flex justify-content-end">
                        <button type="button" className="ml-2 btn btn-raised btn-danger" data-id={props.book._id}>Remove</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedBookCard;