import { Button, Input } from 'antd'
import React from 'react'

interface NewLetterCardProps {
    email: string;
    setEmail: (email: string) => void;
    onclick: () => void
}
const NewLetterCard: React.FC<NewLetterCardProps> = ({ email,setEmail,onclick }) => {
    return (
        <div className="col-span-12 bg-gradient-to-r from-indigo-600 to-blue-600 p-16 m-[30px] rounded-xl shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Stay Ahead of the Market
                </h2>
                <p className="text-white text-lg mb-8 opacity-90">
                    Subscribe to our newsletter and never miss out on the latest properties and market insights
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Input
                        placeholder="Enter your email"
                        size="large"
                        className="max-w-md text-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        prefix={<span className="text-gray-400">✉️</span>}
                    />
                    <Button
                        size="large"
                        className="bg-white text-indigo-600 hover:bg-gray-50 font-semibold px-8"
                        onClick={onclick}
                    >
                        Subscribe Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NewLetterCard
