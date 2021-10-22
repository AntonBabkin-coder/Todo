import React, {Component} from 'react'
import './task.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types';



export default class Task extends Component  {

  
  
    
  static defaultProps = {
      onDeleted: () => {},
      onToggleDone: () => {},
      label: {},
      done: false,
      time: '',
      
     
      
    };

    static propTypes = {
      label: PropTypes.string,
      done: PropTypes.bool,
      time: PropTypes.number,
      onDeleted: PropTypes.func,
      onToggleDone: PropTypes.func,
      
      
       
    }

    
      state = {
        redaction: false,
        okey: this.props.label
      }

    

    redactingTask = () => {
      
      this.setState ( {
        
        redaction: true
      })
      
    }

    saveCgange = (text) =>  {
      
    if (text.keyCode === 13) {
      text.preventDefault();
      this.setState({
        okey: text.target.value,
        redaction: false

    })
    }
      
    
  }
    
  
            
    render() {  

      const { label, onDeleted, onToggleDone, done, time } = this.props;
      const {redaction, okey} = this.state
     
      let changed = '';
      if (done) {
        changed += 'completed'
      }

      
      if (redaction) {
        changed = 'editing'
        
      }

      
      
      
           
      return (
          <li className={changed}>
              <div className="view">
              
                <input className="toggle" type="checkbox" defaultChecked={done === true ?  true : done === true} onClick = {onToggleDone} />
                <label>
                  <span className="description">{okey}</span>
                  <span className="created">created {formatDistanceToNow(time, { includeSeconds: true })} ago</span>
                </label>
                <button type='button' label='edit' className="icon icon-edit" onClick = {this.redactingTask} />
                <button type='button' label='destroy' className="icon icon-destroy" onClick = {onDeleted} />
                
              </div>
              <input type="text" className='edit' defaultValue={label}  onKeyDown = {this.saveCgange} />
            </li>
      )
    }
} 



