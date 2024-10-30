import { Form, Input, Modal } from "antd";
import { useState } from "react";

interface ProfileEditModalProps {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ isModalOpen, handleCancel, handleOk }) => {
    const [image, setImage] = useState<string | undefined>(''); // to preview uploaded image

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <Modal title="Edit Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 flex flex-col items-center">
                    <div className="w-full flex justify-center mb-4">
                        <div className="relative">
                            <img
                                src={image || 'default-profile.jpg'} // Replace with a default image path
                                alt="Profile"
                                className="w-[120px] h-[120px] bg-violet-200 rounded-full object-cover cursor-pointer"
                                onClick={() => document.getElementById("imageInput")?.click()}
                            />
                            <input
                                type="file"
                                id="imageInput"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <Form layout="vertical">
                            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                            <Form.Item label="Email" name="email">
                                <Input 
                                    disabled
                                    className="cursor-not-allowed bg-gray-100" />
                            </Form.Item>
                            <Form.Item label="Phone" name="phone" rules={[{ required: true, message: "Please enter your phone number" }]}>
                                <Input placeholder="Enter your phone number" />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProfileEditModal;
