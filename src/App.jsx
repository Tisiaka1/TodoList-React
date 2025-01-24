import { useState } from 'react'


import All from './All'
import './app.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {


  return (
    <div >
      <Todo />


    </div>
  )
}

function Todo() {



  const [Value, setValue] = useState('')
  const [TextArr, setTextArr] = useState([])


  const [BgColor, setBgColor] = useState(true)
  const [BgImage, setBgImage] = useState(true)
  const [inc, setInc] = useState(0)
  const addTodo = () => {
    if (Value.trim() !== '') { 
      setTextArr([...TextArr, { ID: inc, Text: Value }]);
      setInc(inc + 1);
      setValue(''); 
    }
  };



  const White = 'white';
  const black = ' #25273C';
  const changeBackground = () => {
    setBgColor(!BgColor)

    document.body.style.backgroundColor = BgColor
      ? 'rgb(210, 210, 210)'
      : '#161722';



  }


  const LightModeImg = "src/image/bg-mobile-light.jpg";
  const DarkModeImg = "src/image/bg-mobile-dark.jpg";

  return (

    <div className='body'>
      <div className="MainContainer">

        {BgColor ? (
          <div className='DarkMode'>

            <img src={DarkModeImg} alt="" className='Image' />

            <div className='content'>
              <div className="ToDOImg">
                <h1>TODO </h1>
                <img src="src\image\icon-sun.svg" alt="" onClick={changeBackground} />

              </div>

              <div>

              </div>
              <input type="text" placeholder='Take the dogs for a walk...' onChange={(e)=>setValue(e.target.value)}  value={Value} />

              <FontAwesomeIcon icon={faPlus} className='plus' onClick={addTodo} />



            </div>

        



            <All Message={TextArr} setTextArr = {setTextArr} value={Value} color={black}/>
           

          </div>

        ) :
          //light moode 


          (

            <div className='LightMode'>
              <img src={LightModeImg} alt="" className='ImageLight' />

              <div className='contentLight'>
                <div className="ToDOImg">
                  <h1>TODO </h1>
                  <img src="src\image\icon-moon.svg" alt="" onClick={changeBackground} />

                </div>
                <input type="text" placeholder='Take the dogs for a walk...' onChange={e => setValue(e.target.value)} value={Value}/>
                <FontAwesomeIcon icon={faPlus} className='plusLight' onClick={addTodo} />
                
              </div>

              <All Message={TextArr} setTextArr = {setTextArr} value={Value} color={White} />
              
            </div>)}


<p id='React'>First React Project by Taofeeq isiaka </p>

      </div>
      
    </div>


  )
}




export default App
