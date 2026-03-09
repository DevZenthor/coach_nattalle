import { LitElement, html, css } from "lit";

export class CartoonNavbar extends LitElement {

  static styles = css`

    :host{
      position:fixed;
      top:0;
      width:100%;
      z-index:100;
    }

    nav{
      display:flex;
      justify-content:center;
      gap:40px;
      padding:20px;
      backdrop-filter:blur(10px);
      background:rgba(255,255,255,0.1);
    }

    button{
      background:none;
      border:none;
      font-size:20px;
      font-weight:700;
      color:white;
      cursor:pointer;
      transition:transform 0.2s;
    }

    button:hover{

      transform:scale(1.1);

      background: linear-gradient(
        90deg,
        #ffffff,
        #ffd700,
        #ff7bff,
        #ffffff
      );

      background-size:300%;
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;

      animation:shine 6s linear infinite;
    }

    @keyframes shine{

      0%{
        background-position:0%;
      }

      100%{
        background-position:300%;
      }

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

        <button @click=${()=>this.scrollTo("home")}>
          Home
        </button>

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