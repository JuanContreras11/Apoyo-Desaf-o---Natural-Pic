import { createContext,useState } from "react";
import data from "../assets/photos.json"

export const ContextApi = createContext();

export const ApiProvider = ({ children }) => {
    const [photos, setPhotos] = useState(data.photos);
    const [favorites, setFavorites] = useState([]);
    
    const addFavorite = (photo) => {
        const newPhotos = photos.map((item) => 
          item.id === photo.id ? { ...item, liked: true } : item
        );
        setPhotos(newPhotos);
        setFavorites([...favorites, photo]);
      };
    
    const removeFavorite = (photo) => {
        const newFavorites = favorites.filter((item) => item.id !== photo.id);
        setFavorites(newFavorites);
    };
    
    
    
    const api = {
        photos,
        setPhotos,
        favorites,
        addFavorite,
        removeFavorite,
        
    };
    
    return (
        <ContextApi.Provider value={api}>
        {children}
        </ContextApi.Provider>
    );
}

export default ContextApi;