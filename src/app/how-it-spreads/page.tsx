import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';

export const metadata = generatePageMetadata({
  title: 'How Hantavirus Spreads - Transmission and Exposure Risks',
  description: 'Learn how Hantavirus spreads through rodent droppings, urine, saliva, and airborne particles. Understand transmission risks and how to protect yourself.',
  canonical: 'https://hantavirusinfo.org/how-it-spreads',
});

const schema = generateMedicalWebPageSchema({
  name: 'How Hantavirus Spreads',
  description: 'Understanding Hantavirus transmission and exposure risks',
  url: 'https://hantavirusinfo.org/how-it-spreads',
  medicalAudience: 'Patient',
});

export default function HowItSpreads() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'How It Spreads', href: '/how-it-spreads' }]} className="mb-8" />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Hantavirus Spreads
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Understanding how Hantavirus spreads is essential for prevention. The virus is primarily transmitted 
              through contact with infected rodents and their excretions.
            </p>

            <div className="mb-12">
              <Disclaimer />
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Primary Transmission Methods</h2>
              <p className="text-gray-700 mb-6">
                Hantavirus is mainly spread through the following methods:
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Rodent Droppings</h3>
                  <p className="text-gray-700 mb-3">
                    The virus is found in the urine, droppings, and saliva of infected rodents. When these 
                    materials dry and become airborne, they can be inhaled, leading to infection.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Risk factor:</strong> Cleaning areas with accumulated rodent droppings
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Airborne Particles (Aerosolization)</h3>
                  <p className="text-gray-700 mb-3">
                    The most common route of infection is through inhalation of virus particles that become 
                    airborne when rodent droppings or urine are disturbed. This can happen during:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Sweeping or vacuuming contaminated areas</li>
                    <li>Stirring up dust in rodent-infested spaces</li>
                    <li>Opening buildings that have been closed for extended periods</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Direct Contact</h3>
                  <p className="text-gray-700 mb-3">
                    Touching rodent droppings, urine, or saliva and then touching your eyes, nose, or mouth 
                    can transmit the virus. This is less common than airborne transmission but still possible.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Rodent Bites</h3>
                  <p className="text-gray-700 mb-3">
                    Although rare, bites from infected rodents can transmit the virus directly through the 
                    broken skin.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Carrier Rodents</h2>
              <p className="text-gray-700 mb-6">
                Different rodents carry different types of Hantavirus in various regions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Deer Mouse (North America)</h4>
                  <p className="text-sm text-gray-600">
                    Primary carrier of Sin Nombre virus, the main cause of HPS in the United States. 
                    Found throughout North America.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Cotton Rat (Southeastern US)</h4>
                  <p className="text-sm text-gray-600">
                    Carries the Black Creek Canal virus. Found in the southeastern United States.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Rice Rat (Eastern US)</h4>
                  <p className="text-sm text-gray-600">
                    Carries the Bayou virus. Found in the eastern and southeastern United States.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">White-Footed Mouse (Northeastern US)</h4>
                  <p className="text-sm text-gray-600">
                    Carries the New York virus. Found in the northeastern United States.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Person-to-Person Transmission</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>North American Hantavirus:</strong> Person-to-person transmission of Hantavirus 
                  has <strong>not been documented</strong> in North America. You cannot get Hantavirus from 
                  another person with the virus.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>South American Variants:</strong> Rare instances of person-to-person transmission 
                  have been reported with the Andes virus in South America. However, this remains extremely 
                  uncommon and is not a concern in North America.
                </p>
                <p className="text-gray-700">
                  <strong>Other animals:</strong> Hantavirus is not transmitted by pets, livestock, or insects. 
                  Only specific rodent species carry the virus.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">High-Risk Activities</h2>
              <p className="text-gray-700 mb-6">
                Certain activities increase your risk of exposure to Hantavirus:
              </p>
              
              <ul className="space-y-3">
                {[
                  'Cleaning barns, outbuildings, or cabins closed for extended periods',
                  'Working in fields or areas with visible rodent activity',
                  'Camping or hiking in areas with known rodent populations',
                  'Handling trapped rodents or cleaning up after them',
                  'Living in homes with rodent infestations',
                  'Occupational exposure (farmers, pest control workers, construction workers)',
                  'Entering crawl spaces or attics with rodent activity',
                ].map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Environmental Factors</h2>
              <p className="text-gray-700 mb-6">
                Environmental conditions can affect the risk of Hantavirus transmission:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Seasonal Patterns</h4>
                  <p className="text-gray-600 text-sm">
                    Cases often peak in spring and summer when rodent populations increase and people 
                    spend more time outdoors or cleaning enclosed spaces.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Weather Conditions</h4>
                  <p className="text-gray-600 text-sm">
                    Heavy rainfall can increase rodent populations, potentially raising transmission risks. 
                    Drought conditions may drive rodents indoors seeking food and water.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Building Conditions</h4>
                  <p className="text-gray-600 text-sm">
                    Buildings that have been closed for long periods accumulate rodent droppings, creating 
                    high-risk environments when reopened.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Prevention is Key</h2>
              <p className="text-gray-700 mb-4">
                Understanding how Hantavirus spreads empowers you to take preventive measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Never sweep or vacuum dry rodent droppings</li>
                <li>Always wet contaminated areas with disinfectant before cleaning</li>
                <li>Wear protective gloves and masks when cleaning rodent areas</li>
                <li>Seal entry points to prevent rodents from entering buildings</li>
                <li>Store food in rodent-proof containers</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <a href="/cleaning-guide" className="text-blue-600 hover:underline font-medium">
                  Read our complete safe cleaning guide →
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/prevention" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Prevention Strategies</h3>
                  <p className="text-sm text-gray-600">How to protect yourself from Hantavirus</p>
                </a>
                <a href="/cleaning-guide" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Safe Cleaning Guide</h3>
                  <p className="text-sm text-gray-600">CDC-recommended cleanup procedures</p>
                </a>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Centers for Disease Control and Prevention (CDC) - Hantavirus Transmission
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
