const pizzas = require('../database/Pizzas.json')

module.exports = {
	index: (req, res) => {

		res.render("index", { pizzas })
	},


	show : (req, res) => {

		res.send('Salve!'+ req.params.id)
// Dever de casa, carregar a pizza de id passado (pizzas.find)

// renderizar a view pizza passando a pizza encontrada

//adequar o pizza.ejs para mostrar os igredientes, nome etc.

// colocar uma setinha para trocar de pizza (opcional)
	}
}
