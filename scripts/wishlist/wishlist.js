import { useWish } from "./wishdata.js"
import wishComponent from "./wish.js"

const wishListComponent = () => {
  const content = document.querySelector(".wishList__card");
  const wishes = useWish();

  content.innerHTML +=
    `
${
    wishes.map(
      (wish) => {
        return wishComponent(wish)
      }
    ).join(" ")
    }
`
}
export default wishListComponent;