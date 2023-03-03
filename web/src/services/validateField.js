export default function validateFields(quantity) {
  if (quantity < 1) return true;
  if (quantity > 0) return false;
}
