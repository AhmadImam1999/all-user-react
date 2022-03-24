import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/users/user-slice';
import Navbar from './components/navbar/navbar.components';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import AllUsers from './pages/AllUsers';
import UserDetail from './pages/UserDetail';

axios.defaults.baseURL = 'https://randomuser.me/';

const { Content } = Layout;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Content style={{ padding: '0 50px' }}>
        <Switch>
          <Route exact path="/"  component={AllUsers} />
          <Route exact path="/:userName" component={UserDetail} />
        </Switch>
      </Content>
    </Fragment>
  );
}

export default App;
