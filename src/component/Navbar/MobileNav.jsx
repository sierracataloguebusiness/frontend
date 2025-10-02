import NavbarLinks from "./NavbarLinks.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";
import { IoClose } from "react-icons/io5";
import Button from "../Button.jsx";

const MobileNav = ({ isOpen, onClose }) => {
  const { width } = useWindowSize();

  if (width >= 768 || !isOpen) return null;

  return (
    <div className="fixed top-0 left-0 h-screen w-full backdrop-blur-sm text-white z-50 flex flex-col items-center justify-center gap-8">
      <IoClose onClick={onClose} className="absolute top-7 right-4 size-7" />
      <NavbarLinks onClick={onClose} />
      <Button to="/contact" children="List now" className="md:hidden" />
    </div>
  );
};

export default MobileNav;
