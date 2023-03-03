export default function getLocalStorageValue()
{
    const itens = localStorage.getItem("itens");

    if (itens) {
      return JSON.parse(itens);
    } else {
      return [];
    }
}