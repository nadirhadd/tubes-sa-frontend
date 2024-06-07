import { useEffect } from "react";
import { Dashboard, Meetings, Profile } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.title = "Meeting Scheduler";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/meetings" element={<Meetings/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
};

export default App;