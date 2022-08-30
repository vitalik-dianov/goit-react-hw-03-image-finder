import React from 'react';
import { fetchImage } from 'services/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

export class App extends React.Component {
  state = {
    images: [],
  };

  onSubmit = ({ querry }) => {
    
    fetchImage(querry)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));

        return response.data.hits;
      })
      .catch(error => error);
  };
  render() {

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        {this.state.images.length !== 0 && (
          <ImageGallery images={this.state.images} />
        )}
        <Button onLoadMore={this.onSubmit}>LoadMore</Button>
      </div>
    );
  }
}
