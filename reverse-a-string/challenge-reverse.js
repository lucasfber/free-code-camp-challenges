function reverseString(str) {
	/*
		str.split("") - String vazia _ gera um array com todos os caracteres da string
						String com espaço (" ") _ gera um array com todos as palavras do array
						sem parametros _ gera um array contendo a string como elemento.

		array.reverse() - inverte o array

		array.join("") - junta um array em uma string. parametros similares ao split() 

	*/
	return str.split("").reverse().join("");
}

reverseString("hello");