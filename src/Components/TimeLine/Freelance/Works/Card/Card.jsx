import Image from "next/image";

const Card = ({ title, subtitle, url, images = [] }) => {
  return (
    <button className="work-card" onClick={() => window.open(url)}>
      <h3 className="work-card-title">
        {title}
        <br />
        {subtitle}
      </h3>
      <div className="work-card-images">
        {[0, 1, 2].map((index) => (
          <div key={index} className={`image-container image-${index + 1}`}>
            {images[index] ? (
              <img src={images[index]} alt={`Project view ${index + 1}`} />
            ) : (
              <div className="image-placeholder">Image {index + 1}</div>
            )}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Card;
