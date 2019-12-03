const hobbyComponent = (hobby) => {
  return `
  <div class="hobby">
      <img class="hobby__img" src="${hobby.image}">
      <div>Hobby: ${hobby.name}</div>
      <div>Location: ${hobby.location.join(" ")}</div>
      <div>Exertion: ${hobby.exertion}</div>
      <div>Participants: ${hobby.participants.join(" ")}</div>
    </div>
     `
}

export default hobbyComponent