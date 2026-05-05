import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';
import { Activity, Hospital, Shield } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Hantavirus Treatment - Medical Care and Recovery',
  description: 'Learn about Hantavirus treatment options, including supportive care, ICU treatment, oxygen therapy, and what to expect during recovery.',
  canonical: 'https://hantavirusinfo.org/treatment',
});

const schema = generateMedicalWebPageSchema({
  name: 'Hantavirus Treatment',
  description: 'Medical care and treatment options for Hantavirus infection',
  url: 'https://hantavirusinfo.org/treatment',
  medicalAudience: 'Patient',
});

export default function Treatment() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'Treatment', href: '/treatment' }]} className="mb-8" />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hantavirus Treatment
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              While there is no specific cure for Hantavirus, early medical intervention and supportive 
              care significantly improve survival chances. Learn about treatment options and what to expect.
            </p>

            <div className="mb-12">
              <Disclaimer />
            </div>

            {/* Important Notice */}
            <section className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
              <div className="flex items-start space-x-3">
                <Hospital className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Seek Immediate Medical Care</h2>
                  <p className="text-gray-700">
                    If you suspect Hantavirus infection or have been exposed to rodents and develop symptoms, 
                    seek medical attention immediately. Early hospitalization is critical for survival.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Is There a Cure for Hantavirus?</h2>
              <p className="text-gray-700 mb-4">
                Currently, there is <strong>no specific antiviral medication or cure</strong> for Hantavirus Pulmonary Syndrome (HPS). 
                Treatment focuses on supporting the patient's body while it fights the virus and managing complications.
              </p>
              <p className="text-gray-700">
                However, with early diagnosis and proper supportive care, many patients recover successfully. 
                The key is recognizing symptoms early and seeking hospital care before the severe respiratory phase develops.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Supportive Care Treatment</h2>
              <p className="text-gray-700 mb-6">
                Treatment for Hantavirus primarily involves supportive care in a hospital setting, often in the 
                intensive care unit (ICU). The main goals are:
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Activity className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Oxygen Therapy</h3>
                      <p className="text-gray-700">
                        Supplemental oxygen is provided to help patients breathe and maintain adequate oxygen levels 
                        in the blood. In severe cases, mechanical ventilation may be necessary.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fluid Management</h3>
                      <p className="text-gray-700">
                        Careful monitoring and management of fluids is crucial. Patients may receive intravenous (IV) 
                        fluids to maintain blood pressure and hydration, but fluid overload must be avoided to prevent 
                        worsening of lung fluid accumulation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Blood Pressure Support</h3>
                  <p className="text-gray-700">
                    Medications may be administered to maintain stable blood pressure, as Hantavirus can cause 
                    hypotension (low blood pressure) and cardiovascular instability.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mechanical Ventilation</h3>
                  <p className="text-gray-700">
                    In severe cases where patients cannot breathe adequately on their own, mechanical ventilation 
                        (a breathing machine) is used to support lung function and oxygen exchange.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Extracorporeal Membrane Oxygenation (ECMO)</h3>
                  <p className="text-gray-700">
                    For the most critical cases, ECMO may be used. This advanced therapy oxygenates blood outside 
                    the body, giving the lungs time to heal. ECMO is typically reserved for patients who don't 
                    respond to conventional ventilation.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital Care Process</h2>
              <p className="text-gray-700 mb-6">
                When a patient with suspected Hantavirus is admitted to the hospital, the following steps typically occur:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: '1. Initial Assessment',
                    description: 'Doctors evaluate symptoms, medical history, and potential rodent exposure. Blood tests and chest X-rays are performed.',
                  },
                  {
                    step: '2. Monitoring',
                    description: 'Continuous monitoring of vital signs, oxygen levels, and organ function. Patients are typically moved to the ICU for close observation.',
                  },
                  {
                    step: '3. Supportive Treatment',
                    description: 'Oxygen therapy, fluid management, and blood pressure support are initiated as needed based on the patient\'s condition.',
                  },
                  {
                    step: '4. Complication Management',
                    description: 'Doctors monitor for and treat complications such as kidney failure, heart problems, or secondary infections.',
                  },
                  {
                    step: '5. Recovery Support',
                    description: 'As the patient improves, treatments are gradually reduced. Rehabilitation may be needed for prolonged hospital stays.',
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">{item.step}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Experimental Treatments</h2>
              <p className="text-gray-700 mb-4">
                While no specific antiviral is approved for Hantavirus, researchers have investigated several treatments:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Ribavirin:</strong> An antiviral medication studied for Hantavirus, but results have been inconclusive</li>
                <li>• <strong>Convalescent plasma:</strong> Plasma from recovered patients containing antibodies (experimental)</li>
                <li>• <strong>Monoclonal antibodies:</strong> Currently under investigation for potential future use</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm italic">
                These treatments are not standard care and are only used in clinical trials or special circumstances.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recovery and Prognosis</h2>
              <p className="text-gray-700 mb-6">
                Recovery from Hantavirus varies depending on the severity of illness and how quickly treatment was initiated.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">With Early Treatment</h4>
                  <p className="text-sm text-gray-700">
                    Survival rates are significantly higher when patients receive early medical care. 
                    Many patients recover fully with appropriate supportive treatment.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Without Treatment</h4>
                  <p className="text-sm text-gray-700">
                    Hantavirus Pulmonary Syndrome has a high mortality rate (approximately 38% in the U.S.) 
                    if not treated promptly and appropriately.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recovery Timeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Acute phase:</strong> 1-2 weeks in the hospital (ICU care)</li>
                <li>• <strong>Initial recovery:</strong> Several weeks to regain strength</li>
                <li>• <strong>Full recovery:</strong> May take several months</li>
                <li>• <strong>Long-term effects:</strong> Some patients experience lingering fatigue or breathing issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Tell Your Doctor</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you seek medical care for possible Hantavirus, provide your healthcare provider with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Any known exposure to rodents or rodent droppings</li>
                  <li>• Recent activities in areas with rodent activity</li>
                  <li>• Timeline of symptom onset and progression</li>
                  <li>• Any travel to areas with known Hantavirus cases</li>
                  <li>• Your complete medical history and current medications</li>
                </ul>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>There is no specific cure for Hantavirus</li>
                <li>Early hospitalization and supportive care are critical for survival</li>
                <li>Treatment focuses on oxygen support, fluid management, and blood pressure control</li>
                <li>Severe cases may require mechanical ventilation or ECMO</li>
                <li>Recovery is possible with proper medical intervention</li>
                <li>Always inform your doctor about potential rodent exposure</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/symptoms" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Symptoms</h3>
                  <p className="text-sm text-gray-600">Recognize Hantavirus warning signs</p>
                </a>
                <a href="/prevention" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Prevention</h3>
                  <p className="text-sm text-gray-600">How to avoid Hantavirus exposure</p>
                </a>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Centers for Disease Control and Prevention (CDC) - Hantavirus Treatment
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
