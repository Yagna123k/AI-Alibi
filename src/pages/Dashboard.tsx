import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface Story {
  id: string;
  theme: string;
  content: string;
  created_at: string;
}

export default function Dashboard() {
  const [stories, setStories] = useState<Story[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setStories(data || []);
    } catch (error) {
      toast.error('Failed to fetch stories');
    }
  };

  const deleteStory = async (id: string) => {
    try {
      const { error } = await supabase
        .from('stories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setStories(stories.filter(story => story.id !== id));
      toast.success('Story deleted successfully');
    } catch (error) {
      toast.error('Failed to delete story');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Stories</h1>
      
      <div className="grid gap-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{story.theme}</h2>
              <button
                onClick={() => deleteStory(story.id)}
                className="text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{story.content}</p>
            <div className="mt-4 text-sm text-gray-500">
              Created: {new Date(story.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
        
        {stories.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No stories yet. Generate some stories to see them here!
          </p>
        )}
      </div>
    </div>
  );
}