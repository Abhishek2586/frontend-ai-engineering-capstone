import React from 'react';

export default function PlaceholderCard({ title, children }) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-xl shadow-sm p-6 max-w-2xl mt-4">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}
