import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            AlgoViz
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/learn" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Learn
            </Link>
            <Link to="/visualizer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Visualizer
            </Link>
            <Link to="/quiz" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Quiz
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/learn" className="block py-2 text-gray-700 dark:text-gray-300">
              Learn
            </Link>
            <Link to="/visualizer" className="block py-2 text-gray-700 dark:text-gray-300">
              Visualizer
            </Link>
            <Link to="/quiz" className="block py-2 text-gray-700 dark:text-gray-300">
              Quiz
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}