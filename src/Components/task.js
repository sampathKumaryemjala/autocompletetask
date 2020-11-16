import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import TextField from '@material-ui/core/TextField'

const Task = () => {
  const datalist = [
    {
      name: 'sam',
    },
    {
      name: 'rani',
    },
    {
      name: 'jan',
    },
    {
      name: 'feb',
    },
    {
      name: 'mar',
    },
    {
      name: 'april',
    },
    {
      name: 'may',
    },
    {
      name: 'june',
    },
    {
      name: 'july',
    },
  ]
  return (
    <div>
      <h1>Task</h1>
      <div
        style={{
          marginLeft: '130px',
        }}
      >
        <Autocomplete
          id="combo-box-demo"
          options={datalist}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="search box" variant="outlined" />
          )}
        />
      </div>
    </div>
  )
}

export default Task
