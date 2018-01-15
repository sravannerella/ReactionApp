import React, { Component } from 'react';
import ProfilePic from './../profile/profileComponent/profilepic';
import Friends from './../profile/profileComponent/friendsList';
import Feed from './../profile/feed/feedComponent';
import FeedCompose from './../profile/feed/Compose/feedCompose';
import Photos from './../profile/profileComponent/photosComponent';

let contacts = [
    {
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
    },{
        id: 7,
        name: 'Will',
        img: 'http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg'
    }
];

let profile = [
    {
        id: 0,
        icon: 'fas fa-building',
        detail: 'Lives in Novi, MI'
    },
    {
        id: 1,
        icon: 'fas fa-calendar',
        detail: 'Born in May'
    },
    {
        id: 2,
        icon: 'fas fa-briefcase',
        detail: 'Works at HERE'
    },
    {
        id: 3,
        icon: 'fas fa-circle',
        detail: 'Female'
    },{
        id: 4,
        icon: 'fas fa-book',
        detail: 'Mechanical Engineer'
    },
    {
        id: 5,
        icon: 'fas fa-language',
        detail: 'Telugu, English, Hindi'
    }, {
        id: 6,
        icon: 'fas fa-headphones',
        detail: 'Telugu, English, Hindi'
    }
];

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <ProfilePic/>
                        <Friends data={contacts} />
                    </div>

                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <Feed data={profile}/>
                        <FeedCompose />
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <Photos />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;