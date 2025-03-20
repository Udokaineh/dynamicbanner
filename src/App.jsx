import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import aloeImage from "./assets/aloe.jpeg"
import Form from "./components/Form"


const App = () => {
  const [bgColor, setBgColor] = useState(
    localStorage.getItem("bgColor") || "bg-gradient-to-r from-green-400 to-blue-500"
  );
  const [title, setTitle] = useState(localStorage.getItem("title") || "The Joy of Plants");
  const [description, setDescription] = useState(
    localStorage.getItem("description") ||
    "I find joy in watering my Aloe Vera plant, watching it grow, and embracing the beauty of nature. Every leaf tells a story of patience and care."
  );
  const [image, setImage] = useState(
    localStorage.getItem("image") ? localStorage.getItem("image") : aloeImage
  );
  const [font, setFont] = useState(localStorage.getItem("font") || "font-serif");
  const [showForm, setShowForm] = useState(true);


  // Save to localStorage when state updates
  useEffect(() => {
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("image", image);
    localStorage.setItem("font", font);
  }, [bgColor, title, description, image, font]);

  return (
    <div className="p-4 md:p-6">
      <Banner bgColor={bgColor} title={title} description={description} image={image} font={font} />
      <div className=" flex flex-row justify-end mt-5">
        <button onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-[#010101] hover:bg-blue-500 text-white font-medium rounded-md transition duration-300 ease-in-out shadow-md cursor-pointer">
          {showForm ? "Hide Form" : "Show Form"}
        </button>
      </div>
      {showForm &&
        <Form setTitle={setTitle} setBgColor={setBgColor} setDescription={setDescription} setImage={setImage} setFont={setFont} />
      }
    </div>
  );
}

export default App