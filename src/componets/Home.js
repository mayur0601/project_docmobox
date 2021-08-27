import React from 'react'
import FeatureButn from './FeatureButn';
import Button from './Button';

function Home() {
    return (
        <div className="App">
        <div className="feat">
        {/* <h2> Create a PDF From below Formats</h2>  */}
        <FeatureButn/>
        {/* <h2> Create a PDF From below Formats</h2>  */}
        <FeatureButn/>
  
        </div>
  
        <Button/>
        
       
      </div>
    )
}

export default Home
