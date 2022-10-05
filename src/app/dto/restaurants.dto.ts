export interface Restaurants{
  id:number;
  nom: string;
  adresse: string;
  evaluations: evaluation[];
  moyenne:number;
}

export interface evaluation {
  id: number;
  evaluateur: string;
  commentaire:string;
  note:number;
}
