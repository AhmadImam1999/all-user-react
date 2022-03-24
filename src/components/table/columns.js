import React from 'react';
import { Avatar, Tag } from 'antd';

const columns = [
  {
    title: 'Picture',
    dataIndex: 'picture',
    key: 'picture',
    render: (picture) => {
      return <Avatar src={picture.thumbnail} />;
    },
    // responsive: ['md'],
  },

  {
    title: 'Full name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => {
      return <span>{name.first.charAt(0) + '.' + name.last}</span>;
    },

    sorter: (a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (email) => <a href={`mailto:${email}`}>{email}</a>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render: (gender) => (
      <span>
        <Tag> {gender}</Tag>
      </span>
    ),
    sorter: (a, b) => {
      if (a.gender < b.gender) {
        return -1;
      }
      if (a.gender > b.gender) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: 'Age',
    dataIndex: 'dob',
    key: 'dob',
    render: (dob) => {
      return <span>{dob.age}</span>;
    },
    sorter: (a, b) => a.dob.age - b.dob.age,
    // responsive: ['md'],
  },
];

export default columns;
