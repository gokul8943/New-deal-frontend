import { Button, Tabs, TabsProps } from "antd"
import { useState } from "react"
import ProfileEditModal from "../components/Modals/ProfileEditModal";
import { UserOutlined, FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import useAuthStore from "../store/authStore";
import MyListing from "../components/UserListing";
import Settings from "../components/Settings";


const ProfiePage = () => {
    const { authState } = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: (
                <span>
                    <FileTextOutlined />
                    My Listings
                </span>
            ),
            children: <MyListing userId={authState.user._id}/>,
        },
        {
            key: '2',
            label: (
                <span>
                    <SettingOutlined />
                    Settings
                </span>
            ),
            children:<Settings />,
        },
    ];

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-12 gap-6">
                {/* Profile Card */}
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
                            <div className="flex justify-center mb-4">
                                <div className="h-24 w-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                                    <UserOutlined className="text-4xl text-gray-400" />
                                </div>
                            </div>
                            <h2 className="text-white text-xl font-bold text-center">{authState.user.name}</h2>
                            <p className="text-indigo-100 text-center">Premium Member</p>
                        </div>
                        
                        <div className="p-6">
                            <div className="mb-4">
                                <label className="text-sm text-gray-600 font-medium">Email</label>
                                <p className="text-gray-800">{authState.user.email}</p>
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-600 font-medium">Phone</label>
                                <p className="text-gray-800">{authState.user.phone}</p>
                            </div>
                            {/* <div className="mb-4">
                                <label className="text-sm text-gray-600 font-medium">Location</label>
                                <p className="text-gray-800">Bangalore, India</p>
                            </div> */}
                            <Button 
                                type="primary" 
                                onClick={showModal} 
                                className="w-full bg-indigo-600 hover:bg-indigo-700"
                            >
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-12 md:col-span-8 lg:col-span-9">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <Tabs defaultActiveKey="1" items={items} />
                    </div>
                </div>
            </div>

            <ProfileEditModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
            />
        </main>
    )
}

export default ProfiePage
