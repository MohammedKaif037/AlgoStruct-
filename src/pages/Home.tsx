import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Activity, Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Master Data Structures & Algorithms
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Interactive visualizations and step-by-step learning paths to help you understand complex concepts
        </p>
        <Link
          to="/learn"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all"
        >
          Start Learning
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Structured Learning</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Progressive paths from basic to advanced concepts with clear explanations
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <Activity className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Interactive Visualizations</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Watch algorithms come to life with our interactive visualizations
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <Brain className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Practice & Quiz</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Test your knowledge with quizzes and practical exercises
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Learning Path</h2>
        <div className="space-y-4">
          {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
            <div key={level} className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">{level}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {level === 'Beginner' && 'Arrays, Linked Lists, Basic Sorting'}
                  {level === 'Intermediate' && 'Trees, Heaps, Advanced Sorting'}
                  {level === 'Advanced' && 'Graphs, Dynamic Programming'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}