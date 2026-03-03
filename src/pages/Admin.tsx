import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar, User, MessageSquare } from 'lucide-react';

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions');
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      const data = await response.json();
      setSubmissions(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-red-500 font-bold uppercase tracking-widest bg-red-50 p-6 rounded-lg border border-red-200">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tight text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-2 font-medium uppercase tracking-widest text-sm">Form Submissions</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100">
            <span className="text-2xl font-bold text-orange-500">{submissions.length}</span>
            <span className="text-gray-500 ml-2 font-bold uppercase tracking-widest text-xs">Total</span>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12 text-center text-gray-500 font-medium uppercase tracking-widest">
            No submissions yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-500 mr-3">
                      <User size={20} />
                    </div>
                    <h3 className="font-bold uppercase tracking-wider text-gray-900 truncate max-w-[150px]" title={sub.name}>
                      {sub.name}
                    </h3>
                  </div>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-widest flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {new Date(sub.created_at).toLocaleDateString()}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail size={16} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                    <a href={`mailto:${sub.email}`} className="text-sm text-gray-600 hover:text-orange-500 truncate" title={sub.email}>
                      {sub.email}
                    </a>
                  </div>

                  {sub.phone && (
                    <div className="flex items-start">
                      <Phone size={16} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                      <a href={`tel:${sub.phone}`} className="text-sm text-gray-600 hover:text-orange-500">
                        {sub.phone}
                      </a>
                    </div>
                  )}

                  <div className="flex items-start mt-4 pt-4 border-t border-gray-50">
                    <MessageSquare size={16} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4" title={sub.message}>
                      {sub.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
