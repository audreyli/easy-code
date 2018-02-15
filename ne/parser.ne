MAIN -> COMMAND

COMMAND -> (GENERATE | MODIFY) {% function(data) {return data[0][0]} %}
MODIFY -> (COMMENT | UNCOMMENT | DELETE | INDENT | UNINDENT | REDO | UNDO | NEWLINE) (_ THIS):? {% function(data) {
	return {command:
			{type:data[0][0]}, location:true, code:false};
}%}

COMMENT -> ("comment" | "common") {% function(data) {return "comment"} %}
UNCOMMENT -> ("uncomment" | "uncommon") {% function(data) {return "uncomment"} %}
DELETE -> "delete"  {% function(data) {return data[0]} %}
INDENT -> ("indent" | "intent") {% function(data) {return "indent"} %}
UNINDENT -> ("unindent" | "an indent") {% function(data) {return "unindent"} %}
REDO -> "redo" {% function(data) {return data[0]} %}
UNDO -> "undo" {% function(data) {return data[0]} %}
THIS -> "this line" {% function(data) {return data[0]} %}
NEWLINE -> "insert ":? "new line" {% function(data) {return data[1]} %}

GENERATE -> ACTION (_ LOCATION):? {% function(data) {
	if (data[1] == null) {
		return {command:data[0], location:false, code:true}
	} else {
		return {command:data[0], location:true, code:true}
	}
}%}
LOCATION -> "here" {% function(data) {return data[0]} %}
ACTION -> (INITIALIZE | SET | RETURN | FOR | IF | WHILE | PRINT) {% function(data) {return data[0][0]}%}

# COMMANDS
INITIALIZE -> "initialize" _ VARIABLE _ TO _ VALUE {% function(data) {
	return {type:"initialize", variable:data[2], value:data[6]}}%}
SET -> "set" _ VARIABLE _ TO _ VALUE {% function(data) {
	return {type:"set", variable:data[2], value:data[6]}}%}
RETURN -> "return" _ VALUE {% function(data) {
	return {type:"return", value:data[2]} }%}
FOR -> "create" _ "a ":? FORLOOP ((INT _ "times") | ("over" _ VARIABLE)) {% function(data) {
	if (data[4][0][0] == "over") {
		return {type: "forloop", loopOver: "variable", value: data[4][0][2]}
	} else {
		return {type: "forloop", loopOver: "integer", value: data[4][0][0]}
	}}%}
PRINT -> "print" _ VALUE {% function(data) {
	return {
		type: "print",
		value: data[2]
	}} %}
IF -> "if" _ BOOLEAN {% function(data) {
	return {type:"ifstatement", boolean:data[2]}}%}
WHILE -> "while" _ BOOLEAN {% function(data) {
	return {type:"whileloop", boolean:data[2]}}%}




FORLOOP -> "for loop" _ ("which" | "that") _ "iterates" _

COMPARATOR -> ("less than" | "greater than" | "equal to" | "not equal to" | "less than or equal to" | "greater than or equal to") {% function(data) {return data[0][0]} %}
BOOLEAN -> BOOLEAN_EXPRESSION (_ BOOL_OPERATOR _ BOOLEAN_EXPRESSION):? {% function(data) {
	if (data[1] == null) {
		return [data[0]];
	} else {
		return [data[0], data[1][1], data[1][3]];
	}
	}%}
BOOLEAN_EXPRESSION -> VALUE _ "is" _ COMPARATOR _ VALUE {% function(data) {
	return {firstVal:data[0], comparator:data[4], secondVal:data[6]}} %}

BOOL_OPERATOR -> (OR | AND) {% function(data) {return data[0][0]} %}
OR -> "or" {% function(data) {return data[0]} %}
AND -> "and" {% function(data) {return data[0]} %}

NAME -> [a-zA-Z]:+ {% function(d) {return {value:d[0].join("")}} %}
VARIABLE -> "variable" _ NAME {% function(data) {
	return {type:"variable", value:data[2]["value"]}} %}
INT -> "the value ":? [0-9]:+ {% function(d) {return {type:"int", value:d[1].join("")}} %}
STRING -> ("the string ") [a-zA-z" "]:+ {%
    function (data) {
		var value = data[1].join("");
		if (!data[0] && (value == "true" || value == "false")) {
			return {type: "boolean",
				value: value};
		} else {
		return {type: "string",
				value: value};
		}
    }
%}

MATH -> VALUE _ OPERATION _ VALUE {% function(data) {
	return {type: "math", value1:data[0], value2:data[4], operator:data[2]} }%}
OPERATION -> (PLUS | MINUS | TIMES | DIVIDE | MOD) {% function(data) {return data[0][0]} %}
PLUS -> ("plus" | "+") {% function(data) {return data[0][0]} %}
MINUS -> ("minus" | "-") {% function(data) {return data[0][0]} %}
TIMES -> ("times" | "*") {% function(data) {return data[0][0]} %}
DIVIDE -> ("divided by" | "/") {% function(data) {return data[0][0]} %}
MOD -> ("mod" | "%" ) {% function(data) {return data[0][0]} %}

VALUE -> VARIABLE {% function(data) {return data[0]} %} | STRING {% function(data) {return data[0]} %} | INT {% function(data) {return data[0]} %} | MATH {% function(data) {return data[0]} %}

_ -> " " {% function(data) {return data[0]} %}
TO -> ("to" | [2]) {% function(data) {return data[0][0]} %}
