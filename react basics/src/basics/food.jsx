
function Food() {
    
    const food1 = "Pizza";
    const food2 = "Burger";

    
    return(
        <ul>
            <li>{food1}</li>
            <li>Fries</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food
