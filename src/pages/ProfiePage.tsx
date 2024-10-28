import { Button } from "antd"

const ProfiePage = () => {
    return (
        <main className="grid grid-cols-12 m-[20px] gap-2">
            <div className="col-span-3 border h-[300px] shadow-lg rounded-md bg-gradient-to-r from-indigo-200 to-violet-300">
                <div className="flex justify-between">
                    <div className="m-[40px] ">
                        <h1 className="text-slate-500 font-semibold text-lg">Hello,</h1>
                        <h1 className="text-blue-700 font-semibold text-lg">Gokul M R</h1>
                    </div>
                    <div className="m-[20px]">
                        <div className="border h-[80px] w-[80px] shadow-md bg-white rounded-full">

                        </div>
                    </div>
                </div>
                <div className="m-[10px] flex gap-2">
                    <h1 className="text-slate-600 font-semibold text-base">email:</h1>
                    <h1 className="text-blue-500 font-semibold text-lg">test@gamail.com</h1>
                </div>
                <div className="flex gap-2 ml-[10px]">
                <h1 className="text-slate-600 font-semibold text-base">Phone:</h1>
                <h1 className="text-blue-500 font-semibold text-lg">9207332015</h1>
                </div>
                <div className="flex justify-end m-[10px]">
                    <Button>Edit Profile</Button>
                </div>
            </div>
            <div className="col-span-9 border">
                <div>

                </div>
            </div>
        </main>
    )
}

export default ProfiePage
