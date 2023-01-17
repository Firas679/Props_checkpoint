
import React from 'react';
import img from '../../img.png'
function Photo() {
    return (
      <div className="photo">
          <img src={img} className="u-photo" alt="photo" />
      </div>
    );
}
export default Photo;
