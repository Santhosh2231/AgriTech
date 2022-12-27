import React from 'react'

const SoilCrop = () => {
  return (
    <div className='sm:container mt-10 justify-center align-middle'>
        <form className="w-[80%] mx-auto max-w-4xl">
        <h4 className='font-Merriweather'>Crop Recommendation based on Soil</h4>


        <div className='flex flex-wrap -mx-3 mb-2 mt-10 md:my-12'>
          <div className="w-full md:w-1/3 px-3 mb-6  md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Nitrogen Ratio (N) %</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  type="number" placeholder="90210" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Phosphorus Ratio (P) %</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  type="number" placeholder="90210" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Potassium Ratio (K) %</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  type="number" placeholder="90210" />
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-2 md:my-12'>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
              <h6 className='text-lg'>Temperature of the Soil</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  type="number" placeholder="90210" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
              <h6 className='text-lg'>Humidity</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  type="number" placeholder="90210" />
          </div>
          
        </div>

        <div className='flex flex-wrap -mx-3 mb-2 md:my-12'>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
              <h6 className='text-lg'>PH of the Soil</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  type="number" placeholder="90210" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" >
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Rainfall in your area</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"  type="number" placeholder="90210" />
          </div>
          
        </div>


</form>

    </div>
  )
}

export default SoilCrop