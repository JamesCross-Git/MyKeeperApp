import React from "react";
import Entry from "./Entry";
import HobbyList from "./HobbyList";
import './Hobbies.css';
import NavBar from "../Navbar";

function Hobbies() {
    return (
      <div className="hobbystyle">
        <h1>
          <span>My Hobbies</span>
        </h1>
        <dl className="dictionary">
        {HobbyList.map((myHobby) =>
        <Entry
        key={myHobby.id}
        emoji={myHobby.emoji}
        name={myHobby.name}
        description={myHobby.meaning}
        />
        )}
        </dl>
      </div>
    );
  }
  
  export default Hobbies;