import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the time complexity of accessing an element in an array by its index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Array access by index is constant time O(1) because the memory address can be calculated directly using the index."
  },
  {
    id: 2,
    question: "Which sorting algorithm has the following implementation?",
    code: `
function sort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
    correctAnswer: 2,
    explanation: "This is Bubble Sort, which repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order."
  },
  {
    id: 3,
    question: "What is the space complexity of an in-place sorting algorithm?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "In-place sorting algorithms use only a constant amount of extra space, resulting in O(1) space complexity."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Quiz Completed!</h2>
          <div className="text-center mb-8">
            <p className="text-2xl font-semibold mb-2 dark:text-white">
              Your Score: {score}/{questions.length}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {score === questions.length 
                ? "Perfect score! Excellent work!" 
                : "Keep practicing to improve your knowledge!"}
            </p>
          </div>
          <button
            onClick={resetQuiz}
            className="flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">Algorithm Quiz</h1>
          <span className="text-gray-600 dark:text-gray-300">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">{question.question}</h2>
          
          {question.code && (
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-sm font-mono">{question.code}</code>
            </pre>
          )}

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  selectedAnswer === null
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    : selectedAnswer === index
                    ? index === question.correctAnswer
                      ? 'bg-green-100 dark:bg-green-900'
                      : 'bg-red-100 dark:bg-red-900'
                    : index === question.correctAnswer
                    ? 'bg-green-100 dark:bg-green-900'
                    : 'bg-gray-50 dark:bg-gray-700'
                } ${
                  selectedAnswer === null
                    ? 'border-2 border-gray-200 dark:border-gray-600'
                    : selectedAnswer === index
                    ? index === question.correctAnswer
                      ? 'border-2 border-green-500'
                      : 'border-2 border-red-500'
                    : index === question.correctAnswer
                    ? 'border-2 border-green-500'
                    : 'border-2 border-gray-200 dark:border-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <span className="flex-grow dark:text-white">{option}</span>
                  {selectedAnswer !== null && index === question.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                  {selectedAnswer === index && index !== question.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showExplanation && (
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2 dark:text-white">Explanation</h3>
            <p className="text-gray-600 dark:text-gray-300">{question.explanation}</p>
          </div>
        )}

        {selectedAnswer !== null && (
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Next Question
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              'Complete Quiz'
            )}
          </button>
        )}
      </div>
    </div>
  );
}