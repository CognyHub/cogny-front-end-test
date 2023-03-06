import React, { useState, useEffect } from "react";

export function ItemLocal() {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("cart-store") || "[]");
    setElementos(dados);
  }, []);

  return (
    <div>
      <p>
        {elementos.length} Itens
      </p>
      </div>
  );
}
