import React, {Component} from 'react';

class Photos extends Component{
    render(){
        return(
            <div className="card photos lightShadow m-3 mt-0 mx-auto">
                <h5 className="card-title pt-2 pl-4 pr-4 pb-2 mb-0">Photos</h5>
                <img className="card-img-top cardHeight" src="https://static.pexels.com/photos/196667/pexels-photo-196667.jpeg" alt="profilePicture" />
            </div>
        )
    }
}

export default Photos;