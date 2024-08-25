'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

type EmailDoc = {
  _id: string;
  mail: string;
};

export default function AdminPage() {
  const [emails, setEmails] = useState<EmailDoc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch emails from the API
  const fetchEmails = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/subscribe');
      
      // Update this line to match the response structure
      const emailData: EmailDoc[] = response.data.response;
      console.log(emailData)

      setEmails(emailData);  // Store the emails in the state
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.error('Error fetching emails:', error);
    }
  };

  // Fetch emails when the component mounts
  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Subscribed Users</h1>
        
        {loading ? (
          <div>Loading emails...</div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full text-sm divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase">Email Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {emails.length > 0 ? (
                  emails.map((email) => (
                    <tr key={email._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-black font-bold">{email.mail}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="text-center py-4">No emails found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        <div className='bg-custom-green w-80 my-4 py-2 px-5 my-10 rounded '>
        <Link href="/admin/investments">
        Add new Investment Opportunities
        </Link>
        </div>
      </div>
    </>
  );
}