import "./Image.css";
import bg1 from "../netherlands/amsterdam.png"
import bg2 from "../australia/sydney.png"
import bg3 from "../italy/venice.png"


function Image({ image }) {
  let background;
  switch(image){
      case 'netherlands':
      background = bg1;
      break;
      case 'australia':
      background = bg2;
      break;
      case 'italy':
      background = bg3;
      break;
      default:
      break;
  }
  return (
    <div className="image" style={{ backgroundImage: `url(${background})` }}></div>
  );
}

export default Image;
