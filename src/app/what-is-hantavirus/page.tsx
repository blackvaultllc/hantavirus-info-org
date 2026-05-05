import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { generatePageMetadata } from '@/components/seo/metadata';
import { generateMedicalWebPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';

export const metadata = generatePageMetadata({
  title: 'What Is Hantavirus? - Understanding the Virus',
  description: 'Learn what Hantavirus is, how it affects humans, and the different types of Hantavirus including Hantavirus Pulmonary Syndrome (HPS). Comprehensive medical information.',
  canonical: 'https://hantavirusinfo.org/what-is-hantavirus',
});

const schema = generateMedicalWebPageSchema({
  name: 'What Is Hantavirus?',
  description: 'Understanding Hantavirus and its effects on human health',
  url: 'https://hantavirusinfo.org/what-is-hantavirus',
  medicalAudience: 'Patient',
});

export default function WhatIsHantavirus() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: 'What Is Hantavirus', href: '/what-is-hantavirus' }]} className="mb-8" />

          {/* Header */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Is Hantavirus?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hantavirus is a family of viruses spread mainly by rodents that can cause serious respiratory illness in humans. 
              Understanding this virus is crucial for prevention and early detection.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mb-12">
            <Disclaimer />
          </div>

          {/* Main Content */}
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Hantavirus</h2>
              <p className="text-gray-700 mb-4">
                Hantavirus refers to a family of viruses that are carried by rodents, particularly deer mice. 
                These viruses can cause serious diseases in humans, with Hantavirus Pulmonary Syndrome (HPS) 
                being the most severe form in North America.
              </p>
              <p className="text-gray-700 mb-4">
                The virus was first identified in 1993 during an outbreak in the Four Corners region of the 
                southwestern United States. Since then, cases have been reported throughout the United States 
                and in various countries worldwide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Hantavirus</h2>
              <p className="text-gray-700 mb-4">
                Different types of Hantavirus exist, and they vary by geographic region and the rodents that carry them:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Sin Nombre virus:</strong> The most common cause of HPS in North America, carried by deer mice
                </li>
                <li>
                  <strong>Andes virus:</strong> Found in South America, associated with person-to-person transmission
                </li>
                <li>
                  <strong>Hantaan virus:</strong> Causes hemorrhagic fever with renal syndrome, found primarily in Asia
                </li>
                <li>
                  <strong>Seoul virus:</strong> Found worldwide, carried by Norway rats
                </li>
                <li>
                  <strong>Puumala virus:</strong> Common in Europe, causes a milder form of illness
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hantavirus Pulmonary Syndrome (HPS)</h2>
              <p className="text-gray-700 mb-4">
                Hantavirus Pulmonary Syndrome is a severe respiratory disease caused by infection with Hantavirus. 
                It affects the lungs and can be life-threatening if not treated promptly.
              </p>
              <p className="text-gray-700 mb-4">
                HPS progresses through two distinct phases:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Prodromal phase:</strong> Early symptoms including fever, muscle aches, fatigue, and headaches
                </li>
                <li>
                  <strong>Cardiopulmonary phase:</strong> Severe respiratory distress, fluid accumulation in lungs, 
                  and potential heart failure
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Hantavirus Affects the Body</h2>
              <p className="text-gray-700 mb-4">
                When Hantavirus enters the body, it targets the cells lining blood vessels, particularly in the lungs. 
                This causes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Increased permeability of blood vessels</li>
                <li>Fluid leakage into lung tissue</li>
                <li>Reduced oxygen exchange in the lungs</li>
                <li>Potential heart complications</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The immune system's response to the virus also contributes to the damage, making early medical 
                intervention critical for survival.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is at Risk?</h2>
              <p className="text-gray-700 mb-4">
                Anyone exposed to infected rodents or their droppings is at risk of Hantavirus infection. 
                Higher risk activities include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cleaning barns, sheds, or cabins that have been closed for extended periods</li>
                <li>Working in fields or areas with rodent infestations</li>
                <li>Camping or hiking in areas with known rodent activity</li>
                <li>Living in homes with rodent problems</li>
                <li>Handling trapped rodents or cleaning up after them</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Geographic Distribution</h2>
              <p className="text-gray-700 mb-4">
                Hantavirus cases have been reported throughout the United States, with higher concentrations in 
                western states. However, cases can occur anywhere infected rodents are present. The virus has 
                also been identified in Canada, Central America, South America, Europe, and Asia.
              </p>
              <p className="text-gray-700">
                Deer mice, the primary carriers in North America, are found throughout the continental United States 
                and Canada, making Hantavirus a concern across these regions.
              </p>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hantavirus is a serious viral infection spread by rodents</li>
                <li>Hantavirus Pulmonary Syndrome (HPS) is the most severe form in North America</li>
                <li>Early recognition of symptoms is crucial for survival</li>
                <li>Prevention focuses on avoiding contact with rodents and their droppings</li>
                <li>No specific cure exists, but supportive care can be effective</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn More</h2>
              <p className="text-gray-700 mb-4">
                Understanding Hantavirus is the first step in protecting yourself and your family. 
                Continue reading about:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a href="/symptoms" className="text-blue-600 hover:underline">Symptoms of Hantavirus infection</a></li>
                <li><a href="/how-it-spreads" className="text-blue-600 hover:underline">How Hantavirus spreads</a></li>
                <li><a href="/prevention" className="text-blue-600 hover:underline">Prevention strategies</a></li>
                <li><a href="/treatment" className="text-blue-600 hover:underline">Treatment options</a></li>
              </ul>
            </section>
          </div>

          {/* References */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://www.cdc.gov/hantavirus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Centers for Disease Control and Prevention (CDC) - Hantavirus
                </a>
              </li>
              <li>
                <a href="https://www.who.int/news-room/fact-sheets/detail/hantavirus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  World Health Organization (WHO) - Hantavirus Fact Sheet
                </a>
              </li>
              <li>
                <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  National Institutes of Health (NIH)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
