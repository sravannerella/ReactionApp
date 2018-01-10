import React, {Component} from 'react';
import FeedInfo from './feedInfo';

class Feed extends Component{
    render(){
        return(
            <div className="card mt-3 lightShadow">
                <div className="p-4">
                    <h5 className="card-title">
                        <p className="mb-2">User Name</p>
                        <p className="card-text font-weight-normal">Developer</p>
                    </h5>

                    <div className="mt-4 parent">
                        {
                            this.props.data.map((detail) => {
                                return <FeedInfo data={detail} key={detail.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed;