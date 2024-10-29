import React from 'react';
import { Bot, Clock, AlertCircle } from 'lucide-react';
import { AIModel } from '../types';

interface AIModelCardProps {
  model: AIModel;
  onSelect: (model: AIModel) => void;
}

export default function AIModelCard({ model, onSelect }: AIModelCardProps) {
  const getStatusIcon = () => {
    switch (model.status) {
      case 'active':
        return <Bot className="h-5 w-5 text-green-500" />;
      case 'training':
        return <Clock className="h-5 w-5 text-yellow-500 animate-spin" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div 
      onClick={() => onSelect(model)}
      className="cursor-pointer rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{model.name}</h3>
        {getStatusIcon()}
      </div>
      
      <p className="mt-2 text-sm text-gray-600">{model.description}</p>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Type: {model.type}</span>
        <span>Updated: {new Date(model.updatedAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}