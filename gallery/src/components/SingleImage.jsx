export default function SingleImage({ photo, onClick }) {
  return (
    <img
      className="thumbnail"
      src={photo.urls.small}
      alt={photo.alt_description}
      onClick={onClick}
    />
  );
}
