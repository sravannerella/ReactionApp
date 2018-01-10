import React, {Component} from 'react';

class FriendContact extends Component{
    render(){
        return(
            <div className="child p-2 text-center">
                <img className="rounded-circle friendPic" alt="Friend" src={this.props.contact.img} />
                <p className="card-text font-weight-bold grayText">{this.props.contact.name}</p>
            </div>
        )
    }
}

export default FriendContact;