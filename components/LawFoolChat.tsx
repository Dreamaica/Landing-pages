import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const LawFoolChat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // ⚠️ PASTE YOUR API KEY HERE FOR TESTING
  // (Later we will move this to a secure environment variable)
  const API_KEY = "AIzaSyDWEgH_unpe4v3BtUUzSGCWvJ4VXN3spFc";
  
  // 🧠 YOUR CACHE ID (The Brain we just built!)
  const CACHE_NAME = "cachedContents/g1uzvt13nltc8zh4p4w8nbtdcpewc8ndg8c64a1d";

  const askLawFool = async () => {
    if (!query) return;
    setLoading(true);
    setResponse("");

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      
      // We explicitly tell it to use the "Brain" we built
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-001",
        cachedContent: CACHE_NAME, 
      });

      const result = await model.generateContent(query);
      setResponse(result.response.text());
    } catch (error) {
      console.error("LawFool Error:", error);
      setResponse("Hold on, the legal circuits are busy. Try again!");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl shadow-2xl max-w-2xl mx-auto my-10 border border-yellow-500">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚖️ LawFool Constitutional Engine</h2>
      
      <textarea 
        className="w-full p-3 bg-slate-800 rounded border border-slate-600 text-white focus:border-yellow-400 outline-none"
        rows={3}
        placeholder="Ask a question about Jamaican Law..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      <button 
        onClick={askLawFool}
        disabled={loading}
        className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded transition-colors w-full"
      >
        {loading ? "Consulting the Constitution..." : "Get Legal Guidance"}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-slate-800 rounded border-l-4 border-green-500">
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default LawFoolChat;
