import { LitElement, html, css } from "lit";

export class ReseauxSection extends LitElement {

  static styles = css`

    :host{
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:60px;
      text-align:center;
    }

    h2{
      font-size:60px;
      margin:0;
    }

    .icons{
      display:flex;
      gap:60px;
    }

    a{
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:10px;
      text-decoration:none;
      color:white;
      transition:transform 0.25s;
    }

    a:hover{
      transform:scale(1.2);
    }

    svg{
      width:70px;
      height:70px;
      fill:white;
      transition:fill 0.3s;
    }

    /* gradient animé */

    a:hover svg{
      fill:url(#gradient);
    }

    .label{
      font-size:20px;
    }

  `;

  render(){

    return html`

      <!-- gradient utilisé pour hover -->
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="50%" stop-color="#ffd700"/>
            <stop offset="100%" stop-color="#ff7bff"/>
          </linearGradient>
        </defs>
      </svg>

      <h2>Réseaux</h2>

      <div class="icons">

        <!-- DISCORD -->

        <a href="https://discord.gg/tondiscord" target="_blank">

          <svg viewBox="0 0 127.14 96.36">

            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83,97.68,97.68,0,0,0-29.1,0A72.37,72.37,0,0,0,45.65,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21A105.73,105.73,0,0,0,32.71,96.36a77.7,77.7,0,0,0,6.61-10.85A68.42,68.42,0,0,1,29.27,80c.84-.62,1.65-1.26,2.43-1.92A75.5,75.5,0,0,0,97.46,78c.79.66,1.6,1.3,2.43,1.92a68.68,68.68,0,0,1-10.06,5.51,77.66,77.66,0,0,0,6.61,10.85,105.25,105.25,0,0,0,32.19-16.15C130.52,59.28,124.64,35.48,107.7,8.07Z"/>

          </svg>

          <span class="label">Discord</span>

        </a>


        <!-- X (TWITTER) NATTALLE -->

        <a href="https://x.com/CoachNattalle" target="_blank">

          <svg viewBox="0 0 24 24">

            <path d="M18.244 2H21.5l-7.45 8.52L22 22h-6.828l-5.35-7.002L3.73 22H.472l7.97-9.114L2 2h6.828l4.84 6.36L18.244 2zm-1.2 18h1.8L7.62 4h-1.8l11.224 16z"/>

          </svg>

          <span class="label">Coach Nattalle</span>

        </a>


        <!-- X (TWITTER) MANAGER -->

        <a href="https://x.com/zenthor1480" target="_blank">

          <svg viewBox="0 0 24 24">

            <path d="M18.244 2H21.5l-7.45 8.52L22 22h-6.828l-5.35-7.002L3.73 22H.472l7.97-9.114L2 2h6.828l4.84 6.36L18.244 2zm-1.2 18h1.8L7.62 4h-1.8l11.224 16z"/>

          </svg>

          <span class="label">Manager</span>

        </a>

      </div>

    `;
  }

}

customElements.define("reseaux-section", ReseauxSection);