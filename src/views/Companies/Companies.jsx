import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles/Companies.module.scss';
import { useAppContext } from '../../context/appContext';
import Filters from '../../components/Filters/Filters';
import Table from '../../components/Table/Table';

const Companies = () => {
  //set endpoint
  const getCompaniesEndpoint = 'https://run.mocky.io/v3/acc7d390-68c5-47eb-a798-cd67cf872a59';
  const { setCompanies, setFilteredCompanies } = useAppContext();

  useEffect(() => {
    const getCompanies = async () => {
      const response = await axios.get(getCompaniesEndpoint);
      const orderById = response.data.companies.sort((a, b) => a.id - b.id);
      setCompanies(orderById);
      setFilteredCompanies(orderById);
    };
    getCompanies();
  }, []);

  return (
    <div className={styles.companies}>
      <h1 className={styles.title}>Companies</h1>
      <Filters />
      <Table />
    </div>
  );
};

export default Companies;
