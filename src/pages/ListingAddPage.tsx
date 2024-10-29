import { Form, Input, Radio, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";

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
}

const ListingAddPage: FC = () => {
  const onFinish = (values: FormValues): void => {
    console.log("Form Values:", values);
  };

  return (
    <main className="grid grid-cols-12 m-[20px] gap-2">
      <div className="col-span-4 border h-[300px]">
        <h1 className="text-lg font-semibold"></h1>
      </div>
      <div className="col-span-8 border p-4">
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          style={{ maxWidth: "100%" }}
          onFinish={onFinish}
        >
          {/* Split Form into Two Columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* Property Details Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-2">Property Details</h2>
              <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="Type" name="type" rules={[{ required: true }]}>
                <Radio.Group>
                  <Radio value="house">House</Radio>
                  <Radio value="apartment">Apartment</Radio>
                  <Radio value="land">Land</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Status" name="status" rules={[{ required: true }]}>
                <Radio.Group>
                  <Radio value="For Sale">For Sale</Radio>
                  <Radio value="For Rent">For Rent</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Price" name="price" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </div>

            {/* Address Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-2">Address</h2>
              <Form.Item label="Country" name="country" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="City" name="city" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Street" name="street" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Zip Code" name="zipCode" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <h2 className="text-lg font-semibold mb-2">Features</h2>
              <Form.Item label="Bedrooms" name="bedrooms">
                <Input />
              </Form.Item>
              <Form.Item label="Bathrooms" name="bathrooms">
                <Input />
              </Form.Item>
              <Form.Item label="Area" name="area">
                <Input />
              </Form.Item>
            </div>
          </div>

          {/* Submit Button */}
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default ListingAddPage;
