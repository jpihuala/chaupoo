

export const productos = [
    { id: 1,  foto: 'alpha',categoria: 'shampoo', name: "Alpha", price: 950 },
    { id: 2,  foto: '../Img/beta.jpeg',categoria: 'shampoo', name: "Beta", price: 950 },
    { id: 3,  foto: '../Img/delta.jpeg',categoria: 'shampoo', name: "Delta", price: 950 },
    { id: 4,  foto: '../Img/gamma.jpeg',categoria: 'shampoo', name: "Gamma", price: 950 },
    { id: 5,  foto: '../Img/kappa.jpeg',categoria: 'shampoo', name: "Kappa", price: 950 },
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