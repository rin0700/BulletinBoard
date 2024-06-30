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
    </header>
  );
}
export default Header;
