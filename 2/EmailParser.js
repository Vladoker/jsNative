
class EmailParser{
	constructor(email){
		this._email = email;
		this._isCorrect = this.emailTest(this._email);
		this._name;
		this._domain;
		this.spliter();
	}
	get email(){
		return this._email;
	}
	get name(){
		return this._name;
	}
	get domain(){
		return this._domain;
	}
	get isCorrect(){
		return this._isCorrect;
	}
	set email(value){
		this._email = value;
		this._isCorrect = this.emailTest(this._email);
		this.spliter();
	}

	emailTest(email){
		return (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(email);
	}


	spliter(){
		if( this.isCorrect ){
			let mas = this._email.split('@');
			this._name = mas[0];
			this._domain = mas[1];
		}
		else {
			this._name = null;
			this._domain = null;
		}
	}
	
}

export { EmailParser };