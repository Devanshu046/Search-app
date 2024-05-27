import {  useState } from "react";
import "./App.css";

function App() {
  const [searchString , setSearchString] = useState('')
  const [dropValue , setDropValue] = useState('')
  
  const initialUsers = [
    {
      name: "Aarav",
      gender: "Male",
      mobile: "1234567890",
    },
    {
      name: "Aisha",
      gender: "Female",
      mobile: "2345678901",
    },
    {
      name: "Aditya",
      gender: "Male",
      mobile: "3456789012",
    },
    {
      name: "Ananya",
      gender: "Female",
      mobile: "4567890123",
    },
    {
      name: "Arjun",
      gender: "Male",
      mobile: "5678901234",
    },
    {
      name: "Avani",
      gender: "Female",
      mobile: "6789012345",
    },
    {
      name: "Dev",
      gender: "Male",
      mobile: "7890123456",
    },
    {
      name: "Dia",
      gender: "Female",
      mobile: "8901234567",
    },
    {
      name: "Girish",
      gender: "Male",
      mobile: "9012345678",
    },
    {
      name: "Isha",
      gender: "Female",
      mobile: "0123456789",
    },
  ];
  function handleSearchQuery(e){
    setSearchString(e.target.value)
  }
  function dropChange(e){
    setDropValue(e.target.value)
  }
 
    const filterring = initialUsers.filter(user =>{
      const searchBar = user.name.toLowerCase().includes(searchString.toLowerCase()) || user.mobile.includes(searchString);
      const dropSearch = dropValue === '' || user.gender === dropValue
      return searchBar && dropSearch
    })
    

  
 
  

  return (
  <>
  
    <input  type="text" placeholder="search.."  value={searchString} onChange={handleSearchQuery} />
 
    <select value={dropValue} onChange={dropChange}>
      <option value="" >All</option>
      <option value="Male" >Male</option>
      <option value="Female">Female</option>
    </select>
  <table>
    <thead>
      <tr>
        <td>name</td>
        <td>gender</td>
        <td>Mobile No</td>
      </tr>
    </thead>
    <tbody>
      {filterring.map((user,index)=>(
        <tr key={index}>
        <td>{user.name}</td>
        <td>{user.gender}</td>
        <td>{user.mobile}</td>
        </tr>
      ))}
    </tbody>
  </table>

  
  </>);
}

export default App;
