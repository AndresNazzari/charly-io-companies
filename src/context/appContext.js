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
    if (name === 'status') {
      //filtrar
      const filtered = value === 'all' ? companies : companies.filter((company) => company.status === value);
      setFilteredCompanies(filtered);
    } else if (name === 'order') {
      //ordenar
      let ordered;
      if (value === 'id') {
        ordered = filteredCompanies.sort((a, b) => (a.id < b.id ? -1 : 1));
      } else if (value === 'name') {
        ordered = filteredCompanies.sort((a, b) => (a.name < b.name ? -1 : 1));
      } else {
        ordered = filteredCompanies.sort((a, b) => (a.date < b.date ? -1 : 1));
      }

      setFilteredCompanies([...ordered]);
    }
  };

  const value = {
    companies,
    setCompanies,
    filteredCompanies,
    setFilteredCompanies,
    filterCompanies,
  };

  return <Provider value={value}>{children}</Provider>;
};

export default AppProvider;
