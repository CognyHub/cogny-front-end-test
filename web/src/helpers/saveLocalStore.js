export default function saveLocalStore(key, newItem) 
{
    const currentItems = JSON.parse(localStorage.getItem(key)) || [];
    const index = currentItems.findIndex((item) => item.id === newItem.id);
  
    if (index === -1) {
      currentItems.push(newItem);
    } else {
      currentItems[index] = newItem;
    }
    localStorage.setItem(key, JSON.stringify(currentItems));
}