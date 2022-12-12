import React from 'react';
import styles from './styles/Filters.module.scss';
import { useAppContext } from '../../context/appContext';

const Filters = () => {
  const { filterCompanies } = useAppContext();

  const onChangeHandler = (e) => {
    filterCompanies(e.target.name, e.target.value);
  };

  return (
    <div className={styles.filters}>
      <div>
        <label htmlFor='status-select'>Choose status: </label>
        <select name='status' id='status-select' onChange={onChangeHandler}>
          <option value='all'>All status</option>
          <option value='accepted'>Accepted</option>
          <option value='pending'>Pending</option>
          <option value='declined'>Declined</option>
        </select>
      </div>
      <div>
        <label htmlFor='order-select'>Order By: </label>
        <select name='order' id='order-select' onChange={onChangeHandler}>
          <option value='id'>ID</option>
          <option value='name'>Name</option>
          <option value='date'>Date</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
