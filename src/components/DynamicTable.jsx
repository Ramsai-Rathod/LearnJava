import React from 'react'

const DynamicTable = ({headers,data,amount=0}) => {
return (
    <>
    <table>
        <thead>
        <tr>
    {headers.map((header,index)=>(
        
        <th key={index}>
            {header}
        </th>
    ))}
    </tr>
    </thead>
    <tbody>
    {
        data.map((book)=>
        {
          return  (
            <tr key={book.bookId} style={{ borderBottom: '1px solid #ddd' }}>
                {headers.map((header,index)=>{
       
         console.log(book)
         return( <td key={index}>
           
         {book[header]}
        </td>
         )
        })}
             
            </tr>
          )
        })
    }
    {/* {
      amount>0? <tr> TotalAmount : {amount}</tr>:{}
    } */}
    </tbody>
    </table>
    </>
  )
}

export default DynamicTable