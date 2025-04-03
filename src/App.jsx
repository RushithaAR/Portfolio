
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="p-6 space-y-12 dark:bg-black dark:text-white min-h-screen">
      <section className="text-center space-y-4">
        <img
          src="/profilepic.jpg"
          alt="Rushitha smiling outdoors"
          className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
        />
        <h1 className="text-4xl font-bold">Amireddy Rushitha Reddy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Data Analyst | Milwaukee, WI</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:amireddyrushitha99@gmail.com"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Email</button></a>
          <a href="https://www.linkedin.com/in/rushitha-reddy-241427341/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LinkedIn</button></a>
          <a href="https://github.com/RushithaAR"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">GitHub</button></a>
        </div>
      </section>
    </div>
  );
}

export default App;
