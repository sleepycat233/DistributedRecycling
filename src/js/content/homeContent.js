"use strict"

function homeContent() {

    var content = /* html */
    `
    <h1>
        <img src="../assets/DRAM_Basic_Logo.png" width="200" height="100"> <button>member</button> <button>Shop</button>
         <button>login</button>
      </h1>

    <img src="../assets/DRAM_Main_Logo.png" width="500" height="500">


    <p>
      Mission statement: DRAM stands for distrabuted recycling and addative manufacturing. Our goal is to
      set up workshops where people can recycle waste plastic into filament for
      3d printers.
      <button id="learn-more">learn more</button>
    </p>
    <p><a href="https://forms.gle/PexpPXmfYgNpNnXQ7">create an account</a></p>
    <div class="grid-container">
      <div class="column 1" ;>
        <h2>I want to be a shop owner</h2>
        <button id="get_started">get started</button>
      </div>
      <div class="column 2" ;>
        <h2>I want to be a member</h2>
        <form action="/action_page.php">
          <label for="zipcode">zipcode:</label><br />
          <input type="number" maxlength="5" /><br />
            <button class="btn" onclick=inject(memberContent())> submit</button>
        </form>


      </div>
    </div>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}