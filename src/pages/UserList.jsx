import { DeleteOutline } from '@material-ui/icons';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function UserList() {

  const rows: GridRowsProp = [
    { id: 1, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student', transaction: '$150.45', email:'johndoe@gmail.com'},
    { id: 2, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student',transaction: '$150.45', email:'johndoe@gmail.com' },
    { id: 3, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student', transaction: '$150.45', email:'johndoe@gmail.com' },
    { id: 1, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student', transaction: '$150.45', email:'johndoe@gmail.com'},
    { id: 2, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student',transaction: '$150.45', email:'johndoe@gmail.com' },
    { id: 3, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student', transaction: '$150.45', email:'johndoe@gmail.com' }, { id: 1, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student', transaction: '$150.45', email:'johndoe@gmail.com'},
    { id: 2, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student',transaction: '$150.45', email:'johndoe@gmail.com' },
    { id: 3, avatar: '../assets/admin.JPG', username: 'John James', Gender: 'Male', Age: 18, occupation: 'Student', transaction: '$150.45', email:'johndoe@gmail.com' },
    
  ];

  const columns: GridColDef[] = [
    { field: 'avatar', headerName: 'Avatar', width:150, renderCell: (params) => {
      return (
        <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt="avatarImage"/>
        </div>
      )
    } },
    { field: 'username', headerName: 'Username', width: 200 },
    { field: 'Gender', headerName: 'Gender', width: 150 },
    { field: 'Age', headerName: 'Age', width: 100 },
    { field: 'occupation', headerName: 'Occupation', width: 150 },
    { field: 'transaction', headerName: 'Transaction', width: 150 },
    { field: 'email', headerName: 'Email', width: 150},
    {field: "action", headerName: 'Action', width:150,
      renderCell: (params) => {
        return (
          <>
              <button className="userListEdit">
                Edit
              </button>
              <DeleteOutline className="userListDelete"/>
          </>
        )
      }
    }
  ];

  
  
  return (
      <div className="userList">
          <DataGrid rows={rows} columns={columns} checkboxSelection disableRowSelectionOnClick pageSize={3}/>
      </div>
  )
}

export default UserList