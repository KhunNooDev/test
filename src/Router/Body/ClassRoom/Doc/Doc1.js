import React, { Component } from 'react';
import { Button , Table  } from 'reactstrap';

class Doc1 extends Component {
  render() {
    return (
        <div>
        <br />
        <br />
        <div className="container">
          <div className="my-5 row">
            <div className="col-lg-4 px-3 py-3 my-2 border rounded shadow">
              <div className="col-lg-12">
                <div className="">
                <Button color="secondary"><i class="fa fa-bars" aria-hidden="true"></i></Button>{' '}
                <Table><tbody>
                  <tr>
                    <p>เริ่มต้น</p>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
      </Table>
                 </div>
              </div>
              <div className="col-lg-12">
                <div className="px-3 py-3 my-2 border rounded grow-shadow">
                  <h4>หัวข้อ</h4>
                 </div>
              </div><div className="col-lg-12">
                <div className="px-3 py-3 my-2 border rounded grow-shadow">
                  <h4>หัวข้อ</h4>
                 </div>
              </div><div className="col-lg-12">
                <div className="px-3 py-3 my-2 border rounded grow-shadow">
                  <h4>หัวข้อ</h4>
                 </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="px-3 my-2 border rounded grow-shadow">
                   <h4> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </h4>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Doc1;