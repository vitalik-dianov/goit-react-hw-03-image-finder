import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  // console.log(images);
  return (
    <ul>
      {images.map(image => {
        console.log(image);
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ul>
  );
};
