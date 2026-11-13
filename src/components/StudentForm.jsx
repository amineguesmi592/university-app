function StudentForm() {
    const [nom , setnom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [annee, setAnnee] = useState("");
    const [groupe, setGroupe] = useState("");
    const [ville, setVille] = useState("");
    return (
    <>
    <h1>Ajouter un etudiant </h1>
    <form> 
        <label form="nom"> Nom : </label>
        <input type="text" id="nom" name="nom" value={nom} onchange={(e) => setnom(e.target.value)}/>
        
        <label form="Prenom:"> Prenom :</label>
        <input type="text" id="prenom" name="prenom" value={prenom} onchange={(e) => setPrenom(e.target.value)}/>
        
        <label form="email"> Email :</label>
        <input type="text" id="email" name="email" value={email} onchange={(e) => setEmail(e.target.value)} />
        
        <label form="telephone"> Telephone :</label>
        <input type="text" id="telephone" name="telephone" value={telephone} onchange={(e) => setTelephone(e.target.value)} />
        <div className="form_group">
        <label form="filiere"> Filliere :</label>
        <select name="filiere" id="filiere" value={filiere} onchange={(e) => setFiliere(e.target.value)}>
            <option value="GLSI"> GLSI </option>
            <option value="LCS"> LCS </option>
            <option value="LBC"> LBC </option>
        </select>
        </div>
        <label form="anne"> Annee d'etude :</label>
        <input type="text" id="anne" name="anne" value={annee} onchange={(e) => setAnnee(e.target.value)} /> 

        <label form="groupe"> Groupe :</label> 
        <input type="text" id="groupe" name="groupe" value={groupe} onchange={(e) => setgroupe(e.target.value)} />
        <label form="ville"> Ville :</label>
        <input type="text" id="ville" name="ville" value={ville} onchange={(e) => setVille(e.target.value)} />
        <button type="submit"> Ajouter </button>
    </form>
    </>
    );

}
export default StudentForm;