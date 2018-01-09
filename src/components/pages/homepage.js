import React, { Component } from 'react';
import ProfilePic from './../profile/profileComponent/profilepic';

class HomePage extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <ProfilePic />
                    </div>

                    <div className="col-md-4 col-sm-12">
                        My Feed
                    </div>

                    <div className="col-md-4 col-sm-12">
                        Photos and Friends
                    </div> 
                </div>  
            </div>
        )
    }
}

export default HomePage;