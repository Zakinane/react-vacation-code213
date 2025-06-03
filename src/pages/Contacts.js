import "./Contacts.css";
function Contacts() {
  return (
    <main>
      <div className="card">
        <h2>Contact Us !</h2>
        <form action="">
          <label for="nom">Name :</label>
          <br />
          <input type="text" name="nom"></input>
          <br /><br />
          <label for="nom">Email :</label>
          <br />
          <input type="email" name="Submit"></input>
          <br /><br />
          <label for="opinion">Write your opinion</label>
          <br />
          <br />
          <textarea name="opinion" rows="10" cols="50">
          </textarea>
          <br />
        </form>
        <button type="submit">Submit</button>
      </div>
    </main>
  );
}

export default Contacts;
