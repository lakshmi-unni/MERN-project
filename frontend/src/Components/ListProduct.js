import React,{useEffect, useState} from 'react'
import{Button,Table}from 'react-bootstrap'
import{Link} from 'react-router-dom'
import axios from '../axios'



function ListProduct() {
    const [products,setProducts] = useState("");
    useEffect(() => {
        const fetchData =async()=>{
            const data =await axios.get("/listproduct")
            setProducts(data);
        };
      
        fetchData();

    }, []);
    
    
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
      {products && products?.data.map(
                    (product) =>(
        <tr>
            
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>{product.catogory}</td>
        </tr>
        ))}
        
        
      </tbody>
    </Table>
    <Link  to='/addproduct'> <Button className='btn btn-info rounded my-2 btn-sm'>Add product</Button></Link>

    </div>
    </>
  )
}

export default ListProduct