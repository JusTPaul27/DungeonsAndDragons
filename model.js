class Class {

    constructor(name, url){
        this.name = name;
        this.url = url;
    }

    static fromDbObj(obj){
        const classes = new Class(obj.name, obj.url);
        // monster.index = obj.index;
        return classes;
    }

}