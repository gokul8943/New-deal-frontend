import home from '../assets/images/newhome1.jpg'


const About = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-12 py-20 px-10 max-w-6xl mx-auto border m-[20px] bg-gradient-to-r from-white to-violet-300 rounded-lg shadow-lg'>
        <div className="flex">
          <div className="flex-1">
          <div className="float-right ml-6 mb-4">
              <img 
                src={home} // Replace with your actual image path
                alt="About FINDdEAL"
                className="w-[500px] h-[400px] rounded-lg shadow-lg hover:shadow-2xl object-cover"
              />
            </div>
            <h1 className="text-xl font-bold mb-4 text-green-500">Who Are We</h1>
            <h1 className="text-2xl font-bold mb-4 p-[20px] text-gray-500">We Help To Find Your Dream</h1>
            <h1 className='text-3xl font-bold mb-4 text-center text-violet-600'>  About    <span className='text-slate-600'>FIND</span>
              <span className='text-slate-900'>dEAL</span>
            </h1>
            
            {/* Image floating on the right */}
        

            <p className='mb-4 text-slate-700'>FINDdEAL is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
            <p className='mb-4 text-slate-700'>
              Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
            </p>
            <p className='mb-4 text-slate-700'>We are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
