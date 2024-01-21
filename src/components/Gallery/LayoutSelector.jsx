import "./Gallery.scss";

const LayoutSelector = ({ onSelectLayout }) => {
  const numberOfLayouts = 9;
  const layoutImages = [];

  for (let i = 0; i < numberOfLayouts; i++) {
    const layoutImage = require(`../../assets/images/layout${i}.jpg`);
    layoutImages.push(layoutImage);
  }

  return (
    <div className="dropdown px-2">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Change Layout
      </button>
      <div
        className="dropdown-menu layout-selector"
        aria-labelledby="dropdownMenuButton"
      >
        <h2 className="layout-selector__header mb-2">Format</h2>
        <div className="layout-selector__images">
          {layoutImages.map((image, index) => (
            <img
              className="layout-selector__images__img"
              onClick={() => {
                onSelectLayout(`layout${index}`);
              }}
              key={index}
              src={image}
              alt={`Layout ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutSelector;
