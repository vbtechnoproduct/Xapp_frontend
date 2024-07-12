import AvatarOne from '../../assets/avtar/Ellipse 4.png'
import AvatarTwo from '../../assets/avtar/Ellipse 7 (2).png'
import AvatarThree from '../../assets/avtar/Ellipse 7 (1).png'
import AvatarFour from '../../assets/avtar/Ellipse 5.png'
import AvatarFive from '../../assets/avtar/Ellipse 7 (3).png'
import AvatarSix from '../../assets/avtar/Ellipse 7.png'


const VideoOne = require('../../assets/video/video1.mp4') as string;
const VideoTwo = require('../../assets/video/video2.mp4') as string;
const VideoThree = require('../../assets/video/video3.mp4') as string;
const VideoFour = require('../../assets/video/video4.mp4') as string;
const VideoFive = require('../../assets/video/video5.mp4') as string;

type UserStory = {
    img: string;
    name: string;
}

type categoryAll = {
    name: string
}

type shortsVideoAll = {
    img: string,
    name: string
    title: string,
    video: any,
    view: string,
    date: string,
}

export const UserStoryData: UserStory[] = [
    { img: AvatarOne, name: 'Like Nastya' },
    { img: AvatarTwo, name: 'Bassera' },
    { img: AvatarThree, name: 'Alor Path' },
    { img: AvatarFour, name: 'Rain Drop' },
    { img: AvatarFive, name: 'Roy' },
    { img: AvatarSix, name: 'Vespa' },
];


export const categoryAll: categoryAll[] = [
    { name: 'All' },
    { name: 'Trendings' },
    { name: 'New' },
    { name: 'Car' },
    { name: 'Music' },
    { name: 'Dance' },
];

export const shortsVideo: shortsVideoAll[] = [
    { img: AvatarOne, name: 'Like Nastya', video: VideoOne, title: "Heart Touching Nasheed #Shorts", view: "19,210,251", date: "Jul • 1, 2016" },
    { img: AvatarTwo, name: 'Bassera', video: VideoTwo, title: "VN editing #nature #trendingshorts #shorts #youtubeshorts #cinematography #rain #shortvideo", view: "120,251", date: "Aug •6 , 2018" },
    { img: AvatarThree, name: 'Alor Path', video: VideoThree, title: "Beautiful World - Beautiful places in the World #shorts #61", view: "20,210,251", date: "Jun • 20, 2018" },
    { img: AvatarFour, name: 'Rain Drop', video: VideoFour, title: "Most beautiful villages in Switzerland 😻 #switzerland #lauterbrunnen #nature #waterfall #travel", view: "28,210,251", date: "Apr • 18, 2018" },
    { img: AvatarFive, name: 'Roy', video: VideoFive, title: "Barish Ka Mausam 🌧️ #status #shorts", view: "20,210,251", date: "Mar • 13, 2020" },
    { img: AvatarSix, name: 'Vespa', video: VideoTwo, title: "nature status 🌄 with song 🥰 #shorts #nature #status", view: "1,210,251", date: "Jan • 16, 2020" },
];