import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';
import { AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Safe Cleaning Guide - How to Clean Rodent Droppings Safely',
  description: 'CDC-recommended safe cleaning guide for rodent droppings. Learn proper ventilation, disinfection, and cleanup procedures to prevent Hantavirus exposure.',
  canonical: 'https://hantavirusinfo.org/cleaning-guide',
});

const schema = generateMedicalWebPageSchema({
  name: 'Safe Cleaning Guide for Rodent Droppings',
  description: 'CDC-recommended procedures for safely cleaning rodent-contaminated areas',
  url: 'https://hantavirusinfo.org/cleaning-guide',
  medicalAudience: 'Patient',
});

export default function CleaningGuide() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'Cleaning Guide', href: '/cleaning-guide' }]} className="mb-8" />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Safe Cleaning Guide for Rodent Droppings
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Follow these CDC-recommended steps to safely clean areas contaminated by rodents and prevent 
              Hantavirus exposure. This is one of the most important pages on our website.
            </p>

            <div className="mb-12">
              <Disclaimer />
            </div>

            {/* Critical Warning */}
            <section className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Critical Warning</h2>
                  <p className="text-gray-700 mb-2">
                    <strong>NEVER sweep or vacuum dry rodent droppings, urine, or nesting materials.</strong>
                  </p>
                  <p className="text-gray-700">
                    This action can aerosolize the virus into the air, where it can be inhaled and cause infection. 
                    Always wet the area with disinfectant before any cleaning activity.
                  </p>
                </div>
              </div>
            </section>

            {/* Equipment Needed */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment Needed</h2>
              <p className="text-gray-700 mb-6">
                Before you begin cleaning, gather these essential supplies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Essential Items</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Rubber or latex gloves</li>
                    <li>✓ N95 respirator mask (or higher)</li>
                    <li>✓ Spray bottle</li>
                    <li>✓ Household bleach</li>
                    <li>✓ Water</li>
                    <li>✓ Paper towels</li>
                    <li>✓ Mop and bucket</li>
                    <li>✓ Plastic bags (heavy-duty)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Optional but Recommended</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Protective eyewear</li>
                    <li>• Disposable coveralls</li>
                    <li>• Shoe covers</li>
                    <li>• Long-sleeved clothing</li>
                    <li>• Additional disinfectant</li>
                    <li>• Sponge mop</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Step-by-Step Guide */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Cleaning Procedure</h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Ventilate the Area',
                    icon: Clock,
                    description: 'Open all windows and doors in the contaminated area for at least 30 minutes before cleaning. This allows fresh air to circulate and reduces virus concentration in the air. Leave the area during ventilation if possible.',
                    color: 'blue',
                  },
                  {
                    step: '2',
                    title: 'Put on Protective Equipment',
                    icon: Shield,
                    description: 'Wear rubber or latex gloves and an N95 respirator mask. Consider wearing protective eyewear and long-sleeved clothing. Ensure the mask fits properly and forms a seal around your face.',
                    color: 'blue',
                  },
                  {
                    step: '3',
                    title: 'Prepare Disinfectant Solution',
                    icon: null,
                    description: 'Mix a solution of 1 part bleach to 10 parts water (approximately 1½ cups of bleach per gallon of water). Alternatively, use a commercial disinfectant registered as effective against Hantavirus. Fill a spray bottle with the solution.',
                    color: 'blue',
                  },
                  {
                    step: '4',
                    title: 'Wet the Contaminated Area',
                    icon: null,
                    description: 'Thoroughly spray the contaminated area (droppings, urine, nesting materials) with the disinfectant solution. Ensure the area is completely wet. Let it soak for at least 10 minutes to kill the virus.',
                    color: 'blue',
                  },
                  {
                    step: '5',
                    title: 'Clean with Wet Materials',
                    icon: null,
                    description: 'Using paper towels or a damp mop, wipe up the wet droppings and nesting materials. Place all contaminated materials in a plastic bag. Do not use dry sweeping or vacuuming at any point.',
                    color: 'yellow',
                  },
                  {
                    step: '6',
                    title: 'Double-Bag the Waste',
                    icon: null,
                    description: 'Seal the plastic bag containing the contaminated materials tightly. Place this bag inside a second plastic bag and seal it as well. This double-bagging prevents any virus from escaping.',
                    color: 'yellow',
                  },
                  {
                    step: '7',
                    title: 'Disinfect the Area Again',
                    icon: null,
                    description: 'Spray the cleaned area once more with the disinfectant solution. Mop floors or wipe surfaces with the disinfectant. This ensures any remaining virus is killed.',
                    color: 'green',
                  },
                  {
                    step: '8',
                    title: 'Dispose of Waste Properly',
                    icon: null,
                    description: 'Place the double-bagged waste in your regular trash for disposal. Do not compost or recycle contaminated materials. Wash the outside of the waste container if needed.',
                    color: 'green',
                  },
                  {
                    step: '9',
                    title: 'Remove and Clean Protective Gear',
                    icon: null,
                    description: 'Carefully remove gloves by turning them inside out as you take them off. Dispose of disposable gloves in the trash. If using reusable gloves, wash them with soap and hot water. Remove the mask last.',
                    color: 'green',
                  },
                  {
                    step: '10',
                    title: 'Wash Hands Thoroughly',
                    icon: CheckCircle,
                    description: 'Wash your hands with soap and warm water for at least 20 seconds. Use hand sanitizer if soap and water are not available. Avoid touching your face until hands are clean.',
                    color: 'green',
                  },
                ].map((item) => (
                  <div key={item.step} className={`border-l-4 border-${item.color}-600 pl-6 py-4 bg-${item.color}-50 rounded-r-lg`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 bg-${item.color}-600 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Special Situations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Situations</h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleaning Cabins or Sheds</h3>
                  <p className="text-gray-700 mb-3">
                    For buildings that have been closed for extended periods:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Open all doors and windows for at least 30 minutes before entering</li>
                    <li>• Wear full protective equipment (gloves, mask, eyewear, coveralls)</li>
                    <li>• Leave the area if you see heavy rodent infestation</li>
                    <li>• Consider professional cleaning for severe infestations</li>
                    <li>• Air out the building for several hours after cleaning</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleaning Vehicles</h3>
                  <p className="text-gray-700 mb-3">
                    If rodents have been in vehicles:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Open all doors and windows before cleaning</li>
                    <li>• Remove and dispose of any nesting materials</li>
                    <li>• Vacuum only after disinfecting (use HEPA filter if possible)</li>
                    <li>• Wipe all surfaces with disinfectant</li>
                    <li>• Steam clean upholstery if contaminated</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleaning Attics and Crawl Spaces</h3>
                  <p className="text-gray-700 mb-3">
                    For confined spaces with poor ventilation:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ensure adequate ventilation before entering</li>
                    <li>• Use a higher-grade respirator (P100 if available)</li>
                    <li>• Work in short shifts to avoid prolonged exposure</li>
                    <li>• Have someone nearby in case of emergency</li>
                    <li>• Consider professional cleaning for large areas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What Not to Do */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What NOT to Do</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Never sweep dry droppings</strong> - this aerosolizes the virus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Never vacuum without disinfecting first</strong> - vacuum cleaners can spread virus particles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Never touch droppings with bare hands</strong> - always wear gloves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Never clean without ventilation</strong> - open windows and doors first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Never skip the disinfectant</strong> - water alone does not kill the virus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✗</span>
                    <span><strong>Never touch your face while cleaning</strong> - virus can enter through eyes, nose, mouth</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Laundry */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cleaning Contaminated Clothing or Bedding</h2>
              <p className="text-gray-700 mb-6">
                If clothing or bedding has been contaminated with rodent droppings or urine:
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Wear gloves and handle contaminated items carefully</li>
                  <li><strong>2.</strong> Do not shake the items - this can spread virus particles</li>
                  <li><strong>3.</strong> Wash in hot water (at least 140°F/60°C) with laundry detergent</li>
                  <li><strong>4.</strong> Use bleach if the fabric allows (check care labels)</li>
                  <li><strong>5.</strong> Dry on high heat setting if possible</li>
                  <li><strong>6.</strong> Wash hands thoroughly after handling contaminated laundry</li>
                </ol>
              </div>
            </section>

            {/* After Cleaning */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">After Cleaning</h2>
              <p className="text-gray-700 mb-6">
                Monitor your health for symptoms after cleaning rodent-contaminated areas:
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Watch for symptoms for up to 8 weeks after exposure</li>
                  <li>• Early symptoms include fever, muscle aches, fatigue, headaches</li>
                  <li>• Seek medical care immediately if breathing difficulties develop</li>
                  <li>• Inform your healthcare provider about potential rodent exposure</li>
                  <li>• Keep a record of when and where the exposure occurred</li>
                </ul>
              </div>
            </section>

            {/* Quick Reference Card */}
            <section className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Reference Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">DO</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>✓ Ventilate first</li>
                    <li>✓ Wear gloves and N95 mask</li>
                    <li>✓ Wet with disinfectant</li>
                    <li>✓ Wait 10 minutes</li>
                    <li>✓ Clean with wet towels</li>
                    <li>✓ Double-bag waste</li>
                    <li>✓ Disinfect again</li>
                    <li>✓ Wash hands thoroughly</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">DON'T</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>✗ Sweep dry droppings</li>
                    <li>✗ Vacuum without disinfecting</li>
                    <li>✗ Touch with bare hands</li>
                    <li>✗ Clean without ventilation</li>
                    <li>✗ Use water only</li>
                    <li>✗ Touch your face</li>
                    <li>✗ Skip hand washing</li>
                    <li>✗ Compost contaminated materials</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/prevention" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Prevention Tips</h3>
                  <p className="text-sm text-gray-600">How to prevent rodent infestations</p>
                </a>
                <a href="/symptoms" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Symptoms</h3>
                  <p className="text-sm text-gray-600">Recognize Hantavirus warning signs</p>
                </a>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Centers for Disease Control and Prevention (CDC) - Hantavirus Cleaning Guidelines
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/hantavirus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    World Health Organization (WHO) - Hantavirus
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
