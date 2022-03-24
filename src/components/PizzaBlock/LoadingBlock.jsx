import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <div className="loading__col">
      <div className="loading__block"></div>
      <div className="loading__name"></div>
      <div className="loading__type"></div>
      <div className="loading__inner"> 
        <div className="loading__price"></div>
        <div className="loading__add"></div>
      </div>
    </div>
  );
}

export default LoadingBlock;