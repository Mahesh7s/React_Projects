import {useNavigate} from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import {useEffect,useState} from "react"

export default function ProtectedRoute({children}){
	let navigate=useNavigate();
	const {currentUser} = useAuth();
	const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setShowMessage(true); // Show the "not logged in" message

      const timer = setTimeout(() => {
        navigate("/login"); // Redirect after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [currentUser, navigate]);

  return children;
}