import { Button } from "antd"
 interface RentalCardProps{
    onClick:()=>void
 }
const RentalCard:React.FC<RentalCardProps>  = ({onClick}) => {


  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 p-6 relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl">🔑</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Rent Property</h3>
              <p className="text-white/90">Find your perfect rental</p>
              <div className="absolute -bottom-6 right-6 w-20 h-20 bg-green-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Flexible lease terms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Verified properties
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Easy application process
                </li>
              </ul>
              <Button 
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white border-none h-12"
                onClick={onClick}
              >
                Find Rentals
              </Button>
            </div>
          </div>
  )
}

export default RentalCard
