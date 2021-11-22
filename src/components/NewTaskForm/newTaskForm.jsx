import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './newTaskForm.css';

const NewTaskForm = ({ onItemAdded }) => {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onLabelChange = (el) => {
    setValue(el.target.value);
  };

  const onMinChange = (el) => {
    setMin(el.target.value);
  };

  const onSecChange = (el) => {
    setSec(el.target.value);
  };

  const onSubmit = (el) => {
    el.preventDefault();

    if (value !== '') {
      onItemAdded(value, min, sec);
      setValue('');
      setMin('');
      setSec('');
    }
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={onLabelChange}
        value={value}
        ref={inputRef}
      />
      <input type="number" className="new-todo-form__timer" placeholder="Min" value={min} onChange={onMinChange} />
      <input type="number" className="new-todo-form__timer" placeholder="Sec" value={sec} onChange={onSecChange} />
      <input type="submit" hidden />
    </form>
  );
  // }
};

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
};

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};

export default NewTaskForm;
