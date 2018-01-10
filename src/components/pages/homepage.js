import React, { Component } from 'react';
import ProfilePic from './../profile/profileComponent/profilepic';
import Friends from './../profile/profileComponent/friendsList';

let contacts = [{
    id: 0,
    name: 'Lucinda',
    img: 'https://i.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-picture-profile-pics.jpg'
}, {
    id: 1,
    name: 'Kathy',
    img: 'https://pbs.twimg.com/profile_images/461856919771037696/xgZYI6k_.jpeg'
}, {
    id: 2,
    name: 'Violet',
    img: 'http://dp.profilepics.in/profile_pictures/profile_pictures_2017/profile_pictures_for_whatsapp_23.jpg'
}, {
    id: 3,
    name: 'Ruby',
    img: 'http://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg'
}, {
    id: 4,
    name: 'Saphire',
    img: 'https://pbs.twimg.com/profile_images/471860196495478784/Ykz1vieO.jpeg'
}, {
    id: 5,
    name: 'Mark',
    img: 'http://www.kpop-map.com/wp-content/uploads/2016/01/sm-rookies-kun-profile.jpg'
}, {
    id: 6,
    name: 'Bill',
    img: 'https://pbs.twimg.com/profile_images/624538070059253760/05sGQxGK.jpg'
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