import {useEffect, useState} from "react";
import {getListEmployee} from "@/api/employ";
import {getHeaders, removeAuthToken} from "@/utils/cookie/client";
import {Switch} from "antd";
import {useDispatch, useSelector} from "react-redux";

export default function Handle() {
  const [employees, setEmployees] = useState([]);
  const [paginationListEmployees, setPaginationListEmployees] = useState({
    currentPage: 1,
    perPage: 10,
    totalPage: 1,
    totalRecord: 0,
  });
  const [loadingTable, setLoadingTable] = useState(false);
  const columns = [
    {
      title: 'Họ và Tên',
      dataIndex: 'name',
      key: 'name',
      showSorterTooltip: false,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      showSorterTooltip: false,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      showSorterTooltip: false,
      sorter: (a, b) => a.age - b.age,
      render: (text) => <Switch
        className={`main-switch`}
        checked={!!text}
        disabled={true}
      />
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      width: 160,
      align: 'center',
      render: () =>
        <div>
          sdsdsd
        </div>
    },
  ];
  const visibleModalCreateOrUpdate = useSelector(state => state.user.visibleModalCreateOrUpdate);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetListEmployee();
  }, [])

  const handleSelectPagination = (value) => {
    console.log(value)
  }

  const handleGetListEmployee = () => {
    setLoadingTable(true)
    getListEmployee({}, getHeaders()).then(res => {
      setEmployees(res.data.data.data);
    }).catch(error => {
      removeAuthToken();
      return error
    }).finally(() => {
      setLoadingTable(false)
    })
  }

  return {
    employees, columns, paginationListEmployees, loadingTable, visibleModalCreateOrUpdate,
    handleSelectPagination, dispatch, handleGetListEmployee
  }
}
