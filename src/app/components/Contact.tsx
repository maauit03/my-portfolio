import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Profile Image + Name */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/images/job.jpg"
            alt="Your Name"
            className="w-32 h-32 rounded-full object-cover border-2 border-yellow-300"
          />
          <p className="text-lg font-medium">© {new Date().getFullYear()} Martin Au</p>
          <p className="text-lg font-medium">martinaubusiness@gmail.com</p>
        </div>

        {/* Contact Message */}
        <p className="text-center text-base sm:text-lg text-gray-300">
          Feel free to reach out or connect with me on these platforms:
        </p>

        {/* Social Icons */}
        <div className="flex space-x-8">
          <a
            href="https://github.com/maauit03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-au-6373942b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin size={50} />
          </a>
        </div>
      </div>
    </footer>
  );
}
