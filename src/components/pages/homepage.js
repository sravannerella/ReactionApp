import React, { Component } from 'react';
import ProfilePic from './../profile/profileComponent/profilepic';
import Friends from './../profile/profileComponent/friendsList';

let contacts = [{
    id: 0,
    name: 'Lucinda',
    img: 'https://i.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-picture-profile-pics.jpg'
}, {
    id: 1,
    name: 'Adele',
    img: 'https://pbs.twimg.com/profile_images/461856919771037696/xgZYI6k_.jpeg'
}, {
    id: 2,
    name: 'Violet',
    img: 'http://dp.profilepics.in/profile_pictures/profile_pictures_2017/profile_pictures_for_whatsapp_23.jpg'
}];

class HomePage extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <ProfilePic />
                        <Friends data={contacts} />
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