import { PageHeader } from 'antd';
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CardComponent from '../components/card/card.component';
import LoadingComponet from '../components/loading/loading.component';
import Map from '../components/map/map.componet';
import { selectUserById } from '../redux/users/user-slice';

function UserDetail() {
  const { userName } = useParams();
  const user = useSelector((state) => selectUserById(state, userName));
  const { loading, error } = useSelector((state) => state.users);

  console.log(user);

  useEffect(() => {
    document.title = 'User Detail';
  }, []);

  if (!user && loading === false) {
    return <h1> User Not Found</h1>;
  }
  return (
    <Fragment>
      <PageHeader
        ghost={true}
        className="site-page-header"
        onBack={() => window.history.back()}
        title="User Detail"
        // subTitle="This is a subtitle"
      />
      ,
      {user ? (
        <CardComponent data={user}>
          <Map
            lat={user.location.coordinates.latitude}
            long={user.location.coordinates.longitude}
            text={user.name.first}
          />
        </CardComponent>
      ) : (
        <LoadingComponet />
      )}
    </Fragment>
  );
}

export default UserDetail;
