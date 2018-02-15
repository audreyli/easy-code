var loopIndex = 0;

var generateCode = function(parsedOutput) {
	var command = parsedOutput.command;
	var type = command["type"];
	var code;
	switch(type) {
		case "initialize":
			var variable = command["variable"]["value"];
			var value = getValue(command["value"]);
			code = variable + " = " + value;
			break;

		case "set":
			var variable = command["variable"]["value"];
			var value = getValue(command["value"]);
			code = variable + " = " + value;
			break;

		case "return":
			var value = getValue(command["value"]);
			code = "return " + value;
			break;

		case "print":
			var value = getValue(command["value"]);
			code = "print " + value;
			break;

		case "forloop":
			var forloopVar = getLoopVar(loopIndex);
			loopIndex += 1;
			if (command["loopOver"] == "integer") {
				var loopEnd = "range(" + command["value"]["value"] + ")";
			} else {
				var loopEnd = command["value"]["value"];
			}
			code = "for " + forloopVar + " in " + loopEnd + ":";
			break;

		case "ifstatement":
			var boolObject = command["boolean"];
			var boolExpression = parseCompoundBoolean(boolObject);
			code = "if " + boolExpression + ":";
			break;

		case "whileloop":
			var boolObject = command["boolean"];
			var boolExpression = parseCompoundBoolean(boolObject);
			code = "while " + boolExpression + ":";
			break;
	}
	return code;
};

var getComparator = function(comparatorString) {
	var symbol;
	switch(comparatorString) {
		case "less than":
			symbol = "<";
			break;

		case "greater than":
			symbol = ">";
			break;

		case "equal to":
			symbol = "==";
			break;

		case "not equal to":
			symbol = "!=";
			break;

		case "less than or equal to":
			symbol = "<=";
			break;

		case "greater than or equal to":
			symbol = ">=";
			break;
	}
	return symbol;
};


var getOperator = function(operatorString) {
	var operator;
	switch(operatorString) {
		case "+":
		case "plus":
			operator = "+";
			break;

		case "-":
		case "minus":
			operator = "-";
			break;

		case "*":
		case "times":
			operator = "*";
			break;

		case "/":
		case "divided by":
			operator = "/";
			break;

		case "%":
		case "mod":
			operator = "%";
			break;
	}
	return operator;
};

var parseCompoundBoolean = function(boolList) {
	var first = parseBoolExpression(boolList[0]);
	if (len(boolList) > 1) {
		var operator = boolList[1];
		var second = parseBoolExpression(boolList[2]);
	}
	return "(" + first + ") " + operator + " (" + second + ")";
};

var parseBoolExpression = function(boolObject) {
	var val1 = getValue(boolObject["firstVal"]);
	var val2 = getValue(boolObject["secondVal"]);
	var comparator = getComparator(boolObject["comparator"]);
	return val1 + " " + comparator + " " + val2;

};

var getValue = function(valueObject) {
	if (valueObject["type"] == "string") {
		var value = "'" + valueObject["value"] + "'";
	} else if (valueObject["type"] == "math") {
		var value = getValue(valueObject["value1"]) + " " + getOperator(valueObject["operator"]) + " " + getValue(valueObject["value2"]);
	}
	else {
		var value = valueObject["value"];
	}
	return value;
};

var getLoopVar = function(index)
{
    var possible = "abcdefghijklmnopqrstuvwxyz";
    return possible[index];
};