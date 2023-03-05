import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CognyContext from './CognyContext';

/* Este Context apenas repassa para os componentes filhos quando for atualizado o status do pedido
   ou inserido/excluido algum usuário */
function CognyProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const contextValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  CognyProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <CognyContext.Provider value={contextValue}>
      {children}
    </CognyContext.Provider>
  );
}

export default CognyProvider;
