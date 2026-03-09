import { LitElement, html, css } from "lit";

import ts4Logo from "./assets/TS4.svg";
import haikooLogo from "./assets/Haikoo.svg";

export class ExperienceSection extends LitElement {

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

    .teams{
      display:flex;
      gap:100px;
      flex-wrap:wrap;
      justify-content:center;
    }

    .team{
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:20px;
      transition:transform 0.25s;
    }

    .team:hover{
      transform:scale(1.1);
    }

    img{
      width:140px;
      height:auto;
      transition:all 0.3s;
    }

    /* effet radiant */

    .team:hover img{
      filter:
        drop-shadow(0 0 10px #ffd700)
        drop-shadow(0 0 20px #ff7bff)
        drop-shadow(0 0 35px #ffd700);
    }

    .name{
      font-size:26px;
      font-weight:700;
    }

    .role{
      font-size:20px;
      opacity:0.9;
    }

  `;

  render(){

    return html`

      <h2>Experience</h2>

      <div class="teams">

        <!-- TS4 -->

        <div class="team">

          <img src="${ts4Logo}" alt="TS4">

          <div class="name">TS4</div>

          <div class="role">Coach Grinder</div>

        </div>


        <!-- HAIKOO -->

        <div class="team">

          <img src="${haikooLogo}" alt="Haikoo Esport">

          <div class="name">Haikoo Esport</div>

          <div class="role">Directeur Grinder</div>

        </div>

      </div>

    `;
  }

}

customElements.define("experience-section", ExperienceSection);