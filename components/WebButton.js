
const prefix = 'data-'

class WebButton extends HTMLElement {
    constructor(props) {
        super(props);
        this.renderV1();
    }
    render() {
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = '提交'
        button.style.background = '#4395ff';
        this.appendChild(button)
    }
    renderV1() {
        this.attachShadow({ mode: 'open' })
        const tem = document.getElementById('web-button-template');
        const clonedElem = tem.content.cloneNode(true);
        const btn = clonedElem.querySelector('.btn');
        btn.className = btn.className + " " + this.getAttribute(`${prefix}type`);
        btn.addEventListener('click', this.click)
        this.shadowRoot.appendChild(clonedElem);
    }
    click() {
        console.log('btn click')
    }
}

customElements.define('web-button', WebButton)