import React, {Component} from 'react';

class ProfilePic extends Component{
    render(){
        return(
            <div className="card userPic lightShadow m-3 mx-auto">
                <img className="card-img-top" src="https://tinypost.co/wp-content/uploads/2016/09/cute-profile-pics-for-whatsapp-images.png" alt="profilePicture" />
                <div className="card-body center-block">
                    <button className="btn btn-primary center-block w-100">Message</button>
                </div>
            </div>
        )
    }
}

export default ProfilePic;