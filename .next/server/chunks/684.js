"use strict";
exports.id = 684;
exports.ids = [684];
exports.modules = {

/***/ 2208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);


/***/ }),

/***/ 4684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Partials_VerifiedPRN)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/images/img-id-front.png
/* harmony default export */ const img_id_front = ({"src":"/_next/static/media/img-id-front.b03e5e28.png","height":394,"width":606,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApklEQVR4nA3KOw6CMBgA4P8vSFuqcXHAxUfiYvQeXsSbeQI3B3cPoGEi0iqggyYOJAp9yf6hzOQhYnTtnPnFLEYh+uCN9aqQrG31GQtV5vWrmg3HE/DWAWcMCCB0poNNjrdrlubH3XK+2RqtLfaCAAQNPcVHGPBFikpV0jf1lEQDEJxDSBCs0aDSEyQikXivPvso7K2IsQ1xFok2AK3x5fNNR+R7+QNnZk/zjFU8EgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/assets/images/img-id-back.png
/* harmony default export */ const img_id_back = ({"src":"/_next/static/media/img-id-back.65ccce8f.png","height":395,"width":606,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlklEQVR42g3MywrCMBBG4X8m0zYNkkXBrfviQ/sW+hJuBC9rFRFBQZRgesnErg6cxUfbzWpNwJJS7nIaSEMAa86lqysW3sv4fbSkacGGwcywzQx9DOjSG6yF0v3yPPYxtmJoNCLk5w1u52tmQJy1J/ml4KQGpLLivQd0gKtkqqIujZu+21HWEUpRTMEpDTBmoj8vK0SHP8QGPZSlkVbvAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./components/AppContext.js
var AppContext = __webpack_require__(2208);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Verification/CheckFront.js

const CheckFront = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-PRN",
                            id: "check-PRN-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-PRN",
                            id: "check-PRN-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "PRN"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-name",
                            id: "check-name-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-name",
                            id: "check-name-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Name"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Face-Photo",
                            id: "check-Face-Photo-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Face-Photo",
                            id: "check-Face-Photo-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Face Photo"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Permanent-Address",
                            id: "check-Permanent-Address-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Permanent-Address",
                            id: "check-Permanent-Address-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Permanent Address"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Date-of-Birth",
                            id: "check-Date-of-Birth-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Date-of-Birth",
                            id: "check-Date-of-Birth-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Date of Birth"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Gender",
                            id: "check-Gender-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Gender",
                            id: "check-Gender-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Gender"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Blood-Type",
                            id: "check-Blood-Type-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Blood-Type",
                            id: "check-Blood-Type-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "BloodType"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Nationality",
                            id: "check-Nationality-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Nationality",
                            id: "check-Nationality-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Nationality"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Signature",
                            id: "check-Signature-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Signature",
                            id: "check-Signature-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Signature"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Place-of-Birth",
                            id: "check-Place-of-Birth-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Place-of-Birth",
                            id: "check-Place-of-Birth-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Place of Birth"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-ID-Expiration",
                            id: "check-ID-Expiration-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-ID-Expiration",
                            id: "check-ID-Expiration-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "ID Expiration"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Verification_CheckFront = (CheckFront);

;// CONCATENATED MODULE: ./components/Verification/CheckBack.js

const CheckBack = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Present-Address",
                            id: "check-Present-Address-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Present-Address",
                            id: "check-Present-Address-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Present Address"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Bar-Code-Number",
                            id: "check-Bar-Code-Number-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-Bar-Code-Number",
                            id: "check-Bar-Code-Number-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Bar Code Number"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-EC-Name",
                            id: "check-EC-Name-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-EC-Name",
                            id: "check-EC-Name-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "EC Name"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-EC-Contact-Number",
                            id: "check-EC-Contact-Number-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-EC-Contact-Number",
                            id: "check-EC-Contact-Number-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "EC Contact Number"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-EC-Address",
                            id: "check-EC-Address-yes",
                            value: "yes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-2 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-check-input",
                            type: "radio",
                            name: "check-EC-Address",
                            id: "check-EC-Address-no",
                            value: "no",
                            defaultChecked: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8 table-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "EC Address"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Verification_CheckBack = (CheckBack);

;// CONCATENATED MODULE: ./components/Partials/VerifiedPRN.js








const VerifiedPRN = ()=>{
    const contextPRN = (0,external_react_.useContext)(AppContext/* default */.Z);
    const prnStatus = contextPRN.contextPRN.data[0].Status;
    const prnValue = contextPRN.contextPRN.data[0].PRN;
    const queryNo = contextPRN.contextPRN.data[0].QueryNo;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "valid-PRN-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "c-dark-blue",
                children: "Postal Card Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                id: "frm-postal-card-valid",
                className: "d-flex align-items-end",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "inputPRNvalid-wrapper",
                        className: "flex-fill",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "inputPRNvalid",
                                className: "form-label",
                                children: "PRN "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                className: "t-50 form-control c-dark-gray",
                                id: "inputPRNvalid",
                                placeholder: "PRN Number",
                                value: prnValue,
                                readOnly: true,
                                disabled: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-fill",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "inputPRN",
                                className: "form-label",
                                children: "PRN Status"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "status-valid",
                                className: "t-50 status bg-light-green c-green d-flex align-items-center justify-content-center",
                                children: prnStatus
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center ",
                id: "query-no-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "inputQueryNo",
                            className: "col-form-label fw-bold",
                            children: "Query Number"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            id: "inputQueryNo",
                            className: "form-control",
                            placeholder: "Query Number",
                            value: queryNo,
                            readOnly: true,
                            disabled: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "discrepancy-check",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "offset-md-6 col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "c-dark-blue",
                                children: "Discrepancy Check"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: img_id_front,
                                    alt: "Postal ID Front",
                                    className: "img-fluid"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    id: "checklist",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-2 table-wrapper",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "t-bold",
                                                        children: "Yes"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-2 table-wrapper",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "t-bold",
                                                        children: "No"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-8 table-wrapper",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "t-bold",
                                                        children: "Items"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Verification_CheckFront, {})
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: img_id_back,
                                    alt: "Postal ID Back",
                                    className: "img-fluid"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6 d-flex flex-column justify-content-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Verification_CheckBack, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "line-hr"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "d-flex align-items-center flex-column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "fw-bold",
                                children: "If with discrepancy/ies, please upload a copy of the card."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                id: "btn-upload",
                                className: "btn btn-primary",
                                children: "Upload"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Partials_VerifiedPRN = (VerifiedPRN);


/***/ })

};
;