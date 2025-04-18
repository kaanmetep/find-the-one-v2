import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Heading from "../components/Heading";
import SecondaryHeading from "../components/SecondaryHeading";
import Learn from "../components/Learn";
import Safety from "../components/Safety";
import Support from "../components/Support";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard"); // If user is logged in, navigate to dashboard page immediately.
    }
  }, [isAuthenticated, isLoading, navigate]);
  return (
    <div>
      <Heading />
      <SecondaryHeading />
      <div className="flex flex-col mx-auto max-w-7xl">
        <Learn />
        <Safety />
        <Support />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
