import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';
import { AlertTriangle, Activity, Clock } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Hantavirus Symptoms - Early Warning Signs and Severe Symptoms',
  description: 'Learn about Hantavirus symptoms including early signs like fever and muscle aches, severe symptoms, symptom timeline, and when to seek emergency care.',
  canonical: 'https://hantavirusinfo.org/symptoms',
});

const schema = generateMedicalWebPageSchema({
  name: 'Hantavirus Symptoms',
  description: 'Comprehensive guide to Hantavirus symptoms and warning signs',
  url: 'https://hantavirusinfo.org/symptoms',
  medicalAudience: 'Patient',
});

export default function Symptoms() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: 'Symptoms', href: '/symptoms' }]} className="mb-8" />

          {/* Header */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hantavirus Symptoms
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Recognizing Hantavirus symptoms early can be life-saving. Learn about the warning signs, 
              progression of the illness, and when to seek immediate medical attention.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mb-12">
            <Disclaimer />
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto">
            {/* Early Symptoms Section */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Early Symptoms</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Early symptoms of Hantavirus Pulmonary Syndrome (HPS) typically appear 1 to 8 weeks after exposure 
                to the virus. These initial symptoms can be mistaken for the flu or other common illnesses, 
                which is why awareness is crucial.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Common Early Symptoms:</h3>
                <ul className="space-y-3">
                  {[
                    'Fever (usually above 101°F/38.3°C)',
                    'Severe muscle aches, particularly in thighs, hips, back, and shoulders',
                    'Fatigue and weakness',
                    'Headaches',
                    'Dizziness',
                    'Chills',
                    'Nausea and vomiting',
                    'Diarrhea',
                    'Abdominal pain',
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Severe Symptoms Section */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Severe Symptoms</h2>
              </div>
              <p className="text-gray-700 mb-6">
                As the illness progresses, typically 4-10 days after initial symptoms, severe respiratory 
                symptoms develop. This is the cardiopulmonary phase and requires immediate emergency care.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Severe Symptoms (Requires Emergency Care):</h3>
                <ul className="space-y-3">
                  {[
                    'Shortness of breath or difficulty breathing',
                    'Coughing, often with fluid production',
                    'Low blood pressure',
                    'Reduced heart function',
                    'Fluid accumulation in lungs (pulmonary edema)',
                    'Chest pain or tightness',
                    'Rapid heartbeat',
                    'Confusion or disorientation',
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Timeline Section */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Symptom Timeline</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Understanding the progression of Hantavirus can help you recognize when to seek medical help.
              </p>
              <div className="space-y-4">
                {[
                  {
                    phase: 'Incubation Period',
                    time: '1-8 weeks after exposure',
                    description: 'No symptoms. The virus is replicating in the body.',
                  },
                  {
                    phase: 'Prodromal Phase (Early)',
                    time: '1-7 days',
                    description: 'Fever, muscle aches, fatigue, headaches. Symptoms resemble flu.',
                  },
                  {
                    phase: 'Cardiopulmonary Phase (Severe)',
                    time: '4-10 days after initial symptoms',
                    description: 'Respiratory distress, fluid in lungs, potential heart failure. Critical phase requiring hospitalization.',
                  },
                  {
                    phase: 'Recovery Phase',
                    time: 'Weeks to months',
                    description: 'With proper treatment, recovery is possible. Some patients may experience lingering effects.',
                  },
                ].map((stage, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">{stage.phase}</h4>
                    <p className="text-sm text-blue-600 font-medium">{stage.time}</p>
                    <p className="text-gray-600 mt-1">{stage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Seek Care Section */}
            <section className="mb-12">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">When to Seek Emergency Care</h2>
                <p className="text-gray-700 mb-4">
                  Seek immediate medical attention if you experience:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Difficulty breathing or shortness of breath</li>
                  <li>• Severe chest pain or pressure</li>
                  <li>• Coughing with fluid</li>
                  <li>• Dizziness or confusion</li>
                  <li>• Any symptoms after potential rodent exposure</li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  <strong>Important:</strong> Tell your healthcare provider about any potential exposure to rodents 
                  or their droppings. This information can help with diagnosis and treatment.
                </p>
              </div>
            </section>

            {/* Differential Diagnosis */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hantavirus vs. Other Illnesses</h2>
              <p className="text-gray-700 mb-6">
                Early Hantavirus symptoms can be confused with other conditions. Key differences include:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Condition</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Key Differences</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 border-b">Influenza (Flu)</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-b">Flu typically includes runny nose, sore throat; Hantavirus does not</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 border-b">COVID-19</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-b">COVID-19 often includes loss of taste/smell; Hantavirus does not</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 border-b">Pneumonia</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-b">Hantavirus progresses rapidly to severe respiratory distress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Early symptoms resemble flu but without respiratory symptoms initially</li>
                <li>Severe respiratory symptoms develop 4-10 days after early symptoms</li>
                <li>Seek emergency care immediately if breathing difficulties occur</li>
                <li>Always inform your doctor about potential rodent exposure</li>
                <li>Early medical intervention significantly improves survival chances</li>
              </ul>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/how-it-spreads" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">How Hantavirus Spreads</h3>
                  <p className="text-sm text-gray-600">Understand transmission risks</p>
                </a>
                <a href="/prevention" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Prevention Tips</h3>
                  <p className="text-sm text-gray-600">Protect yourself from exposure</p>
                </a>
                <a href="/treatment" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Treatment Options</h3>
                  <p className="text-sm text-gray-600">Medical care for Hantavirus</p>
                </a>
                <a href="/incubation-period" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Incubation Period</h3>
                  <p className="text-sm text-gray-600">Timeline of infection</p>
                </a>
              </div>
            </section>

            {/* References */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Centers for Disease Control and Prevention (CDC) - Hantavirus Symptoms
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
