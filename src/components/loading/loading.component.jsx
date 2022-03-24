import React from 'react';
import { Spin } from 'antd';
import './loading.styles.css';
function Loading() {
  return (
    <div className="loading-center">
      <Spin tip="Loading..."></Spin>
    </div>
  );
}

export default Loading;
