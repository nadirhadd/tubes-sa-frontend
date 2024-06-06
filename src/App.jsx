import { useEffect } from "react";
import { Sidebar, Navbar, Hero } from "./components";

const App = () => {
  useEffect(() => {
    document.title = "Meeting Scheduler";
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="p-4 bg-[#EEEDEB] h-full">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;