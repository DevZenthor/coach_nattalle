import { LitElement, html, css } from "lit";

export class CartoonNavbar extends LitElement {

  static styles = css`

    :host{
      position:fixed;
      top:0;
      width:100%;
      z-index:10;
    }

    nav{
      display:flex;
      justify-content:center;
      gap:40px;
      padding:20px;
      backdrop-filter:blur(10px);
      background:rgba(255,255,255,0.15);
    }

    button{
      background:none;
      border:none;
      color:white;
      font-size:18px;
      cursor:pointer;
    }

    button:hover{
      transform:scale(1.1);
    }

  `;

  scrollTo(id){
    document.getElementById(id).scrollIntoView({
      behavior:"smooth"
    });
  }

  render(){
    return html`

      <nav>

        <button @click=${()=>this.scrollTo("home")}>Home</button>

        <button @click=${()=>this.scrollTo("reseaux")}>
          Réseaux
        </button>

        <button @click=${()=>this.scrollTo("experience")}>
          Experience
        </button>

        <button @click=${()=>this.scrollTo("collaboration")}>
          Collaboration
        </button>

      </nav>

    `;
  }
}

customElements.define("cartoon-navbar", CartoonNavbar);