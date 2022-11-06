import "../../style/components/infoData.sass"
import "../../style/responsive.sass"
import followersImg from '../../img/followers.png'
import repositoryImg from '../../img/repository.png'
import companyImg from '../../img/company.png'
import locationImg from '../../img/location.png'
export function InfoData({followers, following, company, location, public_repos }){
  return (
    <div className="container_info">
      <div className="data">
        <img src={followersImg} alt="" />
        <p>{followers}</p>
        <p>Seguidores</p>
      </div>
      <div className="data">
        <img src={followersImg} alt="" />
        <p>{following}</p>
        <p>Seguindo</p>
      </div>
      <div className="data">
        <img src={repositoryImg} alt="" />
        <p>{public_repos}</p>
        <p>Repositorios</p>
      </div>
      <div className="data">
        <img src={companyImg} alt="" />
        <p>{company}</p>
      </div>
      <div className="data">
        <img src={locationImg} alt="" />
        <p>{location}</p>
      </div>
    </div>
  )
}
