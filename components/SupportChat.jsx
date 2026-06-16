'use client';

import { useState, useRef, useEffect } from 'react';

const GREETING = "Hi! I'm iBby, the iBnk AI assistant. Ask me anything about iBnk — accounts, fees, FX, cross-border payments, or how to get started.";

export default function SupportChat({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function send(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const history = [...messages, userMsg];
    const apiMessages = history
      .filter(m => !(m.role === 'assistant' && m.content === GREETING))
      .map(({ role, content }) => ({ role, content }));

    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages(msgs => {
          const copy = msgs.slice();
          copy[copy.length - 1] = { role: 'assistant', content: assistantText };
          return copy;
        });
      }
    } catch {
      setMessages(msgs => {
        const copy = msgs.slice();
        copy[copy.length - 1] = {
          role: 'assistant',
          content: "Sorry — I'm having trouble reaching the server. Please try again, or email contact@ibnk.xyz.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.25)',
          zIndex: 9998,
        }}
      />
      <div
        role="dialog"
        aria-label="Chat with iBby"
        style={{
          position: 'fixed',
          bottom: 96,
          right: 20,
          width: 380,
          maxWidth: 'calc(100vw - 40px)',
          height: 560,
          maxHeight: 'calc(100vh - 140px)',
          background: '#f8faf8',
          borderRadius: 22,
          boxShadow: '0 24px 60px rgba(0,0,0,0.22)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9999,
          overflow: 'hidden',
          color: '#1a1a1a',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 18px',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #ffaa3a 0%, #ff751f 55%, #400b03 100%)',
              boxShadow: '0 0 16px rgba(255,117,31,0.4)',
            }}
          />
          <div style={{ flex: 1, lineHeight: 1.2 }}>
            <div style={{ fontWeight: 600, fontSize: 15 }}>iBby</div>
            <div style={{ fontSize: 12, opacity: 0.55 }}>iBnk AI · online</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close chat"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              opacity: 0.55,
              color: '#000',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '18px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            background: '#f8faf8',
          }}
        >
          {messages.map((m, i) => {
            const isUser = m.role === 'user';
            const isLastAssistant = !isUser && i === messages.length - 1;
            const showTyping = isLastAssistant && loading && !m.content;
            return (
              <div
                key={i}
                style={{
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '86%',
                  padding: '10px 14px',
                  borderRadius: 16,
                  background: isUser ? '#ff751f' : '#f8faf8',
                  color: isUser ? '#fff' : '#1a1a1a',
                  border: isUser ? 'none' : '1px solid rgba(0,0,0,0.08)',
                  fontSize: 14,
                  lineHeight: 1.55,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {showTyping ? (
                  <span style={{ opacity: 0.5, fontStyle: 'italic' }}>iBby is typing…</span>
                ) : (
                  m.content
                )}
              </div>
            );
          })}
        </div>

        <form
          onSubmit={send}
          style={{
            display: 'flex',
            gap: 8,
            padding: '12px 14px',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            background: '#f8faf8',
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message iBby…"
            disabled={loading}
            style={{
              flex: 1,
              padding: '10px 14px',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: 999,
              fontSize: 14,
              outline: 'none',
              color: '#1a1a1a',
              background: '#f8faf8',
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send"
            style={{
              background: '#ff751f',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 38,
              height: 38,
              cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
              opacity: input.trim() && !loading ? 1 : 0.4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
