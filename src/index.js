import axios from "axios";
import './estilos.css'
import gatin from'./gatin.jpg'

const request = axios.get("https://cat-fact.herokuapp.com/facts");
      const root = document.querySelector(".root");

      request.then(response => {
        root.innerHTML = `
        <div> 
          <ul>
            ${response.data.map(fact => `
              <li>${fact.text}</li>
            `).join('')}
          </ul>
          <img src='${gatin}' alt='gatin'/>'

        </div>

        `;
      });