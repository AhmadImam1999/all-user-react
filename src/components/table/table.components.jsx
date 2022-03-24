import React, { useState } from 'react';

// import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { Empty } from 'antd';
import columns from './columns';
import { Button, Input, Table, Card, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { filterData } from '../../redux/users/user-slice';
import Loading from '../loading/loading.component';

function Lists({ data, isLoading }) {
  const history = useNavigate();
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handelSearch = () => {
    dispatch(filterData(search));
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      className="site-layout-background "
      style={{ padding: 20, textAlign: 'center' }}
    >
      <Input.Group compact style={{ margin: '10px 0', padding: '0 50px' }}>
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="search by email, name, age"
        />
        <Button onClick={handelSearch} type="primary">
          Search
        </Button>
      </Input.Group>

      <Card
        style={{ overflow: 'auto', padding: '0 10px' }}
        className="da-card-6 da-table-card"
      >
        {data ? (
          <Table
            rowKey="cell"
            columns={columns}
            dataSource={data}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  history(`/${record.name.first}`);
                },
              };
            }}
            rowClassName="row-class"
          />
        ) : (
          <Empty />
        )}
      </Card>
    </div>
  );
}

export default Lists;
