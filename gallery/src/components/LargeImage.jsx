export default function LargeImage({ photo }) {
  if (!photo) return null;

  return (
    <div className="large-image-container">
      <img
        className="large-image"
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
    </div>
  );
}
