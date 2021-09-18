import React from "react";
import "../../../../styles/Home.css";
const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <a
            href={"/"}
            className="logo"
            style={{
              fontFamily: "cursive",
            }}
          >
            SSBU <b>Media</b>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
