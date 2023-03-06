import { useState, useEffect } from 'react';

export function useButtonReload() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleButtonClick() {
    setButtonClicked(true);
  }

  useEffect(() => {
    if (buttonClicked) {
      window.location.reload();
    }
  }, [buttonClicked]);

  return handleButtonClick;
}