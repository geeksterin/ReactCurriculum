import React from 'react'

function Academic_Details() {
  return (
   <>
        <h1>Academic Details</h1>
        <table style={{border: "1px solid black"}}>
        <tr style={{border: "1px solid black"}}>
          <th style={{border: "1px solid black"}}>Course</th>
          
          <th style={{border: "1px solid black"}}>School/Institution</th>
          <th style={{border: "1px solid black"}}>Marks</th>
        </tr>
        <tr>
          <td style={{border: "1px solid black"}}>Matriculation</td>
          <td style={{border: "1px solid black"}}>Bal bharti international school</td>
          <td style={{border: "1px solid black"}}>89.7%</td>
        </tr>
        <tr style={{border: "1px solid black"}}>
          <td style={{border: "1px solid black"}}>Intermediate</td>
          <td style={{border: "1px solid black"}}>Apejay International School</td>
          <td style={{border: "1px solid black"}}>85%</td>
        </tr>
        <tr style={{border: "1px solid black"}}>
          <td style={{border: "1px solid black"}}>B.Tech</td>
          <td style={{border: "1px solid black"}}>Guru Gobind Singh Indraprastha University</td>
          <td style={{border: "1px solid black"}}>71.4%</td>
        </tr>
      </table>
</>
    
  )
}

export default Academic_Details
