
import React from 'react';
function Photo({img}) {
    return (
      <div className="photo">
          <img src={img} className="u-photo" alt="photo" />
      </div>
    );
}
export default Photo;
