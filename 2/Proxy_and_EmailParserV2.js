export class EmailParser{
    #private = {}

    constructor(email){
        this.email = email;
    }

    set email(email){
        let pr = this.#private;
        pr.email = email;
        pr.isCorrect = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);
        pr.name = pr.isCorrect ? pr.email.split('@')[0] : null;
        pr.domain = pr.isCorrect ? pr.email.split('@')[1] : null;
    }
    get email() {
        return this.#private.email;
    }
    get isCorrect() {
        return this.#private.isCorrect;
    }
    get name() {
        return this.#private.name;
    }
    get domain() {
        return this.#private.domain;
    }
}

export function watchObj(node, callback){
  return new Proxy(node, {   
    get(target, property){
        if(typeof target[property] === "object"){
            return watchObj(target[property], callback)
        }
        else if(typeof target[property] === "function"){
           return target[property].bind(target);
        }
        else {
          return target[property];
        }
    },
    set(target, property, value){
        target[property] = value;
        callback(property, value);
        return true;
    }
   });
}