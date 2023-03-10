function ownerContent() {

    var content = /* html */
        `
<body>
    <div>
        <h2 class="titles">I. Types of plastics</h2>
        <table cellpadding="5">
            <tbody>
                <tr>
                    <th class="border" class = "title_cell">
                        <p>Thermosets</p>
                    </th>
                    <th class="border" class="title_cell">
                        <p>Thermoplastics</p>
                    </th>
                </tr>
                <tr>
                    <td class="border">
                        <p> Thermosets are materials that are molded and
                            then cured into their final forms. Examples of thermoset materials
                            include epoxy or silicone.
                            Typically, these are <b>difficult</b> to recycle
                            by the means of mechanical recycling.</p>
                    </td>
                    <td class="border">
                        <p> Thermoplastics become pliable or workable after
                            being heated past their melting temperatures, and
                            most types of thermoplastic <b>can be </b>melted down and
                            recycled.</p>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2 class="titles">II. Types of Thermoplastic Materials</h2>
        <div>
            <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="../assets/pet_example.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Polythelene Terephtalate (PET or PETE)</h5>
                    <p class="card-text">This Type 1 plastic is the most commonly used thermoplastic polymer in the world. It is found
                        in most water and soft-drink or soda bottles.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/hpde_examples.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">High-Density Polyethylene (HDPE)</h5>
                    <p class="card-text">This Type 2 plastic is one of the most popular materials used in manufacturing today due to the stress the materials can withstand.
                        It is commonly used in making containers for milk, soap bottles and detergents.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/pvc_example.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Polyvinyl Chloride (PVC)</h5>
                    <p class="card-text">This Type 3 plastic is an economical and versatile thermoplastic polymer widely that could be found in PVC pipes,
                        cling wrap, shower curtains and kids' toys</p>
                  </div>
                </div>
              </div>
        </div>
        <div>
            <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="../assets/ldpe_example.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Low-Density Polyethylene (LDPE)</h5>
                    <p class="card-text">This Type 4 plastic is a soft, flexible, and lightweight plastic material. It is used
                        to make plastic shoppng bags, bread/sandwhiech bags, and squeezable bottles and tubes.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/pp_example.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Polypropylene (PP)</h5>
                    <p class="card-text">This Type 5 plastic is used in a wide variety of applications. It can be found in yogurt cups, straws
                            food and drink containers, and sunglasses.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="../assets/ps_examples.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">PolyStyrene (PS)</h5>
                    <p class="card-text">This Type 6 plastic is a useful plastic due to its application as a foam. It can be commonly found in
                        takeout boxes, styrofoam cups, egg containers, and palstic cups</p>
                  </div>
                </div>
              </div>
        </div>
    </div>

    <img src="../assets/plastic_examples.png" id="overview-image">

    <div id="thrid-">
        <h2 class="titles">III. What machines would you need</h2>
        <h4>1. Plastic Shredder</h4>
        <p>Plastic shredders are used to turn large chunks of plastic into smaller, more manageable pieces of plastic, that are easier to melt</p>
        <h4>2. Plastic Extruder</h4>
        <p>Plastic extruders take the shredded plastic and melt them into a mold</p>
        <h4>3. Spool Winder</h4>
        <p>If the plastic mould is long strings, a spool winder will wrap the plastic around a spool. The spool can then be used on a 3D printer.</p>
        <h4>4. Filament Pelletizer</h4>
        <p>The Filament Pelletizer cuts the plastic filament into small pellets that are usable for injection moulding</p>
        <h4>5. Filament Pultruder</h4>
        <p>Turns PET plastic into 3D printing filament through the process of pultrusion</p>

    </div>
    <div>
        <h2 class="titles">IV. How to acquire the machines</h2>
        <p>There are many open source DIY solutions available</p>

        <ol>
            <li><a href="https://reprap.org/wiki/Recyclebot#Recyclebot_v2.0.2Fv2.1">RepRapable Recyclebot</a></li>
            <p>The article discusses the Recyclebot, which is an open-source 3D printable extruder designed to convert
                plastic waste into 3D printing filament. The Recyclebot is part of the RepRap project, which aims to
                create self-replicating 3D printers that can be used to produce a wide range of objects. The Recyclebot
                allows users to convert their own plastic waste into usable 3D printing filament, reducing the need for
                new plastic production and helping to reduce waste. The design is open-source and can be easily
                reproduced and modified by anyone, making it a powerful tool for promoting sustainability and waste
                reduction in the 3D printing community.</p>
            <p><a href="https://www.sciencedirect.com/science/article/pii/S2468067218300208#f0565">More about
                    Recyclebot: research</a></p>
            <li><a href="https://joshuartaylor.wixsite.com/recreator3d/mk5kitender3">Recreator 3D MK5 KIT: Ender 3 Build
                </a></li>
            <p>The article on all3dp.com discusses the process of 3D printing using recycled plastic waste. The use of
                recycled plastic to create 3D printing filament can help reduce the amount of plastic waste in the
                environment and decrease the need for new plastic production. There are various methods for converting
                plastic waste into 3D printing filament, including using specialized machines and DIY setups. The
                article highlights the environmental benefits of using recycled plastic in 3D printing, as well as some
                of the challenges and limitations, such as the need for a consistent supply of plastic waste and the
                need for filament to be of a high quality. Overall, 3D printing from plastic waste is a promising
                development in the fight against plastic pollution and an important step towards a more sustainable
                future.</p>
            <li><a href="https://www.filabot.com/collections/filabot-core/products/full-recycling-setup">Commercial
                    Desktop Machines</a></li>
            <p>Filabot is a brand that offers a range of products for recycling plastic waste into 3D printing filament.
                The Filabot Core is a full recycling setup that includes a grinder, extruder, and spooler, which work
                together to process plastic waste into high-quality 3D printing filament. The Filabot Core is designed
                to be user-friendly and efficient, allowing anyone to recycle their own plastic waste into usable
                filament. The use of recycled plastic in 3D printing can help reduce the amount of plastic waste in the
                environment and decrease the need for new plastic production. By offering a comprehensive solution for
                recycling plastic waste into 3D printing filament, Filabot is helping to promote sustainability and
                waste reduction in the 3D printing community.</p>
        </ol>
        <p></p>

    </div>

</body>

    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;

    return ele;
}