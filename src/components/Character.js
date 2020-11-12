import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '.././assets/css/Character.css';

function Character({match}){
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            "http://swapi.dev/api/people/" + match.params.id
        );

        const item = await fetchItem.json();
        setItem(item);
        console.log(item.name);
    };

    return (
        <div>
            <h1>Ficha de personaje</h1>
            <div>
            <table className="tableFicha">
                <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Altura</th>
                  <th>Sexo</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.height}</td>
                    <td>{item.gender}</td>
                  </tr>
                </tbody>
             </table>
            </div>
            <Link to={"/"}>Volver</Link>
        </div>
    );
}

export default Character;

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