import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, settext] = useState("")
   const handleUpClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showAlert("Converting to Uppercase", "success")
  }
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showAlert("Converting to Lowercase", "success")
  }
  const handleSenCase = () => {
    let newtext = text.split(' ')
    .map(function (word, index) {
      // First character upper case else lower case
      return word.charAt(0)
      .toUpperCase() + word.slice(1)
      .toLowerCase();
    })
    .join(' ');
    settext(newtext);
    props.showAlert("Converting to Sentence case", "success")
  }
   const handleOnChange = (event) => {
    settext(event.target.value)
   }
   
   const wordCount = (text) => {
    if (text.trim().length === 0){
      return 0
    }else{
      const sentence = text.trim()
      const words = sentence.split(/\s+/)
      return words.length
    }
   }

 
  

  return (
    <>
    <div>
      
      <div className="my-3" style={{color: props.mode==='dark'?'white':'black', }}>
        <h1>{props.title}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#143d72', color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upcase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleSenCase} >Sentence case</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Text summary</h1>
        <p>{wordCount(text)} words and {text.length} characters</p>
        {/* <p>{wordCount(text)<=1?wordCount(text)-1: wordCount(text)} words and {text.length} characters</p> */}
        <p>{0.0008 * text.split(" ").length} Minutes of read this</p>
        <h3>Perview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        {console.log(text.charAt(0))}
    </div>
    </>
  )
}