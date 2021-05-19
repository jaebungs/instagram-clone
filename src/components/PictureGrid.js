import React, { useState, useEffect } from 'react'

const PictureGrid = () => {
    const [importedImages, setImportedImages] = useState();
    // const images = require.context('../images');

    function importAll(r) {
        let images = [];
        r.keys().map((item, index) => images.push(item.replace('./', '')));
        return images;
      }

      useEffect(()=>{
        const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
        setImportedImages(images)
      }, [])
      
    return (
        <div className="grid-cols-3">
            {importedImages?.map(( image, index) => {
                return <img key={index} src={require(`../images/${image}`)} alt="some default" width="300" height="300" />

            })}
        </div>
    )
}

export default PictureGrid
