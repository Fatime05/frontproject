import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import AppRouter from "./router/Router"; 

function App() {
  return (
    <AuthProvider>
      <BrowserRouter> 
        <AppRouter /> 
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;