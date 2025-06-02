import "./Welcome.css";

function Welcome({ country }) {
  return (
    <div className="Welcome">
      <h2>
        Welcome to <i>{country}</i>
      </h2>
    </div>
  );
}

export default Welcome;
