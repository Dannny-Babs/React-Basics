import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);            
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {   
        setPayment(event.target.value);
    }
   
    return (
        <div  className='info-form'>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>      

            <input type="number" value={quantity} onChange={handleQuantityChange}  />
            <p>Quantity: {quantity}</p>      

            <textarea value={comment} onChange={handleCommentChange} placeholder='Say something Baby.....'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>
        </div>
    );
 
}

export default MyComponent



function MySecondComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('mrTalo');
    }

    const toggleEmploymentStatus = () => {
         setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>

            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmploymentStatus}>Toggle Employment</button>
        </div>
    );
}
