import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome to Automatic <span role="img" aria-label="party">🎉</span></h1>
        <button className="bg-purple-600 px-4 py-2 rounded">Upgrade Plan</button>
      </header>
      <section className="mb-8">
        <div className="bg-gray-800 p-6 rounded mb-4">
          <h2 className="text-lg font-bold">Maximize your product marketing performance!</h2>
          <button className="bg-purple-600 px-4 py-2 rounded mt-2">Get Started</button>
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4">Get Started (1/4)</h3>
        <ul className="space-y-4">
          <li className="bg-gray-800 p-4 rounded">Complete your profile form</li>
          <li className="bg-gray-800 p-4 rounded">Add your first contacts</li>
          <li className="bg-gray-800 p-4 rounded">Connect your store</li>
          <li className="bg-gray-800 p-4 rounded">Schedule your first campaign</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4">Explore Automatic</h3>
        <div className="space-x-4">
          <button className="bg-gray-800 p-4 rounded">Contact Us</button>
          <button className="bg-gray-800 p-4 rounded">Profile Fill</button>
        </div>
      </section>
      <section>
        <div className="bg-gray-800 p-6 rounded flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Watch video demo</h3>
            <button className="bg-purple-600 px-4 py-2 rounded mt-2">Take the tour</button>
          </div>
          <div className="bg-gray-700 p-4 rounded-full">
            {/* Add play icon or any other relevant icon */}
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.228c0-5.065-4.13-9.228-9.228-9.228S2.544 7.163 2.544 12.228 6.674 21.456 11.772 21.456 21 17.293 21 12.228z" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
