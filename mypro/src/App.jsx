import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import About from "./componets/About";
// import Contact from "./componets/Contact";
import SignupForm from "./componets/SignupForm";
import LoginForm from "./componets/LoginForm";
import Apicall from "./componets/Apicall";
import "./Style/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about" element={<Apicall />} />
      </Routes>
    </BrowserRouter>
  );
}
