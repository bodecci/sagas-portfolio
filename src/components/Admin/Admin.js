import React from 'react';
import AdminInput from './AdminInput';
import AdminTable from './AdminTable';

const Admin = props => (
    <div>
        <div className="admin-page">
        <p className="admin-page">Admin Page</p>
        < header className ="App-header App-intro App-title App"> Admin </header>
        <AdminInput />
        <AdminTable />
        </div>
    </div>
);

export default Admin;