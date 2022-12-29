import React from 'react'

function CropComponent(props) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="relative h-48 w-48 rounded-lg overflow-hidden">
      <div className={`${isFlipped ? 'hidden' : 'block'} bg-slate-400 w-full h-full flex items-center justify-center text-white text-5xl`}>
        Front
      </div>
      <div className={`${isFlipped ? 'block' : 'hidden'} bg-gray-500 w-full h-full flex items-center justify-center text-white text-5xl`}>
        Loading....
      </div>
      <button onClick={handleClick} className="absolute top-0 right-0 bottom-0 left-0 rounded-lg"></button>
    </div>
  )
}

export default CropComponent