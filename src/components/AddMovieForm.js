import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const handleTitlechange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!title.trim()) return;
    
    const newTitle = {
      id: Date.now(),
      title,
      watched: false,
    };

      onAddMovie(newTitle);
  };

  // TODO: add a form to add a new movie
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
          <input
            type="text"
            placeholder="Movie Title..."
            value={title}
            onChange={handleTitlechange}
          />
        </div>
        <div>
          <button type="submit">Add Movie</button>
        </div>
    </form>
  ); 
  
}
