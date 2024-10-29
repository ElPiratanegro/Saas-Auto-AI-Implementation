import React from 'react';
import Layout from './components/Layout';
import AIModelCard from './components/AIModelCard';
import { AIModel } from './types';
import { Bot, Zap, History } from 'lucide-react';

function App() {
  const [selectedModel, setSelectedModel] = React.useState<AIModel | null>(null);

  const demoModels: AIModel[] = [
    {
      id: '1',
      name: 'Text Generator Pro',
      description: 'Advanced text generation model for creative writing and content creation',
      type: 'text',
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Image Enhancer',
      description: 'AI-powered image enhancement and style transfer',
      type: 'image',
      status: 'training',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Voice Assistant',
      description: 'Natural language processing for voice commands and responses',
      type: 'audio',
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            icon={<Bot className="h-6 w-6 text-blue-500" />}
            title="Active Models"
            value="12"
            trend="+2 this week"
          />
          <StatCard
            icon={<Zap className="h-6 w-6 text-yellow-500" />}
            title="Total Requests"
            value="1,234"
            trend="+15% vs last week"
          />
          <StatCard
            icon={<History className="h-6 w-6 text-green-500" />}
            title="Avg Response Time"
            value="0.8s"
            trend="-0.2s improvement"
          />
        </div>

        {/* AI Models Grid */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Your AI Models</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demoModels.map(model => (
              <AIModelCard
                key={model.id}
                model={model}
                onSelect={setSelectedModel}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Recent Activity</h2>
          <div className="rounded-lg border bg-white">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b p-4 last:border-b-0"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Model {i + 1} processed request #{Math.floor(Math.random() * 1000)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date().toLocaleString()}
                  </p>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  Successful
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
}

function StatCard({ icon, title, value, trend }: StatCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        {icon}
        <span className="text-sm text-gray-500">{trend}</span>
      </div>
      <h3 className="mt-4 text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}

export default App;