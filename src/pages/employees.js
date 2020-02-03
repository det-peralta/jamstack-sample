import React from 'react'

class ListEmployees extends React.Component {

    state = {
        loading: true,
        error: false,
        fetchedData: [],
    }
    
    componentDidMount() {
        fetch ('https://swapi.co/api/people')
        .then(response => {
             return response.json();
        })
        .then(json => {
            this.setState({
                fetchedData: json.results,
                loading: false,
            })
        })
     }
 

  render() {

    const { loading, fetchedData } = this.state
    let i = 0;

    return (
    <div className="container">
        { loading ? 
        (<p>LOADING...</p>) 
        :
        (fetchedData.map(
            character => (<p key={ character.name }>Employee {++i} - { character.name }</p>
        ))
        )}
    </div>
    )
  }
}

export default ListEmployees