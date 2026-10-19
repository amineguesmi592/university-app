import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import StudentCard from './components/StudentCard.jsx';
import img from './assets/img.jpg';
const etudiants = [
  {
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
];

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      {etudiants.map((etudiant) => (
      <StudentCard
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
      <Footer />
    </div>
      
  );
}
export default App;
