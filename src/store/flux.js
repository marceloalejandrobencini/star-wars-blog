const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: []
        },
        actions: {
            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.find(fav => fav.url === item.url)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
            removeFavorite: (url) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.url !== url) });
            }
        }
    };
};

export default getState;
