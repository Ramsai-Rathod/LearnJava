import React ,{useEffect, useState}from 'react'
import DynamicTable from '../components/DynamicTable';

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

useEffect(()=>{

},[adjustments]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const addIntoAdjustmentList=(e)=>
  {
    e.preventdefault;
    setAdjustments([...adjustments,formData]);
    setTotalAmount(totalAmount+formData.amount);
    setFormData({});
  }

const headers=[ "adj_type",
    "product_id",
    "batch_details",
    "quantity",
    "expiry_date",
    "mrp","amount"];


  return (
    
    <>
    
    <form action="">

        <label >
        <input type="radio" name="adj_type" id="up" value="U" checked={formData.adj_type==="U"}  onChange={handleChange}/>Stock Up
        </label>
        <label >
        <input type="radio" name="adj_type" id="down" value="D"  checked={formData.adj_type==="D"} onChange={handleChange}/>Stock Down
        </label>
        <label htmlFor="product_id">product Id
        <input type="text" name="product_id" id="product_id"  value={formData.product_id}  onChange={handleChange} />
        </label>
        <label htmlFor="batch_details">Batch-Batch Id
            <input type="text" name="batch_details" id="batch_details" value={formData.batch_details}  onChange={handleChange} />
        </label>
        <label htmlFor="quantity">
            quantity
            <input type="number" name="quantity" id="quantity" value={formData.quantity}  onChange={handleChange}  />
        </label>
        <label htmlFor="expiry_date">
            Expiry Date 
            <input type="date" name="expiry_date" id="expiry_date" value={formData.expiry_date}   onChange={handleChange}/>
        </label>
        <label htmlFor="mrp">
            mrp
            <input type="text" name="mrp" id="mrp"  inputMode="decimal" value={formData.mrp}   onChange={handleChange}
            pattern="[0-9]*[.,]?[0-9]*" />
        </label>
         <label htmlFor="amount">
            Amount
            <input type="text" name="amount" id="amount" value={formData.amount} inputMode="decimal"   onChange={handleChange}
            pattern="[0-9]*[.,]?[0-9]*" />
        </label>
        <input type="button" onClick={addIntoAdjustmentList} />
    </form>

    <h3>Added Adjustments </h3>

    <DynamicTable  headers={headers} data ={ adjustments} amount ={totalAmount}/>
    </>
  )
}

export default AdjustmentForm




