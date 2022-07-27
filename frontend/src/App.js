
import './App.css';

function App() {
  return (
    <div className="App">
        <p className={"home-title"}> - SHOW THE DETAILS -</p>
      <p>
        <button className="home-btn btn btn-outline-success" data-bs-toggle="collapse" href="#collapseExample" role="button"
           aria-expanded="false" aria-controls="collapseExample">
          STUDENTS
        </button>&nbsp;&nbsp;&nbsp;
        <button className="home-btn btn btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                aria-expanded="false" aria-controls="collapseExample">
          BOOKS
        </button>
      </p>
        <p className={"home-title"}> - WELCOME -</p>
      <div className="home-box collapse" id="collapseExample">
        <div className="card card-body">
            <p className={"table-title"}>Students Table</p>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">View</th>
                    <th scope="col">Edit</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><button className={"btn btn-success"}>View</button> </td>
                    <td><button className={"btn btn-danger"}>Edit</button> </td>
                </tr>
                </tbody>
            </table>
        </div>
      </div>
        <div className="home-box collapse" id="collapseExample1">
            <div className="card card-body">
                <p className={"table-title"}>Books Table</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Student Name</th>
                        <th scope={"col"}>Date of Borrow</th>
                        <th scope={"col"}>Date of Return</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button className={"btn btn-success"}>View</button> </td>
                        <td><button className={"btn btn-danger"}>Edit</button> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default App;
