import { AlertTriangle } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-amber-800 mb-1">Medical Disclaimer</h3>
          <p className="text-sm text-amber-700">
            This website is for informational purposes only and is not a substitute for professional medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </div>
  );
}
