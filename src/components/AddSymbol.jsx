import React from 'react'

class AddSymbol extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          symbol: 'SPX',
          shareQuantity: 0,
          sharePrice: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        this.setState({[name]: value});
    }
    
    handleSubmit(event) {
        alert(`You bought ${this.state.shareQuantity} shares of ${this.state.symbol} at ${this.state.sharePrice} dollars per share!`);
        event.preventDefault();
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Symbol:
                    <input type="text" name={'symbol'} value={this.state.symbol} onChange={this.handleChange} />
                    </label>
                    <label>
                    Number of shares:
                    <input type="text" name={'shareQuantity'} value={this.state.shareQuantity} onChange={this.handleChange} />
                    </label>
                    <label>
                    Price per share:
                    <input type="text" name={'sharePrice'} value={this.state.sharePrice} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddSymbol
