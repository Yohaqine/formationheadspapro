import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    // Zapier Chatbot Script
    // Replace the script source with your actual Zapier chatbot embed code
    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    
    // PASTE YOUR ZAPIER CHATBOT SCRIPT HERE
    // Example: script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    
    // Uncomment and configure when you have the Zapier script:
    // document.body.appendChild(script);
    
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  return (
    <div
      id="zapier-chatbot-container"
      className="fixed bottom-20 right-4 z-40 md:bottom-4"
    >
      {/* Zapier Chatbot will be injected here */}
      {/* Add your Zapier web component here, e.g.: */}
      {/* <zapier-interfaces-chatbot-embed ... /> */}
    </div>
  );
};

export default ChatbotWidget;
