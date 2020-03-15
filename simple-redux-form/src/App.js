import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, selectFile] = useState(null);

  const fileSelectedHandler = event => {
    selectFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", file, file.name);
    axios.post("", fd, {
      onUploadProgress: progressEvent => {
        console.log(
          "Upload Progress: " +
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
      }
    });
  };
  return (
    <div className="App">
      <input
        style={{ display: "none" }}
        type="file"
        onChange={fileSelectedHandler}
        
      />
      {/* <button onClick={()=>}>Pick File</button> */}
      <button onClick={fileUploadHandler}></button>
    </div>
  );
}

export default App;
