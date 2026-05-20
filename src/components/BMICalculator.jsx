import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RotateCcw, AlertCircle } from 'lucide-react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = parseFloat(height) / 100;
    const calculatedBmi = parseFloat((parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1));
    setBmi(calculatedBmi);

    let bmiStatus = '';
    let recText = '';

    if (calculatedBmi < 18.5) {
      bmiStatus = 'Underweight';
      recText = 'To build healthy mass and strength, we recommend our specialized Fit-G Muscle Building and Weight Gain programs combined with personalized Nutrition Consulting to hit your macro goals.';
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      bmiStatus = 'Normal Weight';
      recText = 'Phenomenal shape! To sustain and scale your fitness levels, join our high-octane CrossFit classes, Cardio Training sessions, and Group Exercises to push new athletic limits.';
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      bmiStatus = 'Overweight';
      recText = 'Let\'s kickstart your transformation! We strongly recommend our high-intensity Fat Loss programs, daily Cardio training, and personal trainer coaching for structured, safe progression.';
    } else {
      bmiStatus = 'Obese';
      recText = 'Your health is our ultimate priority. We highly recommend our private Personal Training program, which includes step-by-step low-impact conditioning, lifestyle support, and custom dietary advice.';
    }

    setStatus(bmiStatus);
    setRecommendation(recText);
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('');
    setRecommendation('');
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Underweight': return 'text-marvel-blue border-marvel-blue/30 bg-marvel-blue/10';
      case 'Normal Weight': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Overweight': return 'text-marvel-gold border-marvel-gold/30 bg-marvel-gold/10';
      case 'Obese': return 'text-primary border-primary/30 bg-primary/10';
      default: return 'text-white';
    }
  };

  return (
    <div className="glassmorphism p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-dark-border shadow-glow-card">
      {/* Background neon grid highlight */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 text-primary border border-primary/20 rounded-lg">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold tracking-wider uppercase text-white">
            Check Your BMI
          </h3>
          <p className="text-xs text-gray-400">Calculate your Body Mass Index instantly</p>
        </div>
      </div>

      <form onSubmit={calculateBMI} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Height input */}
          <div className="space-y-2">
            <label htmlFor="height-input" className="block text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Height (cm)
            </label>
            <input
              id="height-input"
              type="number"
              min="100"
              max="250"
              placeholder="e.g. 175"
              required
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full bg-black/60 border border-dark-border focus:border-primary rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
            />
          </div>

          {/* Weight input */}
          <div className="space-y-2">
            <label htmlFor="weight-input" className="block text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Weight (kg)
            </label>
            <input
              id="weight-input"
              type="number"
              min="30"
              max="200"
              placeholder="e.g. 70"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full bg-black/60 border border-dark-border focus:border-primary rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
            />
          </div>

        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 py-3 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-glow-red hover:shadow-glow-red-intense transition-all duration-300 active:scale-95"
          >
            Calculate BMI
          </button>
          
          {bmi && (
            <button
              type="button"
              onClick={handleReset}
              className="p-3 bg-dark-light hover:bg-dark border border-dark-border rounded-lg text-gray-400 hover:text-white transition-colors"
              aria-label="Reset Calculator"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>

      {/* Dynamic Results Display */}
      <AnimatePresence>
        {bmi && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 pt-6 border-t border-dark-border overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              
              {/* Score card */}
              <div className="bg-black/50 border border-dark-border p-4 rounded-xl text-center">
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Your BMI</span>
                <span className="text-3xl font-black text-white">{bmi}</span>
              </div>

              {/* Status card */}
              <div className={`border p-4 rounded-xl text-center sm:col-span-2 ${getStatusColor()}`}>
                <span className="block text-xs font-semibold uppercase tracking-wider opacity-75">Classification</span>
                <span className="text-xl font-extrabold uppercase tracking-wide block mt-1">{status}</span>
              </div>

            </div>

            {/* Recommendation box */}
            <div className="mt-4 p-4 bg-dark-light/40 border border-dark-border rounded-xl flex gap-3">
              <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider mb-1">Our Recommendation</span>
                <p className="text-xs text-gray-400 leading-relaxed">{recommendation}</p>
              </div>
            </div>

            {/* Scale indicator gauge line */}
            <div className="mt-6">
              <div className="flex justify-between text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 px-1">
                <span>&lt; 18.5 (Low)</span>
                <span>18.5 - 24.9 (Norm)</span>
                <span>25 - 29.9 (High)</span>
                <span>30+ (Obese)</span>
              </div>
              <div className="h-2 w-full rounded-full bg-dark-light flex overflow-hidden">
                <div className="h-full bg-marvel-blue w-[18.5%]" />
                <div className="h-full bg-green-400 w-[25%]" />
                <div className="h-full bg-marvel-gold w-[20%]" />
                <div className="h-full bg-primary w-[36.5%]" />
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
