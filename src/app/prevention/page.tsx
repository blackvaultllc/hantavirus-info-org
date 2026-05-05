import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';
import { Shield, Home, AlertTriangle } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Hantavirus Prevention - How to Protect Yourself',
  description: 'Learn essential Hantavirus prevention strategies including rodent control, home safety tips, sealing entry points, food storage, and camping safety guidelines.',
  canonical: 'https://hantavirusinfo.org/prevention',
});

const schema = generateMedicalWebPageSchema({
  name: 'Hantavirus Prevention',
  description: 'Comprehensive guide to preventing Hantavirus infection',
  url: 'https://hantavirusinfo.org/prevention',
  medicalAudience: 'Patient',
});

export default function Prevention() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'Prevention', href: '/prevention' }]} className="mb-8" />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hantavirus Prevention
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Preventing Hantavirus infection is primarily about avoiding contact with rodents and their droppings. 
              Learn essential strategies to protect yourself and your family.
            </p>

            <div className="mb-12">
              <Disclaimer />
            </div>

            {/* Key Message */}
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Prevention is Your Best Defense</h2>
                  <p className="text-gray-700">
                    There is no vaccine for Hantavirus, making prevention through rodent control and safe practices 
                    your most effective protection against this serious virus.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rodent Control</h2>
              <p className="text-gray-700 mb-6">
                Effective rodent control is the foundation of Hantavirus prevention. Keep rodents out of your 
                home and eliminate any that may be present.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Seal Entry Points</h3>
                  <p className="text-gray-700 mb-3">
                    Rodents can enter through very small openings. Seal all potential entry points:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use steel wool or caulk to seal holes larger than 1/4 inch</li>
                    <li>• Install door sweeps on exterior doors</li>
                    <li>• Repair damaged window screens</li>
                    <li>• Seal gaps around pipes and utility lines</li>
                    <li>• Cover vents with metal screening</li>
                    <li>• Repair cracks in foundation walls</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Remove Food Sources</h3>
                  <p className="text-gray-700 mb-3">
                    Eliminate food and water sources that attract rodents:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Store food in airtight, rodent-proof containers</li>
                    <li>• Keep pet food in sealed containers</li>
                    <li>• Clean up food spills immediately</li>
                    <li>• Secure garbage cans with tight-fitting lids</li>
                    <li>• Remove bird feeders or use rodent-proof designs</li>
                    <li>• Fix leaky pipes and eliminate standing water</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Trapping and Removal</h3>
                  <p className="text-gray-700 mb-3">
                    If you have rodents, remove them safely:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use snap traps instead of poison (poisoned rodents may die in walls)</li>
                    <li>• Place traps along walls where rodents travel</li>
                    <li>• Use peanut butter or oatmeal as bait</li>
                    <li>• Check traps regularly and dispose of rodents properly</li>
                    <li>• Wear gloves when handling traps or dead rodents</li>
                    <li>• Consider professional pest control for infestations</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Eliminate Shelter</h3>
                  <p className="text-gray-700 mb-3">
                    Remove places where rodents can nest and hide:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Keep grass and vegetation trimmed around your home</li>
                    <li>• Remove woodpiles, debris, and clutter near buildings</li>
                    <li>• Store firewood at least 18 inches off the ground</li>
                    <li>• Clear clutter from garages, basements, and attics</li>
                    <li>• Seal openings under sheds and decks</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Safety Tips</h2>
              <div className="flex items-start space-x-3 mb-6">
                <Home className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700">
                    Make your home less attractive to rodents and safer for your family:
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Kitchen</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Clean regularly</li>
                    <li>• Store food properly</li>
                    <li>• Empty trash frequently</li>
                    <li>• Check for droppings</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Basement & Attic</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Declutter regularly</li>
                    <li>• Inspect for entry points</li>
                    <li>• Use storage containers</li>
                    <li>• Improve ventilation</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Garage</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Seal cracks and holes</li>
                    <li>• Keep doors closed</li>
                    <li>• Store items off floor</li>
                    <li>• Remove clutter</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Yard</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Trim vegetation</li>
                    <li>• Remove debris</li>
                    <li>• Secure compost</li>
                    <li>• Move woodpiles away</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Camping and Outdoor Safety</h2>
              <p className="text-gray-700 mb-6">
                    Take precautions when camping, hiking, or spending time outdoors in areas with rodent activity:
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Choose campsites carefully:</strong> Avoid areas with visible rodent droppings or nests</li>
                  <li>• <strong>Use tents with floors:</strong> Keep tents sealed and store food in rodent-proof containers</li>
                  <li>• <strong>Don't sleep on bare ground:</strong> Use sleeping pads and keep sleeping areas clean</li>
                  <li>• <strong>Store food properly:</strong> Use bear canisters or hang food away from sleeping areas</li>
                  <li>• <strong>Avoid rodent burrows:</strong> Don't disturb rodent nests or burrows</li>
                  <li>• <strong>Use bottled water:</strong> Don't drink from sources that may be contaminated</li>
                  <li>• <strong>Wash hands frequently:</strong> Use soap and water or hand sanitizer</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Safe Cleaning Practices</h2>
              <div className="flex items-start space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700">
                    <strong>Never sweep or vacuum dry rodent droppings.</strong> This can aerosolize the virus and 
                    increase infection risk. Always follow safe cleaning procedures.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Safe Cleaning Steps:</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. <strong>Ventilate the area</strong> - Open windows and doors for at least 30 minutes</li>
                  <li>2. <strong>Wear protection</strong> - Use rubber gloves and an N95 respirator mask</li>
                  <li>3. <strong>Wet the area</strong> - Spray with bleach solution (1 part bleach to 10 parts water)</li>
                  <li>4. <strong>Wait 10 minutes</strong> - Let the disinfectant work</li>
                  <li>5. <strong>Clean with wet towels</strong> - Wipe up droppings with damp paper towels</li>
                  <li>6. <strong>Double-bag waste</strong> - Seal in plastic bags before disposal</li>
                  <li>7. <strong>Disinfect again</strong> - Spray the area with disinfectant one more time</li>
                  <li>8. <strong>Wash hands thoroughly</strong> - Use soap and warm water</li>
                </ol>
              </div>

              <p className="text-gray-700">
                <a href="/cleaning-guide" className="text-blue-600 hover:underline font-medium">
                  Read our complete safe cleaning guide for detailed instructions →
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Occupational Safety</h2>
              <p className="text-gray-700 mb-6">
                Workers in certain occupations have higher exposure risks. Take extra precautions if you work in:
              </p>
              
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• <strong>Farming and agriculture</strong></li>
                <li>• <strong>Pest control</strong></li>
                <li>• <strong>Construction and renovation</strong></li>
                <li>• <strong>Utility work</strong></li>
                <li>• <strong>Forestry and wildlife management</strong></li>
              </ul>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Worker Safety Tips:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Use appropriate personal protective equipment (PPE)</li>
                  <li>• Follow OSHA guidelines for rodent control</li>
                  <li>• Receive training on safe cleanup procedures</li>
                  <li>• Report rodent activity to supervisors</li>
                  <li>• Know the symptoms and seek medical care if exposed</li>
                </ul>
              </div>
            </section>

            <section className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Prevention Checklist</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Seal all entry points around your home</li>
                <li>Store food in rodent-proof containers</li>
                <li>Remove clutter and potential nesting sites</li>
                <li>Set traps if you see signs of rodents</li>
                <li>Never sweep or vacuum dry droppings</li>
                <li>Wear gloves and mask when cleaning rodent areas</li>
                <li>Follow safe camping practices outdoors</li>
                <li>Educate family members about prevention</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/cleaning-guide" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Safe Cleaning Guide</h3>
                  <p className="text-sm text-gray-600">Step-by-step cleanup instructions</p>
                </a>
                <a href="/how-it-spreads" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">How It Spreads</h3>
                  <p className="text-sm text-gray-600">Understanding transmission risks</p>
                </a>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Centers for Disease Control and Prevention (CDC) - Hantavirus Prevention
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
