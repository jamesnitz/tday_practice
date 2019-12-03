import {useHobby} from "./hobbydata.js"
import hobbyComponent from "./hobby.js"

const HobbyListComponent = () => {
const content = document.querySelector(".hobbyList")
const hobbys = useHobby()


content.innerHTML += `
  ${
    hobbys.map(
      (singleHobby) => {
        return hobbyComponent(singleHobby)
      }
    ).join(" ")
  }
`
}
export default HobbyListComponent