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
   return {"id":"TayJay2013RANDOMstuf","name":"Random stuff","color1":"#0000ff","blocks":[{"opcode":"block_302b47614aced6c2","text":"pi","blockType":"reporter","arguments":{}},{"opcode":"block_188121a838be426a","text":"tau","blockType":"reporter","arguments":{}},{"opcode":"block_566f6a5a7fbdff72","text":"random","blockType":"Boolean","arguments":{}},{"opcode":"block_660b3d12270777b0","text":"toggle [b5a5150aa72a1fee]","blockType":"Boolean","arguments":{"b5a5150aa72a1fee":{"type":"Boolean"}}},{"opcode":"block_fd9660acf11633d9","text":"blank array","blockType":"reporter","arguments":{}}]}
}
async block_302b47614aced6c2(args) {   return (("3.14159265358979323846264338327950288419716939937510")) }
async block_188121a838be426a(args) {   return ((Number(await extension["block_302b47614aced6c2"]({})) * (2))) }
async block_566f6a5a7fbdff72(args) {   return ((Math.random() > .5)) }
async block_660b3d12270777b0(args) {   if ((args["b5a5150aa72a1fee"] == true)) {   return (false) };
  if ((args["b5a5150aa72a1fee"] == false)) {   return (true) };
 }
async block_fd9660acf11633d9(args) {   return (("[]")) 

}

let extension = new Extension();
// code compiled from extforge

Scratch.extensions.register(extension);
})(Scratch);
