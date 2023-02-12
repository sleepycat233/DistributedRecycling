function memberContent() {

    var content = /* html */
        `

<body>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap"
        defer>
    </script>

    <div id="map"></div>


    <div id="padding"></div>

    <div id="card1" class="card mb-3" style="max-width: 100%;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="../../assets/owner1.png" class="card-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">David Stanley</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices neque
                        in quam tincidunt malesuada ac in eros. Aliquam ultrices viverra dignissim. Proin sed magna non
                        diam bibendum mattis sed a tortor. Vivamus iaculis leo elit, vel suscipit elit laoreet vel. In
                        eget scelerisque diam.</p>
                </div>
            </div>
        </div>
    </div>

    <div id="padding">
    </div>
    <div id="card2" class="card mb-3" style="max-width: 100%;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="../../assets/owner2.png" class="card-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Dana Holloway</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices neque
                        in quam tincidunt malesuada ac in eros. Aliquam ultrices viverra dignissim. Proin sed magna non
                        diam bibendum mattis sed a tortor. Vivamus iaculis leo elit, vel suscipit elit laoreet vel. In
                        eget scelerisque diam.</p>
                </div>
            </div>
        </div>
    </div>

    <div id="padding">
    </div>
    <div id="card3" class="card mb-3" style="max-width: 100%;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="../../assets/owner2.png" class="card-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Courtney Mcgee</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices neque
                        in quam tincidunt malesuada ac in eros. Aliquam ultrices viverra dignissim. Proin sed magna non
                        diam bibendum mattis sed a tortor. Vivamus iaculis leo elit, vel suscipit elit laoreet vel. In
                        eget scelerisque diam.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="padding">
    </div>
    <div id="card4" class="card mb-3" style="max-width: 100%;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="../../assets/owner1.png" class="card-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Mabel Mcdaniel</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices neque
                        in quam tincidunt malesuada ac in eros. Aliquam ultrices viverra dignissim. Proin sed magna non
                        diam bibendum mattis sed a tortor. Vivamus iaculis leo elit, vel suscipit elit laoreet vel. In
                        eget scelerisque diam.</p>
                </div>
            </div>
        </div>
    </div>
</body>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;

    return ele;
}