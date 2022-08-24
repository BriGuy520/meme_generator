import * as React from 'react';
import axios from 'axios';

function FileUpload(){

  const [file, setFile] = React.useState();

  const submitForm = (e) => {
    e.preventDefault();

    console.log(e.target);

    const formData = new FormData(e.target); 

    formData.append('file', file[0].name);

    console.log(formData);

    axios.post("http://localhost:8080/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    let imgElement = document.createElement('img');
    const imgContainer = document.getElementById("img-container");
    imgElement.src = file;
    imgContainer.appendChild(imgElement);

  }

  return (
    <>
    <h1>Upload a file from your local machine.</h1>
    <form onSubmit={submitForm}>
      <input type="file" onChange={(e) => setFile(e.target.files)} />
      <button type="submit">Upload File</button>
    </form>
    <div id="img-container">

    </div>
    </>
  )

}


export default FileUpload;