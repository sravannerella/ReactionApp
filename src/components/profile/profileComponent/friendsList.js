import React, {Component} from 'react';
import FriendContact from './friendComponent';

class Friends extends Component{
    render(){
        return(
            <div className="card lightShadow m-3 mt-0 mx-auto">
                <div className="card-body">
                    <h5 className="card-title">Friends <span className="grayText">{this.props.data.length}</span> </h5>
                    <div className="parent spacingNegativeMargin">
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