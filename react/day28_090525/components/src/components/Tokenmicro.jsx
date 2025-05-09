import React from 'react'


function Tokenmicro({ datas, total }) {
  //import an image dinamically
  const image = require(`../img/${datas.imagen}`)
  //console.log(datas)

  function comprar(e) {
    total((t) => t + datas.precio)

    //remove the token bought
    //1.Look for the node to hide 
    //let node = e.target.parentNode.parentNode
    let node = e.target.closest('.ficha')

    //2.Hide the node
    //node.style.visibility = 'hidden'
    //node.style.display = 'none'
    node.remove()
  }


  return (
    <div className='ficha'>
      <img src={image} alt='' />
      <div className='datos'>
        <h4>{datas.micro}</h4>
        <p >Precio: {datas.precio} €</p>
        <button onClick={comprar}>Comprar</button>
      </div>
    </div>
  )
}

export default Tokenmicro
