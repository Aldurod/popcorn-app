//importo React, iconos de Lucide-react y estilos 
import React from 'react';
import {Trash, Eye, EyeOff} from 'lucide-react'; 
import styles from './ItemCard.module.css';

const ItemCard = ({movie, onDelete,onToggleStatus}) => {

//manejo de rror para img rotas
    const handleImgError = (e) => {
        e.target.src = '/no-poster.png'; 
    };

return (
    <li className={styles.movieItem}>
            <img 
                src={movie.image} 
                alt={movie.name}  
                width="50" 
                onError={handleImgError} 
            />
        <div className={styles.movieInfo}>
            <strong>{movie.name}</strong>
            <p>{movie.date}</p>
        </div>

        <div className={styles.movieActions}>
            <div className={styles.statusContainer}
            onClick={()=> onToggleStatus(movie.id, movie.status)}>
                {movie.status === "Vista" ? (
                    <div className={styles.statusWatched}>
                        <Eye size= {22}/> <span>Ya Vista</span>
                    </div>
                ):(
                    <div className={styles.statusPending}>
                        <EyeOff size= {22}/> <span>Pendiente</span>
                    </div>
                )}
            </div>

            <button className={styles.deleteBtn} onClick={() => onDelete(movie.id)}>
                <Trash size={22} />
            </button>
        </div>
    </li>             
);
};

export default ItemCard;