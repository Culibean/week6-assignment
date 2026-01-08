import "./Thumbnail.css";
import SingleImage from "./SingleImage";

export default function Thumbnails({ photos, onClick }) {
  return (
    <div className="thumbnails">
      {photos.map((photo, index) => (
        <SingleImage
          key={photo.id + index}
          photo={photo}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}
