'use client';

import { useState } from 'react';
import { Disclaimer } from '@/components/layout/disclaimer';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { generateFAQPageSchema, SchemaMarkup } from '@/components/seo/schema-markup';

const faqs = [
  {
    question: 'Can you survive hantavirus?',
    answer: 'Yes, survival is possible with early medical intervention. While Hantavirus Pulmonary Syndrome (HPS) has a mortality rate of approximately 38% in the United States, early hospitalization and supportive care significantly improve survival chances. The key is recognizing symptoms early and seeking immediate medical care, especially when respiratory symptoms develop.',
    category: 'General',
  },
  {
    question: 'How long does hantavirus last?',
    answer: 'The incubation period (time from exposure to first symptoms) is typically 1 to 8 weeks, with most cases showing symptoms within 2 to 4 weeks. Once symptoms appear, the illness progresses rapidly. Early symptoms last 1-7 days, followed by severe respiratory symptoms that require hospitalization. Recovery from severe cases can take several weeks to months, depending on the severity and how quickly treatment was initiated.',
    category: 'General',
  },
  {
    question: 'What are the first symptoms of hantavirus?',
    answer: 'Early symptoms of Hantavirus include fever (usually above 101°F/38.3°C), severe muscle aches (particularly in thighs, hips, back, and shoulders), fatigue, headaches, dizziness, chills, nausea, vomiting, diarrhea, and abdominal pain. These symptoms typically appear 1-8 weeks after exposure and can be mistaken for the flu.',
    category: 'Symptoms',
  },
  {
    question: 'Is hantavirus contagious from person to person?',
    answer: 'In North America, person-to-person transmission of Hantavirus has not been documented. The virus is primarily spread through contact with infected rodents or their droppings, urine, or saliva. Rare instances of person-to-person transmission have been reported with the Andes virus in South America, but this is not a concern in North America.',
    category: 'Transmission',
  },
  {
    question: 'How common is hantavirus?',
    answer: 'Hantavirus is rare but serious. In the United States, approximately 600-700 cases of Hantavirus Pulmonary Syndrome have been reported since 1993, averaging about 20-30 cases per year. Cases occur throughout the country but are more common in western states. The virus is carried by rodents, particularly deer mice, which are found throughout North America.',
    category: 'General',
  },
  {
    question: 'What states have hantavirus?',
    answer: 'Hantavirus cases have been reported in most U.S. states, but are more common in western states including New Mexico, Colorado, Arizona, California, Washington, and Texas. However, cases can occur anywhere infected rodents are present. The deer mouse, the primary carrier, is found throughout the continental United States and Canada.',
    category: 'Geography',
  },
  {
    question: 'How do you know if you were exposed to hantavirus?',
    answer: 'Exposure typically occurs through inhaling airborne virus particles from rodent droppings, urine, or saliva. Common exposure scenarios include cleaning barns, sheds, or cabins that have been closed for extended periods, working in areas with rodent infestations, camping in areas with rodent activity, or living in homes with rodent problems. If you have had such exposure and develop flu-like symptoms, seek medical care.',
    category: 'Transmission',
  },
  {
    question: 'What is the survival rate of hantavirus?',
    answer: 'The survival rate for Hantavirus Pulmonary Syndrome in the United States is approximately 62%, meaning about 38% of cases are fatal. Survival rates are significantly higher with early medical intervention and supportive care. Factors affecting survival include how quickly treatment is initiated, the severity of illness, and the patient\'s overall health.',
    category: 'Treatment',
  },
  {
    question: 'How is hantavirus diagnosed?',
    answer: 'Hantavirus is diagnosed through blood tests that detect antibodies to the virus or the virus itself. Doctors may also perform chest X-rays, blood count tests, and other laboratory tests to assess organ function. Early diagnosis can be challenging because initial symptoms resemble the flu. Informing your doctor about potential rodent exposure is crucial for accurate diagnosis.',
    category: 'Diagnosis',
  },
  {
    question: 'Is there a cure for hantavirus?',
    answer: 'There is no specific cure or antiviral medication for Hantavirus. Treatment focuses on supportive care, including oxygen therapy, fluid management, blood pressure support, and mechanical ventilation in severe cases. Early hospitalization and intensive care are critical for survival. Researchers continue to study potential treatments, but supportive care remains the standard treatment.',
    category: 'Treatment',
  },
  {
    question: 'Can you get hantavirus from pets?',
    answer: 'No, common household pets do not carry or transmit Hantavirus to humans. The virus is carried by specific rodent species, primarily deer mice in North America. However, pets can bring rodents into your home, so keeping them fed and stored properly can help reduce rodent attraction.',
    category: 'Transmission',
  },
  {
    question: 'How long can hantavirus live in droppings?',
    answer: 'Hantavirus can survive in rodent droppings, urine, and saliva for several days to weeks, depending on environmental conditions. The virus can remain infectious in dried droppings and become airborne when disturbed. This is why it\'s crucial to never sweep or vacuum dry droppings - always wet them with disinfectant first.',
    category: 'Transmission',
  },
  {
    question: 'What kills hantavirus?',
    answer: 'Hantavirus is killed by most common disinfectants. The CDC recommends using a solution of 1 part bleach to 10 parts water, or commercial disinfectants registered as effective against Hantavirus. The disinfectant must remain in contact with the contaminated area for at least 10 minutes to be effective. Heat above 140°F (60°C) also inactivates the virus.',
    category: 'Prevention',
  },
  {
    question: 'Can hantavirus be transmitted through food?',
    answer: 'Hantavirus is not typically transmitted through food. The primary transmission route is inhalation of airborne virus particles from rodent excretions. However, if food is contaminated with rodent droppings or urine and then handled without proper hygiene, there could be a risk of transmission. Always store food in rodent-proof containers and wash hands before eating.',
    category: 'Transmission',
  },
  {
    question: 'How long should you ventilate before cleaning rodent droppings?',
    answer: 'Open all windows and doors in the contaminated area for at least 30 minutes before beginning any cleaning. This allows fresh air to circulate and reduces the concentration of virus particles in the air. If possible, leave the area during this ventilation period.',
    category: 'Prevention',
  },
  {
    question: 'What type of mask should I wear when cleaning rodent droppings?',
    answer: 'Wear an N95 respirator mask or higher when cleaning rodent-contaminated areas. Surgical masks or dust masks are not sufficient as they do not provide adequate filtration against virus particles. Ensure the mask fits properly and forms a tight seal around your face for maximum protection.',
    category: 'Prevention',
  },
  {
    question: 'Can hantavirus affect children differently than adults?',
    answer: 'Children can be infected with Hantavirus, but cases are less common in children than adults. The symptoms and disease progression are similar in children and adults. Children may be less likely to recognize early symptoms or communicate them effectively, so parents should be vigilant if their child has had potential exposure to rodents.',
    category: 'General',
  },
  {
    question: 'Is hantavirus the same as the hantavirus pulmonary syndrome (HPS)?',
    answer: 'Hantavirus is the family of viruses, while Hantavirus Pulmonary Syndrome (HPS) is the specific disease caused by certain Hantavirus strains, primarily in North America. HPS is a severe respiratory disease that affects the lungs. Other Hantavirus strains can cause different illnesses, such as hemorrhagic fever with renal syndrome (HFRS), which is more common in Asia and Europe.',
    category: 'General',
  },
  {
    question: 'How can I prevent hantavirus?',
    answer: 'Prevention focuses on avoiding contact with rodents and their droppings. Key strategies include: sealing entry points to prevent rodents from entering buildings, storing food in rodent-proof containers, removing clutter and potential nesting sites, using traps for rodent control, and following safe cleaning procedures (never sweep dry droppings, always wet with disinfectant first). See our Prevention page for detailed guidance.',
    category: 'Prevention',
  },
  {
    question: 'What should I do if I think I have hantavirus?',
    answer: 'Seek immediate medical attention if you suspect Hantavirus infection, especially if you have potential rodent exposure and develop symptoms. Inform your healthcare provider about the exposure. If you experience difficulty breathing, chest pain, or other severe symptoms, go to the emergency room immediately. Early hospitalization and supportive care are critical for survival.',
    category: 'Treatment',
  },
  {
    question: 'Can hantavirus be transmitted through water?',
    answer: 'There is no evidence that Hantavirus is transmitted through water. The virus is primarily spread through inhalation of airborne particles from rodent excretions. However, water sources contaminated with rodent droppings or urine should be avoided, and drinking water should always be from safe, treated sources.',
    category: 'Transmission',
  },
  {
    question: 'Are there long-term effects after surviving hantavirus?',
    answer: 'Many people recover fully from Hantavirus, but some may experience lingering effects. Long-term complications can include persistent fatigue, shortness of breath, reduced exercise tolerance, and kidney problems. The severity and duration of these effects vary among individuals. Regular follow-up with healthcare providers is recommended for survivors.',
    category: 'Treatment',
  },
  {
    question: 'What time of year is hantavirus most common?',
    answer: 'Hantavirus cases can occur year-round but often peak in spring and summer. This seasonal pattern may be related to increased rodent activity during warmer months and more human outdoor activities. However, exposure can occur anytime, especially when cleaning enclosed spaces that have been closed for extended periods.',
    category: 'General',
  },
];

