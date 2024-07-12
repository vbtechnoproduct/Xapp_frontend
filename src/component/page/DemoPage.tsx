import React, { useState } from 'react';
import { categoryAll, shortsVideo, UserStoryData } from '../extra/dummyData';
import HoverVideoPlayer from 'react-hover-video-player';
import { ReactComponent as CategoryIcon } from '../../assets/icon/categoryIcon.svg';

type UserStory = {
    img: string;
    name: string;
};

type Category = {
    name: string;
};

type shortVideo = {
    img: any,
    video: any,
    title: string,
    view: string
    date: string,
}

const DemoPage: React.FC = () => {
    const [selectCategory, setSelectCategory] = useState<string>('All');
    const handleSelectCategory = (selected: string) => {
        setSelectCategory(selected);
    };

    return (
        <div className='demoPage'>
            <div className='storyHead'>
                <div className='storyShow'>
                    {UserStoryData?.map((item: UserStory, index: number) => (
                        <>
                            <div className='showUserStory' key={index}>
                                <img src={item.img} alt={`User story ${index}`} />
                                <span>{item.name}</span>
                                <div className='dottUser'></div>
                            </div>
                        </>
                    ))}
                </div>
                <div className='allStory'>All</div>
            </div>
            <div className='categoryShow'>

                <div className='categoryAllBox'>
                    <div className='d-flex align-items-center'>
                        <div className='categoryIcon'>
                            <CategoryIcon />
                            <span>Category's  </span>
                        </div>
                        <div className='borderShow'></div>
                    </div>
                    {categoryAll?.map((item: Category, index: number) => (
                        <div className={`showBoxCategory ${selectCategory === item.name ? "selectedCategory" : ""}`} key={index} onClick={() => handleSelectCategory(item.name)}>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='white-space'></div>
            <div className='shortShow'>
                <div>
                    {shortsVideo?.map((item: shortVideo, index: number) => (
                        <div className='showVideo' key={index}>
                            <HoverVideoPlayer
                                style={{ width: "100%", height: "215px" }}
                                videoSrc={item.video}
                                loadingOverlay={
                                    <div className="loading-overlay">
                                        <div className="loading-spinner" />
                                    </div>
                                }
                            />
                            <div className='showDetailShort'>
                                <div className='userImg'>
                                    <img src={item.img} alt={`Video thumbnail ${index}`} />
                                </div>
                                <div className='detailShortText'>
                                    <h6>{item.title}</h6>
                                    <p><span>{item.view} Views</span><span>{item.date}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DemoPage;
