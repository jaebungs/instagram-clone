import React from 'react';
import Card from './card/Card';
import soup from '../images/soup.jpg';
import beach from '../images/soup.jpg';
import turtle from '../images/soup.jpg';
import computer from '../images/soup.jpg';
import cat from '../images/soup.jpg';
// import catVideo from '/Videos/cat-video.mp4';
// import catVideo from '../images/cat-video.mp4';

const PictureGrid = () => {



    // const images = require.context('../images');
    const images = [turtle, soup, cat,computer,beach, '/Videos/cat-video.mp4']
    // get image file's name and setState
    // function importAll(r) {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     console.log(images)
    //     return images;
    //   }

    //   useEffect(()=>{
    //     const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    //     setImportedImages(images)
    //   }, [])

    return (
        <div className="imageGrid mx-auto">
            {images.map((image, index) => {
                console.log(image)
                return <Card key={index} content={image} />
            })}
            {/* <img src={require("../images/soup.jpg")} alt="" width="300" height="300" /> */}

            {/* {names?.map(( image, index) => {
                return <img key={index} src={importedImages[image]} alt="some default" width="300" height="300" />

            })} */}
        </div>
    )
}

export default PictureGrid
