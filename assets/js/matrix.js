const availableChars = "123456780ABCDEFGHIJKLMNOPQRTabcdefghijklmnopqrstuvwxyz";

function getRandomChar() {
    return availableChars[Math.random() * availableChars.length | 0];
}

class MatrixStream {
    constructor(container, len) {
        this.container = container;
        this.len = len;
        this.init();
    }

    init() {
        // start from 0, 1, 2
        this.status = Math.random() * 3 | 0;

        this.pipe = [];
        this.count = 0;

        // create render
        this.renderNodes = [];
        for (let i = 0; i < this.len; i++) {
            let span = document.createElement('span');
            span.innerText = getRandomChar();
            this.container.appendChild(span);
            this.renderNodes.push(span);
        }
    }

    tick() {
        this.fill();
        this.render();
        this.shift();
    }

    fill() {

        // fill the pipe

        while (this.count < this.len) {

            let node = {code: this.status};

            switch (this.status) {
                case 0:
                    node.length = 1;
                    break;

                case 1:
                    node.length = 1 + Math.random() * this.len / 3 * 2 | 0;
                    break;

                case 2:
                    node.length = 1 + Math.random() * this.len / 3 | 0;
                    break;
            }

            // switch to next status 0, 1, 2, 0, 1, 2, ...
            this.status = (this.status + 1) % 3;

            this.count += node.length;
            this.pipe.push(node);
        }
    }

    render() {
        // render

        let idx = 0;
        (() => {
            for (let node of this.pipe) {
                for (let i = 0; i < node.length; i++) {

                    if (idx === this.len) return;

                    switch (node.code) {

                        case 0:
                            // always update char
                            this.renderNodes[idx].innerText = getRandomChar();
                            this.renderNodes[idx].className = 'b';
                            break;

                        case 1:
                            // has a chance to update char
                            if (Math.random() < .05) {
                                this.renderNodes[idx].innerText = getRandomChar();
                            }
                            this.renderNodes[idx].className = 'l';
                            break;

                        case 2:
                            this.renderNodes[idx].className = 'd';
                            break;
                    }

                    idx++;
                }
            }
        })();
    }

    shift() {

        if (!--this.pipe[0].length) {
            this.pipe.shift();
        }

        this.count--;
    }
}


const matrix = [];
//to calculate the no. of rows and column 
//specify the size(30) in .column span of matrix.scss 
let container = document.getElementById('container');
columns = container.clientWidth/30;
rows = container.clientHeight/30;

for (let i = 0; i < columns; i++) {
    let column = document.createElement('div');
    column.className = 'column';
    container.appendChild(column);
    let matrix = new MatrixStream(column, rows);
    setInterval(function loop() {
        matrix.tick();
    }, 100 + Math.random() * 100);
}
