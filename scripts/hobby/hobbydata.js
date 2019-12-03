const hobbyCollection = [
{
  name: "climbing",
  location: ["indoors", "outdoors"],
  exertion: "physical",
  participants: ["solo", "duo"],
  image: "./styles/photo/climb.jpg" 
},
{
  name: "mountain biking",
  location: ["outdoors"],
  exertion: "physical",
  participants: ["solo"],
  image: "./styles/photo/bike.jpg"
},
{
  name: "reading",
  location: ["indoors"],
  exertion: "mental",
  participants: ["solo"],
  image: "./styles/photo/reading.jpg"
},
{
  name: "video games",
  location: ["indoors"],
  exertion: "none",
  participants: ["solo"],
  image: "./styles/photo/gamer.jpg"
}
]
export const useHobby = () => {
  return hobbyCollection
}