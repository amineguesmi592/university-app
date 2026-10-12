import './App.css'
import Image from './assets/img.jpg'
const etudiant = {
  nom:"Amine",
  prenom:"Guesmi",
  Email:"amineguesmi26@gmail.com",
  telephone:26497162,
  filiere:"genie logiciel et system d information",
  Annee:2026,
  Groupe:"GLSI2",
  ville:"Mahdia",
  image : Image
}
function App() {
  return (
    <>
    <div>
      <h1>Fichier etudiant</h1>
      <img src={etudiant.image} alt="IMAGE ETUD"  heigh="25%" width="25%"/>
      <p>Nom et Prenom : {etudiant.nom} {etudiant.prenom} </p>
      <p>Email: {etudiant.Email}</p>
      <p>Telephone : {etudiant.telephone}</p>
      <p>Filiere : {etudiant.filiere}</p>
      <p>Annee d'Etude : {etudiant.Annee}</p>
      <p>Groupe : {etudiant.Groupe}</p>
      <p>Ville : {etudiant.ville}</p>

      
      <button type="submit">conntacter</button>
    </div>  
    </>
  )
}

export default App
