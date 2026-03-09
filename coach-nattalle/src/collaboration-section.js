import { LitElement, html, css } from "lit";

import player1 from "./assets/flokss.png";
import player2 from "./assets/heliox.png";
import player3 from "./assets/slimy.png";

export class CollaborationSection extends LitElement {

  static styles = css`

    :host{
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:80px;
      text-align:center;
    }

    h2{
      font-size:60px;
      margin:0;
    }

    .players{
      display:flex;
      gap:60px;
      flex-wrap:wrap;
      justify-content:center;
    }

    .card{
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:15px;
      cursor:pointer;
      transition:transform 0.25s;
    }

    .card:hover{
      transform:scale(1.08);
    }

    img{
      width:180px;
      height:180px;
      object-fit:cover;
      border-radius:20px;
      transition:all 0.3s;
    }

    /* effet radiant */

    .card:hover img{
      filter:
        drop-shadow(0 0 10px #ffd700)
        drop-shadow(0 0 20px #ff7bff)
        drop-shadow(0 0 35px #ffd700);
    }

    .name{
      font-size:24px;
      font-weight:700;
    }

  `;

  players = [
    {
      name: "Flokss",
      img: player1,
      twitter: "https://x.com/Flokssfn"
    },
    {
      name: "Heliox",
      img: player2,
      twitter: "https://x.com/H3lioxnada"
    },
    {
      name: "Slimyy",
      img: player3,
      twitter: "https://x.com/slimyyfnr"
    }
  ];

  render(){

    return html`

      <h2>Collaboration</h2>

      <div class="players">

        ${this.players.map(player => html`

          <div class="card"
            @click=${()=>window.open(player.twitter, "_blank")}>

            <img src="${player.img}" alt="${player.name}">

            <div class="name">${player.name}</div>

          </div>

        `)}

      </div>

    `;
  }

}

customElements.define("collaboration-section", CollaborationSection);