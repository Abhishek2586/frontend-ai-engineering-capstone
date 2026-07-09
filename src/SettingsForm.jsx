import React, { useState } from 'react';

function SettingsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    theme: 'light',
    notifications: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', formData);
    alert('Settings saved!');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Theme: </label>
          <select name="theme" value={formData.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" name="notifications" checked={formData.notifications} onChange={handleChange} />
            Enable Notifications
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default SettingsForm;
