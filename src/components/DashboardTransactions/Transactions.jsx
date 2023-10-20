import React from 'react'
import "./dashboardTransaction.css"
const Transactions = () => {
    const data = [
        {
            title: "Placement Talks with Seniors",
            action: "Accepted"
        },
        {
            title: "How to ace DSA",
            action : "Accepted"
        },
        {
            title: "Try not to laugh",
            action: "Rejected"
        }
    ]
  return (
    <div>
        <table className="GeneratedTable">
  <thead>
    <tr>
      <th>Events/Internships</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => {
        return (
            <tr>
            <td key={item.title}>{item.title}</td>
            <td >{item.action}</td>
            </tr>
        )
    })}
  </tbody>
</table>
    </div>
  )
}

export default Transactions