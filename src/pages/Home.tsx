import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [theme, setTheme] = useState('');
  const [story, setStory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { session } = useAuth();
  const navigate = useNavigate();

  const generateStory = async () => {
    if (!theme.trim()) {
      toast.error('Please enter a theme');
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-story`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      setStory(data.story);
    } catch (error) {
      toast.error('Failed to generate story');
    } finally {
      setIsGenerating(false);
    }
  };

  const saveStory = async () => {
    if (!session) {
      navigate('/login');
      return;
    }

    try {
      const { error } = await supabase
        .from('stories')
        .insert([{ theme, content: story, user_id: session.user.id }]);
      
      if (error) throw error;
      toast.success('Story saved successfully');
    } catch (error) {
      toast.error('Failed to save story');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(story);
    toast.success('Copied to clipboard');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Generate Your Story</h1>
        
        <div className="mb-6">
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
            Story Theme
          </label>
          <input
            type="text"
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="e.g., solo trip to Japan, college breakup"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          onClick={generateStory}
          disabled={isGenerating}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {isGenerating ? 'Generating...' : 'Generate Story'}
        </button>

        {story && (
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="whitespace-pre-wrap text-gray-700">{story}</p>
            </div>
            
            <div className="mt-4 flex gap-4">
              <button
                onClick={copyToClipboard}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200"
              >
                Copy to Clipboard
              </button>
              <button
                onClick={saveStory}
                className="flex-1 bg-indigo-100 text-indigo-700 py-2 px-4 rounded-md hover:bg-indigo-200"
              >
                Save Story
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}