/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
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
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "TJRANBLOCK",
                "name": "TayJay's random bloc",
                "color1": "#0019ff",
                "blocks": [{
                    "opcode": "block_c55dff90492ce7a6",
                    "text": "join but worse [53461032dec35248] [8031c048ec9ae529]",
                    "blockType": "reporter",
                    "arguments": {
                        "53461032dec35248": {
                            "type": "string"
                        },
                        "8031c048ec9ae529": {
                            "type": "string"
                        }
                    }
                }, {
                    "opcode": "block_cfac8c110642e240",
                    "text": "pi",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_0eb249d3e6b6b58e",
                    "text": "tau",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_fe69f971286f0939",
                    "text": "rho",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_c83d1d8493f3720f",
                    "text": "",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_f23bbcf5cb02f4f5",
                    "text": "block",
                    "blockType": "command",
                    "arguments": {}
                }]
            }
        }
        async block_c55dff90492ce7a6(args) {
            if ((Math.random() > .5)) {
                return (args["53461032dec35248"])
            } else if ((Math.random() > .5)) {
                return (String.prototype.concat(args["53461032dec35248"], args["8031c048ec9ae529"]))
            } else if ((Math.random() > .5)) {
                return (String.prototype.concat(args["8031c048ec9ae529"], args["53461032dec35248"]))
            } else {
                return (args["8031c048ec9ae529"])
            };
        }
        async block_cfac8c110642e240(args) {
            return (Math.PI)
        }
        async block_0eb249d3e6b6b58e(args) {
            return ((Number(await extension["block_cfac8c110642e240"]({})) * (2)))
        }
        async block_fe69f971286f0939(args) {
            return ((Number(await extension["block_0eb249d3e6b6b58e"]({})) + Number(await extension["block_cfac8c110642e240"]({}))))
        }
        async block_c83d1d8493f3720f(args) {
            return ((""))
        }
        async block_f23bbcf5cb02f4f5(args) {
            await new Promise(temp_81ed21b3710c4d52bf3db5b0 => {
                requestAnimationFrame(() => {
                    temp_81ed21b3710c4d52bf3db5b0()
                })
            })
        }
    }

    let extension = new Extension();
    // code compiled from extforge
    (async () => {
        eval(("alert(\"I'm sorry if you're using this\")"))
    })();

    Scratch.extensions.register(extension);
})(Scratch);
