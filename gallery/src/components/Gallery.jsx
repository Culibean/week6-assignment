import { useState, useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(import.meta.env.VITE_UNSPLASH_API_URL);
      const data = await response.json();

      setPhotos(data.results || []);
    }
    getPhotos();
  }, []);

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
        />
      ))}
    </div>
  );
}
