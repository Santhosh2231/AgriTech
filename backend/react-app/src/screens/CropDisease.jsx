import React ,{ useReducer, useRef, useState }  from 'react'
import axios from "axios";

const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload }
      default:
        return state
    }
  }

const CropDisease = () => {
    const fileInput = useRef(null)
    const [type,setType]=useState();
    const [plant,setPlant]=useState();
    const [preview, setPreview] = useState(null);
    const [state, dispatch] = useReducer(dataReducer, { data: null })

    const handleSubmit = (event) => {
      event.preventDefault()
  
      const formData = new FormData()
      formData.append('image', fileInput.current.files[0])
      formData.append('type',type)
      formData.append('plant',plant)

      fetch('http://127.0.0.1:8000/api/cropdisease', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_DATA', payload: data });
          console.log(data)
        })
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
            <h4 className='text-center font-Inria text-2xl mt-10 md:text-5xl'>Crop Disease Detection and Fertilizer/Precautions Recommendation</h4>
            <form onSubmit={handleSubmit}>
              <div className='border rounded border-teal-400 bg-slate-100 mt-10'>
                <div className=' p-1'>
                <div className='flex justify-center items-center'><h4 className='font-Inria text-lg md:text-3xl mt-4 '>Select Type of Crop</h4></div>
                <div className="flex flex-wrap my-2 justify-around">
                  <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                    <input type="radio" className="form-radio" name="type" value="fruit" onClick={(e)=>setType("fruit")} />
                    <span className="ml-2 font-Merriweather">Fruit Crop</span>
                  </label>
                  <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                    <input type="radio" className="form-radio" name="type" value="vegetable" onClick={(e)=>setType("vegetable")} />
                    <span className="ml-2 font-Merriweather">Vegetable Crop</span>
                  </label>  
                </div>
                {
                  type?(<div>
                    {
                      type=="fruit"? (
                        <div>
                        <div className='flex justify-center items-center'><h4 className='font-Inria mt-2 text-lg md:text-3xl items-center'>Select <span className='text-teal-600 underline'>{type.toUpperCase()}</span> Crop</h4></div>
                        <div className="flex flex-wrap my-3 justify-around">
                          <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                            <input type="radio" className="form-radio" name="plant" value="apple" onClick={(e)=>setPlant("apple")} />
                            <span className="ml-2 font-Merriweather">Apple</span>
                          </label>
                          <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                            <input type="radio" className="form-radio" name="plant" value="corn" onClick={(e)=>setPlant("corn")} />
                            <span className="ml-2 font-Merriweather">Corn</span>
                          </label>
                          <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                            <input type="radio" className="form-radio" name="plant" value="peach" onClick={(e)=>setPlant("peach")} />
                            <span className="ml-2 font-Merriweather">Peach</span>
                          </label>
                        </div>
                      </div>):(<div>
                        <div className='flex justify-center items-center'><h4 className='font-Inria text-lg md:text-3xl mt-10 items-center'>Select <span className='text-teal-600 underline'>{type.toUpperCase()}</span> Crop</h4></div>
                        <div className="flex flex-wrap my-3 justify-around text-sm">
                          <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                            <input type="radio" className="form-radio" name="plant" value="pepper"onClick={(e)=>setPlant("pepper")} />
                            <span className="ml-2 font-Merriweather">Pepper</span>
                          </label>
                          <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                            <input type="radio" className="form-radio" name="plant" value="potato" onClick={(e)=>setPlant("potato")} />
                            <span className="ml-2 font-Merriweather">Potato</span>
                          </label>
                          <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                            <input type="radio" className="form-radio" name="plant" value="tomato" onClick={(e)=>setPlant("tomato")} />
                            <span className="ml-2 font-Merriweather">Tomato</span>
                          </label>
                        </div>
                      </div>)
                    }
                  </div>):(<div></div>)
                }
                  
              </div>

                <div className='flex justify-center items-center'>
                <label htmlFor="file-input" className="bg-teal-600 hover:bg-blue-700 font-bold py-2 px-4 rounded-full text-2xl font-Inria text-white">
                          Choose File
                          <input type="file" id="file-input" className="hidden" ref={fileInput} onChange={handleFileSelection} />
                </label>
                    
                </div>
                <div className='flex justify-center items-center my-10'>
                {preview && <img src={preview} alt="Preview" />}
                </div>
                
                <div className='flex justify-center items-center'>
                  <button type="submit" className='border-4 rounded-lg text-white bg-teal-600 p-2 mb-10' ><h4 className='text-2xl font-Inria text-white'>Predict</h4></button>
                </div>

                {
                  state.data ? (
                    <div>
                      {
                        state.data.val==1? (<h4 className='font-Merriweather text-center text-xl md:text-5xl'>Your <span className='text-font text-orange-500'>{state.data.res.split("-")[0]}</span> crop is <span className='text-font text-green-500'>{"Healthy!!"}</span></h4>):(
                          <h4 className='font-Merriweather text-center text-xl md:text-3xl'>
                          Your <span className='text-font font-Inria text-2xl md:text-4xl text-orange-500'>{state.data.res.split("-")[0].toUpperCase()}</span> crop is affected by <span className='text-font text-2xl md:text-4xl text-red-500'>{state.data.res}</span>
                        </h4>)
                        
                      }
                      <div className='p-2 my-5'>
                        <h4 className='font-Merriweather text-2xl md:text-4xl md:pl-20'>{state.data.val==1?"Precautions :":"Fertilizer Recommendation :"}</h4>
                        <p className='text-lg md:text-2xl font-Inria text-center p-2 '>{state.data.msg}</p>
                      </div>
                    </div>
                  ):(<div></div>)
                }

                </div>
            </form>
        </div>
    )
}

export default CropDisease