const schema = generateFAQPageSchema({
  questions: faqs.map(faq => ({ question: faq.question, answer: faq.answer })),
});

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} className="mb-8" />
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about Hantavirus, including symptoms, transmission, 
              prevention, and treatment. Can't find your answer? Contact us for more information.
            </p>

            <div className="mb-12">
              <Disclaimer />
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Questions
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      <span className="inline-block mt-3 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <section className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Still Have Questions?</h2>
              <p className="text-gray-700 mb-4">
                If you couldn't find the answer you're looking for, please reach out to us. 
                For medical concerns, always consult with a healthcare professional.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Us
              </a>
            </section>

            {/* Related Links */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/symptoms" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Symptoms</h3>
                  <p className="text-sm text-gray-600">Detailed information about Hantavirus symptoms</p>
                </a>
                <a href="/prevention" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Prevention</h3>
                  <p className="text-sm text-gray-600">How to protect yourself from Hantavirus</p>
                </a>
                <a href="/cleaning-guide" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Cleaning Guide</h3>
                  <p className="text-sm text-gray-600">Safe procedures for cleaning rodent droppings</p>
                </a>
                <a href="/treatment" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">Treatment</h3>
                  <p className="text-sm text-gray-600">Medical care options for Hantavirus infection</p>
                </a>
              </div>
            </section>

            {/* References */}
            <div className="mt-12 pt-8 border-t border-gray-200">
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
