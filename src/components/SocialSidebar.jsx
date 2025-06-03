import { FaGithub, FaLinkedin, FaKaggle, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-4 p-2 bg-transparent hidden md:flex">
      <a href="https://github.com/Shohan093" target="_blank" rel="noopener noreferrer" className="group relative">
        <FaGithub className="cursor-none text-3xl text-black opacity-60 group-hover:opacity-100 transition duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/Shohan093" target="_blank" rel="noopener noreferrer" className="group relative">
        <FaLinkedin className="cursor-none text-3xl text-black opacity-60 group-hover:opacity-100 transition duration-300" />
      </a>
      <a href="https://www.kaggle.com/shohan06/" target="_blank" rel="noopener noreferrer" className="group relative">
        <FaKaggle className="cursor-none text-3xl text-black opacity-60 group-hover:opacity-100 transition duration-300" />
      </a>
      <a href="https://www.instagram.com/shohan.zip/" target="_blank" rel="noopener noreferrer" className="group relative">
        <FaInstagram className="cursor-none text-3xl text-black opacity-60 group-hover:opacity-100 transition duration-300" />
      </a>
      <a href="https://twitter.com/AnisujjamanSho1" target="_blank" rel="noopener noreferrer" className="group relative">
        <FaXTwitter className="cursor-none text-3xl text-black opacity-60 group-hover:opacity-100 transition duration-300" />
      </a>
    </div>
  );
};

export default SocialSidebar;
