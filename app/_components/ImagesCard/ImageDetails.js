import ImagesCard from "./ImagesCard";

function ImageDetails({ pictures }) {
  return (
    <div>
      {pictures.length > 0 && (
        <div>
          {pictures.map((picture) => (
            <ImagesCard pictures={picture} key={picture.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageDetails;
