/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function (Scratch) {
const variables = {};


if (!Scratch.extensions.unsandboxed) {
    alert("This extension needs to be unsandboxed to run!")
    return
}

const ExtForge = {
    Broadcasts: new function() {
        this.raw_ = {};
        this.register = (name, blocks) => {
            this.raw_[name] = blocks;
        };
        this.execute = async (name) => {
            if (this.raw_[name]) {
                await this.raw_[name]();
            };
        };
    },

    Variables: new function() {
        this.raw_ = {};
        this.set = (name, value) => {
            this.raw_[name] = value;
        };
        this.get = (name) => {
            return this.raw_[name] ?? null;
        }
    },

    Utils: {
        setList: (list, index, value) => {
            list[index] = value;
            return list;
        },
        lists_foreach: {
            index: [],
            value: []
        },
        countString: (x, y) => {
            return y.length == 0 ? 0 : x.split(y).length - 1
        }
    }
}

class Extension {
getInfo() {
   return {"id":"extensionID","name":"Extension","color1":"#00ff00","blocks":[{"opcode":"block_b2b2d9c0d3708690","text":" ","blockType":"reporter","arguments":{[TAYJAY2013VAR]}},{"opcode":"block_1ac3c82e660a3bc8","text":"Set [ac288137a089192f] to [a25f65893bec6a4e]","blockType":"command","arguments":{"ac288137a089192f":{"type":"string"},"a25f65893bec6a4e":{"type":"number"}}}]}
}
async block_b2b2d9c0d3708690(args) {   return (ExtForge.Variables.get([TAYJAY2013VAR])
  ) }
async block_1ac3c82e660a3bc8(args) {   ExtForge.Variables.set(args["ac288137a089192f"], Scratch.Cast.toString(args["a25f65893bec6a4e"]))
 }
}

let extension = new Extension();
// code compiled from extforge

Scratch.extensions.register(extension);
})(Scratch);
