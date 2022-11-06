import "../../style/components/card.sass"
import "../../style/components/customCard.sass/"
import "../../style/responsive.sass"
import logo from '../../img/logo.png'
import { InfoData } from "../infoData"
import { useState } from "react"
import { useEffect } from "react"
export function Card(){
  const [user, setUser] =
    useState({
      avatar: '',
      name: '',
      followers: '',
      following: '',
      public_repos: '',
      company: '',
      location: ''
    })
  const [userGithub, setUserGithub] = useState("github")
  const [nameUserGithub, setNameUserGithub] = useState('')
  const [backGroundColor, setBackGroundColor] = useState('')
  const [validationUser, setValidationUser] = useState(false)

  function getNameInput(){
    const newName =  nameUserGithub
    if(nameUserGithub == ''){
      setValidationUser(true)
    }else {
      setUserGithub(newName)
      setNameUserGithub('')
    }
  }


  function alterBackgroundColor(){
     return  setBackGroundColor(
        `#${parseInt((Math.random() * 0xFFFFFF))
          .toString(16)}`
      )

  }



  useEffect(()=> {

    async function fetchData(){
      const user = userGithub
      const response = await fetch(`https://api.github.com/users/${user}`)
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        company: data.company,
        location: data.location
      })
    }
    fetchData()
  }, [userGithub])

  return (
    <div className="container">
      {/* <div className={`container_card ${backGroundColor ? 'bg_conatinerCard' : ''}`}> */}
       <div className='container_card' style={{backgroundColor: backGroundColor}}>
        <div className="card">
          <div className="header">
            <div className="img">
              <img src={logo} alt="logo rocketseat cor roxa" />
            </div>
            <h1>{user.name}</h1>
          </div>
          <div className="content">
            <div className="avatar">
              <img src={user.avatar} alt="" />
            </div>
            <div className="info">
              <InfoData
                followers={user.followers}
                following={user.following}
                public_repos={user.public_repos}
                company={user.company}
                location={user.location}
              />
            </div>
          </div>
          <footer className="footer">
            <img src={logo} alt="" />
            <p>rocketcard</p>
          </footer>
        </div>
      </div>

      <div className='container_custom'>
        <div className="input_git">
          <input
            className={validationUser ? 'input_invalid' : ''}
            type="text"
            placeholder='Digite seu usuario do github'
            value={nameUserGithub}
            onChange={e => setNameUserGithub(e.target.value)}
          />
          <button
            className='btn_submit'
            onClick={getNameInput}
            >
            Enviar
          </button>
        </div>
        <h2>Customizar Rocketcard</h2>
        <button
          className='btn_generate_bg'
          onClick={alterBackgroundColor}
          >
          Gerar background
        </button>
      </div>
    </div>
  )
}
