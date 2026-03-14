//hooks de React, configuracion y funciones de Firebase e iconos de Lucide-react
import React, {useEffect,useState} from 'react';
import { db } from './services/firebase';
import {collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { ArrowBigLeftDash, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';

//componentes logicos y estilos del componente principal
import ApiData from './components/ApiData/ApiData';
import ItemForm from './components/ItemForm/ItemForm';
import ItemList from './components/ItemList/ItemList';
import styles from'./App.module.css';

//definicion de estados globales de la app
function App (){ 
    const [text, setText] = useState('');
    const [movies, setMovies] = useState([]);
    const [preview, setPreview] = useState(null);
    const [isListOpen, setIsListOpen] = useState (true);
    const moviesCollection = collection( db,'movies');
//escucha cambios en tiempo real en Firebase
    useEffect (()=> {
        const unsub = onSnapshot(moviesCollection, (snapshot) =>{
            setMovies(snapshot.docs.map (doc => ({...doc.data(),id: doc.id })));
    });

    return () => unsub(); 

},[]);

    const handleImgError = (e) => {
        e.target.src = '/no-poster.png'; // Ruta de tu logo en la carpeta public
    };


//guarda pelicula de la preview en base de Firebase 
const handleAdd = async () => {
    if (!preview) return;
    try {
        await addDoc(moviesCollection, {
            name: preview.title,
                image: preview.poster_path 
                ? `https://image.tmdb.org/t/p/w200${preview.poster_path}` 
                : '/no-poster.png',
                date: preview.release_date || "Sin Especificar",
                description: preview.overview || "Sin Detalles",
                status: "Pendiente"
            });
            setPreview(null);
            setText('');
    } catch (error) {
        console.error ("Firestore error:", error);
    }
};
//alterna estados 
const handleToggleStatus = async (id,currentStatus) => {
    const nextStatus = currentStatus === "Pendiente" ? "Vista" : "Pendiente";
    await updateDoc(doc (db, 'movies', id), {status: nextStatus});
};

//elimina un doc por id
const handleDelete = async (id) => 
    await deleteDoc(doc (db, 'movies', id));
//renderizado de la estructura principal
return (
    <div className={styles.appContainer}>
        <header className={styles.headerSection}>
            <div className={styles.brandGroup}>
                <img src="/favicon.png" alt="logo" className={styles.appLogo} />
                <h1>Mis Pelis Popcorn</h1>
            </div>
                <div className={styles.searchGroup}>
                    <ItemForm text={text} setText={setText}/>
                    <ApiData text={text} onResultsFound={setPreview}/>
                </div>
            </header>

    {preview && (
        <section className={styles.previewSection}>
            <ArrowBigLeftDash className={styles.exitIcon} onClick={() => setPreview(null)} size={32} />
            <div className={styles.previewCard}>
<img 
    className={styles.posterPreview} 
    src={preview.poster_path ? `https://image.tmdb.org/t/p/w200${preview.poster_path}` : '/no-poster.png'} 
    alt="poster" 
    onError={handleImgError} 
/> 
                <div className={styles.previewData}>
                    <h2>{preview.title}</h2>
                    <p><strong>Fecha:</strong> {preview.release_date}</p>
                    <p><strong>Descripción:</strong> {preview.overview}</p>
                    <button className={styles.btnAdd} onClick={handleAdd}>Agregar a mi lista</button>
                </div>
            </div>
        </section>
)}

<hr className={styles.separator} />
<main className={styles.listSection}> 
    <div className={styles.listHeader} onClick={()=> setIsListOpen (!isListOpen)} >
    <div className={styles.titleGroup}>
        <Bookmark size={20} className={styles.listIcon} />
    <h2>Lista de Favoritos </h2>
    </div>
    {isListOpen? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </div>
    
    {isListOpen && (
    <ItemList 
    movies={movies}
    onDelete={handleDelete}
    onToggleStatus= {handleToggleStatus}
    />
)}
    </main>


<footer className={styles.appFooter}>
    <p>Popcorn icon created by <a href="https://www.flaticon.com" title="salty icons" target="_blank" rel="noreferrer">Maan Icons - Flaticon</a></p>
</footer>
    </div>
    );
}


export default App; 
