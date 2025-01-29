// components/About.js
'use client'
const About = ({ title, introduction, points, revisionPolicy }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full  ">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-4">{introduction}</p>
        <p className="mb-4">Things to know:</p>
        <ul className="list-disc list-inside mb-4">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="mb-4">{revisionPolicy}</p>
      </div>
    );
  };
  
  export default About;
  