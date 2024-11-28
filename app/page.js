import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Profile Section */}
        <div className="bg-pink-100 p-6 rounded-lg border border-neutral-200 mb-10">
          <div className="text-center">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md border-4 border-gray-300">
              <Image
                src="/person.webp"
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
            {/* Name and Title */}
            <h1 className="text-3xl font-bold text-gray-800 mt-4">Theint Sandi Htet</h1>
            <p className="text-lg text-gray-600">Thai Language Teacher</p>

            {/* Social Links */}
            <div className="flex justify-center mt-4 space-x-6">
              <a
                href="https://www.facebook.com/TSandi.htet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:opacity-75"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/whatsoeverrrr.tsh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:opacity-75"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              {/* <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:opacity-75"
              >
                <i className="fab fa-line fa-2x"></i>
              </a> */}
              <a
                href="mailto:somchai.teachthai@gmail.com"
                className="text-red-600 hover:opacity-75"
              >
                <i className="fas fa-envelope fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-pink-100 p-6 rounded-lg border border-neutral-200 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Experienced Thai language teacher with over 10 years of expertise
            in teaching non-native speakers. Passionate about promoting
            cultural understanding through language education. Skilled in
            grammar, phonetics, and interactive teaching methodologies.
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-pink-100 p-6 rounded-lg border border-neutral-200 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education History</h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>Sarasas Witaed Romklao School, Bangkok (2008-2012)</li>
            <li>Assumption University, Bangkok (Current)</li>
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className="bg-pink-100 p-6 rounded-lg border border-neutral-200 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-bold">Thai Language Academy</span> (2010-2015)
              <ul className="list-disc list-inside ml-4">
                <li>Developed Thai language courses for non-native speakers.</li>
                <li>Assisted over 200 students in achieving language proficiency.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Global Language School</span> (2015-Present)
              <ul className="list-disc list-inside ml-4">
                <li>Conducted advanced Thai language training for professionals.</li>
                <li>Introduced innovative teaching methods to enhance engagement.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="bg-pink-100 p-6 rounded-lg border border-purple-300 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
          <ul className="grid text-gray-700">
            <li>Thai Grammar and Phonetics</li>
            <li>Interactive Lesson Planning</li>
            <li>Cultural Integration in Lessons</li>
            <li>Fluent in Thai, English, and Chinese</li>
          </ul>
        </div>
        
          {/* Contact Section */}
          {/* Contact Section */}
        <div className="bg-pink-100 p-6 rounded-lg border border-pink-300 mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-700">
            <span className="font-bold">Phone:</span> +66-1234-5678
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:somchai.teachthai@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              somchai.teachthai@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Address:</span> 123 Thai Language St.,
            Bangkok, Thailand
          </p>
        </div>

      </div>
    </div>
  );
}
