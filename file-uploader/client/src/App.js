import React, { useState, useRef } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const imageRef = useRef();
  const [image, setImage] = useState(null);

  const photoChanged = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result;
        const objectUrl = URL.createObjectURL(file);
  
        setImage({
          file,
          view: objectUrl,
          base64String,
        });
      };
  
      reader.readAsDataURL(file); // this reads the file as base64
    }
  };


  const publishImage = async () => {
    const formData = new FormData();
    formData.append("image", image.file);
  
    const response = await fetch("http://localhost:8080/image/upload", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    console.log('Image uploaded:', data);

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
      {image && (
        <div className="previewImage">
          <img className="my-img" src={image.view} alt="" />
        </div>
      )}
      <Button variant="info" onClick={() => publishImage()}>
        Publish
      </Button>
    </div>
  );
}

export default App;
