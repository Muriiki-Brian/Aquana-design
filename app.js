// reusable navigation component

class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="nav flex justify-between items-center px-8 lg:px-24 py-2 text-sm">
      <div class="logo flex items-center">
        <img class="w-14" src="logo/pngegg-logo.png" alt="Aquana-logo" />
        <span class="logo-name text-blue-700">Aquana</span>
      </div>
      <div class="nav-links hidden lg:block">
        <ul class="flex w-96 justify-between items-center">
          <li class="hover:underline"><a href="index.html">Home</a></li>
          <li class="hover:underline"><a href="about.html">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li
            class="bg-orange-500 text-white py-1 px-4 rounded-md font-semibold"
          >
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="hamburger-menu lg:hidden">
        <?xml version="1.0" ?><svg
          height="18px"
          version="1.1"
          viewBox="0 0 25 25"
          width="18px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title />
          <desc />
          <defs />
          <g
            fill="none"
            fill-rule="evenodd"
            id="TabBar-Icons"
            stroke="none"
            stroke-width="1"
          >
            <g fill="#000000" id="Hamburger-Round">
              <path
                d="M0,4 C0,2.8954305 0.889763236,2 2.00359486,2 L22.9964051,2 C24.10296,2 25,2.88772964 25,4 C25,5.1045695 24.1102368,6 22.9964051,6 L2.00359486,6 C0.897039974,6 0,5.11227036 0,4 L0,4 Z M0,12 C0,10.8954305 0.889763236,10 2.00359486,10 L22.9964051,10 C24.10296,10 25,10.8877296 25,12 C25,13.1045695 24.1102368,14 22.9964051,14 L2.00359486,14 C0.897039974,14 0,13.1122704 0,12 L0,12 Z M0,20 C0,18.8954305 0.889763236,18 2.00359486,18 L22.9964051,18 C24.10296,18 25,18.8877296 25,20 C25,21.1045695 24.1102368,22 22.9964051,22 L2.00359486,22 C0.897039974,22 0,21.1122704 0,20 L0,20 Z"
                id="Hamburger"
              />
            </g>
          </g>
        </svg>
      </div>
    </nav>
        `;
    }
}

customElements.define("main-header",Header)