import React, { Component } from 'react';
import './ListItem.scss'
class ListItem extends Component {
    
    handleClick = id =>{
    this.props.handleClick(id)
    }
    render() {
        const {item} = this.props
        return (
            <div className = 'divv general'>
                <div >
                    {item.name}
                    <button 
                    className = {`button_general ${this.props.isSelected  ? 'btn' : 'tbn'}`}
                    onClick = {()=>this.handleClick(item.id)}>
                         
                    </button>
                    {
                        this.props.isSelected && <div> { item.description} </div>
                    }
                    <hr />
                </div>
            </div>
        );
    }
}

export default ListItem;