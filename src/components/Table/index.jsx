import React from "react";
import {Pagination, Table} from "antd";
import './styles.scss'

function TableDefault(props) {
  let {
    dataSource, columns, pagination, loading,
    onChange, handleSelectPagination
  } = props;

  return(
    <div>
      <Table
        loading={loading}
        className={`main-table mb-[15px]`}
        rowClassName={`main-row`}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey={'id'}
        onChange={onChange}
        scroll={{ y: 500 }}
      />
      <Pagination
        className={'flex justify-end'}
        current={pagination.currentPage}
        total={pagination.totalRecord}
        pageSize={pagination.perPage || 0}
        onChange={(e) => handleSelectPagination(e)}
      />
    </div>
  )
}
export default TableDefault

