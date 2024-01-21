import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Routes } from "./routes/Routes";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes />
    </UserAuthContextProvider>
  );
}

export default App;
