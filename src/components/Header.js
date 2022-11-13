import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <img
        src={require("./images/troll-face.png")}
        alt="troll-face"
        className="header--img"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--text">React project</h4>
    </header>
  );
};

export default Header;
