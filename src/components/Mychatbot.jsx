import React from "react";
import ChatBot from "react-chatbotify";

 const MyChatBot = () => {
  const [form, setForm] = React.useState({});
  const formStyle = {
    marginTop: 10,
    marginLeft: 20,
    border: "1px solid #491d8d",
    padding: 10,
    borderRadius: 5,
    maxWidth: 300
  };

  const flow = {
    start: {
      message: "👋 Welcome to Lex&Ledger! Let's get started. What is your name?",
      function: (params) => setForm((prev) => ({ ...prev, name: params.userInput })),
      path: "ask_email"
    },
    ask_email: {
      message: (params) => `Hi ${form.name || params.userInput}, may I know your email?`,
      function: (params) => setForm((prev) => ({ ...prev, email: params.userInput })),
      path: "ask_phone"
    },
    ask_phone: {
      message: "Great! What's your phone number?",
      function: (params) => setForm((prev) => ({ ...prev, phone: params.userInput })),
      path: "ask_state"
    },
    ask_state: {
      message: "Which state are you from?",
      function: (params) => setForm((prev) => ({ ...prev, state: params.userInput })),
      path: "ask_service"
    },
    ask_service: {
      message: "Which service are you looking for assistance with?",
      function: (params) => setForm((prev) => ({ ...prev, service: params.userInput })),
      path: "end"
    },
    end: {
      message: "✅ Thanks! Here's a summary of what you've shared:",
      component: (
        <div style={formStyle}>
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Phone:</strong> {form.phone}</p>
          <p><strong>State:</strong> {form.state}</p>
          <p><strong>Service:</strong> {form.service}</p>
          <br />
          <a
            href={`/services?query=${form.service?.replace(/\s+/g, '-')}`}
            className="text-blue-600 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Go to Service Page
          </a>
        </div>
      ),
      options: ["Start New Query"],
      chatDisabled: true,
      path: "start"
    }
  };

  return <ChatBot flow={flow} />;
};
export default MyChatBot
