// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "MAIN", "symbols": ["COMMAND"]},
    {"name": "COMMAND$subexpression$1", "symbols": ["GENERATE"]},
    {"name": "COMMAND$subexpression$1", "symbols": ["MODIFY"]},
    {"name": "COMMAND", "symbols": ["COMMAND$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "MODIFY$subexpression$1", "symbols": ["COMMENT"]},
    {"name": "MODIFY$subexpression$1", "symbols": ["UNCOMMENT"]},
    {"name": "MODIFY$subexpression$1", "symbols": ["DELETE"]},
    {"name": "MODIFY$subexpression$1", "symbols": ["INDENT"]},
    {"name": "MODIFY$subexpression$1", "symbols": ["UNINDENT"]},
    {"name": "MODIFY$subexpression$1", "symbols": ["REDO"]},
    {"name": "MODIFY$subexpression$1", "symbols": ["UNDO"]},
    {"name": "MODIFY$subexpression$1", "symbols": ["NEWLINE"]},
    {"name": "MODIFY$ebnf$1$subexpression$1", "symbols": ["_", "THIS"]},
    {"name": "MODIFY$ebnf$1", "symbols": ["MODIFY$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "MODIFY$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "MODIFY", "symbols": ["MODIFY$subexpression$1", "MODIFY$ebnf$1"], "postprocess":  function(data) {
        	return {command:
        			{type:data[0][0]}, location:true, code:false};
        }},
    {"name": "COMMENT$subexpression$1$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMMENT$subexpression$1", "symbols": ["COMMENT$subexpression$1$string$1"]},
    {"name": "COMMENT$subexpression$1$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMMENT$subexpression$1", "symbols": ["COMMENT$subexpression$1$string$2"]},
    {"name": "COMMENT", "symbols": ["COMMENT$subexpression$1"], "postprocess": function(data) {return "comment"}},
    {"name": "UNCOMMENT$subexpression$1$string$1", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UNCOMMENT$subexpression$1", "symbols": ["UNCOMMENT$subexpression$1$string$1"]},
    {"name": "UNCOMMENT$subexpression$1$string$2", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UNCOMMENT$subexpression$1", "symbols": ["UNCOMMENT$subexpression$1$string$2"]},
    {"name": "UNCOMMENT", "symbols": ["UNCOMMENT$subexpression$1"], "postprocess": function(data) {return "uncomment"}},
    {"name": "DELETE$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DELETE", "symbols": ["DELETE$string$1"], "postprocess": function(data) {return data[0]}},
    {"name": "INDENT$subexpression$1$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INDENT$subexpression$1", "symbols": ["INDENT$subexpression$1$string$1"]},
    {"name": "INDENT$subexpression$1$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INDENT$subexpression$1", "symbols": ["INDENT$subexpression$1$string$2"]},
    {"name": "INDENT", "symbols": ["INDENT$subexpression$1"], "postprocess": function(data) {return "indent"}},
    {"name": "UNINDENT$subexpression$1$string$1", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UNINDENT$subexpression$1", "symbols": ["UNINDENT$subexpression$1$string$1"]},
    {"name": "UNINDENT$subexpression$1$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UNINDENT$subexpression$1", "symbols": ["UNINDENT$subexpression$1$string$2"]},
    {"name": "UNINDENT", "symbols": ["UNINDENT$subexpression$1"], "postprocess": function(data) {return "unindent"}},
    {"name": "REDO$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REDO", "symbols": ["REDO$string$1"], "postprocess": function(data) {return data[0]}},
    {"name": "UNDO$string$1", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UNDO", "symbols": ["UNDO$string$1"], "postprocess": function(data) {return data[0]}},
    {"name": "THIS$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THIS", "symbols": ["THIS$string$1"], "postprocess": function(data) {return data[0]}},
    {"name": "NEWLINE$ebnf$1$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEWLINE$ebnf$1", "symbols": ["NEWLINE$ebnf$1$string$1"], "postprocess": id},
    {"name": "NEWLINE$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "NEWLINE$string$1", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEWLINE", "symbols": ["NEWLINE$ebnf$1", "NEWLINE$string$1"], "postprocess": function(data) {return data[1]}},
    {"name": "GENERATE$ebnf$1$subexpression$1", "symbols": ["_", "LOCATION"]},
    {"name": "GENERATE$ebnf$1", "symbols": ["GENERATE$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "GENERATE$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "GENERATE", "symbols": ["ACTION", "GENERATE$ebnf$1"], "postprocess":  function(data) {
        	if (data[1] == null) {
        		return {command:data[0], location:false, code:true}
        	} else {
        		return {command:data[0], location:true, code:true}
        	}
        }},
    {"name": "LOCATION$string$1", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$1"], "postprocess": function(data) {return data[0]}},
    {"name": "ACTION$subexpression$1", "symbols": ["INITIALIZE"]},
    {"name": "ACTION$subexpression$1", "symbols": ["SET"]},
    {"name": "ACTION$subexpression$1", "symbols": ["RETURN"]},
    {"name": "ACTION$subexpression$1", "symbols": ["FOR"]},
    {"name": "ACTION$subexpression$1", "symbols": ["IF"]},
    {"name": "ACTION$subexpression$1", "symbols": ["WHILE"]},
    {"name": "ACTION$subexpression$1", "symbols": ["PRINT"]},
    {"name": "ACTION", "symbols": ["ACTION$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "INITIALIZE$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INITIALIZE", "symbols": ["INITIALIZE$string$1", "_", "VARIABLE", "_", "TO", "_", "VALUE"], "postprocess":  function(data) {
        return {type:"initialize", variable:data[2], value:data[6]}}},
    {"name": "SET$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SET", "symbols": ["SET$string$1", "_", "VARIABLE", "_", "TO", "_", "VALUE"], "postprocess":  function(data) {
        return {type:"set", variable:data[2], value:data[6]}}},
    {"name": "RETURN$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RETURN", "symbols": ["RETURN$string$1", "_", "VALUE"], "postprocess":  function(data) {
        return {type:"return", value:data[2]} }},
    {"name": "FOR$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOR$ebnf$1$string$1", "symbols": [{"literal":"a"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOR$ebnf$1", "symbols": ["FOR$ebnf$1$string$1"], "postprocess": id},
    {"name": "FOR$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "FOR$subexpression$1$subexpression$1$string$1", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOR$subexpression$1$subexpression$1", "symbols": ["INT", "_", "FOR$subexpression$1$subexpression$1$string$1"]},
    {"name": "FOR$subexpression$1", "symbols": ["FOR$subexpression$1$subexpression$1"]},
    {"name": "FOR$subexpression$1$subexpression$2$string$1", "symbols": [{"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOR$subexpression$1$subexpression$2", "symbols": ["FOR$subexpression$1$subexpression$2$string$1", "_", "VARIABLE"]},
    {"name": "FOR$subexpression$1", "symbols": ["FOR$subexpression$1$subexpression$2"]},
    {"name": "FOR", "symbols": ["FOR$string$1", "_", "FOR$ebnf$1", "FORLOOP", "FOR$subexpression$1"], "postprocess":  function(data) {
        if (data[4][0][0] == "over") {
        	return {type: "forloop", loopOver: "variable", value: data[4][0][2]}
        } else {
        	return {type: "forloop", loopOver: "integer", value: data[4][0][0]}
        }}},
    {"name": "PRINT$string$1", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRINT", "symbols": ["PRINT$string$1", "_", "VALUE"], "postprocess":  function(data) {
        return {
        	type: "print",
        	value: data[2]
        }} },
    {"name": "IF$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IF", "symbols": ["IF$string$1", "_", "BOOLEAN"], "postprocess":  function(data) {
        return {type:"ifstatement", boolean:data[2]}}},
    {"name": "WHILE$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHILE", "symbols": ["WHILE$string$1", "_", "BOOLEAN"], "postprocess":  function(data) {
        return {type:"whileloop", boolean:data[2]}}},
    {"name": "FORLOOP$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FORLOOP$subexpression$1$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FORLOOP$subexpression$1", "symbols": ["FORLOOP$subexpression$1$string$1"]},
    {"name": "FORLOOP$subexpression$1$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FORLOOP$subexpression$1", "symbols": ["FORLOOP$subexpression$1$string$2"]},
    {"name": "FORLOOP$string$2", "symbols": [{"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FORLOOP", "symbols": ["FORLOOP$string$1", "_", "FORLOOP$subexpression$1", "_", "FORLOOP$string$2", "_"]},
    {"name": "COMPARATOR$subexpression$1$string$1", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARATOR$subexpression$1", "symbols": ["COMPARATOR$subexpression$1$string$1"]},
    {"name": "COMPARATOR$subexpression$1$string$2", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARATOR$subexpression$1", "symbols": ["COMPARATOR$subexpression$1$string$2"]},
    {"name": "COMPARATOR$subexpression$1$string$3", "symbols": [{"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARATOR$subexpression$1", "symbols": ["COMPARATOR$subexpression$1$string$3"]},
    {"name": "COMPARATOR$subexpression$1$string$4", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARATOR$subexpression$1", "symbols": ["COMPARATOR$subexpression$1$string$4"]},
    {"name": "COMPARATOR$subexpression$1$string$5", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARATOR$subexpression$1", "symbols": ["COMPARATOR$subexpression$1$string$5"]},
    {"name": "COMPARATOR$subexpression$1$string$6", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARATOR$subexpression$1", "symbols": ["COMPARATOR$subexpression$1$string$6"]},
    {"name": "COMPARATOR", "symbols": ["COMPARATOR$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "BOOLEAN$ebnf$1$subexpression$1", "symbols": ["_", "BOOL_OPERATOR", "_", "BOOLEAN_EXPRESSION"]},
    {"name": "BOOLEAN$ebnf$1", "symbols": ["BOOLEAN$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "BOOLEAN$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "BOOLEAN", "symbols": ["BOOLEAN_EXPRESSION", "BOOLEAN$ebnf$1"], "postprocess":  function(data) {
        if (data[1] == null) {
        	return [data[0]];
        } else {
        	return [data[0], data[1][1], data[1][3]];
        }
        }},
    {"name": "BOOLEAN_EXPRESSION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOLEAN_EXPRESSION", "symbols": ["VALUE", "_", "BOOLEAN_EXPRESSION$string$1", "_", "COMPARATOR", "_", "VALUE"], "postprocess":  function(data) {
        return {firstVal:data[0], comparator:data[4], secondVal:data[6]}} },
    {"name": "BOOL_OPERATOR$subexpression$1", "symbols": ["OR"]},
    {"name": "BOOL_OPERATOR$subexpression$1", "symbols": ["AND"]},
    {"name": "BOOL_OPERATOR", "symbols": ["BOOL_OPERATOR$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "OR$string$1", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OR", "symbols": ["OR$string$1"], "postprocess": function(data) {return data[0]}},
    {"name": "AND$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AND", "symbols": ["AND$string$1"], "postprocess": function(data) {return data[0]}},
    {"name": "NAME$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "NAME$ebnf$1", "symbols": ["NAME$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NAME", "symbols": ["NAME$ebnf$1"], "postprocess": function(d) {return {value:d[0].join("")}}},
    {"name": "VARIABLE$string$1", "symbols": [{"literal":"v"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VARIABLE", "symbols": ["VARIABLE$string$1", "_", "NAME"], "postprocess":  function(data) {
        return {type:"variable", value:data[2]["value"]}} },
    {"name": "INT$ebnf$1$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INT$ebnf$1", "symbols": ["INT$ebnf$1$string$1"], "postprocess": id},
    {"name": "INT$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "INT$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "INT$ebnf$2", "symbols": ["INT$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "INT", "symbols": ["INT$ebnf$1", "INT$ebnf$2"], "postprocess": function(d) {return {type:"int", value:d[1].join("")}}},
    {"name": "STRING$subexpression$1$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STRING$subexpression$1", "symbols": ["STRING$subexpression$1$string$1"]},
    {"name": "STRING$ebnf$1", "symbols": [/[a-zA-z" "]/]},
    {"name": "STRING$ebnf$1", "symbols": ["STRING$ebnf$1", /[a-zA-z" "]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "STRING", "symbols": ["STRING$subexpression$1", "STRING$ebnf$1"], "postprocess": 
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
        },
    {"name": "MATH", "symbols": ["VALUE", "_", "OPERATION", "_", "VALUE"], "postprocess":  function(data) {
        return {type: "math", value1:data[0], value2:data[4], operator:data[2]} }},
    {"name": "OPERATION$subexpression$1", "symbols": ["PLUS"]},
    {"name": "OPERATION$subexpression$1", "symbols": ["MINUS"]},
    {"name": "OPERATION$subexpression$1", "symbols": ["TIMES"]},
    {"name": "OPERATION$subexpression$1", "symbols": ["DIVIDE"]},
    {"name": "OPERATION$subexpression$1", "symbols": ["MOD"]},
    {"name": "OPERATION", "symbols": ["OPERATION$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "PLUS$subexpression$1$string$1", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLUS$subexpression$1", "symbols": ["PLUS$subexpression$1$string$1"]},
    {"name": "PLUS$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "PLUS", "symbols": ["PLUS$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "MINUS$subexpression$1$string$1", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MINUS$subexpression$1", "symbols": ["MINUS$subexpression$1$string$1"]},
    {"name": "MINUS$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "MINUS", "symbols": ["MINUS$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "TIMES$subexpression$1$string$1", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIMES$subexpression$1", "symbols": ["TIMES$subexpression$1$string$1"]},
    {"name": "TIMES$subexpression$1", "symbols": [{"literal":"*"}]},
    {"name": "TIMES", "symbols": ["TIMES$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "DIVIDE$subexpression$1$string$1", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIVIDE$subexpression$1", "symbols": ["DIVIDE$subexpression$1$string$1"]},
    {"name": "DIVIDE$subexpression$1", "symbols": [{"literal":"/"}]},
    {"name": "DIVIDE", "symbols": ["DIVIDE$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "MOD$subexpression$1$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD$subexpression$1", "symbols": ["MOD$subexpression$1$string$1"]},
    {"name": "MOD$subexpression$1", "symbols": [{"literal":"%"}]},
    {"name": "MOD", "symbols": ["MOD$subexpression$1"], "postprocess": function(data) {return data[0][0]}},
    {"name": "VALUE", "symbols": ["VARIABLE"], "postprocess": function(data) {return data[0]}},
    {"name": "VALUE", "symbols": ["STRING"], "postprocess": function(data) {return data[0]}},
    {"name": "VALUE", "symbols": ["INT"], "postprocess": function(data) {return data[0]}},
    {"name": "VALUE", "symbols": ["MATH"], "postprocess": function(data) {return data[0]}},
    {"name": "_", "symbols": [{"literal":" "}], "postprocess": function(data) {return data[0]}},
    {"name": "TO$subexpression$1$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TO$subexpression$1", "symbols": ["TO$subexpression$1$string$1"]},
    {"name": "TO$subexpression$1", "symbols": [/[2]/]},
    {"name": "TO", "symbols": ["TO$subexpression$1"], "postprocess": function(data) {return data[0][0]}}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
