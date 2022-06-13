import React,{useState} from 'react'
import{Button,Table}from 'react-bootstrap'
import{Link} from 'react-router-dom'
import axios from '../axios'



function ListProduct() {
    const [products,setProducts] = useState("");
    const fetchData =async()=>{
        const data =await axios.get("/listproduct")
        setProducts(data);
    };
    fetchData();
  return (
    <>
         <Link className='btn btn-outline-secondary rounded my-2 btn-sm' to='/'>Back</Link>

    
    <div className='center post txt_field container'>

    
    <h1>List product</h1>
    <Table striped bordered hover variant='info'>
      <thead>
        <tr>
          <th> Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Catogory</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <Link  to='/addproduct'> <Button className='btn btn-info rounded my-2 btn-sm'>Add product</Button></Link>

    </div>
    </>
  )
}

export default ListProduct