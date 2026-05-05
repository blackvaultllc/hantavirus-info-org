import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';
import { Clock, Calendar } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Hantavirus Incubation Period - Timeline of Infection',
  description: 'Learn about the Hantavirus incubation period, how long it takes for symptoms to appear after exposure, and the timeline of infection progression.',
  canonical: 'https://hantavirusinfo.org/incubation-period',
});

const schema = generateMedicalWebPageSchema({
  name: 'Hantavirus Incubation Period',
  description: 'Understanding the timeline of Hantavirus infection from exposure to symptoms',
  url: 'https://hantavirusinfo.org/incubation-period',
  medicalAudience: 'Patient',
});

export default function IncubationPeriod() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'Incubation Period', href: '/incubation-period' }]} className="mb-8" />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hantavirus Incubation Period
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Understanding the incubation period of Hantavirus helps you recognize potential infections 
              and seek timely medical care after exposure.
            </p>

            <div className="mb-12">
              <Disclaimer />
            </div>

            {/* Key Facts Box */}
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Key Facts</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Typical incubation period:</strong> 1 to 8 weeks after exposure</li>
                    <li>• <strong>Most common:</strong> 2 to 4 weeks after exposure</li>
                    <li>• <strong>Early symptoms:</strong> Flu-like symptoms appear first</li>
                    <li>• <strong>Severe phase:</strong> Respiratory distress develops 4-10 days after initial symptoms</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is the Incubation Period?</h2>
              <p className="text-gray-700 mb-4">
                The incubation period is the time between initial exposure to the virus and the appearance 
                of the first symptoms. For Hantavirus, this period can vary significantly among individuals.
              </p>
              <p className="text-gray-700">
                During the incubation period, the virus is replicating in the body, but no symptoms are 
                present. This makes it challenging to identify when exposure occurred, especially if the 
                person had multiple potential exposures over several weeks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Timeline</h2>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                  
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 0: Exposure</h3>
                      <p className="text-gray-700 mb-2">
                        Exposure occurs through inhalation of airborne virus particles from rodent droppings, 
                        urine, or saliva.
                      </p>
                      <p className="text-sm text-blue-600 font-medium">No symptoms present</p>
                    </div>
                  </div>

                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Days 1-56: Incubation Period</h3>
                      <p className="text-gray-700 mb-2">
                        The virus replicates in the body. This period typically lasts 1-8 weeks, with most 
                        cases showing symptoms within 2-4 weeks after exposure.
                      </p>
                      <p className="text-sm text-blue-600 font-medium">No symptoms present</p>
                    </div>
                  </div>

                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Prodromal Phase (Days 1-7)</h3>
                      <p className="text-gray-700 mb-2">
                        Early symptoms appear: fever, muscle aches (especially in large muscle groups), fatigue, 
                        headaches, dizziness, and gastrointestinal symptoms.
                      </p>
                      <p className="text-sm text-yellow-700 font-medium">Flu-like symptoms, no respiratory distress</p>
                    </div>
                  </div>

                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Cardiopulmonary Phase (Days 4-10 after symptoms)</h3>
                      <p className="text-gray-700 mb-2">
                        Severe respiratory symptoms develop: shortness of breath, coughing, fluid accumulation 
                        in lungs, low blood pressure. This is the critical phase requiring immediate medical care.
                      </p>
                      <p className="text-sm text-red-700 font-medium">Life-threatening respiratory distress</p>
                    </div>
                  </div>

                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Recovery Phase (Weeks to Months)</h3>
                      <p className="text-gray-700 mb-2">
                        With proper medical intervention, recovery begins. Some patients may experience lingering 
                        fatigue or respiratory issues for several weeks or months.
                      </p>
                      <p className="text-sm text-green-700 font-medium">Gradual improvement with treatment</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Factors Affecting Incubation Period</h2>
              <p className="text-gray-700 mb-4">
                The length of the incubation period can vary based on several factors:
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Viral Load</h4>
                  <p className="text-sm text-gray-600">
                    Higher exposure to virus particles may result in a shorter incubation period and more severe illness.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Individual Immune Response</h4>
                  <p className="text-sm text-gray-600">
                    A person's immune system strength can affect how quickly symptoms develop and the severity of illness.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Virus Strain</h4>
                  <p className="text-sm text-gray-600">
                    Different Hantavirus strains may have different incubation periods and disease progression patterns.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Overall Health</h4>
                  <p className="text-sm text-gray-600">
                    Pre-existing health conditions may influence how the virus progresses through the body.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Do After Potential Exposure</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you believe you've been exposed to Hantavirus:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Monitor for symptoms</strong> for up to 8 weeks after exposure</li>
                  <li>• <strong>Watch for early signs:</strong> fever, muscle aches, fatigue, headaches</li>
                  <li>• <strong>Seek medical care immediately</strong> if respiratory symptoms develop</li>
                  <li>• <strong>Inform your healthcare provider</strong> about potential rodent exposure</li>
                  <li>• <strong>Don't panic</strong> - not all exposures lead to infection</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Can You Be Contagious During Incubation?</h2>
              <p className="text-gray-700 mb-4">
                <strong>No.</strong> During the incubation period, you cannot spread Hantavirus to others. 
                Person-to-person transmission of North American Hantavirus strains has not been documented.
              </p>
              <p className="text-gray-700">
                You only become potentially contagious (in the rare South American variants) after symptoms 
                appear, and even then, transmission remains extremely uncommon.
              </p>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The incubation period is typically 1-8 weeks after exposure</li>
                <li>Early symptoms resemble the flu but lack respiratory symptoms initially</li>
                <li>Severe respiratory symptoms develop 4-10 days after initial symptoms</li>
                <li>You cannot spread Hantavirus during the incubation period</li>
                <li>Seek immediate care if breathing difficulties develop after potential exposure</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/symptoms" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Symptoms</h3>
                  <p className="text-sm text-gray-600">Detailed information about Hantavirus symptoms</p>
                </a>
                <a href="/treatment" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Treatment</h3>
                  <p className="text-sm text-gray-600">Medical care options for Hantavirus infection</p>
                </a>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Centers for Disease Control and Prevention (CDC) - Hantavirus
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
