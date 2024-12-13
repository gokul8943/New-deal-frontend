import { Form, Input, Radio, Button, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { createListing } from "../service/api/user/lisiting.api";

interface FormValues {
    title: string;
    description: string;
    type: string;
    status: string;
    price: string;
    country: string;
    city: string;
    street: string;
    zipCode: string;
    bedrooms: string;
    bathrooms: string;
    area: string;
    image: any[]
}

const ListingAddPage: FC = () => {
    const [fileList, setFileList] = useState<any[]>([]);

    const onFinish = async (values: FormValues) => {
        try {
            const result = await createListing({ ...values, image: fileList });
            message.success("Property added successfully!");
            console.log("API Response:", result);
        } catch (error) {
            message.error("Failed to add property. Please try again.");
        }
    };

    const handleFileChange = ({ fileList: newFileList }: any) => {
        setFileList(newFileList);
    };
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Add New Property
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Fill in the details below to list your property
                    </p>
                </div>

                {/* Main Content */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Image Upload Section */}
                        <div className="col-span-12 lg:col-span-3 p-6 border-r border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Property Images
                            </h2>
                            <div className="space-y-4">
                                <Form.Item label="" valuePropName="fileList" name="images">
                                    <Upload
                                        listType="picture-card"
                                        fileList={fileList}
                                        onChange={handleFileChange}
                                        beforeUpload={() => false}
                                        className="upload-list-inline"
                                    >
                                        {fileList.length >= 8 ? null : (
                                            <button 
                                                className="upload-button hover:bg-gray-50 transition-colors"
                                                style={{ border: 0, background: 'none' }} 
                                                type="button"
                                            >
                                                <PlusOutlined className="text-gray-600" />
                                                <div className="mt-2 text-sm text-gray-600">Upload</div>
                                            </button>
                                        )}
                                    </Upload>
                                </Form.Item>
                                <p className="text-sm text-gray-500">
                                    Upload up to 8 property images
                                </p>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="col-span-12 lg:col-span-9 p-6">
                            <Form
                                layout="vertical"
                                onFinish={onFinish}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    {/* Property Details Section */}
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                                            Property Details
                                        </h2>
                                        <Form.Item 
                                            label="Title" 
                                            name="title" 
                                            rules={[{ required: true, message: 'Please enter property title' }]}
                                        >
                                            <Input className="rounded-md" />
                                        </Form.Item>
                                        <Form.Item 
                                            label="Description" 
                                            name="description" 
                                            rules={[{ required: true }]}
                                        >
                                            <TextArea rows={4} className="rounded-md" />
                                        </Form.Item>
                                        <Form.Item 
                                            label="Type" 
                                            name="type" 
                                            rules={[{ required: true }]}
                                        >
                                            <Radio.Group className="space-x-4">
                                                <Radio value="House">House</Radio>
                                                <Radio value="Apartment">Apartment</Radio>
                                                <Radio value="Land">Land</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        <Form.Item 
                                            label="Status" 
                                            name="status" 
                                            rules={[{ required: true }]}
                                        >
                                            <Radio.Group className="space-x-4">
                                                <Radio value="For Sale">For Sale</Radio>
                                                <Radio value="For Rent">For Rent</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        <Form.Item 
                                            label="Price" 
                                            name="price" 
                                            rules={[{ required: true }]}
                                        >
                                            <Input className="rounded-md" prefix="$" />
                                        </Form.Item>
                                    </div>

                                    {/* Address and Features Section */}
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                                            Location & Features
                                        </h2>
                                        <Form.Item label="Country" name="country" rules={[{ required: true }]}>
                                            <Input className="rounded-md" />
                                        </Form.Item>
                                        <Form.Item label="City" name="city" rules={[{ required: true }]}>
                                            <Input className="rounded-md" />
                                        </Form.Item>
                                        <Form.Item label="Street" name="street" rules={[{ required: true }]}>
                                            <Input className="rounded-md" />
                                        </Form.Item>
                                        <Form.Item label="Zip Code" name="zipCode" rules={[{ required: true }]}>
                                            <Input className="rounded-md" />
                                        </Form.Item>
                                        
                                        <div className="grid grid-cols-3 gap-4">
                                            <Form.Item label="Bedrooms" name="bedrooms">
                                                <Input className="rounded-md" />
                                            </Form.Item>
                                            <Form.Item label="Bathrooms" name="bathrooms">
                                                <Input className="rounded-md" />
                                            </Form.Item>
                                            <Form.Item label="Area (sq ft)" name="area">
                                                <Input className="rounded-md" />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end pt-6 border-t">
                                    <Button 
                                        type="primary" 
                                        htmlType="submit"
                                        size="large"
                                        className="px-8 h-12 bg-blue-600 hover:bg-blue-700"
                                    >
                                        List Property
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ListingAddPage;
