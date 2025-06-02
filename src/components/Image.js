import "./Image.css";

function Image({ image }) {
  return (
    <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
  );
}

export default Image;
