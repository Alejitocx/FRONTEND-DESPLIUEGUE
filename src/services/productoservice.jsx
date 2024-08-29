import axios from 'axios';

export const getProductos = async () => {
  try {
      const response = await axios.get('https://striking-reprieve-production.up.railway.app/ver/Produc/Productos');
      return response.data;
  } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
  }
};


export const deleteProducto = async (id_PRODUCT) => {
  await axios.delete(`https://striking-reprieve-production.up.railway.app/ver/Produc/ProductE/${id_PRODUCT}`);
};