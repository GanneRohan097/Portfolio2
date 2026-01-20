import React from 'react'

const Loading = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center
                 bg-slate-900 border border-white/20
                 text-white font-medium
                 rounded-lg px-4 py-2.5
                 shadow-md"
    >
      <svg
        aria-hidden="true"
        className="w-4 h-4 me-2 animate-spin text-blue-500"
        viewBox="0 0 100 101"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
          opacity="0.2"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539
             C95.2932 28.8227 92.871 24.3692 89.8167 20.348
             C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289
             C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124"
        />
      </svg>
      Sending...
    </button>
  )
}

export default Loading
