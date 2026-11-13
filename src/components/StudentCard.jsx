import './StudentCard.css';
import img from '../assets/img.jpg';                                               
const etudiant = {                                                                
  nom:"Amine",                                                                    
  prenom:"Guesmi",                                                                
  Email:"amineguesmi26@gmail.com",                                                
  telephone:26497162,                                                             
  filiere:"genie logiciel et system d information",                               
  Annee:2026,                                                                     
  Groupe:"GLSI2",                                                                 
  ville:"Mahdia",                                                                 
  image : Image,                                                                  
}                                                                                 
  function StudentCard(props) {                                                   
    return(                                                                       
        <div className="container">                                               
           <div className="card">                                                 
                                                                                  
                <h1>Fichier etudiant</h1>
                <p><strong>Id : {props.id}</strong></p>                                     
                <img src={props.image} alt="IMAGE ETUD"  heigh="25%" width="25%"/>
                <p><strong>Nom et Prenom : {props.nom} {props.prenom}</strong></p>
                <p><strong>Email : {props.Email}</strong></p>                     
                <p><strong>Telephone : {props.telephone}</strong></p>             
                <p><strong>Filiere : {props.filiere}</strong></p>                 
                <p><strong> Annee : {props.Annee}</strong></p>                    
                <p><strong>Groupe : {props.Groupe}</strong></p>                   
                <p><strong>Ville : {props.ville}</strong></p>

                <button onClick={()=>props.supprimerEtudiant(props.id)}>
                        Supprimer un étudiant
                </button>
                <button onClick={()=>props.onmodifier(props.id)}>Modifier</button>
           </div>                                                                 
        </div>                                                                    
    )                                                                             
  }                                                                               
  export default StudentCard;                                                     