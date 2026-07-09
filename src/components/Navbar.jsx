import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-tight">
            <Link href="/" className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent rounded">
              AI Productivity
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/tasks">Tasks</NavLink>
            <NavLink href="/insights">Insights</NavLink>
            <NavLink href="/settings">Settings</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <NavLink href="/health">Health</NavLink>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button placeholder */}
            <span className="text-sm border border-primary-foreground px-2 py-1 rounded">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:bg-accent focus:text-accent-foreground"
    >
      {children}
    </Link>
  );
}
