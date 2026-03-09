import { LitElement, html, css } from "lit";
import nattalle from "./assets/nattalle.jpg";

export class HomeSection extends LitElement {

  static styles = css`

    :host{
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      color:white;
    }

    .container{
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:25px;
      animation:fadeUp 1.2s ease;
    }

    img{
      width:260px;
      border-radius:20px;
      box-shadow:0 20px 40px rgba(0,0,0,0.35);
      animation:float 4s ease-in-out infinite;
    }

    .title{
      font-size:64px;
      margin:0;
      font-weight:900;

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

    .subtitle{
      font-size:26px;
      text-shadow:
        0 0 5px rgba(255,255,255,0.6),
        0 0 15px rgba(255,255,255,0.4),
        0 0 25px rgba(255,255,255,0.3);
    }

    @keyframes float{
      0%{ transform:translateY(0); }
      50%{ transform:translateY(-18px); }
      100%{ transform:translateY(0); }
    }

    @keyframes shine{
      0%{ background-position:0%; }
      100%{ background-position:300%; }
    }

    @keyframes fadeUp{
      from{
        opacity:0;
        transform:translateY(40px);
      }
      to{
        opacity:1;
        transform:translateY(0);
      }
    }

  `;

  render(){
    return html`

      <div class="container">

        <img src="${nattalle}" alt="Coach Nattalle">

        <h1 class="title">Coach Nattalle</h1>

        <p class="subtitle">Fortnite Coach </p>

      </div>

    `;
  }

}

customElements.define("home-section", HomeSection);