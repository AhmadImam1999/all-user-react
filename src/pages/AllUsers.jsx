import React, { Fragment, useEffect } from 'react';
import ListComponent from '../components/table/table.components';
import { useSelector } from 'react-redux';
import { selectAllUsers, selectSubtotal } from '../redux/users/user-slice';
import { Button, Input, PageHeader, Space } from 'antd';

function AllUsers() {
  const data = useSelector(selectAllUsers);
  const { loading } = useSelector((state) => state.users);
  useEffect(() => {
    document.title = 'All users';
  }, []);
  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        title="All Users"
        subTitle="Table to display all user"
      />

      <ListComponent data={data} isLoading={loading} />
    </Fragment>
  );
}

export default AllUsers;
