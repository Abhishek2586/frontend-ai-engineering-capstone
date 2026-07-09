import React, { useState } from 'react';
import './SettingsForm.css';

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    theme: '',
    emailNotifications: false,
  });

  const [touched, setTouched] = useState({
    displayName: false,
    email: false,
    theme: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getErrors = () => {
    const errors = {};
    if (!formData.displayName) {
      errors.displayName = 'Display name is required.';
    } else if (formData.displayName.length < 2) {
      errors.displayName = 'Display name must be at least 2 characters.';
    }

    if (!formData.email) {
      errors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.theme) {
      errors.theme = 'Please select a theme preference.';
    }

    return errors;
  };

  const errors = getErrors();
  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      displayName: true,
      email: true,
      theme: true,
    });
    
    if (isFormValid) {
      setSubmitted(true);
      // Mock API call or save action here
    }
  };

  return (
    <div className="settings-form-container">
      <h2>User Settings</h2>
      {submitted && (
        <div role="status" className="success-message">
          Settings successfully updated!
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.displayName && !!errors.displayName}
            aria-describedby={touched.displayName && errors.displayName ? 'displayName-error' : undefined}
          />
          {touched.displayName && errors.displayName && (
            <span id="displayName-error" className="error-message">
              {errors.displayName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id="email-error" className="error-message">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="theme">Theme Preference</label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.theme && !!errors.theme}
            aria-describedby={touched.theme && errors.theme ? 'theme-error' : undefined}
          >
            <option value="">Select a theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
          {touched.theme && errors.theme && (
            <span id="theme-error" className="error-message">
              {errors.theme}
            </span>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label htmlFor="emailNotifications">
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleChange}
            />
            Enable Email Notifications
          </label>
        </div>

        <button type="submit" disabled={!isFormValid && Object.values(touched).some(Boolean)}>
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default SettingsForm;
