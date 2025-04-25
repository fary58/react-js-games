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
      setImage({
        file: e.target.files[0],
        view: objectUrl,
      });
    }
  };

  const publishImage = async () => {
    const formData = new FormData();
    formData.append("image", image.file);

    const response = await fetch("http://localhost:8080/api/image/upload", {
      method: "POST",
      body: formData,
    });
    console.log(response);
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
