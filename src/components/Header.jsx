import { useNavigate } from "react-router-dom";
import "../Style/Header.css";
function Header() {
  const navigate = useNavigate();
  const handleNewThread = () => {
    navigate('/threads/new');
  }
  const handleThread = () => {
    navigate('/');
  }
  return (
    <header className="header-container">
      <h1 onClick={handleThread} className="header-title">掲示板</h1>
      <nav className="header-nav">
        <button onClick={handleNewThread} className="nav-button home">スレッドを立てる</button>
      </nav>
    </header>
  );
}

export default Header;
