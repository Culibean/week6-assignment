import { useState, useEffect } from "react";
import "./Gallery.css";
import Thumbnail from "./Thumbnail";
import LargeImage from "./LargeImage";
import Buttons from "./Buttons";

//TODO: Create a gallery with thumbnails, main view image and buttons to control gallery

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); //for buttons

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(import.meta.env.VITE_UNSPLASH_API_URL);
      const data = await response.json();

      setPhotos(data.results || []);
    }
    getPhotos();
  }, []);

  const currentPhoto = photos[currentIndex];

  function handleThumbnailClick(index) {
    setCurrentIndex(index);
  }

  function showNext() {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }

  function showPrev() {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }

  return (
    <div>
      <LargeImage photo={currentPhoto} />

      <Thumbnail photos={photos} onClick={handleThumbnailClick} />

      <Buttons onNext={showNext} onPrev={showPrev} />
    </div>
  );
}
