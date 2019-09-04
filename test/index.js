
import * as monaco from '@bfcomposer/monaco-editor/esm/vs/editor/editor.api';

monaco.editor.create(document.getElementById('container'), {
    value: 'console.log("Hello, world")',
    language: 'botbuilderlg'
});