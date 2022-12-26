import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import ForecastPlot from '../components/ForecastPlot';


const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload }
      default:
        return state
    }
  }

const CropPrice = () => {
    const navigate = useNavigate();

    const params = useParams();
    const {crop} = params;
    const [state, dispatch] = useReducer(dataReducer, { data: null })
    useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get(`http://127.0.0.1:5000/api/cropprice/${crop}`);
            // console.log(data)
            dispatch({ type: 'SET_DATA', payload: data })
            console.log(data);
          } catch (err) {
            console.log(err);
          }
        };
        getData();
    }, [crop]);
  return (
    <div className='container'>Crop
    {
        state.data? (<>
        
            <ForecastPlot data={[state.data.context.forecast_values]} />
            <ForecastPlot data={[state.data.context.previous_values]} />
            </>
            ):"Loading..."
    }
    </div>
  )
}

export default CropPrice