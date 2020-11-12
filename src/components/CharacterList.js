import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '.././assets/css/Character.css';

function CharacterList({match}){
    useEffect(() => {
        fetchItems();
        console.log(match);
    }, []);

    const [items, setItem] = useState({});

    const fetchItems = async () => {
        const fetchItems = await fetch(
            "https://swapi.dev/api/people"
        );

        const items = await fetchItems.json();
        console.log(items.items);
        setItem(items.items);
    };

    return (
      <div div>
        <div>
          {items.map(item=>(
            <h1>{item.name}</h1>
          ))}
        </div>
      </div>

    );
}

export default CharacterList;

// class Character extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const params = this.props.match.params;
//         return (
//             <div>
//                 <p>Hola, soy un personaje de star wars, mi nombre es {params.id}
//                 </p>
//                 <Link to={"/"}>Volver</Link>
//             </div>
//         );
//     }
// }

// export default Character;