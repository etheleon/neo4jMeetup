/*
Language: Cypher
Author: Jason Clark <jason.clark.03@gmail.com>
*/

function cypher(hljs) {
	var labelName = {
		cN: 'labelName',
		b: /:./,
		e: /(:| )/
	};

	var labelDefinition = {
		cN: 'label',
		b: /:/
	};

	var properties = {
		cN: 'properties',
		b: /\{/,
		e: /\}/
	};

	var nodeMode = {
		cN: 'node',
		b: /\(/,
		e: /\)/,
		c: [labelDefinition, labelName, properties]
	};

	var relationshipMode = {
		cN: 'relationship',
		b: /\[/,
		e: /\]/,
		c: [labelDefinition, labelName, properties]
	};

    var lineRel = {
        cN: 'lineRel',
        b: /\)/,
        e: /\(/
    }

	return {
		cI: true, //TODO: Why isn't this working?
	    k: {
	    	keyword: 'as AS start match return with limit skip create merge where unique union remove delete set constaint assert is case unique optional unwind START MATCH RETURN WITH LIMIT SKIP CREATE MERGE WHERE UNIQUE UNION REMOVE DELETE SET CONSTAINT ASSERT IS CASE UNIQUE OPTIONAL UNWIND',
	    	literal: 'true false'
	    },
	    c: [hljs.CLCM, hljs.ASM, hljs.QSM, nodeMode, relationshipMode, lineRel]
	  }
}
