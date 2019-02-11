// const nearley = require("../node_modules/nearley");
// const processor = require("libs/eppprocessor.js");


// require.config({
//   paths: {
//     'vs': '../node_modules/monaco-editor/min/vs',
//     'monaco-vim': '../node_modules/monaco-vim/dist/monaco-vim',
//     'nearley': '../node_modules/nearley/lib/nearley',
//     'moo': '../node_modules/moo/'
//   }
// });

// import * as monaco from 'monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';


var editor1 = monaco.editor.create(document.getElementById('editor1'), {
  value: 'console.log("Hello, world")',
  language: 'javascript',
  lineNumbers: "on",
  roundedSelection: false,
  scrollBeyondLastLine: false,
  readOnly: false,
  theme: "vs-dark"
});

// require(['vs/editor/editor.main', 'monaco-vim'],
//   function(a, MonacoVim) {
//     var editor1 = monaco.editor.create(document.getElementById('editor1'), {
//       value: [
//         'function x() {',
//         '\tconsole.log("Language editor!");',
//         '}'
//       ].join('\n'),
//       language: 'javascript',
//       lineNumbers: "on",
//       roundedSelection: false,
//       scrollBeyondLastLine: false,
//       readOnly: false,
//       theme: "vs-dark"
//     }
//   );
//
//   var editor2 = monaco.editor.create(document.getElementById('editor2'), {
//     value: [
//       '\tconsole.log("MaxiLib Output");'
//     ].join('\n'),
//     language: 'javascript'
//   });

  var myCondition1 = editor1.createContextKey(/*key name*/'myCondition1', /*default value*/false);
  var myCondition2 = editor1.createContextKey(/*key name*/'myCondition2', /*default value*/false);

  editor1.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, function() {
      // services available in `ctx`

      var text = editor1.getValue();

      var selection = editor1.getSelection(); //[2,1 -> 2,34]
      var valueInSelection = editor1.getModel().getValueInRange(selection); //[2,1 -> 2,34]

      // const parser = new nearley.Parser(nearley.Grammar.fromCompiled(processor));
      //
      // parser.feed(input);
      //
      //


      alert("Text: " + text + '\n\n'
            + "Selection: " + selection +  '\n\n'
            + "Text in Selection: " + valueInSelection  + '\n\n'
            + "Parse Results: " + parser.results
      );

  }, 'myCondition1 && myCondition2')

  myCondition1.set(true);

  setTimeout(function() {
    alert('now enabling also myCondition2, try pressing Tab!');
    myCondition2.set(true);
  // you can use myCondition2.reset() to go back to the default
  }, 2000);
  var statusNode = document.getElementById('container');
  var vimMode = MonacoVim.initVimMode(editor1, statusNode);
  // remove vim mode by calling
  // vimMode.dispose();
