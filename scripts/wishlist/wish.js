const wishComponent = (wish) => {
  return `
    <div class="wish__card">
      <img src="${wish.image}">
      <div>Name: ${wish.name}</div>
      <div>Type: ${wish.type}</div>
      <div>Utility: ${wish.utility}</div>
    </div> 
  `
}

export default wishComponent;