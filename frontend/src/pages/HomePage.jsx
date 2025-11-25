import { FaEdit, FaCloudUploadAlt, FaLock, FaStar,FaUser, FaEnvelope, FaCommentDots  } from "react-icons/fa";
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
       <div className="w-full px-6 py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        App Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <FaEdit className="text-4xl mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Easy Note Writing</h3>
          <p className="text-gray-600">
            Quickly create and edit notes with a clean and smooth UI.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <FaCloudUploadAlt className="text-4xl mb-4 text-green-600" />
          <h3 className="text-xl font-semibold mb-2">Cloud Sync</h3>
          <p className="text-gray-600">
            Sync your notes across all devices easily and securely.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <FaLock className="text-4xl mb-4 text-purple-600" />
          <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
          <p className="text-gray-600">
            Your notes are safe with end-to-end encryption.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full px-6 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a" // Replace with your image
            alt="Notes App"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            About Our Notes App
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            This Notes Taking App is designed to help you stay organized, productive, 
            and stress-free. Whether you want to save important ideas, plan tasks, 
            or keep reminders — everything becomes easier with our clean and modern interface.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Your notes stay secure, synced across devices, and always available whenever 
            you need them. Fast, simple, and powerful — that’s our promise.
          </p>

          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Learn More →
          </button>
        </div>

      </div>
    </div>

    <div className="w-full px-6 py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        What Our Users Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="user"
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Riya Sharma</h3>
              <p className="text-gray-500 text-sm">Student</p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            “This notes app helped me stay organized and track my study topics easily.
            Super clean UI and very easy to use!”
          </p>

          <div className="flex text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="user"
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Aman Verma</h3>
              <p className="text-gray-500 text-sm">Developer</p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            “Cloud sync feature is amazing! I can access my notes from laptop or phone 
            anytime. Highly recommended.”
          </p>

          <div className="flex text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="user"
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">Neha Gupta</h3>
              <p className="text-gray-500 text-sm">Freelancer</p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            “Secure, fast, and minimal. Best note-taking experience I’ve ever used. 
            Loved the UI and features.”
          </p>

          <div className="flex text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>

      </div>
    </div>

    <div className="w-full px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Send Us Your Feedback
      </h2>

      <div className="max-w-3xl mx-auto backdrop-blur-xl bg-white/60 p-10 rounded-2xl shadow-2xl border border-white/40">

        <form className="grid grid-cols-1 gap-8">

          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Full Name
            </label>
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-inner border focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaUser className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Email Address
            </label>
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-inner border focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaEnvelope className="text-gray-500 text-lg" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Your Message
            </label>
            <div className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl shadow-inner border focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FaCommentDots className="text-gray-500 mt-1 text-xl" />
              <textarea
                placeholder="Write your feedback..."
                rows="5"
                className="w-full bg-transparent outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-[1.02]"
          >
            Submit Feedback
          </button>

        </form>
      </div>
    </div>
    </>
  );
};

export default HomePage;
