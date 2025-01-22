import React from 'react'

const Trial = ({open,setOpen}) => {
  return (
    <>
    {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-[400px] h-[200px] p-8 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-2xl font-semibold mb-4 pt-8">
              TRIAL FOR 7 DAYS in ₹101
            </div>
            <button className="coloredbutton w-full py-2 text-sm">
              More Details
            </button>
            <div
              className="absolute cursor-pointer font-bold top-2 right-2"
              onClick={() => setOpen(!open)}
            >
              {'X'}
            </div>
          </div>
        </div>
      )}
      </>
  )
}

export default Trial