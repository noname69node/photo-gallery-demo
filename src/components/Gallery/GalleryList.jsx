import { Link } from "react-router-dom";

const GalleryList = () => {
  return (
    <div>
      <ul>
        <Link to="/gallery/1">List1</Link>
        <li>List2</li>
        <li>List3</li>
        <li>List4</li>
      </ul>
    </div>
  );
};

export default GalleryList;
