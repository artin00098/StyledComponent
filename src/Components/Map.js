import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';

class Mapp extends Component {
    constructor(props){
        super(props);
        this.state={
          selectedId:null,
          hidden : false
        }
      }
      handleClick = id =>{
          if(this.state.selectedId !== id ){
              this.setState({selectedId:id});
          }
          else if(this.state.selectedId === id ) {
            this.setState({selectedId : null})
          }
            
      }
      
      render(){
        return (
        <div className="App">
        {
          this.props.data.map(item =>
            <ListItem 
            key = {item.id} 
            isSelected = { this.state.selectedId === item.id ? true : false } 
            handleClick = {this.handleClick} 
            item = {item} 
            />
          )
        }
          
        </div>
      );}
    }


export default Mapp;