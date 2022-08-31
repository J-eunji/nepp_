import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import SignIn from "./SignIn";

function App() {
  const getCurrentUser = async () => {
    const result = await getCurrentUser();
    console.log(result);
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
