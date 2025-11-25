const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 text-white">
      <div className="text-center">
        <h3 className="text-lg font-semibold">NoteVault</h3>
        <p className="text-sm text-gray-400 mt-1">
          © {new Date().getFullYear()} NoteVault. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
