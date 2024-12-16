import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';

// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    // const [ images, setImages ] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     getGifs(category)
    //         .then(newImages => setImages(newImages));
    //     // getImages();
    // }, []);

    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && (<h3>Cargando...</h3>)
            }
            
            <div className='card-grid'>
            {
                images.map((image) => 
                        <GifItem key={image.id} {...image} />
                )
            }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

