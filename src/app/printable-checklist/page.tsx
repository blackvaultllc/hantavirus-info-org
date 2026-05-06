'use client';

import Link from 'next/link';
import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Printer, CheckCircle, AlertTriangle } from 'lucide-react';

export default function PrintableChecklist() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'Printable Checklist', href: '/printable-checklist' }]} className="mb-8" />
          
          <div className="mb-8">
            <Link
              href="/cleaning-guide"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              ← Back to Cleaning Guide
            </Link>
          </div>

          <div className="bg-white border-2 border-gray-300 p-8 print:border print:border-black" id="printable-checklist">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-300 print:border-black">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Hantavirus Safe Cleaning Checklist
              </h1>
              <p className="text-gray-600">
                CDC-Recommended Procedures for Cleaning Rodent-Contaminated Areas
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Print this checklist and use it as a reference
              </p>
            </div>

            {/* Critical Warning */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-8 print:bg-gray-100 print:border-2 print:border-black">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 print:text-black" />
                <div>
                  <h2 className="text-lg font-bold text-red-900 mb-2 print:text-black">
                    CRITICAL WARNING
                  </h2>
                  <p className="text-red-800 print:text-black">
                    NEVER sweep or vacuum dry rodent droppings. This can aerosolize the virus and cause infection. 
                    Always wet the area with disinfectant before cleaning.
                  </p>
                </div>
              </div>
            </div>

            {/* Equipment Checklist */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 print:border-black">
                Equipment Needed (Check Before Starting)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Rubber or latex gloves',
                  'N95 respirator mask',
                  'Protective eyewear',
                  'Spray bottle',
                  'Household bleach',
                  'Water',
                  'Paper towels',
                  'Mop and bucket',
                  'Heavy-duty plastic bags',
                  'Long-sleeved clothing',
                  'Disposable coveralls (optional)',
                ].map((item, index) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Step-by-Step Checklist */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 print:border-black">
                Cleaning Procedure (Complete in Order)
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Ventilate the Area',
                    description: 'Open all windows and doors for at least 30 minutes before cleaning.',
                  },
                  {
                    step: 2,
                    title: 'Put on Protective Equipment',
                    description: 'Wear rubber gloves, N95 mask, and protective eyewear.',
                  },
                  {
                    step: 3,
                    title: 'Prepare Disinfectant',
                    description: 'Mix 1 part bleach to 10 parts water in spray bottle.',
                  },
                  {
                    step: 4,
                    title: 'Wet Contaminated Area',
                    description: 'Thoroughly spray all contaminated surfaces. Let soak for 10 minutes.',
                  },
                  {
                    step: 5,
                    title: 'Clean with Wet Materials',
                    description: 'Wipe up wet droppings with paper towels. Never sweep or vacuum.',
                  },
                  {
                    step: 6,
                    title: 'Double-Bag Waste',
                    description: 'Place contaminated materials in plastic bag, seal, then place in second bag.',
                  },
                  {
                    step: 7,
                    title: 'Disinfect Again',
                    description: 'Spray cleaned area again with disinfectant solution.',
                  },
                  {
                    step: 8,
                    title: 'Dispose of Waste',
                    description: 'Place double-bagged waste in regular trash for disposal.',
                  },
                  {
                    step: 9,
                    title: 'Remove PPE',
                    description: 'Carefully remove gloves (turn inside out), then mask last.',
                  },
                  {
                    step: 10,
                    title: 'Wash Hands',
                    description: 'Wash hands with soap and warm water for at least 20 seconds.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg print:bg-white print:border print:border-gray-300">
                    <div className="flex-shrink-0">
                      <input type="checkbox" className="w-5 h-5 mt-1 rounded border-gray-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="font-bold text-gray-900">Step {item.step}</span>
                        <CheckCircle className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What NOT to Do */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 print:border-black">
                What NOT to Do
              </h2>
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 print:bg-white print:border-2 print:border-black">
                <ul className="space-y-2">
                  {[
                    'NEVER sweep dry droppings',
                    'NEVER vacuum without disinfecting first',
                    'NEVER touch droppings with bare hands',
                    'NEVER clean without ventilation',
                    'NEVER use water only (must use disinfectant)',
                    'NEVER touch your face while cleaning',
                    'NEVER skip hand washing after cleaning',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 font-bold mr-2 print:text-black">✗</span>
                      <span className="text-gray-800 print:text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Quick Reference */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 print:border-black">
                Quick Reference Card
              </h2>
              <div className="grid grid-cols-2 gap-4 print:gap-2">
                <div className="bg-green-50 border border-green-300 rounded-lg p-4 print:bg-white print:border print:border-black">
                  <h3 className="font-bold text-green-900 mb-2 print:text-black">DO</h3>
                  <ul className="space-y-1 text-sm text-green-800 print:text-black">
                    <li>✓ Ventilate first</li>
                    <li>✓ Wear gloves & N95 mask</li>
                    <li>✓ Wet with disinfectant</li>
                    <li>✓ Wait 10 minutes</li>
                    <li>✓ Clean with wet towels</li>
                    <li>✓ Double-bag waste</li>
                    <li>✓ Wash hands thoroughly</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-300 rounded-lg p-4 print:bg-white print:border print:border-black">
                  <h3 className="font-bold text-red-900 mb-2 print:text-black">DON'T</h3>
                  <ul className="space-y-1 text-sm text-red-800 print:text-black">
                    <li>✗ Sweep dry droppings</li>
                    <li>✗ Vacuum without disinfecting</li>
                    <li>✗ Touch with bare hands</li>
                    <li>✗ Clean without ventilation</li>
                    <li>✗ Use water only</li>
                    <li>✗ Touch your face</li>
                    <li>✗ Skip hand washing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Emergency Information */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 print:border-black">
                If You Develop Symptoms
              </h2>
              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 print:bg-white print:border-2 print:border-black">
                <p className="font-semibold text-gray-900 mb-2 print:text-black">
                  Seek immediate medical care if you experience:
                </p>
                <ul className="space-y-1 text-gray-700 print:text-black">
                  <li>• Difficulty breathing or shortness of breath</li>
                  <li>• Chest pain or pressure</li>
                  <li>• Coughing with fluid</li>
                  <li>• Dizziness or confusion</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600 print:text-black">
                  Inform your healthcare provider about potential rodent exposure.
                </p>
              </div>
            </section>

            {/* Notes */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2 print:border-black">
                Notes
              </h2>
              <div className="border-2 border-gray-300 rounded-lg p-4 h-32 print:border-black">
                <p className="text-gray-400 print:text-black">Use this space for notes...</p>
              </div>
            </section>

            {/* Date */}
            <div className="text-center text-sm text-gray-500 print:text-black">
              <p>Cleaning Date: _______________</p>
              <p className="mt-1">Location: __________________</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 mb-8">
            <Disclaimer />
          </div>

          {/* Print Button */}
          <div className="text-center">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print Checklist
            </button>
          </div>

          {/* Additional Resources */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/cleaning-guide"
                className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Complete Cleaning Guide</h3>
                <p className="text-sm text-gray-600">Detailed step-by-step instructions</p>
              </Link>
              <Link
                href="/prevention"
                className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Prevention Tips</h3>
                <p className="text-sm text-gray-600">How to prevent rodent infestations</p>
              </Link>
              <Link
                href="/symptoms"
                className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Symptoms</h3>
                <p className="text-sm text-gray-600">Recognize Hantavirus warning signs</p>
              </Link>
              <Link
                href="/faq"
                className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
                <p className="text-sm text-gray-600">Common questions and answers</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
