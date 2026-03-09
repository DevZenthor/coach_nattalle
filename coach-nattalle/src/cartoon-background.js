import { LitElement, html, css } from "lit";

export class CartoonBackground extends LitElement {

  static styles = css`

    :host{
      display:block;
      height:100vh;
      width:100%;
      background: linear-gradient(135deg,#6ec5ff,#9be7ff);
      position:relative;
      overflow:hidden;
    }

    .blob{
      position:absolute;
      border-radius:50%;
      filter:blur(40px);
      opacity:0.7;
      animation: float 20s infinite ease-in-out;
    }

    .blob1{
      width:400px;
      height:400px;
      background:#ff7ad9;
      top:-100px;
      left:-100px;
    }

    .blob2{
      width:350px;
      height:350px;
      background:#ffd86b;
      bottom:-120px;
      right:-80px;
      animation-duration:25s;
    }

    .blob3{
      width:300px;
      height:300px;
      background:#7affb2;
      top:40%;
      left:70%;
      animation-duration:18s;
    }

    @keyframes float{

      0%{
        transform:translate(0,0) scale(1);
      }

      50%{
        transform:translate(60px,-40px) scale(1.1);
      }

      100%{
        transform:translate(0,0) scale(1);
      }

    }

  `;

  render(){
    return html`

      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>

    `;
  }

}

customElements.define("cartoon-background", CartoonBackground);