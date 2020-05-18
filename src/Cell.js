import React from 'react'

class Cell extends React.Component {
    constructor(prop) {
        super()
        this.state = {
            color: prop.value
        }
    }

    changeValue = () => {
        const newColor =this.state.color = '#333'
        this.setState({
            color: newColor
        })
    }

    render() {
        return <div 
        className='cell'
        style={{backgroundColor: this.state.color}}
        onClick={this.changeValue}>

        </div>
    }

}

export default Cell;