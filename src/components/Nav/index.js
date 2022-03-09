import React from "react";

function Nav() {

    const categories = [
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
      ];

      function categorySelected(name) {
          console.log(`${name} clicked`)
      }
    
    return(
        <header>
            <h2>
                <a href="/">
                    <span role='img' aria-label="camera">📸</span> Title
                </a>

            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Owner
                        </a>
                    </li>
                    <li>
                    <span>Contact</span>
                    </li>
                    {categories.map((category) => 
                    <li
                    className="mx-1"
                    key={category.name}>
                        <span onClick={() => categorySelected(category.name)} > 
                            {category.name}
                        </span>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;