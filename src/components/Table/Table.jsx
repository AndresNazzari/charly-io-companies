import React from 'react';
import styles from './styles/Table.module.scss';
import { useAppContext } from '../../context/appContext';

const Table = () => {
  const { filteredCompanies } = useAppContext();

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company, index) => {
            return (
              <tr key={index}>
                <td>{company.id}</td>
                <td>{company.status}</td>
                <td>{company.name}</td>
                <td>{company.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
