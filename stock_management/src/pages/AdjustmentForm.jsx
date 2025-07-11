import {useEffect, useState}from 'react'
import DynamicTable from '../components/DynamicTable';
import Button from '../components/Button';

const AdjustmentForm = () => {
  const[formData,setFormData]=useState({
    adj_type:'',
    product_id:'',
    batch_details:'',
    quantity:'',
    expiry_date:'',
    mrp:'',
    amount:''

});
const[totalAmount,setTotalAmount]=useState(0);
const[adjustments,setAdjustments]=useState([]);

useEffect(()=>{},[adjustments]);

  const handleChange = (e) => {
     e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const addIntoAdjustmentList=(e)=>
  {
    e.preventDefault();
    formData.amount = parseFloat(formData.mrp || 0) * parseFloat(formData.quantity||0);
    setAdjustments([...adjustments,formData]);
    setTotalAmount(totalAmount+ parseFloat(formData.amount)||0);
    setFormData({
    adj_type:'',
    product_id:'',
    batch_details:'',
    quantity:'',
    expiry_date:'',
    mrp:'',
    amount:''

});
  }

const headers=[ "adj_type",
    "product_id",
    "batch_details",
    "quantity",
    "expiry_date",
    "mrp","amount"];


const submitAdjustmentetails=()=>{
  const adjustmentsToSubmit = [adjustments,totalAmount];
  console.log("Submitting adjustments:", adjustmentsToSubmit);
  setAdjustments([]);
  setTotalAmount(0);  
}
  return (
    
    <>
    
    <form action="">

        <label >
        <input type="radio" name="adj_type" id="up" value="U" checked={formData.adj_type==="U"}  onChange={handleChange} required />Stock Up
        </label>
        <label >
        <input type="radio" name="adj_type" id="down" value="D"  checked={formData.adj_type==="D"} onChange={handleChange} required/>Stock Down
        </label>
        <label htmlFor="product_id">product Id
        <input type="text" name="product_id" id="product_id"  value={formData.product_id}  onChange={handleChange} required />
        </label>
        <label htmlFor="batch_details">Batch-Batch Id
            <input type="text" name="batch_details" id="batch_details" value={formData.batch_details}  onChange={handleChange} required />
        </label>
        <label htmlFor="quantity">
            quantity
            <input type="number" name="quantity" id="quantity" value={formData.quantity}  onChange={handleChange} required />
        </label>
        <label htmlFor="expiry_date">
            Expiry Date 
            <input type="date" name="expiry_date" id="expiry_date" value={formData.expiry_date}   onChange={handleChange} required/>
        </label>
        <label htmlFor="mrp">
            mrp
            <input type="number" step="0.001"  name="mrp" id="mrp"  value={formData.mrp}   onChange={handleChange} required />
        </label>
         <label htmlFor="amount">
            Amount
            <input type="number" step="0.001" name="amount" id="amount" value={formData.mrp * formData.quantity}   onChange={handleChange} required disabled />
        </label>
        <input type="button" onClick={(e)=>addIntoAdjustmentList(e)} value="Add" />
    </form>

    <h3>Added Adjustments </h3>

    <DynamicTable  headers={headers} data ={ adjustments} amount ={totalAmount}/>
    <button onClick={submitAdjustmentetails} name="Submit" >submit</button>
    </>
  )
}

export default AdjustmentForm




