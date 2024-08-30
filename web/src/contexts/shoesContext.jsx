import { createContext, useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import getShoes from '../service/getShoes';
import Loading from '../components/loading';

const ShoesContext = createContext();

function ShoesProvider({ children }) {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoesData = await getShoes();
        setShoes(shoesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <ShoesContext.Provider value={{
      shoes,
      loading,
      error
    }}
    >
      {children}
    </ShoesContext.Provider>
  );
}

ShoesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ShoesProvider, ShoesContext };
