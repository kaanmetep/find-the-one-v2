import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Heading from "../components/Heading";
import SecondaryHeading from "../components/SecondaryHeading";
import Learn from "../components/Learn";
import Safety from "../components/Safety";
import Support from "../components/Support";
import HowItWorks from "../components/HowItWorks";
function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoading, navigate]);
  // If user is logged in, navigate to dashboard page immediately.
  return (
    <div>
      <Heading />
      <SecondaryHeading />
      <Learn />
      <Safety />
      <Support />
      <HowItWorks />
    </div>
  );
}

export default Home;
