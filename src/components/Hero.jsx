import { ArrowUpRight } from "lucide-react"

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] flex-col -mt-10'>
      <div className='h-40 w-40 p-4'>
        <img
          src="https://thepicturesdp.in/wp-content/uploads/2025/08/new-whatsapp-profile-pictures-photo.jpg"
          alt="pfp"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className='text-4xl text-center font-bold'>
        <h2 className='bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent'>
          Simple Notes,<br />Powerful Organization,<br />Anywhere You Go.
        </h2>
      </div>
      <div className=''>
        <button className="flex items-center gap-2 bg-black text-gray-300 px-6 py-3 rounded-full mt-6">
          Learn More
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default Hero