import * as ArticlesModel from './articles';

ArticlesModel
.all()
.then((articles) => {
	console.log('articles count = ' + articles.length);
	let ind = Math.floor(Math.random() * articles.length);
	console.log('select index ' + ind + ', id = ' + articles[ind].id)

	return ArticlesModel.one(articles[ind].id);
})
.then((article) => {
	console.log(article);
	return ArticlesModel.remove(article.id);
})
.then((res) => {
	console.log('что с удалением? - ' + res);
	return ArticlesModel.remove(100);
})
.then((res) => {
	console.log('что с удалением? - ' + res);
	return ArticlesModel.all();
})
.then((articlesUpdatedList) => {
	console.log('articles count = ' + articlesUpdatedList.length);
})
.catch(err => {
	console.log(err);
})

