import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <section className="h-16 flex justify-end items-center bg-secondary py-12">
      <ul>
        <li className="text-lg font-bold px-8">
          <button className="bg-text text-primary rounded-lg py-1 px-2 flex items-center">
            <h1 className="px-2">User</h1>
            <FontAwesomeIcon icon={faUser} className="px-2"></FontAwesomeIcon>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;