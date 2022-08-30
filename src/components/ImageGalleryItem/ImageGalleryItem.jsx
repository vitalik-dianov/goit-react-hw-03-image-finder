export const ImageGalleryItem = ({image}) => {
    // console.log(image);
  return (
    <li>
      <img width='300px' src={image.webformatURL} alt={image.tags} />
    </li>
  );
};
