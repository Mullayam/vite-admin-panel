import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className=" bg-gray-800 p-4 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-bold">UNSPACE</h2>
          <p>Nazmi's Workspace</p>
        </div>
        <nav>
          <ul>
            <li className="mb-4">Dashboard</li>
            <li className="mb-4">Contacts</li>
            <li className="mb-4 text-yellow-500">Automations</li>
            <li className="mb-4">Forms</li>
            <li className="mb-4">Conversations</li>
            <li className="mb-4">Transactional</li>
            <li className="mb-4">Reports</li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="mb-4">
          <p>Free Plan</p>
          <p>(3/100)</p>
          <p>Until 09/08/2023</p>
          <button className="text-sm mt-2">Manage your plan and credits</button>
        </div>
        <div className="flex flex-col space-y-2">
          <button>Dark</button>
          <button>Settings</button>
          <button>Help</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
