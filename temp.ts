class Person {
    name: string;
    public constructor(name:string){
        this.name = name;
    }
    public setName(newName: string){
        this.name = newName;
    };
    public getName(): string{
        return this.name;
    }
}
class Student extends Person {
    age:number;
    public constructor(name: string, age: number){
        super(name);
        this.age = age;
    }
    public setName(newName: string){
        this.name = newName;
    };
    public getName(): string{
        return this.name;
    }
    public setAge(newAge:number){
        this.age = newAge;
    };
    public getAge(): number{
        return this.age;
    }
}
