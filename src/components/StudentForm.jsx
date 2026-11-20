import { useState } from 'react';
import img from '../assets/img.jpg';
import "./StudentForm.css";
function ajouterEtudiant(nouveletudiant) {
  const etudiantAvecid = {
    ...nouveletudiant,
    id: date.now(),
  };
  setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecid]);
}

function StudentForm({onAjouterEtudiant,etudiantAModifier,onModifieretudiant}) {
  console.log("etudiantAModifier : ",etudiantAModifier);
  const [nom, setNom] = useState(etudiantAModifier?.nom||"");;
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom||"");
  const [email, setEmail] = useState(etudiantAModifier?.email||"");
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone||"");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere||"");
  const [annee, setAnnee] = useState(etudiantAModifier?.Annee||"");
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe||"");
  const [ville, setVille] = useState(etudiantAModifier?.ville||"");
  const [erreurs, setErreurs] = useState({});
  const [formData, setformData] = useState({
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  filiere: "",
  annee: "",
  groupe: "",
  ville: "",
});
  function validerformulaire(){
    const nouvelerreurs ={} ;
    if (!formData.nom.trim()) {
      nouvelerreurs.nom = "Nom est obligatoire";
    }
    if(!formData.prenom.trim()){
      nouvelerreurs.prenom = "prenom est obligatoire";
    }
    setErreurs(nouvelerreurs);
    return Object.keys(nouvelerreurs).length ===0 ;
  }
  function handleSubmit(e) {
  e.preventDefault();
  console.log("Avant soumission :",formData);
  const nouveletudiant = {
    nom : formData.nom,
    prenom : formData.prenom,
    email : formData.email,
    telephone : formData.telephone,
    filiere : formData.filiere,
    Annee : formData.annee,
    groupe : formData.groupe,
    ville : formData.ville,
  };
  if(!validerformulaire()){
    return;
  }
  if (etudiantAModifier) {
    onModifieretudiant({
      ...etudiantAModifier,...nouveletudiant,
    });
  }else {
    onAjouterEtudiant(nouveletudiant);
  } 
  console.log("nouvel etudiant ajoute : ",nouveletudiant);
  onAjouterEtudiant(nouveletudiant);
}
  return (
    <>
      <h1>Ajouter un etudiant</h1>
      <h2>{etudiantAModifier ? "Modifier un etudiant" : "Ajouter un etudiant"}</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <label htmlFor="nom">Nom : </label><br></br>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={(e) => setformData({...formData ,nom:e.target.value})} required /><br></br>
        {erreurs.nom &&<p className="erreur-msg">{erreurs.nom}</p>}
        <label htmlFor="prenom">Prenom :</label><br></br>
        <input type="text" id="prenom" name="prenom" value={FormData.prenom} onChange={(e) => setformData({...formData ,prenom:e.target.value})} required /><br></br>
        {erreurs.prenom &&<p className="erreur-msg">{erreurs.prenom}</p>}
        <label htmlFor="email">Email :</label><br></br>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>

        <label htmlFor="telephone">Telephone :</label><br></br>
        <input type="text" id="telephone" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)}required /><br></br>

        <div className="form_group">
          <label htmlFor="filiere">Filliere :</label><br></br>
          <select name="filiere" id="filiere" value={filiere} onChange={(e) => setFiliere(e.target.value)}>
            <option>choisir une filiere</option>
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

        <button type="submit" className='btn_submit'>{etudiantAModifier ? "Modifier" : "Ajouter"}</button>
      </form>
    </>
  );  
}

export default StudentForm;