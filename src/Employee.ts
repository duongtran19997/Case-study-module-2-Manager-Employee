export class Employee {
    private _id:string;
    private _name:string;
    private _budget:string;
    private _email:string;
    constructor(id,name,budget,email) {
        this._name=name;
        this._id=id;
        this._budget=budget;
        this._email=email;
    }

    getid(): string {
        return this._id;
    }

    setid(value: string) {
        this._id = value;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string) {
        this._name = value;
    }

    getbudget(): string {
        return this._budget;
    }

    setbudget(value: string) {
        this._budget = value;
    }

    getemail(): string {
        return this._email;
    }

    setemail(value: string) {
        this._email = value;
    }
}
