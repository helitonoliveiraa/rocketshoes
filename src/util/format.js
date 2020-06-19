export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// desestruturei o retorno de NumberFormat que no caso é o format
// e renomeei o format para formaPrice
