// import { FaTranslate } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <FaTranslate className="text-white mr-2" /> */}
        <h1 className="text-white font-bold text-lg">DeepL Translator</h1>
      </div>
      <a
        href="https://www.deepl.com/en/why-deepl.html"
        className="text-white hover:underline"
      >
        Why DeepL?
      </a>
    </nav>
  );
}

export default Navbar;
