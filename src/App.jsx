import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lang from './components/Lang'

const App = () => {

  const colors = [
    "#FF9F80",
    "#FFD37F",
    "#CDB4DB",
    "#B5E48C",
  ]

  const [selectedColor, setSelectedColor] = useState("#FF9F80");

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details, color: selectedColor })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div>
    <Navbar />
    <Hero />
    <Lang />
    <div className='h-screen lg:flex bg-gray-100 text-black rounded-[10vh] mt-[10vh]'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <div className='flex gap-2'>
          {colors.map((color , index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full cursor-pointer transition-transform duration-150 ${
                selectedColor === color ? 'ring-2 ring-black scale-110' : ''
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2-b-gray-800  outline-none rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-b-gray-800  outline-none  rounded '
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4" style={{backgroundColor: elem.color}}>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default App