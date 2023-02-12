"use strict"
// Function MakeNavRouter expects to be passed a parameter object with the properties
// as listed in the function signature: // (navId, navList, contentId, startLink, NavRouterClass.
// However, if any of the last three properties are not supplied, (e.g., contentId, startLink,
// NavRouterClass), the values specified in the function signature (e.g., "content", "#/home")
// will be used, as default values.

function MakeNavRouter
({ navId, navList, contentId = "content", startLink = "#/home", NavRouterClass = "NavRouter"}) {

    // defensive programming, check that all necessary inputs have been provided...
    if (!navId) {
        alert("Error in MakNavRouter: parameter property 'navId' must be supplied");
        return;
    }

    if (!navList) {
        alert("Error in MakNavRouter: parameter property 'navList' must be supplied");
        return;
    }

    // The the values on the right hand side of the assignment statements below are also
    // in NavRouter.css. These names could have been "hard coded" in this function, but
    // I'm just placing these CSS class names in variables so that it's easier to make
    // coding changes if the style names change.

    var NavGroupClass = "NavGroup";
    var MenuHeaderClass = "MenuHeader";
    var SubMenuClass = "SubMenu";
    var hideClass = "hide";
    var showClass = "show";

    // Now that we've checked and processed the input parameter properties,
    // skip over local private functions (which have not been called yet),
    // to the spot commented as "ENTRY POINT"...


    // ******************************************************************************
    // Start Building the Navigation Bar...
    // ******************************************************************************

    function MakeLink(linkObj) {  // local private function

        var aTag = document.createElement("a");

        var linkText = linkObj.linkText || "Missing Link Text";
        aTag.innerHTML = linkText;


        // if both the action property and the linkURL property exist in the linkObj
        // then "register" the link and action in the routing table...

        if ('action' in linkObj && 'linkURL' in linkObj) {

            //console.log("registering " + linkObj.linkURL + " (in MakeNavRouter)");

            // if linkURL not already registered, register it (else error).
            if (!routes[linkObj.linkURL]) {

                aTag.href = linkObj.linkURL;

                // register the linkURL into the routing table. linkURL is the key.
                // action is the value associated with that key. action will
                // be run whenever that linkURL shows up in the browser's address bar.
                routes[linkObj.linkURL] = linkObj.action;
            } else {
                var warningMsg = "!!! >>> Error: Duplicate LinkURL <<< " + linkObj.linkURL +
                        ". Attempt to register the same link with possibly a new action (Content Generating Fn).";
                alert(warningMsg);
                console.log(warningMsg);
            }

        }

        return aTag;

    } // end function MakeLink

    function MakeLinkOrGroup(obj) {  // local private function

        var navGroup = document.createElement("div");
        navGroup.classList.add(NavGroupClass);

        if (!obj.header) { // if its not a header, it must be a link
            navGroup.appendChild(MakeLink(obj));
        } else {

            // create header div along with its associated submenu div
            var headerDiv = document.createElement("div");
            headerDiv.innerHTML = obj.header;
            headerDiv.classList.add(MenuHeaderClass);
            navGroup.appendChild(headerDiv);

            var subMenuDiv = document.createElement("div");
            subMenuDiv.classList.add(SubMenuClass);
            subMenuDiv.classList.add(hideClass);
            navGroup.appendChild(subMenuDiv);
            headerDiv.assocSubMenu = subMenuDiv;

            // create all the links in the sub menu
            for (var j = 0; j < obj.subMenu.length; j++) {
                subMenuDiv.appendChild(MakeLink(obj.subMenu[j]));
            }
        }
        return navGroup;
    } // end function MakeLinkOrGroup


    // ********************************************
    // ENTRY POINT for Building the Navigation Bar


    // Declare an array to store our routes - MakeLink adds Associative Array
    // entries into this array, associating a link with a function (that should be
    // invoked by the NavRouter whenever that link is clicked.
    var routes = [];

    var navRouter = document.createElement("div");
    navRouter.classList.add(NavRouterClass);
    for (var i = 0; i < navList.length; i++) {

        // This code will add entries into the routing table (declared above).
        navRouter.appendChild(MakeLinkOrGroup(navList[i]));

    }

    document.getElementById(navId).appendChild(navRouter);
    //console.log("MakeNavRouter injected the nav bar");

    // ******************************************************************************
    // Done Building the Navigation Bar (and updating the routing table, 'routes'...
    // ******************************************************************************




    // ******************************************************************************
    // Start Setting Up Event Handling For Drop Down Menus...
    // ******************************************************************************

    // This event handler will run any time the user clicks anywhere on the page.
    //
    // If a MenuHeader is clicked, the associated SubMenu is toggled (hidden/shown).
    // Otherwise (when click is anywhere else), all SubMenus are closed.
    window.onclick = function (event) {

        // ------------------------------------------------------------------------
        // Private functions related to hiding and showing drop down menus.
        function hideSubMenusExcept(ele) {
            var dropContentList = document.getElementsByClassName(SubMenuClass);
            for (var i = 0; i < dropContentList.length; i++) {
                if (ele !== dropContentList[i]) {
                    hide(dropContentList[i]);
                }
            }
        }

        function hide(ele) {
            ele.classList.remove(showClass);
            ele.classList.add(hideClass);
        }

        function show(ele) {
            ele.classList.remove(hideClass);
            ele.classList.add(showClass);
        }
        // End of private functions
        // ------------------------------------------------------------------------


        var clickedEle = event.target; // this is the DOM element (anywhere on page) that was clicked.
        // console.log("clickedEle on next line");

        // if the clicked element is a MenuHeader, it will have a custom property
        // that indicates the associated SubMenu.
        var subMenu = clickedEle.assocSubMenu;
        if (subMenu) {

            // console.log("SubMenu associated with MenuHeader (on next line):");
            // console.log(subMenu);

            if (subMenu.classList.contains(showClass)) {
                hide(subMenu);
            } else {
                show(subMenu);
            }

            hideSubMenusExcept(subMenu);

        } else { // the element they clicked was not a MenuHeader, so close all SubMenus.

            // console.log("clicked ele is not a MenuHeader");
            hideSubMenusExcept(null); // hide all SubMenus
        }
    }; // window.onclick function

    // ******************************************************************************
    // Done Setting Up Event Handling For Drop Down Menus...
    // ******************************************************************************



    // ******************************************************************************
    // Start Setting Up Routing (event handling whenever address bar's link changes)
    // ******************************************************************************


    // return an object that has the URL's pathPrefix and param as properties.
    // the param is whatever is after the last / (if there is more than one / in the original path.
    // extract the parameter value from the path.
    // the parameter is defined as being whatever is after the last '/' in the path...
    function parsePath(path) {

        // path #/insertUser --> {param:"", pathPrefix: "#/insertUser" }
        // path #/updateUser/43 --> {param:"43", pathPrefix: "#/updateUser" }

        // start out assuming that this is a parameterless path (URL)
        var obj = {
            param: "",
            pathPrefix: path
        };

        // search for last '/' in the path (URL)
        var n = path.lastIndexOf("/");

        // n = -1 means no '/'
        // #/home would be a "normal" (parameterless) URL. For this, n would be 1
        // (indicating the last/only '/' in the URL).
        if (n > 1) {
            obj.param = path.substring(n + 1);
            console.log('routParamFw extracted parameter [' + obj.param + '] from path [' + path + ']');
            obj.pathPrefix = path.substring(0, n);
        }
        //console.log("*** parsePath: path is [" + path + "] param is [" + obj.param + "] and pathPrefix is [" + obj.pathPrefix + "]");
        return obj;
    } // parsePath


    function inject(what) {
        document.getElementById(contentId).innerHTML = "";
        document.getElementById(contentId).appendChild(what);
    }

    function router() { // Will be called whenever the browser's address bar changes.
        var saveLink = location.hash;
        var pathObj = parsePath(saveLink);
        var path = pathObj.pathPrefix;
        var param = pathObj.param;
        //console.log('in function router, path is ' + path); // prints something like #/home
        if (!routes[path]) {
            var ele = document.createElement("div");
            ele.innerHTML = "<p>Error: unknown linkURL '" + path + "' was never added to the routing table.</p>";
            inject(ele);
        } else { // There is an entry in the routing table for the link that's in the address bar
            // Store the link in local storage so that link will appear upon page refresh.
            sessionStorage.setItem("NavRouterURL", saveLink);
            //console.log("Link Written to Session: " + saveLink);
            if (routes[path] instanceof Function) {
                // The routing table entry is a function, so call a content generating function
                // either with a parameter or without (depending on whether or not a parameter
                // was found in the address bar).
                if (param.length > 0) {
                    var ele = routes[path](param);
                    inject(ele);
                } else {
                    var ele = routes[path](); // returns DOM element
                    inject(ele);
                }
            } else {
                // What's in the routing table (indexed by the URL) is a String,
                // not a function. Open up a new tab using that String as URL.
                //console.log("Ready to open this link in a new tab: " + routes[path]);
                window.open(routes[path], "_blank");
            }
        }
    }


    // Whenever a link is clicked (or window.location.hash changes), invoke function router
    // that will figure out which content function to run (and inject into the content area).
    window.addEventListener('hashchange', router);


    // USE LOCAL STORAGE TO PERSIST CURRENT LINK UPON PAGE REFRESH.
    // Notice that local storage is set by function router (whenever link changes).
    // if there's a previously stored path in user's local storage
    // use that path as initial link...
    // Closing the browser tab clears the user's local storage...
    var URL = sessionStorage.getItem("NavRouterURL");

    // without this line of code, sometimes you'll get an empty content, e.g.,
    // when you refresh the page but the link didn't change.
    location.hash = "xxx";

    if (URL) {
        location.hash = URL;
    } else {

        // without this line of code, initial rendering will show no content.
        // This code makes it look like the user clicked on the home link at initial rendering.
        location.hash = startLink;
        //console.log("initial location.hash is " + location.hash);
    }

    console.log("initial location.hash is " + location.hash);

    // ******************************************************************************
    // Done Setting Up Routing (event handling whenever address bar's link changes)
    // ******************************************************************************


    var navRouter = {};
    navRouter.addRoute = function (linkObj) {
        routes[linkObj.linkURL] = linkObj.action;
        //console.log(linkObj.linkURL + " added to routing table (with no associated nav bar link");
    };

    navRouter.printRoutes = function () {
        console.log("Routing table printed on next line");
        for (var key in routes) {
            console.log(key);
        }
    };

    return navRouter;

} // end function MakeNavRouter