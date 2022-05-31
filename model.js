class Monster {

    constructor(name, url){
        this.name = name;
        this.url = url;
    }

    static fromDbObj(obj){
        const monster = new Monster(obj.name, obj.url);
        // monster.index = obj.index;
        return monster;
    }

}