import React, {Component} from 'react';
import FriendContact from './friendComponent';

class Friends extends Component{
    render(){
        return(
            <div className="card userPic lightShadow m-3 mx-auto">
                <div className="card-body">
                    <h5 className="card-title">Friends</h5>
                    <div className="parent">
                        {
                            this.props.data.map((contact) => {
                                return <FriendContact contact={contact} key={contact.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Friends;