import { useState } from 'react';
import { Card, Switch, Select, Button, Tabs, Alert, Space, Typography, Layout } from 'antd';
import { Bell, Moon, Globe, Shield, LogOut, User } from 'lucide-react';

const { Title, Text } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const handleLogout = () => {
    setShowLogoutAlert(true);
    // Add your logout logic here
  };

  return (
    <Content className="p-6 max-w-4xl mx-auto">
      <Title level={2}>Settings</Title>

      <Tabs defaultActiveKey="general" className="mb-6">
        <TabPane tab="General" key="general">
          <Card className="mb-4">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Space>
                  <Moon size={20} />
                  <div>
                    <Text strong>Dark Mode</Text>
                    <br />
                    <Text type="secondary">Toggle dark mode theme</Text>
                  </div>
                </Space>
                <Switch 
                  checked={darkMode} 
                  onChange={setDarkMode}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Space>
                  <Globe size={20} />
                  <div>
                    <Text strong>Language</Text>
                    <br />
                    <Text type="secondary">Select your preferred language</Text>
                  </div>
                </Space>
                <Select
                  defaultValue="english"
                  style={{ width: 120 }}
                  options={[
                    { value: 'english', label: 'English' },
                    { value: 'spanish', label: 'Spanish' },
                    { value: 'french', label: 'French' },
                  ]}
                />
              </div>
            </Space>
          </Card>
        </TabPane>

        <TabPane tab="Notifications" key="notifications">
          <Card>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Space>
                  <Bell size={20} />
                  <div>
                    <Text strong>Email Notifications</Text>
                    <br />
                    <Text type="secondary">Receive property updates and alerts</Text>
                  </div>
                </Space>
                <Switch
                  checked={emailNotifications}
                  onChange={setEmailNotifications}
                />
              </div>
            </Space>
          </Card>
        </TabPane>

        <TabPane tab="Privacy & Security" key="privacy">
          <Card>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Space>
                  <Shield size={20} />
                  <div>
                    <Text strong>Two-Factor Authentication</Text>
                    <br />
                    <Text type="secondary">Add an extra layer of security</Text>
                  </div>
                </Space>
                <Button type="default">Enable 2FA</Button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Space>
                  <User size={20} />
                  <div>
                    <Text strong>Profile Visibility</Text>
                    <br />
                    <Text type="secondary">Manage who can see your profile</Text>
                  </div>
                </Space>
                <Select
                  defaultValue="public"
                  style={{ width: 120 }}
                  options={[
                    { value: 'public', label: 'Public' },
                    { value: 'private', label: 'Private' },
                    { value: 'contacts', label: 'Contacts Only' },
                  ]}
                />
              </div>
            </Space>
          </Card>
        </TabPane>
      </Tabs>

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            <div>
              <Text strong>Logout</Text>
              <br />
              <Text type="secondary">Sign out of your account</Text>
            </div>
          </Space>
          <Button 
            type="primary" 
            danger 
            icon={<LogOut size={16} />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Card>

      {showLogoutAlert && (
        <Alert
          message="Logged Out Successfully"
          type="success"
          closable
          className="mt-4"
          onClose={() => setShowLogoutAlert(false)}
        />
      )}
    </Content>
  );
};

export default Settings;