import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <div className="loading-col">
      <div className="loading-block"></div>
      <div className="loading-name"></div>
      <div className="loading-type"></div>
      <div className="loading-inner"> 
        <div className="loading-price"></div>
        <div className="loading-add"></div>
      </div>
    </div>
  );
}

export default LoadingBlock;