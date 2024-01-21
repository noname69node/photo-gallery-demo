import { Link } from "react-router-dom";
import Layout0 from "./Layouts/Layout0";
import Layout1 from "./Layouts/Layout1";
import Layout2 from "./Layouts/Layout2";
import Layout3 from "./Layouts/Layout3";
import Layout4 from "./Layouts/Layout4";
import Layout5 from "./Layouts/Layout5";
import Layout6 from "./Layouts/Layout6";
import Layout7 from "./Layouts/Layout7";
import Layout8 from "./Layouts/Layout8";

const GalleryList = ({ images, layout }) => {
  const layoutComponents = {
    default: Layout4,
    layout0: Layout0,
    layout1: Layout1, // Import Layout1 and other layout components as needed
    layout2: Layout2,
    layout3: Layout3,
    layout4: Layout4,
    layout5: Layout5,
    layout6: Layout6,
    layout7: Layout7,
    layout8: Layout8,
    // Add more layout types as needed
  };

  const SelectedLayout = layoutComponents[layout] || Layout4; // Default to Layout0 if layout is not found

  return (
    <div className="container layout">
      <SelectedLayout images={images}></SelectedLayout>
    </div>
  );
};

export default GalleryList;
