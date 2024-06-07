import { sideLinks } from "../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section>
      <div className="bg-primary flex flex-col h-full">
        <div className={`px-10 py-5`}>
          <ul>
            <li className="text-2xl text-white font-bold py-5">
              <h1>Schedule Manager</h1>
            </li>
            <li className="pb-10">
              <hr />
            </li>
            {sideLinks.map((link) => (
              <li key={link.id} className="text-white py-7 text-xl text-text">
                <Link to={link.link} className="hover:text-[#9CAFAA]">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;