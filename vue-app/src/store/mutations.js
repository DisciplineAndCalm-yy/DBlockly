import * as types from './mutation-types'

const mutations = {
    [types.SET_BIGSHOTINIT](state) {
        var blocklyDiv = document.getElementById("blocklyDiv");
        let workspace = Blockly.inject(blocklyDiv, {
            css: false,
            media: mediapath,
            toolbox: toolbox,
            zoom: {
                controls: true,
                wheel: true
            },
            trashcan: false
        });
        
        var parent = document.querySelector('.blocklyToolboxDiv');
        var son = document.createElement('div');
        son.setAttribute('id', 'transh-box');
        son.style.width = '100%';
        son.style.height = '100%';
        parent.appendChild(son);
                
        var transh = document.createElement('img');
        transh.setAttribute('id', 'transh');
        transh.style.zIndex = '110';
        transh.style.width = '50px';
        transh.style.height = '50px';
        transh.style.margin = '150px 60px';
        transh.src = './static/images/transh.png';
        son.appendChild(transh);

        Blockly.svgResize(workspace);
        let editorSideCode = ace.edit("code_size");
        editorSideCode.setTheme("ace/theme/xcode");
        editorSideCode.getSession().setMode("ace/mode/c_cpp");
        editorSideCode.setFontSize(17);
        editorSideCode.setShowPrintMargin(false);
        editorSideCode.setReadOnly(true);
        editorSideCode.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });

        function myUpdateFunction(event) {
            
            setTimeout(()=> {
                setInterval(() => {
                let showTransh = document.querySelector('.blocklyToolboxDelete');
                  if(showTransh) {
                    document.querySelector('#transh-box').style.display = 'block'
                  } else {
                    document.querySelector('#transh-box').style.display = 'none'
                  }
                },50)
            }, 1000)

            if (event.type == Blockly.Events.UI) return; // Don't update UI events.
            // var code = Blockly.Arduino.workspaceToCode(workspace);
            //document.getElementById('textarea').value = code;
            let inocold = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace);
            editorSideCode.setValue(inocold, -1);
        }
        workspace.addChangeListener(myUpdateFunction);
        //load from url parameter (single param)
        //http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
        for (let x of document.getElementsByClassName("blocklyTreeLabel")) {
            x.style = "";
        }
        state.editorSideCode = editorSideCode
        state.workspace = workspace
    },
    [types.SET_PORT](state, i) {
        state.savePort = i
    }
}

export default mutations