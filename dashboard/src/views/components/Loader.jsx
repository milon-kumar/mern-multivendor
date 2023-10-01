import React from 'react'
import Spinner from 'react-spinner-material'

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
        <Spinner size={120} spinnerWidth={2} visible={true} />
    </div>
  )
}

export default Loader