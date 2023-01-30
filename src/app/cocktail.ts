export class Cocktail {
    name: string | undefined= 'cocktail';
    prix:string | undefined=  '10 balles';
    image:string | undefined= 'lien de la photo';
    constructor(name? :string, prix? :string, image? :string) {
        this.name= name ;
        this.prix= prix;
        this.image= image;
    }

}
