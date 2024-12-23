import { motion } from 'framer-motion';
import home from '../assets/images/newhome1.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm font-semibold text-violet-600 tracking-wider uppercase">
                  Who We Are
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  We Help To Find Your Dream Home
                </h2>
                <div className="flex items-center  py-4">
                  <span className="text-4xl font-bold text-violet-600">FIND</span>
                  <span className="text-4xl font-bold text-slate-600">dEAL</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FINDdEAL is a premier real estate agency specializing in helping clients 
                  navigate their property journey in the most desirable neighborhoods. Our 
                  team of dedicated experts brings years of experience and local market 
                  insights to every client interaction.
                </p>
                <p>
                  Our mission is simple: transform your real estate dreams into reality. 
                  Whether you're buying your first home, selling a property, or looking 
                  for the perfect rental, we provide personalized solutions tailored to 
                  your unique needs.
                </p>
                <p>
                  We believe in creating lasting relationships built on trust, transparency, 
                  and exceptional results. Our commitment to excellence has made us a 
                  trusted name in real estate, serving countless satisfied clients throughout 
                  their property journey.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-violet-50 p-4 rounded-lg flex-1 min-w-[200px]">
                  <h3 className="text-2xl font-bold text-violet-600">500+</h3>
                  <p className="text-gray-600">Properties Sold</p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg flex-1 min-w-[200px]">
                  <h3 className="text-2xl font-bold text-violet-600">98%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <img 
                src={home}
                alt="Luxury Home Exterior"
                className="w-full h-full object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">
                  "Your dream home is just a conversation away. Let's make it happen together."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;