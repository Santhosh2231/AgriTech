import React from 'react'
import Gain from "../assets/icons/gain-icon.png";
import Loss from "../assets/icons/loss-icon.png";

const data = [  { id: 1, name: 'John', age: 30 },  { id: 2, name: 'Jane', age: 25 },  { id: 3, name: 'Bob', age: 35 },]

function SoilAnalysis(props) {
    console.log(props.data.length);
  return (
    <>
    {/* <h4>Sixmonths 5 Crops in this month</h4> */}
    <table className="w-full text-left table-collapse rounded-2xl">
      <thead className='rounded-2xl'>
        <tr>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">S.No</th>
          <th className="text-lg font-Merriweather bg-blue-300 p-2">Crop</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Average Temperature</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Average Humidity</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Average PH</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Average Rainfall</th>
        </tr>
      </thead>
      <tbody className='rounded'>
        {Object.keys(props.data).map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-300'}>
          {/* {"temperature":22.6309424132,"humidity":92.3333828756,"ph":5.9296629318,"rainfall":112.654779275} */}
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{index+1}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row.toUpperCase()}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].temperature}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].humidity}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].ph}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].rainfall}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}



export default SoilAnalysis;