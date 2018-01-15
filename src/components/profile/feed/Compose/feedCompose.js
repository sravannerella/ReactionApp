import React, {Component} from 'react';

class FeedCompose extends Component{
	render(){
		return(
			<div className="card mt-3 lightShadow">
                <div className="p-4">
                	<div className="row">
						<div className="col-xs-1 col-sm-2 col-md-2 col-lg-2 text-center">
							<img className="rounded-circle friendPic" alt="Friend" src="https://tinypost.co/wp-content/uploads/2016/09/cute-profile-pics-for-whatsapp-images.png"/>
						</div>
						<div className="col-xs-11 col-sm-10 col-md-10 col-lg-10">
							<div className="form-group">
							    <textarea className="form-control borderless" placeholder="What's on your mind"  id="exampleTextarea"></textarea>
						  	</div>
						</div>
                	</div>
                	
                </div>
            </div>
		)
	}
}

export default FeedCompose;