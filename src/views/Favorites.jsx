import { ApiProvider, ContextApi } from "../context/ContextApi";
import { useContext } from "react";


const Favorites = () => {
  const { photos } = useContext(ContextApi);
  const likedPhotos = photos.filter(photo => photo.liked === true);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {likedPhotos.map((photo) => (
          <div className="imagen" key={photo.id}>
            <img src={photo.src.tiny} alt={photo.alt} />
            <p>{photo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
