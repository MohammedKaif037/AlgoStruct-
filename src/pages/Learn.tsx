import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, Code, LineChart, Network } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BasicDataStructures from '../components/learn/BasicDataStructures';
import SortingAlgorithms from '../components/learn/SortingAlgorithms';
import AdvancedTopics from '../components/learn/AdvancedTopics';

export default function Learn() {
  const location = useLocation();
  
  const modules = [
    {
      path: "basics",
      title: "Basic Data Structures",
      icon: BookOpen,
      description: "Arrays, Linked Lists, and Stacks",
      component: BasicDataStructures
    },
    {
      path: "sorting",
      title: "Sorting Algorithms",
      icon: LineChart,
      description: "Bubble Sort, Quick Sort, and Merge Sort",
      component: SortingAlgorithms
    },
    {
      path: "advanced",
      title: "Advanced Topics",
      icon: Network,
      description: "Trees, Graphs, and Dynamic Programming",
      component: AdvancedTopics
    }
  ];

  if (location.pathname === '/learn') {
    return (
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Learning Path</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master data structures and algorithms through interactive lessons and visualizations
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.path}
                to={module.path}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-xl font-semibold dark:text-white">{module.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{module.description}</p>
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 group-hover:translate-x-2 transition-transform">
                  <span className="font-medium">Start Learning</span>
                  <Code className="ml-2 w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Your Learning Progress</h2>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span>Overall Progress</span>
              <span>25%</span>
            </div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
              <div className="bg-white rounded-full h-2 w-1/4"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <Routes>
      {modules.map((module) => (
        <Route
          key={module.path}
          path={module.path}
          element={<module.component />}
        />
      ))}
    </Routes>
  );
}