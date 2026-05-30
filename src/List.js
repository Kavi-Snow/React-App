import React from "react";

function List() { 
    const fruits = ["Apple","Banana","Cherry"];
    const users = [
        {id: 1,name: 'Kavi', age:19 },
        {id: 2,name: 'Pavi', age:17},
    ]
    return ( 
        <div>
            <h1>Fruit List</h1>
            <ul> 
                {fruits.map((f,index) =>(
                    <li key={index}> {f} </li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id} >
                        {user.name} is {user.age} years old.
                    </li>
                ))}
            </ul>
            
            <table>
                <thead>
                  <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Age </th>
                  </tr>
                  {users.map((user) => (
                        <tr key={user.id}>
                        <td >{user.id}</td>
                        <td >{user.name}</td>
                        <td >{user.age}</td>
                        </tr>
                    ))}
                  
                </thead>
            </table>

            <ul>
                {users.map((user) => (
                    user.age > 30 ? (
                    <li key={user.id} >
                        {user.name} is over 30 years old.
                    </li> 
                    ): (
                     <li key={user.id} >
                        {user.name} is under 30 years old.
                    </li>
                    )
                ))}
            </ul>

            <h1></h1>
        </div>
    )
}
export default List;