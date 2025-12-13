import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'zapier-interfaces-chatbot-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'is-popup'?: string;
        'chatbot-id'?: string;
      };
    }
  }
}

const ChatbotWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <zapier-interfaces-chatbot-embed 
      is-popup="true" 
      chatbot-id="cmj4ol7or00du7nme0erfx8ts"
    />
  );
};

export default ChatbotWidget;
