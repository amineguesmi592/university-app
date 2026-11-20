import './StudentCard.css';
import img from '../assets/img.jpg';

function StudentCard({
  etudiant,
  id,
  nom,
  prenom,
  Email,
  telephone,
  filiere,
  Annee,
  Groupe,
  ville,
  image,
  supprimerEtudiant,
  modifierEtudiant,
}) {
  return (
    <div className="container">
      <div className="card">
        <h1>Fichier etudiant</h1>
        <p><strong>Id : {id}</strong></p>
        <img src={image || img} alt="IMAGE ETUD" height="25%" width="25%" />
        <p><strong>Nom et Prenom : {nom} {prenom}</strong></p>
        <p><strong>Email : {Email}</strong></p>
        <p><strong>Telephone : {telephone}</strong></p>
        <p><strong>Filiere : {filiere}</strong></p>
        <p><strong>Annee : {Annee}</strong></p>
        <p><strong>Groupe : {Groupe}</strong></p>
        <p><strong>Ville : {ville}</strong></p>

        <button onClick={() => supprimerEtudiant(id)}>
          Supprimer un étudiant
        </button>
        <button onClick={() => modifierEtudiant(etudiant)}>Modifier</button>
      </div>
    </div>
  );
}

export default StudentCard;