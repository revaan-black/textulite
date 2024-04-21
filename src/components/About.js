import React, {useState} from 'react'


export default function About() {
    
const [themeBtn, setThemeBtn] = useState("Enable Dark Mode")
const [themeColor, setThemeColor] = useState({
    color: "black",
    backgroundColor: "White"
})
const handelTheme = () => {
    if (themeColor.color === "white") {
        setThemeColor({
            color: "black",
            backgroundColor: "White"
        })
        setThemeBtn('Enable Dark Mode')
    }else{
        setThemeColor({
            color: "white",
            backgroundColor: "black"
        })
        setThemeBtn('Enable Light Mode')
    }
}
  return (
    <>
    <div>
      <div className="container" style={themeColor}>
        <h2 className='my-3'>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi laudantium, iste, debitis aliquid quae ipsum quos odio fugiat reiciendis neque magnam illo ex culpa quibusdam dicta eaque rerum dolorum, dolor porro voluptatibus vitae quas temporibus. Quasi dolorem corrupti optio sint, vero accusantium commodi quam aspernatur. Illum, consequatur ipsum culpa saepe assumenda facere atque, quibusdam voluptas aliquid molestias, ex cum doloribus neque quaerat? Provident, exercitationem quis laborum officiis hic est? Placeat quidem dicta minima distinctio similique repellendus aut nihil ducimus earum eligendi sunt odio perspiciatis quam qui facilis repudiandae illum hic, blanditiis assumenda, dolore ex. Harum nemo repellat dicta, error dolores ipsam ad nostrum quos provident et dolorem voluptates delectus perferendis nulla architecto! Qui voluptatibus necessitatibus explicabo adipisci enim laudantium ullam et voluptate dolor similique, quia illo commodi voluptates! Consequatur hic, et animi sit quia dolorum magnam corporis! Repellendus sequi quam maiores quibusdam ducimus corporis omnis consectetur in labore a.</p>
      </div>
      <button className="btn btn-primary" onClick={handelTheme} >{themeBtn}</button>
    </div>
    </>
  )
}
