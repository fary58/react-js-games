import React, { useState, useRef } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const imageRef = useRef();
  const [image, setImage] = useState(null);

  const photoChanged = (e) => {
    
    if (e.target.files && e.target.files[0]) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      console.log(objectUrl);     
      setImage(objectUrl)
    }
  };
  return (
    <div className="App">
      <h3>Image Uploader</h3>

      <Button variant="info" onClick={() => imageRef.current.click()}>
        Upload
      </Button>
      <div className="file-input" style={{ display: "none" }}>
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          ref={imageRef}
          onChange={(e) => photoChanged(e)}
        />
      </div>
      {image &&
        (alert("INNN"),
        (
          <div className="previewImage">
            <img src={image} alt="" />
          </div>
        ))}
    </div>
  );
}

export default App;
