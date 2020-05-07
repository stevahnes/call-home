import React, { useState } from 'react';
import AdminPanel from '../AdminPanel';
import UserTable from './UserTable';
import UserDrawer from './UserDrawer';

function UserPanel() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // TODO using one drawer for everything may not be the best approach.
  const [drawerPage, setDrawerPage] = useState(0);
  const [userToEdit, setUserToEdit] = useState(null);
  const openAddUserDrawer = () => {
    setDrawerPage(0);
    setDrawerOpen(true);
  };
  const openEditUserDrawer = (user) => {
    setUserToEdit(user);
    setDrawerPage(2);
    setDrawerOpen(true);
  };

  const table = <UserTable openEditUserDrawer={openEditUserDrawer} />;
  const drawer = (
    <UserDrawer
      user={userToEdit}
      open={drawerOpen}
      drawerPage={drawerPage}
      setDrawerPage={setDrawerPage}
      closeDrawer={() => setDrawerOpen(false)}
    />
  );
  return (
    <AdminPanel
      table={table}
      drawer={drawer}
      addText="Add Volunteer"
      onAddClicked={openAddUserDrawer}
    />
  );
}

export default UserPanel;
