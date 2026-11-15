import { useState } from 'react';
import img from '../assets/img.jpg';
import "./StudentForm.css";
function handleSubmit(e) {
  e.preventDefault();
  const nouveletudiant = {
    nom : nom,
    prenom : prenom,
    email : email,
    telephone : telephone,
    filiere : filiere,
    annee : annee,
    groupe : groupe,
    ville : ville,

  };
  console.log("nouvel etudiant ajoute : ",nouveletudiant);
  onajouteretudiant(nouveletudiant);
}
function ajouterEtudiant(nouveletudiant) {
  const etudiantAvecid = {
    ...nouveletudiant,
    id: date.now(),
  };
  setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecid]);
}

function StudentForm({onajouteretudiant}) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [filiere, setFiliere] = useState('GLSI');
  const [annee, setAnnee] = useState('');
  const [groupe, setGroupe] = useState('');
  const [ville, setVille] = useState('');
  return (
    <>
      <h1>Ajouter un etudiant</h1>
      <form onSubmit={handleSubmit} className="student-form">
        <label htmlFor="nom">Nom : </label><br></br>
        <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} /><br></br>

        <label htmlFor="prenom">Prenom :</label><br></br>
        <input type="text" id="prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} /><br></br>

        <label htmlFor="email">Email :</label><br></br>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>

        <label htmlFor="telephone">Telephone :</label><br></br>
        <input type="text" id="telephone" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} /><br></br>

        <div className="form_group">
          <label htmlFor="filiere">Filliere :</label><br></br>
          <select name="filiere" id="filiere" value={filiere} onChange={(e) => setFiliere(e.target.value)}>
            <option value="GLSI">GLSI</option>
            <option value="LCS">LCS</option>
            <option value="LBC">LBC</option>
          </select>
        </div><br></br>

        <label htmlFor="anne">Annee d'etude :</label><br></br>
        <input type="text" id="anne" name="anne" value={annee} onChange={(e) => setAnnee(e.target.value)} /><br></br>

        <label htmlFor="groupe">Groupe :</label><br></br>
        <input type="text" id="groupe" name="groupe" value={groupe} onChange={(e) => setGroupe(e.target.value)} /><br></br>

        <label htmlFor="ville">Ville :</label><br></br>
        <input type="text" id="ville" name="ville" value={ville} onChange={(e) => setVille(e.target.value)} /><br></br>

        <button type="submit" className='btn_submit'>Ajouter</button>
      </form>
    </>
  );
}

export default StudentForm;