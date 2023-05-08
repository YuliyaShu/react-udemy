import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {
    if (images) {
        const imagesMapping = images
        .map((image) => <ImageShow image={image} key={image.id} />)

    return (
      <div className="image-list">
        {imagesMapping}        
      </div>
    )
    } else {
        return;
    }
  }
  
  export default ImageList;
  