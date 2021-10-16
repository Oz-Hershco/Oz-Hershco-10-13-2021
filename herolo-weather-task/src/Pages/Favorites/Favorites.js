import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from '../../Components/FavoriteCard/FavoriteCard';

import './Favorites.scss';

function Favorites() {

    const userSettings = useSelector((state) => state.userSettings);
    const favorites = useSelector((state) => state.favorites);
    const theme = userSettings.theme;
    const doFavoritesExist = favorites && favorites.length;
    
    return (
        <div className={`App-Body-${theme} ${doFavoritesExist ? "Favorites" : "Favorites-EmptyState"}`}>
            {
                favorites && favorites.length ?
                    (
                        favorites.map((fav, i) => {
                            return <FavoriteCard key={i} favorite={fav} />
                        })
                    ) :
                    (
                        <p className={`Favorites-EmptyState-${theme}`}>No favorites have been added yet. Add a weather item from the home page to view it here.</p>
                    )
            }
        </div>
    );
}

export default Favorites;