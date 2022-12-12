import { createContext, useContext, useState } from 'react';

const appContext = createContext();

export const { Provider } = appContext;

export const useAppContext = () => {
  return useContext(appContext);
};

const AppProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const filterCompanies = (name, value) => {
    console.log(name, value);
    if (name === 'status') {
      //filtrar
      const filtered = value === 'all' ? companies : companies.filter((company) => company.status === value);
      setFilteredCompanies(filtered);
    } else if (name === 'order') {
      //odenar
      const ordered =
        value === 'asc'
          ? filteredCompanies.sort((a, b) => a.name.localeCompare(b.name))
          : filteredCompanies.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  const orderCompanies = (name, value) => {};

  const value = {
    companies,
    setCompanies,
    filteredCompanies,
    setFilteredCompanies,
    orderCompanies,
    filterCompanies,
  };

  return <Provider value={value}>{children}</Provider>;
};

export default AppProvider;
