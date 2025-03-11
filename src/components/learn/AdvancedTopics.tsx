import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdvancedTopics() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-8">
        <Link
          to="/learn"
          className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Learning Path
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4 dark:text-white">Advanced Topics</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <p className="text-gray-600 dark:text-gray-300">
          Coming soon! Advanced data structures and algorithms.
        </p>
      </div>
    </div>
  );
}