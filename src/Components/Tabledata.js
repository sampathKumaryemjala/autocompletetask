import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'

import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import MaterialTable from 'material-table'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import { forwardRef } from 'react'

export default function Tabledata() {
  const [imagedata, setImagedata] = useState([])
  const columns = [
    {
      title: 'Id',
      field: 'id',
    },
    {
      title: 'Title',
      field: 'title',
    },

    {
      title: 'Url',
      field: 'url',
    },

    {
      title: 'Thumbnail',
      field: 'thumbnailUrl',
      minWidth: 50,
      maxWidth: 60,
      render: (row) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
          }}
        >
          <img
            style={{ height: 'auto', maxWidth: '100px' }}
            alt="description"
            src={row.thumbnailUrl}
          ></img>
        </div>
      ),
    },
    {
      title: 'album id',
      field: 'thumbnailUrl',
    },
  ]

  const tableIcons = {
    Add: forwardRef((props, ref) => (
      <AddBox
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    Check: forwardRef((props, ref) => (
      <Check
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    Clear: forwardRef((props, ref) => (
      <Clear color="error" {...props} ref={ref} />
    )),
    Delete: forwardRef((props, ref) => (
      <DeleteOutline color="error" {...props} ref={ref} />
    )),

    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    Edit: forwardRef((props, ref) => (
      <Edit
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    Export: forwardRef((props, ref) => (
      <SaveAlt
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => (
      <FirstPage
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    LastPage: forwardRef((props, ref) => (
      <LastPage
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRight
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    ResetSearch: forwardRef((props, ref) => (
      <Clear
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    Search: forwardRef((props, ref) => (
      <Search
        style={{ color: sessionStorage.getItem('TESTCOLOR') }}
        {...props}
        ref={ref}
      />
    )),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  }

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiPaper: {
          root: {
            margin: '20px',
          },
        },
        MuiTableCell: {
          head: {
            backgroundColor: 'grey !important',
            color: 'white !important',
          },
          root: {
            textAlign: 'center !important',
          },
        },

        MuiSelect: {
          icon: {},
        },
        MuiIconButton: {
          colorInherit: {},
        },
      },
    })

  async function handledelete(oldData) {
    let index = imagedata.findIndex(function (o) {
      console.log(o)
      return o.id === oldData.id
    })
    console.log(index)
    if (index !== -1) imagedata.splice(index, 1)
    console.log(imagedata, 'delete X12Connector')
    setImagedata([...imagedata])
  }

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setImagedata(data)
      })
  }, [])

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MaterialTable
        icons={tableIcons}
        title="json data"
        columns={columns}
        data={imagedata}
        editable={{
          onRowDelete: (oldData) => handledelete(oldData),
        }}
        options={{
          headerStyle: {
            textAlign: 'center',
          },
          searchFieldStyle: {
            color: 'black',
          },
          actionsColumnIndex: -1,
          pageSize: 5,
          pageSizeOptions: [5, 10, 25, 50, 100],
          toolbar: true,
          paging: true,
        }}
      />
    </MuiThemeProvider>
  )
}
