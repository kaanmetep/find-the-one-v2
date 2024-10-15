import MainContainer from "./components/MainContainer";
import { AppProvider } from "./contexts/AppContext";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <MainContainer />
    </AppProvider>
  );
}

export default App;
