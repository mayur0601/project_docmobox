import React from 'react'
import '../CSS/feature.css';
import wordImg from '../assetss/wordImg.png';
import pdfImg from '../assetss/pdfImg.png';
import arrow from '../assetss/arroww.png';
function FeatureButn() {
    return (
        
        <div className="cover_feature">
           <h2> Create a PDF From below Formats</h2> 
        <div className="feature">
           <div className="btn">
               <img src={wordImg} className="image"/>
               <img src={arrow} className="Arrowimage"/>
               <img src={pdfImg} className="image"/>
           </div>
           <div className="btn">
               <img src={wordImg} className="image"/>
               <img src={arrow} className="Arrowimage"/>
               <img src={pdfImg} className="image"/>
           </div>
           <div className="btn">
               <img src={wordImg} className="image"/>
               <img src={arrow} className="Arrowimage"/>
               <img src={pdfImg} className="image"/>
           </div>
           <div className="btn">
               <img src={wordImg} className="image"/>
               <img src={arrow} className="Arrowimage"/>
               <img src={pdfImg} className="image"/>
           </div>
        </div>
        
        </div>
    )
}

export default FeatureButn
// docmobox\public\assets
