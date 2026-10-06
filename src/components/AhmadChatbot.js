"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Send,
  X,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const INITIAL_MESSAGE = {
  id: "welcome-msg",
  role: "assistant",
  content:
    "Hi! I'm Ahmad AI SEO Assistant. I can help you with Local SEO, Google Business Profile, website SEO, keyword research, and digital marketing. What would you like to know?",
  timestamp: Date.now(),
};

const QUICK_PROMPTS = [
  "Local SEO Help",
  "Google Business Profile",
  "Website SEO",
  "SEO Services",
];

const STORAGE_KEY = "ahmad_ai_chat_session";

export default function AhmadChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Restore chat history from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, []);

  // Save chat history to sessionStorage on update
  useEffect(() => {
    try {
      if (messages.length > 1 || messages[0]?.content !== INITIAL_MESSAGE.content) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, [messages]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend) => {
    const messageText = (typeof textToSend === "string" ? textToSend : input).trim();
    if (!messageText || isLoading) return;

    setErrorMsg("");
    const userMsg = {
      id: "user-" + Date.now(),
      role: "user",
      content: messageText,
      timestamp: Date.now(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          history: newMessages.slice(-6).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok && data?.reply) {
        const assistantMsg = {
          id: "bot-" + Date.now(),
          role: "assistant",
          content: data.reply,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        const errorReply =
          data?.reply ||
          "Sorry, I'm temporarily unavailable. Please use the Contact or WhatsApp option to reach Ahmad Local SEO Expert.";
        setMessages((prev) => [
          ...prev,
          {
            id: "bot-" + Date.now(),
            role: "assistant",
            content: errorReply,
            timestamp: Date.now(),
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: "bot-" + Date.now(),
          role: "assistant",
          content:
            "Sorry, I'm temporarily unavailable. Please use the Contact or WhatsApp option to reach Ahmad Local SEO Expert.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // Ignore
    }
    setErrorMsg("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="ahmad-chat-launcher"
          aria-label="Open Ask Ahmad AI SEO Assistant"
          title="Ask Ahmad AI SEO Assistant"
        >
          <div className="launcher-icon-box">
            <Sparkles size={20} className="launcher-sparkle" />
          </div>
          <span className="launcher-text">Ask Ahmad AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="ahmad-chat-window"
          role="dialog"
          aria-modal="false"
          aria-label="Ahmad AI SEO Assistant Chat Window"
        >
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="chat-title">Ahmad AI SEO Assistant</h3>
                <span className="chat-subtitle">
                  <span className="status-dot"></span>
                  Local SEO & Marketing Guidance
                </span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button
                onClick={handleResetChat}
                className="header-action-btn"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="header-action-btn"
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick CTAs Banner */}
          <div className="chat-cta-bar">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="chat-growth-cta"
            >
              Contact Ahmad <ArrowRight size={13} />
            </Link>
            <a
              href="https://wa.me/923196902479"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-whatsapp-cta"
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>

          {/* Messages Area */}
          <div className="chat-messages-container">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message-row ${
                  msg.role === "user" ? "user-row" : "assistant-row"
                }`}
              >
                <div
                  className={`chat-bubble ${
                    msg.role === "user" ? "user-bubble" : "assistant-bubble"
                  }`}
                >
                  <div className="chat-bubble-text">
                    {msg.content.split("\n").map((line, idx) => (
                      <p key={idx} style={{ margin: line ? "4px 0" : "8px 0" }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="chat-message-row assistant-row">
                <div className="chat-bubble assistant-bubble typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="chat-quick-prompts">
            <span className="quick-prompts-label">Suggested:</span>
            <div className="chips-wrapper">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="quick-chip-btn"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleFormSubmit} className="chat-input-area">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask an SEO or marketing question..."
              maxLength={500}
              disabled={isLoading}
              aria-label="Your SEO question"
              className="chat-text-input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="chat-send-btn"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Footer Note */}
          <div className="chat-footer-note">
            <span>Ahmad Local SEO Expert | Multan, Pakistan</span>
          </div>
        </div>
      )}
    </>
  );
}
