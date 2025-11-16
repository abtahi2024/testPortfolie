import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <motion.div
          whileInView={{ opacity: 2.5, x: -3 }}
          initial={{ opacity: 0.5, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center"
        >
          <h1 className="text-2xl momo-signature-regular">
            Abt<span className="text-fuchsia-500">ahi</span>
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="m-8 flex items-center justify-center gap-4 text-2xl"
        >
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="https://github.com/abtahi2024" target="__black">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/abtahe_chowdhury077/?igsh=bzd2ZWlxY3dyMDU4#">
            <FaInstagram />
          </a>
          <FaSquareXTwitter />
          <a href="https://www.facebook.com/share/15sTgHudQ3/" target="__black">
            <FaFacebook />
          </a>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
