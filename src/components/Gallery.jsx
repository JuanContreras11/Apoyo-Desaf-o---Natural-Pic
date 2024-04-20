import { ApiProvider, ContextApi } from "../context/ContextApi";
import { useContext } from "react";
import heartIcon from "../assets/icons/heart-filled.svg";
import  "./gallery.css";

const Gallery = () => {
  const { photos } = useContext(ContextApi);
  const { addFavorite } = useContext(ContextApi);
  const handleLike = (photo) => {
    addFavorite(photo);
  };
  return (
    <div className="gallery grid-columns-5 p-3">
      
      {photos.map((photo) => (
        <div  className="imagen" key={photo.id}>
          <img src={photo.src.tiny} alt={photo.alt} />
          <img className="heart" src={heartIcon} alt="heart" onClick={() => handleLike(photo) }/>
          {/* <p>{photo.alt} </p> */}
          <p>Liked: {photo.liked ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
