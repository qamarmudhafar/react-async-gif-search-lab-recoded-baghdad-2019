import React from 'react' ;
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.component {
  
  state = {
    gif : []
    
    handleSubmit =(type) =>{
      fetch "https://api.giphy.com/v1/gifs/search?q=${type} HERE&api_key=dc6zaTOxFJmzC&rating=g"
    }
  }
}