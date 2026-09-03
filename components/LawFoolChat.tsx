import React, { useState } from 'react';

type LawFoolResponse = {
  answer?: string;
  response?: string;
  error?: string;
};

const LawFoolChat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askLawFool = async () => {
    const question = query.trim();
    if (!question || loading) return;

    setLoading(true);
    setResponse('');

    try {
      const result = await fetch('/api/lawfool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = (await result.json()) as LawFoolResponse;

      if (!result.ok) {
        throw new Error(data.error || 'LawFool is temporarily unavailable.');
      }

      setResponse(data.answer || data.response || 'No guidance was returned.');
    } catch (error) {
      console.error('LawFool request failed:', error);
      setResponse(
        'LawFool is temporarily unavailable while its secure connection is being completed.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="lawfool-title"
      className="p-6 bg-slate-900 text-white rounded-xl shadow-2xl max-w-2xl mx-auto my-10 border border-yellow-500"
    >
      <h2 id="lawfool-title" className="text-2xl font-bold text-yellow-400 mb-4">
        LawFool Jamaican Legal-Literacy Guide
      </h2>

      <p className="mb-4 text-sm text-slate-300">
        Educational information only. LawFool does not replace advice from a qualified attorney.
      </p>

      <label htmlFor="lawfool-question" className="sr-only">
        Ask a question about Jamaican law
      </label>
      <textarea
        id="lawfool-question"
        className="w-full p-3 bg-slate-800 rounded border border-slate-600 text-white focus:border-yellow-400 outline-none"
        rows={3}
        placeholder="Ask a question about Jamaican law..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button
        type="button"
        onClick={askLawFool}
        disabled={loading || !query.trim()}
        className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60 text-black font-bold rounded transition-colors w-full"
      >
        {loading ? 'Reviewing your question...' : 'Get legal-literacy guidance'}
      </button>

      {response && (
        <div
          className="mt-6 p-4 bg-slate-800 rounded border-l-4 border-green-500"
          aria-live="polite"
        >
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </section>
  );
};

export default LawFoolChat;
