//Задание: реализация экземпляра любого объекта. Количество методов и свойств не менее трёх.

let AutoCalc = function() {
	this.get = function(){
		this.model = prompt('Введите марку автомобиля');
		this.volue = +prompt('Введите объем двигателя(например: 1.5)');
		this.fuel = prompt('Введите тип топлива: бензин, дизель, пропан или метан.');
		this.transmission = prompt('Введите тип трансмиссии: АКПП или МКПП.');
		this.cycle = prompt('Введите цикл движения: город, трасса или смешанный.');
		this.distance = +prompt('Введите предполагаемое расстояние в километрах.');
		
		this.consumptionOfVolue();
	}

	this.consumptionOfVolue = function(){
		if(this.volue < 1.2){
			result = 4.8*this.distance/100;
		} else if(this.volue >= 1.2 && this.volue <= 1.4){
			result = 5.0*this.distance/100;
		} else if(this.volue > 1.4 && this.volue <= 1.7){
			result = 5.5*this.distance/100;
		} else if(this.volue > 1.7 && this.volue <= 2.2){
			result = 6*this.distance/100;
		} else if(this.volue > 2.2 && this.volue <= 2.8){
			result = 6.5*this.distance/100;
		} else if(this.volue > 2.8 && this.volue <= 3.5){
			result = 7*this.distance/100;
		} else if(this.volue > 3.5 && this.volue <= 4.4){
			result = 7.5*this.distance/100;
		} else {result = 8*this.distance/100;};
		
		this.consumptionOfFuel();
	};
	
	this.consumptionOfFuel = function(){
		switch(this.fuel){
			case 'бензин':
				result = result * 1.15;
			break;
			case 'дизель':
				result = result * 1;
			break;
			case 'пропан':
				result = result * 1.3;
			break;
			case 'метан':
				result = result * 1.3;
			break;
			default: alert('Ошибка ввода типа топлива');
		};
		
		this.consumptionOfTransmission();
	};
	
	this.consumptionOfTransmission = function(){
		switch(this.transmission){
			case 'МКПП':
				result = result * 1.0;
			break;
			case 'АКПП':
				result = result * 1.1;
			break;
			default: alert('Ошибка ввода типа трансмиссии');
		};
		
		this.consumptionOfCycle();
	};
	
	this.consumptionOfCycle = function(){
		switch(this.cycle){
			case 'город':
				this.consumptionGeneral = (Math.round(result * 1.3 * 100))/100;
			break;
			case 'трасса':
				this.consumptionGeneral = (Math.round(result * 1.0 * 100))/100;
			break;
			case 'смешанный':
				this.consumptionGeneral = (Math.round(result * 1.2 * 100))/100;
			break;
			default: alert('Ошибка ввода цикла движения');
		};
		this.consumptionOfMoney();
	};
	
	this.consumptionOfMoney = function(){
		switch(this.fuel){
			case 'бензин':
				this.money = (Math.round(this.consumptionGeneral * 2.1 * 100))/100;
			break;
			case 'дизель':
				this.money = (Math.round(this.consumptionGeneral * 2.1 * 100))/100;
			break;
			case 'пропан':
				this.money = (Math.round(this.consumptionGeneral * 1.2 * 100))/100;
			break;
			case 'метан':
				this.money = (Math.round(this.consumptionGeneral * 0.95 * 100))/100;
			break;
		};
		
		this.consumptionOfTime();
	};
	
	this.consumptionOfTime = function(){
		switch(this.cycle){
			case 'город':
				times = this.distance / 40;
			break;
			case 'трасса':
				times = this.distance / 90;
			break;
			case 'смешанный':
				times = this.distance / 70;
			break;
		};
		minuts = Math.ceil(times*60) % 60;
		hours = Math.trunc(Math.ceil(times*60)/60);
		this.time = hours+'ч. '+minuts+'мин.';
		this.information();
	};
	
	this.information = function(){
		alert('Вам необходимо ' +this.consumptionGeneral+ ' литров топлива. Стоимость топлива: ' +this.money+ 'BYN. Поездка займет ' +this.time);
		document.write('Автомобиль: '+this.model+ ';<br/>Объем двигателя: '+this.volue+ 'л.;<br/>Тип топлива: ' +this.fuel+ ';<br/>Тип трансмиссии: ' +this.transmission+ ';<br/>Цикл движения: ' +this.cycle+ ';<br/>Расстояние: ' +this.distance+ 'км.;<br/>Количество топлива: ' +this.consumptionGeneral+ 'л.;<br/>Стоимость топлива: ' +this.money+ 'р.;<br/>Примерное время поездки: ' +this.time);
	}
};	

let auto1 = new AutoCalc();
auto1.get();
console.log(auto1);
