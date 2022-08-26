import * as React from 'react';
import axios from 'axios';

function FileUpload(){

  const [formValue, setFormValue] = React.useState({
    text: '',
    image: ''
  });

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(); 
    


    formData.append('text', formValue.text);
    formData.append('image', formValue.image);

    await axios({
      method: 'post', 
      url: "http://localhost:8080/upload", 
      data: formData, 
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

    let imgElement = document.createElement('img');
    const imgContainer = document.getElementById("img-container");
    imgElement.src = formValue.image;
    imgContainer.appendChild(imgElement);

  }


  return (
    <>
    <h1>Upload a file from your local machine.</h1>
    <form onSubmit={submitForm} style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
      <label>Meme Text:</label>
      <input type="text" name="text" onChange={(e) => setFormValue({...formValue, [e.target.name]: e.target.value})} />
      <label>Upload an Image</label>
      <input type="file" name="image" onChange={(e) => setFormValue({...formValue, [e.target.name]: e.target.files[0].name})} />
      <button type="submit">Upload File</button>
    </form>
    <div id="img-container">

    </div>
    </>
  )

}


export default FileUpload;