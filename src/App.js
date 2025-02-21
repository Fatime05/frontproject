import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ✅ AuthProvider əlavə edilir
import AppRouter from "./router/Router"; // ✅ Yeni adı ilə import edilir

function App() {
  return (
    <AuthProvider> {/* ✅ AuthContext təmin edilir */}
      <BrowserRouter> {/* ✅ BrowserRouter yalnız burada olmalıdır */}
        <AppRouter /> {/* ✅ Dəyişdirilmiş Router komponenti */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
