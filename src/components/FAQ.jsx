import { useState } from "react"
  const faqItems = [
    {
      question: "What is the difference between Private Limited and Public Limited Company?",
      answer: "A Private Limited Company has restrictions on share transfer and cannot invite public to subscribe to its shares. It requires minimum 2 and maximum 200 shareholders. A Public Limited Company can invite public to subscribe to its shares and has no restriction on share transfer, requiring minimum 7 shareholders."
    },
    {
      question: "Can I start a company with just one director?",
      answer: "No, a Private Limited Company requires minimum 2 directors. However, you can start a One Person Company (OPC) with just one director, which is a special category under the Companies Act."
    },
    {
      question: "What happens if my company name is rejected?",
      answer: "If your preferred name is rejected, we will suggest alternative names and help you choose a suitable one. We typically suggest 3-4 alternative names during the initial consultation to avoid delays."
    }
  ]

const Faq=()=>{
      const [activeAccordion, setActiveAccordion] = useState(null)
      const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }
    return       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 2rem' }}>

       <section id="faq" className="section">
          <h3 className="section-title">
            ❓ Frequently Asked Questions
          </h3>
          <div className="section-content">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <span className={`faq-toggle ${activeAccordion === index ? 'active' : ''}`}>
                    {activeAccordion === index ? '▲' : '▼'}
                  </span>
                </div>
                {activeAccordion === index && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
    </div>
}
export default Faq;