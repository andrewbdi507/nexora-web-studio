import * as React from "react";
import { motion, Variants } from "framer-motion";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctOption: number;
  }[];
}

const modalVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  questions,
}) => {
  const questionVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pointer-events-auto"
    >
      <motion.div
        className="bg-white rounded-lg max-w-md w-full mx-4 p-6 transform transition-all duration-300"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Quiz Interativo
        </h2>
        
        {questions.map((question) => (
          <div key={question.id} className="mb-8">
            <p className="text-lg font-medium mb-4">{question.question}</p>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-hover:bg-blue-50 cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Fechar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};