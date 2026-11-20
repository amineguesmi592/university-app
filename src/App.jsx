import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import StudentCard from './components/StudentCard.jsx';
import img from './assets/img.jpg';
import { useState } from 'react';
import StudentForm from './components/StudentForm.jsx';
function App() {
    const  [etudiant, setEtudiant] = useState(null);

    const  [etudiants,setEtudiants] = useState([
    {
    id:1,
    nom:"Amine",
    prenom:"Guesmi",
    Email:"amineguesmi26@gmail.com",
    telephone:26497162,
    filiere:"genie logiciel et system d information",
    Annee:"2éme annee",
    Groupe:"GLSI2",
    ville:"Mahdia",
    image : img,
    },

    {
    id:2,
    nom:"Sarre",
    prenom:"Trabelsi",
    Email:"sarratrabelsi@gmail.com",
    telephone:25469876,
    filiere:"genie logiciel et system d information",
    Annee:"2éme annee",
    Groupe:"GLSI2",
    ville:"Mahdia",
    image : img,
   },

    {
    id:3,
    nom:"Ahmed",
    prenom:"Ben Salah",
    Email:"ahmedbenschalah@gmail.com",
    telephone:25469876,
    filiere:"genie logiciel et system d information",
    Annee:"2éme annee",
    Groupe:"GLSI2",
    ville:"Mahdia",
    image : img,
    }
  ]);
      {etudiants.map((etudiant) => (
      <StudentCard
        key={etudiant.id}
        id={etudiant.id}
        nom={etudiant.nom}
        prenom={etudiant.prenom}
        Email={etudiant.Email}
        telephone={etudiant.telephone}
        filiere={etudiant.filiere}
        Annee={etudiant.Annee}
        Groupe={etudiant.Groupe}
        ville={etudiant.ville}
        image={etudiant.image}
        />
      ))}
  
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id:4,
      nom: "Ben Salem",
      prenom: "Yassine",
      Email: "bensalem.yassine@gmail.com",
      telephone: 25469876,
      filiere: "genie logiciel et system d information",
      Annee: "2ème annee",
      Groupe: "GLSI1",
      ville: "sfax",
      image: ""
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  }
  function supprimerEtudiant(id) {
    setEtudiants(anciensEtudiants => anciensEtudiants.filter(etudiant => etudiant.id !== id)
    );
  }
  const [etudiantAModifier, setetudiantAModifier] = useState(null);
  function modifierEtudiant(etudiant) {
    setetudiantAModifier(etudiant);
  }
  function enregistrerModification(etudiant) {
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map((etudiant) =>
          etudiant.id === etudiantAModifier.id
             ?{...etudiant , id: etudiant.id }
              :etudiant,
        ),
      );
  } 

  return (
    <div className="container">
      <Header />
      <Navbar />
      <StudentForm 
          key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
          onAjouterEtudiant={ajouterEtudiant}
          etudiantAModifier={etudiantAModifier}
          onModifieretudiant={enregistrerModification}  
      />
      {etudiants.map((etudiant,id) => (
        <StudentCard
          key={id}
          etudiant={etudiant}
          id={etudiant.id}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          Email={etudiant.Email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          Annee={etudiant.Annee}
          Groupe={etudiant.Groupe}
          ville={etudiant.ville}
          image={etudiant.image}
          supprimerEtudiant={supprimerEtudiant}
          modifierEtudiant ={modifierEtudiant}
        />
      ))}

      <button onClick={ajouterEtudiant}>
        Ajouter un étudiant
      </button>

      
      <Footer />
    </div>
  );
}
export default App;