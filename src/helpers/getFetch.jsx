

export const productos = [
    { id: '1',  foto: 'https://chaupoo.com.ar/wp-content/uploads/2020/05/JOS_1274-scaled.jpg', categoria: 'shampoo', name: "Alpha", price: 950 },
    { id: '2',  foto: 'https://chaupoo.com.ar/wp-content/uploads/2020/05/JOS_1214-scaled.jpg',categoria: 'shampoo', name: "Beta", price: 950 },
    { id: '3',  foto: 'https://chaupoo.com.ar/wp-content/uploads/2020/05/63270364-d5b8-43b9-94d4-12eba78aaf42.jpg', categoria: 'shampoo', name: "Delta", price: 950 },
    { id: '4',  foto: 'https://chaupoo.com.ar/wp-content/uploads/2020/05/db2d2d0d-1a83-4233-ad4b-afdeb190804e.jpg', categoria: 'serum', name: "Gamma", price: 950 },
    { id: '5',  foto: 'https://chaupoo.com.ar/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-05-at-00.04.13.jpeg', categoria: 'serum', name: "Kappa", price: 950 },
  ]
  
const getFetch = new Promise((res, rej)=>{
      let url = 'pihuala.com.ar'
      
      if (url === 'pihuala.com.ar') {
        setTimeout(() => {
          res(productos)        
        }, 3000);
      }else{
        rej ('400 not found')
      }
  })

export default getFetch


const producto = { id: '6',  foto: 'https://chaupoo.com.ar/wp-content/uploads/2020/05/JOS_1274-scaled.jpg', categoria: 'shampoo', name: "Alpha", price: 950 }


  export const getFetchProd = new Promise((res, rej)=>{
    let url = 'pihuala.com.ar'
    
    if (url === 'pihuala.com.ar') {
      setTimeout(() => {
        res(producto)        
      }, 3000);
    }else{
      rej('400 not found')
    }
  })
