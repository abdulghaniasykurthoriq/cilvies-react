import React  from 'react'
import { Container } from 'react-bootstrap'
import HistoryService from '../../services/HistoryService'
import CardHistory from './cardHistory'
class HistoryPage extends React.Component{
    state={
        histories:[]
    }

    componentDidMount = async() => {
        
        await HistoryService.retrieveAll()
        .then(response => {
            const data = response.data;
            this.setState({histories:data})
            // console.log(data)
        })
    }

    render() {

        const renderData = this.state.histories.map(histories => {
            return (
                <CardHistory histories={histories} key={histories.id} refresh={this.componentDidMount}/>
            )
        })

        return (
            <Container className="bg-light">
                {renderData}
            </Container>
        )
    }
}

export default HistoryPage

