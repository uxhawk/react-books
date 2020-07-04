import React from 'react'

const EmptyCard = () => {

    
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card mb-2">
                    <div className="row">
                        <div className="col-sm-12">
                        <h5 className="card-title">No saved books yet</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyCard;