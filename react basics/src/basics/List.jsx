
function List(props) {

    const fruits = [
        { id: 123, name: 'apple', calories: 52 },
        { id: 456, name: 'banana', calories: 96 },
        { id: 789, name: 'cherry', calories: 50 },
        { id: 987, name: 'date', calories: 282 },
        { id: 654, name: 'coconut', calories: 354 },
        { id: 321, name: 'grape', calories: 69 }
      ];

    const itemList = props.items;
    const category = props.category;

    //fruits.sort((a, b) => b.name.localeCompare(a.name));
    //fruits.sort((a, b) => a.calories - b.calories);
    //const lowCalories = fruits.filter(fruit => fruit.calories > 100);


    const fruitList = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{fruitList}</ul>
        </>
        );

}
export default List