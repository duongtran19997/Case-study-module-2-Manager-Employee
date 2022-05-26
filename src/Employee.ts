export class Employee {
    id:string;
    name:string;
    budget:string;
    email:string;
    constructor(id,name,budget,email) {
        this.name=name;
        this.id=id;
        this.budget=budget;
        this.email=email;
    }

    getid(): string {
        return this.id;
    }

    setid(value: string) {
        this.id = value;
    }

    getname(): string {
        return this.name;
    }

    setname(value: string) {
        this.name = value;
    }

    getbudget(): string {
        return this.budget;
    }

    setbudget(value: string) {
        this.budget = value;
    }

    getemail(): string {
        return this.email;
    }

    setemail(value: string) {
        this.email = value;
    }
}
