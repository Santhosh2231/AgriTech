import React ,{ useRef, useState }  from 'react'
import axios from "axios";
const CropDisease = () => {
    const fileInput = useRef(null)
    // const type=useRef(null);
    const [type,setType]=useState();
    const [preview, setPreview] = useState(null);
    const handleSubmit = (event) => {
      event.preventDefault()
  
      const formData = new FormData()
      formData.append('image', fileInput.current.files[0])
      formData.append('type',type)
      console.log(formData)
    const data = {
        'image':  fileInput.current.files[0],
         'type':type
    }

    //   axios
    //     .post("http://127.0.0.1:5000/api/cropdisease", data)
    //     .then(response => {
    //     console.log(response.data);
    //     })
    //     .catch(error => {
    //     console.log(error);
    //     });

  
      fetch('http://127.0.0.1:5000/api/cropdisease', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("san: "+error))
    }

    const handleFileSelection = (event) => {

        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    
  
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                <label>
        <input type="radio" name="type" value="vegetable" onChange={(e)=>setType(e.target.value)} />
        Vegetable
      </label>
      <br />
      <label>
        <input type="radio" name="type" value="fruits" onChange={(e)=>setType(e.target.value)} />
        Fruits
      </label>
                    
                    <input type="file" ref={fileInput} onChange={handleFileSelection} />
                    {preview && <img src={preview} alt="Preview" />}
                </div>
                <button type='submit'>Upload</button>
            </form>
        </div>
    )
}

export default CropDisease
