(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./components/Partials/Header.js



const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Postal Card Verification"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1.0, width=device-width"
                })
            ]
        })
    });
};
/* harmony default export */ const Partials_Header = (Header);

;// CONCATENATED MODULE: ./components/Partials/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
            src: "https://kit.fontawesome.com/4f23fed3b5.js",
            crossorigin: "anonymous"
        })
    });
};
/* harmony default export */ const Partials_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/postal-card-stamp-logo.png
/* harmony default export */ const postal_card_stamp_logo = ({"src":"/_next/static/media/postal-card-stamp-logo.db62dd5c.png","height":79,"width":85,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AcfL2M3HzN0cBgcF+/35/wFK+OYACAX+//75+gUMOTTkAaqwxehWULoXAAMAAHhj4wBj854A+KcAAP4AAAAWqK/pAa6zx+NSY7ocfnMm/lg9+QEg+/MA7L/0//CAlQIVrJbkAaatw+Tx9fwbPToq/+nq9AEt9vAADBkP//DJzgEABwPkAaeuw+OltdkcHBsO/vbq8QF359IAChYL//rp7gINV0bkAb/E1Oi8wNAXExcWAAsFAgBG/u8ACPj2APji5QAPS0LpAeHk7Mrx7eQdBgkT+vr/AQEUBAAAEPr3//v09gYFGRXktTlywiVZA0EAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./components/Partials/NavbarMain.js




const NavbarMain = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "main-navigator",
        className: "bg-darkblue sidebar",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "logo-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: postal_card_stamp_logo,
                        alt: "Postal Card Logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "PostalCard Verification"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "./",
                            title: "Home",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-house-chimney"
                                }),
                                "Home"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "#",
                                title: "Admin Portal",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa-solid fa-house-chimney"
                                    }),
                                    "Admin Portal"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "ms-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: "./agencies",
                                            title: "Users",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-building"
                                                }),
                                                "Agencies"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: "./branches",
                                            title: "Users",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-city"
                                                }),
                                                "Branches"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: "./users",
                                            title: "Users",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa-solid fa-user"
                                                }),
                                                "Users"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "./report.php",
                            title: "Report Page",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-chart-simple"
                                }),
                                "Reports"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "./verification",
                            title: "Verification Page",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-credit-card"
                                }),
                                "Verification Page"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "https://phlpost.gov.ph/",
                            target: "_blank",
                            title: "Post Office Website",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-solid fa-arrow-up-right-from-square"
                                }),
                                "Post Office Website"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                id: "link-logout",
                href: "",
                title: "Log Out",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa-solid fa-arrow-right-from-bracket"
                    }),
                    "Log Out"
                ]
            })
        ]
    });
};
/* harmony default export */ const Partials_NavbarMain = (NavbarMain);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/AppContext.js
var AppContext = __webpack_require__(2208);
;// CONCATENATED MODULE: ./components/Partials/NavbarTop.js




function NavbarTop() {
    console.log("TOP LOADED");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "top_navbar d-flex justify-content-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "hamburger",
                className: " d-flex align-items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa-solid fa-bars"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal fade",
                id: "exampleModal",
                tabIndex: "-1",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-dialog",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "modal-header",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "modal-title",
                                        id: "changePassTitle",
                                        children: "Change Password"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        className: "btn-close",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal-body",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "oldPasswrod",
                                                    className: "form-label",
                                                    children: "Old Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "password",
                                                    className: "form-control",
                                                    id: "oldPasswrod"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "newPassword",
                                                    className: "form-label",
                                                    children: "New Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "password",
                                                    className: "form-control",
                                                    id: "newPassword"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "confirmPassword",
                                                    className: "form-label",
                                                    children: "Confirm Password"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "password",
                                                    className: "form-control",
                                                    id: "confirmPassword"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mb-3 form-check",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "checkbox",
                                                    className: "form-check-input",
                                                    id: "exampleCheck1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "form-check-label",
                                                    htmlFor: "exampleCheck1",
                                                    children: "Check me out"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "btn btn-primary",
                                            children: "Submit"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "user-settings",
                className: "d-flex justify-content-center align-items-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dropdown",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: "dropdown-toggle d-flex justify-content-center align-items-center",
                            id: "dropdownMenuButton1",
                            "data-bs-toggle": "dropdown",
                            "aria-expanded": "false",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Dennis"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img-holder",
                                    style: {
                                        backgroundImage: `url(https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png)`
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "dropdown-menu",
                            "aria-labelledby": "dropdownMenuButton1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "dropdown-item",
                                        href: "#",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#exampleModal",
                                        children: "Change Password"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "dropdown-item",
                                        href: "#",
                                        children: "Logout"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Partials/VerifiedPRN.js + 4 modules
var VerifiedPRN = __webpack_require__(4684);
;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
;// CONCATENATED MODULE: ./components/Layout.js







function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "main-content-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Partials_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NavbarTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Partials_NavbarMain, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Partials_Footer, {})
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(5931);
// EXTERNAL MODULE: ./node_modules/datatables.net-dt/css/jquery.dataTables.min.css
var jquery_dataTables_min = __webpack_require__(4924);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
;// CONCATENATED MODULE: ./pages/_app.js





// import {useState, createContext} from 'react'

function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 5931:
/***/ (() => {



/***/ }),

/***/ 4924:
/***/ (() => {



/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3573)


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,676,664,675,684], () => (__webpack_exec__(4050)));
module.exports = __webpack_exports__;

})();