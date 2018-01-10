import React, {Component} from 'react';

class FeedInfo extends Component{
    render(){
        return(
            <div className="feedInfoChild">
                <div className="row">
                    <div className="col-2">
                        <i className={this.props.data.icon}></i>
                    </div>
                    <div className="col-10">
                        <p>{this.props.data.detail}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedInfo;