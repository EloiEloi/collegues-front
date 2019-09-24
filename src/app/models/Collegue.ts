class Collegue {
    matricule: string;
    nom: string;
    prenom: string;
    email: string;
    dateDeNaissance: Date;
    photoUrl: string;

    constructor(matricule: string, nom: string, prenom: string, email: string, dateDeNaissance: Date, photoUrl: string) {
        this.matricule = matricule;
        this.dateDeNaissance = dateDeNaissance;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.photoUrl = photoUrl;

    }




}
export { Collegue };