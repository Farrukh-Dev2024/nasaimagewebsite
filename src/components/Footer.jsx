import React from 'react';

const Footer = (props) => {
    const {infoStatus ,mData}=props;
    let displayclass = (infoStatus?"footer fadeIn":"footer fadeOut") + " what";

    let h1text = "Instructions for Aliens"
    let ptext = 'Flying aboard Voyagers 1 and 2 are identical "golden" records, carrying the story of Earth far into deep space. This gold aluminum cover was designed to protect the gold-plated records from micrometeorite bombardment, but also serves a double purpose in providing the finder a key to playing the record.'
    if (mData!=null){
        h1text = mData?.title
        ptext = mData?.explanation
    }
    return (
        <div className= {displayclass} >
            <h1>{h1text}</h1>
            <p>{ptext}</p>
        </div>
    );
};

export default Footer;