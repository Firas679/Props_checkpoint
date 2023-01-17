
import React from 'react';
import img from 'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-img-file-document-icon-png-image_892886.jpg'
function Photo({img}) {
    return (
      <div className="photo">
          <img src={img} className="u-photo" alt="photo" />
      </div>
    );
}
export default Photo;
