'use client';

import Handle from "./handle";
import TableDefault from "@/components/Table";
import styles from './styles.module.scss';
import {Button} from "antd";
import ModalDefault from "@/components/Modal";
import CreateOrUpdate from "./components/CreateOrUpdate";
import {setVisibleModalCreateOrUpdate} from "@/states/modules/user";

export default function User() {
  const {
    employees, columns, paginationListEmployees, loadingTable, visibleModalCreateOrUpdate,
    handleSelectPagination, dispatch, handleGetListEmployee
  } = Handle();

  return (
    <div>
      <div className={styles.filterWrap}>
        <Button
          className={'general-button bg-blue-500'}
          size={'large'}
          onClick={() => dispatch(setVisibleModalCreateOrUpdate(true))}
        >Thêm mới
        </Button>
      </div>
      <div className={'tableWrap'}>
        <TableDefault
          loading={loadingTable}
          dataSource={employees}
          columns={columns}
          onChange={() => {}}
          pagination={paginationListEmployees}
          handleSelectPagination={(e) => handleSelectPagination(e)}
        />
      </div>

      <ModalDefault
        isModalOpen={visibleModalCreateOrUpdate}
        handleOk={() => dispatch(setVisibleModalCreateOrUpdate(false))}
        handleCancel={() => dispatch(setVisibleModalCreateOrUpdate(false))}
        title={'Tạo mới tài khoản'}
      >
        <CreateOrUpdate
          closeModal={() => dispatch(setVisibleModalCreateOrUpdate(false))}
          handleGetListEmployee={() => handleGetListEmployee()}
        />
      </ModalDefault>
    </div>
  )
}
