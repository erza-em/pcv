"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 8903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Verification),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/AppContext.js
var AppContext = __webpack_require__(2208);
// EXTERNAL MODULE: ./components/Partials/VerifiedPRN.js + 4 modules
var VerifiedPRN = __webpack_require__(4684);
;// CONCATENATED MODULE: ./components/Verification/ButtonsConfirm.js



const ButtonsConfirm = ()=>{
    const contextPRN = (0,external_react_.useContext)(AppContext/* default */.Z);
    function changePRN() {
        let newPRNDetails = contextPRN.contextPRN;
        newPRNDetails = {
            ...newPRNDetails,
            data: changeStatus(contextPRN.contextPRN.data)
        };
        contextPRN.setcontextPRN(newPRNDetails);
    }
    function changeStatus(data) {
        const dataPRN = data;
        let newDataPRN = dataPRN.map((a)=>{
            var returnValue = {
                ...a
            };
            if (a.Status == "Valid") {
                returnValue.Status = "Verify";
                returnValue.PRN = "";
            }
            return returnValue;
        });
        return newDataPRN;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "print-verified-wrapper",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "",
                className: "d-flex align-items-center justify-content-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        id: "btn-print",
                        className: "btn btn-success",
                        children: "Print"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        id: "btn-done",
                        className: "btn btn-danger",
                        onClick: changePRN,
                        children: "Done"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        id: "btn-cancel",
                        className: "btn btn-secondary",
                        onClick: changePRN,
                        children: "Cancel"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
        ]
    });
};
/* harmony default export */ const Verification_ButtonsConfirm = (ButtonsConfirm);

;// CONCATENATED MODULE: ./pages/verification.js







function Verification({ user  }) {
    console.log(user);
    // let username = 'Kevin'
    // let userbranch = 'Branch'
    // let useragency = 'Agency'
    const [contextPRN, setcontextPRN] = (0,external_react_.useState)("");
    const [prnStatus, setprnStatus] = (0,external_react_.useState)("Verify");
    const [prnValue, setprnValue] = (0,external_react_.useState)("");
    const handleClick = async ()=>{
        if (!prnValue.length == 0) {
            //let inputPRN = 'D12345'
            console.log("clicked");
            await fetchPRN(prnValue);
        } else {
            alert("Please input PRN Number");
        }
    };
    (0,external_react_.useEffect)(()=>{
        setprnStatus("Verify");
    }, [
        prnValue
    ]);
    (0,external_react_.useEffect)(()=>{
        if (contextPRN != "") {
            setprnStatus(contextPRN.data[0].Status);
        }
    }, [
        contextPRN
    ]);
    const fetchPRN = async (inputPRN)=>{
        const link = 'http://161.49.87.77:85/php/getprndetail.php?param={"prn":"' + inputPRN + '","agencyid":101,"branchid":101,"username":"dennis"}';
        const req = await fetch(link);
        const newPRN = await req.json();
        setcontextPRN(newPRN);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AppContext/* default.Provider */.Z.Provider, {
        value: {
            contextPRN,
            setcontextPRN
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "test",
            className: "main-content",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    id: "prn-verify-wrapper",
                    className: " box-wrapper shadow-2 bg-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "c-dark-blue",
                            children: "User Information:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group row d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "inputAgency",
                                            className: "col-sm-2 col-form-label fw-bold",
                                            children: "Agency"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-sm-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                id: "inputAgency",
                                                placeholder: "Agency",
                                                value: user.agency,
                                                readOnly: true
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group row d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "inputBranch",
                                            className: "col-sm-2 col-form-label fw-bold",
                                            children: "Branch"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-sm-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                id: "inputBranch",
                                                placeholder: "Branch",
                                                value: user.branch,
                                                readOnly: true
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group row d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "inputOfficer",
                                            className: "col-sm-2 col-form-label fw-bold",
                                            children: "Verification Officer"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-sm-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                id: "inputOfficer",
                                                placeholder: "Verification Officer",
                                                value: user.name,
                                                readOnly: true
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group row d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            htmlFor: "inputDateTime",
                                            className: "col-sm-2 col-form-label fw-bold",
                                            children: "Date/Time Generated"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-sm-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                id: "inputDateTime",
                                                placeholder: "Date/Time Generated",
                                                value: "04 October 2022, 08:52:50",
                                                readOnly: true
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "line-hr"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            id: "verify-postal-wrapper",
                            className: prnStatus === "Valid" ? "d-none" : "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "c-dark-blue",
                                    children: "Postal Card Information"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    id: "frm-postal-card-info",
                                    className: "d-flex align-items-end",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex-fill",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "inputPRN",
                                                    className: "form-label",
                                                    children: "PRN D12345"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "t-50 form-control",
                                                    id: "inputPRN",
                                                    placeholder: "PRN Number",
                                                    onChange: (event)=>setprnValue(event.target.value)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            id: "captcha-wrapper",
                                            className: "flex-fill",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "inputCaptcha",
                                                    className: "form-label",
                                                    children: "Captcha"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    id: "inputCaptcha",
                                                    placeholder: "Captcha",
                                                    value: "34530",
                                                    disabled: true,
                                                    readOnly: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    htmlFor: "inputCaptchaVerify",
                                                    className: "form-label",
                                                    children: "Type the characters above"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    id: "inputCaptchaVerify",
                                                    placeholder: "Verify Captcha"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex-fill",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                id: "btn-verify-prn",
                                                className: "btn btn-primary",
                                                onClick: handleClick,
                                                children: prnStatus
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        prnStatus === "Valid" ? /*#__PURE__*/ jsx_runtime_.jsx(VerifiedPRN/* default */.Z, {}) : ""
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                prnStatus === "Valid" ? /*#__PURE__*/ jsx_runtime_.jsx(Verification_ButtonsConfirm, {}) : ""
            ]
        })
    });
}
async function getStaticProps() {
    let userLink = "http://161.49.87.77:85/php/login.php?param={%22username%22:%22dennis%22,%22agencyid%22:101,%22branchid%22:101,%22password%22:%222%22}";
    const res = await fetch(userLink);
    const user = await res.json();
    // By returning { props: { users } }, the Blog component
    // will receive `users` as a prop at build time
    return {
        props: {
            user: user.data
        }
    };
}


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675,684], () => (__webpack_exec__(8903)));
module.exports = __webpack_exports__;

})();