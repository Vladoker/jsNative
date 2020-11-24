import * as serverApi from './db';

function parseJson(response){
	try {
		let { data } = JSON.parse(response);
		return data;
	}
	catch(e) {
		throw new Error(e);
	}
}
function decorateErrorPlace(place) {
	return function(error){
		throw new Error(`server answer is not 200 in ${place}`);
	}
}

function all(){
  return serverApi.all()
	.then(parseJson)
	.catch(decorateErrorPlace('art list'));
}


function one(id){
	return serverApi.get()
	.then(parseJson)
	.catch(decorateErrorPlace('art one'));
}

function remove(id){
	return serverApi.remove(id)
	.then(parseJson)
	.catch(decorateErrorPlace('art remove'));
}

export {all, one, remove};