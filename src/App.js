import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr.Mahfuz",
    job: "Singer"
  }

  var person2 ={
    name: "Eva Rahman",
    job: "Kokil Konthi"
  }

  var style = {
    color : 'red',
    backgroundColor: 'yellow'
  }

  const nayoks = ["Anwar", "jafor", "salman", "Alomgir","bappi","suvo"]
  const allProducts = [
    {name:'PhotoShop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
  ]
  const productNames = allProducts.map(productName => productName.name);
  console.log("productName : ",productNames);

  const nayokNames = nayoks.map(nayokName => nayokName);
  console.log("Nayok Name :",nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done 22 <code>src/App.js</code> and save to reload.
        </p>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            allProducts.map(product => <li>{product.name}</li>)
          }
        </ul>
        
        <h1 className="" style={{color : 'cyan', backgroundColor: 'yellow'}}>My Heading : {person.name + " " + person.job}</h1>
        <h3 style={style}>Singer : {person2.name + " " + person2.job}</h3>
        <p>My first paragrap </p>


        <Boy nayok={nayoks[0]} naika="Mousumi"></Boy>
        <Boy nayok={nayoks[1]} naika="Shabana"></Boy>
        <Boy nayok={nayoks[2]} naika="Shabana"></Boy>
        <Boy nayok={nayoks[3]} naika="Shabana"></Boy>
        <Boy nayok="elias nayok" naika="Bobita"></Boy>



        {
          allProducts.map(product => <Product products = {product}></Product>)
        }
        <Product products = {allProducts[0]}></Product>
        <Product products = {allProducts[1]}></Product>
        <Product products = {allProducts[2]}></Product>
        
        

      </header>
    </div>

    
  );
}


function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrese = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  // const handleIncrese = () => setCount(count + 1)
  return(
    <div>
      <h1>Count : {count}</h1>
      {/* <button onClick={handleIncrese}>Increase</button> */}
      <button onClick={() => setCount(count - 1)}>Decreass</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Boy(props){

  const boyStyle = {
    color: 'red',
    border: '2px solid green',
    padding: '15px 10px',
    margin: '15px',
    width: '400px'
    
  }
  console.log(props)

  return(
    <div className='boys' style={boyStyle} >
      <h3>Nayok : {props.nayok}</h3>
      <p>Naika : {props.naika}</p>
    </div>
  )
}


function Product(props){

  const productStyle = {
    color: 'red',
    border: '2px solid green',
    padding: '15px 10px',
    margin: '15px',
    width: '400px',
    hight: '200px',
    display: 'float'
    
  }

  console.log(props);

  const {name, price} = props.products;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3 >Name: {name}</h3>
      <h5>Price: {props.products.price}</h5>
    </div>
  )
}


function Users (){

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("calling efect");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log("User : ",users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
