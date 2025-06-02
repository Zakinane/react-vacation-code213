import "./Places.css";

function Places({ img1, img2, img3, img4, img5 }) {
  return (
    <div className="Places">
      <h2>Places to visit</h2>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
    </div>
  );
}

export default Places;
