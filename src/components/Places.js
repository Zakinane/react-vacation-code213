import "./Places.css";

function Places({ img1, img2, img3, img4, img5 }) {
  return (
    <div className="Places">
      <h2>Places to visit :</h2>
      <div><img src={img1} alt="" />Visit</div>
      <div><img src={img2} alt="" />Visit</div>
      <div><img src={img3} alt="" />Visit</div>
      <div><img src={img4} alt="" />Visit</div>
      <div><img src={img5} alt="" />Visit</div>
    </div>
  );
}

export default Places;
