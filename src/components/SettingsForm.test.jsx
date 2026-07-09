import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SettingsForm from './SettingsForm';

describe('SettingsForm Component', () => {
  it('renders all form fields', () => {
    render(<SettingsForm />);
    expect(screen.getByLabelText(/Display Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Theme Preference/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enable Email Notifications/i)).toBeInTheDocument();
  });

  it('validates required display name', () => {
    render(<SettingsForm />);
    const nameInput = screen.getByLabelText(/Display Name/i);
    
    // Focus and blur to trigger touched state
    fireEvent.focus(nameInput);
    fireEvent.blur(nameInput);
    
    expect(screen.getByText(/Display name is required/i)).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('aria-invalid', 'true');
  });

  it('validates minimum length for display name', () => {
    render(<SettingsForm />);
    const nameInput = screen.getByLabelText(/Display Name/i);
    
    fireEvent.change(nameInput, { target: { value: 'A' } });
    fireEvent.blur(nameInput);
    
    expect(screen.getByText(/Display name must be at least 2 characters/i)).toBeInTheDocument();
  });

  it('validates invalid email format', () => {
    render(<SettingsForm />);
    const emailInput = screen.getByLabelText(/Email Address/i);
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
  });

  it('disables submit button when form is invalid after interaction', () => {
    render(<SettingsForm />);
    const submitButton = screen.getByRole('button', { name: /Save Settings/i });
    
    // Initially not disabled because user hasn't interacted
    expect(submitButton).not.toBeDisabled();
    
    // Touch a field to trigger validation state check
    const nameInput = screen.getByLabelText(/Display Name/i);
    fireEvent.focus(nameInput);
    fireEvent.blur(nameInput);
    
    // Form is now touched and invalid
    expect(submitButton).toBeDisabled();
  });

  it('shows success message on valid form submission', () => {
    render(<SettingsForm />);
    
    fireEvent.change(screen.getByLabelText(/Display Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Theme Preference/i), { target: { value: 'system' } });
    
    const submitButton = screen.getByRole('button', { name: /Save Settings/i });
    fireEvent.click(submitButton);
    
    expect(screen.getByRole('status')).toHaveTextContent(/Settings successfully updated/i);
  });
});
