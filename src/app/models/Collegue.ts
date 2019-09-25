class Collegue {
    matricule: string | undefined;
    nom: string | undefined;
    prenom: string | undefined;
    email: string | undefined;
    ddn: Date | undefined;
    photoUrl: string | undefined;

    constructor(matricule: string | undefined, nom: string | undefined, prenom: string | undefined, email: string | undefined, ddn: Date | undefined, photoUrl: string | undefined) {
        this.matricule = matricule;
        this.ddn = ddn;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.photoUrl = photoUrl;

    }




}
export { Collegue };