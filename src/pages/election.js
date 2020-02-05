import React from 'react'

class Election extends React.Component {

    state = {
        loading: true,
        error: false,
        fetchedData: [],
    }
    
    componentDidMount() {
        fetch ('https://prod-27.westeurope.logic.azure.com/workflows/c85c48243b34415a9f5d1958bb38f45e/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=NsosBvcZcWDgbp61diURKgCcK-iERLOjwdJ7YBA0lBU')
        .then(response => {
             return response.json();
        })
        .then(json => {
            this.setState({
                fetchedData: json.districts,
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
            character => (<p key={ character.Name }>Distrito de { character.Name } - Partido A: { character.PartyA } - Partido B: { character.PartyB }</p>
        ))
        )}
    </div>
    )
  }
}

export default Election