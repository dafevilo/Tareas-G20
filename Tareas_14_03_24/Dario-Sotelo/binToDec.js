function binToDec(binario) {
	let digito = 0;
	let decimal = 0;
	let pos = 0;
    while (binario > 0) {
		digito = binario % 10;
		decimal = decimal + digito * (Math.pow(2,(pos)));
		pos = pos + 1;
		binario = Math.trunc(binario/10);		
    }
	return decimal;  
}
binario = 11110;
decimal = binToDec(binario);
console.log(`El número binario ${binario} en decimal es: ${decimal}`);

