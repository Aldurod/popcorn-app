//importo React, componentes internos y estilos 
import React from "react";
import ItemCard from '../ItemCard/ItemCard';
import styles from './ItemList.module.css';

const ItemList = ({movies, onDelete, onEdit, onToggleStatus}) =>(
        <ul className={styles.itemList}>
        {movies.map ((movie) =>(
                <ItemCard
                key={movie.id}
                movie={movie}
                onDelete={onDelete}
                onEdit={onEdit}
                onToggleStatus={onToggleStatus}
                />
        ))}
        </ul>
        );


export default ItemList;