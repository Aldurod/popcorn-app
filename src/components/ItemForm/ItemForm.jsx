//importo React, iconos de Lucide-react y estilos 
import React from "react";
import {Search} from 'lucide-react';
import styles from './ItemForm.module.css';

const ItemForm = ({text, setText}) =>{
    return(
    <div className={styles.formContainer}>
    <label htmlFor="movie-search" style={{ display: 'none' }}>Buscar película</label>
    <Search className={styles.searchIcon} size={20}/>
    <input className={styles.inputSearch}
    type="text"
    id="movie-search"
    name="movie-search"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder=" Busca tu pelicula... " />
    </div>
    );
};
export default ItemForm;