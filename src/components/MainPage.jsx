import React from 'react';

const MainPage = (props) => {
    const {handleInfoClick,mData} = props;
    let imageStyle = {
    }
    if (mData && mData.hdurl){
        imageStyle.backgroundImage = 'url('+mData.hdurl+")"
    }
    return (
        <div className="mainpage" style={imageStyle}>
            <i className="fas fa-search iconstyle" onClick={handleInfoClick}></i>
        </div>
    );
};

export default MainPage;