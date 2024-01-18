import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Routes } from "./routes/Routes";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes />
    </UserAuthContextProvider>
  );
}

export default App;
