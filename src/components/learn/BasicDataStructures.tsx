import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BasicDataStructures() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const arrayCode = `
const array = [1, 2, 3, 4, 5];

// Accessing elements
console.log(array[0]); // Output: 1

// Adding elements
array.push(6);     // Add to end
array.unshift(0);  // Add to beginning

// Removing elements
array.pop();       // Remove from end
array.shift();     // Remove from beginning
  `.trim();

  const handleStep = () => {
    if (currentStep < array.length) {
      setHighlightIndex(currentStep);
      setCurrentStep(prev => prev + 1);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setHighlightIndex(-1);
    setIsPlaying(false);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        handleStep();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

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

      <h1 className="text-3xl font-bold mb-4 dark:text-white">Arrays and Basic Data Structures</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Array Visualization</h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {array.map((num, index) => (
              <div
                key={index}
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-lg font-semibold transition-all
                  ${highlightIndex === index 
                    ? 'bg-indigo-600 text-white transform scale-110' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={resetAnimation}
            className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Array Operations</h3>
          <SyntaxHighlighter
            language="javascript"
            style={materialDark}
            className="rounded-lg"
          >
            {arrayCode}
          </SyntaxHighlighter>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Key Concepts</h3>
          <ul>
            <li>Arrays store elements in contiguous memory locations</li>
            <li>Access time is O(1) for any element with its index</li>
            <li>Insertion and deletion at the beginning require shifting elements</li>
            <li>Dynamic arrays automatically resize when needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}