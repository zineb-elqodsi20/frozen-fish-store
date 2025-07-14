import { useState, useRef, useEffect } from 'react';
import { FiSend, FiX, FiMessageSquare } from 'react-icons/fi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Bonjour 👋 ! Je suis l'assistant Marcine Fish. Comment puis-je vous aider aujourd'hui ?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const faqs = [
    {
      question: "Comment vos poissons sont-ils conservés ?",
      answer: "Nos poissons sont surgelés immédiatement après la pêche pour garantir leur fraîcheur. Ils sont stockés à -18°C."
    },
    {
      question: "Où livrez-vous ?",
      answer: "Nous livrons à Casablanca et dans certaines villes voisines. Veuillez entrer votre code postal à la commande pour vérifier la disponibilité."
    },
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Les commandes passées avant 16h sont livrées le jour même ou sous 24h selon votre emplacement."
    },
    {
      question: "Comment puis-je payer ?",
      answer: "Vous pouvez payer par carte bancaire, PayPal, Paymee ou en espèces à la livraison."
    },
    {
      question: "Puis-je congeler à nouveau les poissons ?",
      answer: "Si le produit est encore congelé à la livraison, vous pouvez le garder au congélateur jusqu'à 3 mois. Ne recongelez pas un produit déjà décongelé."
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = inputValue;
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
    setInputValue('');

    setTimeout(() => {
      const userLower = userMessage.toLowerCase();
      let response = "Je n'ai pas compris 😕. Voici quelques questions fréquentes que je peux répondre :\n" + 
                     faqs.map(f => `- ${f.question}`).join('\n');

      for (const faq of faqs) {
        if (userLower.includes(faq.question.toLowerCase().split(' ')[0])) {
          response = faq.answer;
          break;
        }
      }

      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    handleSendMessage();
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-sky-600 text-white p-4 rounded-full shadow-xl hover:bg-sky-700 transition-all z-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 max-w-full bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          <div className="bg-sky-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">Assistant Marcine Fish</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-sky-200">
              <FiX size={20} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto h-96">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-sky-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                  {msg.text.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 pb-2 flex flex-wrap gap-2 border-t">
            {faqs.slice(0, 3).map((faq, i) => (
              <button
                key={i}
                onClick={() => handleQuickQuestion(faq.question)}
                className="text-xs bg-sky-100 text-sky-700 px-3 py-1 rounded-full hover:bg-sky-200"
              >
                {faq.question}
              </button>
            ))}
          </div>

          <div className="p-4 border-t flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Posez votre question..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-sky-600 text-white px-4 py-2 rounded-r-lg hover:bg-sky-700"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
