import React from 'react';
import AdminInput from './AdminInput';
import AdminTable from './AdminTable';

const Admin = props => (
    <div>
        <div className="admin-page">
        <header>Admin</header>
        <AdminInput />
        <AdminTable />
        </div>
    </div>
);

export default Admin;