import React, { Component } from 'react';
import './Task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import Timer from '../Timer/Timer';

export default class Task extends Component {
  state = {
    isRedaction: false,
    inputText: this.props.label,
  };

  redactingTask = () => {
    this.setState({
      isRedaction: true,
    });
  };

  saveChange = (text) => {
    if (text.keyCode === 13) {
      text.preventDefault();
      if (text.target.value !== '') {
        this.setState({
          inputText: text.target.value,
          isRedaction: false,
        });
      }
    }
  };

  render() {
    const { label, onDeleted, onToggleDone, done, time, min, sec } = this.props;
    const { isRedaction, inputText } = this.state;
    let changed = '';
    if (done) {
      changed += 'completed';
    }
    if (isRedaction) {
      changed = 'editing';
    }

    return (
      <li className={changed}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={done} onClick={onToggleDone} />
          <label>
            <span className="title">{inputText}</span>
            {(min === 0 && sec === 0) || min < 0 || sec < 0 ? null : <Timer min={min} sec={sec} />}
            <span className="description">created {formatDistanceToNow(time, { includeSeconds: true })} ago</span>
          </label>
          <button type="button" label="edit" className="icon icon-edit" onClick={this.redactingTask} />
          <button type="button" label="destroy" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <input
          ref={(input) => input && input.focus()}
          type="text"
          className="edit"
          defaultValue={label}
          onKeyDown={this.saveChange}
        />
      </li>
    );
  }
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  label: {},
  done: false,
  time: '',
  min: 0,
  sec: 0,
};

Task.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  time: PropTypes.number,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  min: PropTypes.number,
  sec: PropTypes.number,
};
