
export const getImagen = async() => {
    try {
        const apiKey = 'mIKmP6pvCvfLHB6anJ2yXEStStuSFt5W';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        
        return url;
    } catch (error) {
        return 'No se encontrĂ³ la imagen';
    }
}

 getImagen();



