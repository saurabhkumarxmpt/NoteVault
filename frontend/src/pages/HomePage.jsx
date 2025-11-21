const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Organize Your Thoughts,  
          <br className="hidden md:block" />  
          Capture Your Ideas Effortlessly.
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-8">
          A modern notes-taking web app to store, manage, and access your notes anytime.
        </p>

        <button className="px-8 py-3  bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl text-lg font-semibold cursor-pointer hover:scale-103 transition ">
          Register Now
        </button>
      </div>
      <div>
        <h1>this is features section</h1>
      </div>
    </>
  );
};

export default HomePage;
