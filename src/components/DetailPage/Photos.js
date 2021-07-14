import React, {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import './Detail.scss';
import axios from "axios";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Carousel } from "react-bootstrap";

function Photos(){

const [photos, setPhotos] = useState()
const { id } = useParams();

// Fetch for the details data
const fetchData = async () => {
  const photosUrl = `https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=${id}`;
  try {
      let data = await axios.get(photosUrl, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST
      }});
      console.log(data);
      const array = data.data.hotelImages.slice(0,10).map(hotelImage => {return {original: hotelImage.baseUrl.replace("{size}", "d"), thumbnail: hotelImage.baseUrl.replace("{size}", "d")}});
      console.log(array);
      setPhotos(array);
    } catch(error){
      console.log(error)
    }
    
}

useEffect(() => {fetchData()},[])

  return (
    <>
    {photos && <ImageGallery items={photos} thumbnailPosition={"left"} showPlayButton={false}/>}
    {/* {photos && 
      <Carousel>
        {photos.map(photo => (
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src={photo.original}
              alt="hotel image"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    } */}
    </>
  )
}

export default Photos;