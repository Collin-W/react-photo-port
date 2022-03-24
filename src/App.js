import React, { useState } from 'react';

// components
import About from './components/About';
import Gallery from './components/Gallery';
import Nav from './components/Nav';


function App() {

  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    { name: "portraits", description: "consectetur adipiscing elit, sed do" },
    { name: "food", description: "ipsum dolor sit amet" },
    {
      name: "landscape",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
    <main>
      <Gallery currentCategory={currentCategory}/>
      <About></About>
    </main>
    </div>
  );
}

export default App;
