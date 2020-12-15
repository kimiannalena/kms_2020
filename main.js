(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Hu4":
/*!***********************************************************************!*\
  !*** ./src/app/components/category-input/category-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryInputComponent", function() { return CategoryInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Category */ "ODr4");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/categoryService/category.service */ "m72X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class CategoryInputComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.addCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newCategory = new _model_Category__WEBPACK_IMPORTED_MODULE_1__["Category"]('');
        this.title = '';
    }
    ngOnInit() {
    }
    onSubmitC() {
        // call service
        this.newCategory.title = this.title;
        this.categoryService.addCategory(this.newCategory);
        // @ts-ignore
        document.getElementById('categoryInput').value = '';
    }
}
CategoryInputComponent.ɵfac = function CategoryInputComponent_Factory(t) { return new (t || CategoryInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
CategoryInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryInputComponent, selectors: [["app-category-input"]], outputs: { addCategory: "addCategory" }, decls: 11, vars: 1, consts: [["id", "task-container", 1, "container"], ["id", "form-wrapper"], ["id", "categoryForm", 3, "ngSubmit"], [1, "input-group"], ["for", "categoryInput"], ["id", "categoryInput", "type", "text", "required", "", "name", "title", "placeholder", "Category", 1, "form-control", "col-8", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "submit", "id", "categorySubmit", 1, "btn"]], template: function CategoryInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CategoryInputComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmitC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryInputComponent_Template_input_ngModelChange_7_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["#task-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n#form-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  border-bottom: 1px solid #e9e9e9;\n  box-shadow: 0 3px 8px rgba(0,0,0,0.25);\n  padding: 40px;\n}\n\n#categorySubmit[_ngcontent-%COMP%] {\n  border: solid 1px #858484;\n  border-radius: 0;\n  background-color: lightgrey;\n}\n\n.task-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 20px;\n  cursor: pointer;\n  border-bottom: 1px solid #e9e9e9;\n  color: #686868;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFFRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImNhdGVnb3J5LWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFzay1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuI2Zvcm0td3JhcHBlciB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDAsMCwwLDAuMjUpO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4jY2F0ZWdvcnlTdWJtaXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjODU4NDg0O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi50YXNrLXdyYXBwZXIge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgY29sb3I6ICM2ODY4Njg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-input',
                templateUrl: './category-input.component.html',
                styleUrls: ['./category-input.component.css']
            }]
    }], function () { return [{ type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }]; }, { addCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/kimiannalena/kms_2020/src/main.ts */"zUnb");


/***/ }),

/***/ "2RFk":
/*!*********************************************!*\
  !*** ./src/app/model/mocks/categoryMock.ts ***!
  \*********************************************/
/*! exports provided: testCat0, testCat1, testCat2, testCat3, testCat4, testCat5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCat0", function() { return testCat0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCat1", function() { return testCat1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCat2", function() { return testCat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCat3", function() { return testCat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCat4", function() { return testCat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCat5", function() { return testCat5; });
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Category */ "ODr4");

let testCat0 = new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]('Not asssigned cat'); // just for testing purpose
let testCat1 = new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]('Privat');
let testCat2 = new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]('Arbeit');
let testCat3 = new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]('Uni');
let testCat4 = new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]('Familie');
let testCat5 = new _Category__WEBPACK_IMPORTED_MODULE_0__["Category"]('Freunde');


/***/ }),

/***/ "7Q3M":
/*!*****************************************!*\
  !*** ./src/app/model/mocks/taskMock.ts ***!
  \*****************************************/
/*! exports provided: taskListMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskListMock", function() { return taskListMock; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Task */ "MPDF");
/* harmony import */ var _Priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Priority */ "JTFZ");
/* harmony import */ var _categoryMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoryMock */ "2RFk");



const testTask0 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Hausübung', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat3"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].medium);
const testTask1 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Einkaufen', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat1"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].high);
const testTask2 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Treffen', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat5"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].low);
const testTask3 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Putzen', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat1"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].low);
const testTask4 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Essen', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat1"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].medium);
const testTask5 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Geschenke', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat4"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].medium);
const testTask6 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Kochen', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat2"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].high);
const testTask7 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Joggen', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat2"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].medium);
const testTask8 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Garten', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat2"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].medium);
const testTask9 = new _Task__WEBPACK_IMPORTED_MODULE_0__["Task"]('Müll', _categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat2"], _Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].low);
console.log(testTask1.priority);
let taskListMock = [testTask0, testTask1, testTask2, testTask3, testTask4, testTask5, testTask6, testTask7, testTask8, testTask9];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EgkN":
/*!****************************************************!*\
  !*** ./src/app/directives/auto-focus.directive.ts ***!
  \****************************************************/
/*! exports provided: AutoFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function() { return AutoFocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AutoFocusDirective {
    constructor(el) {
        this.el = el;
        this.appAutoFocus = true;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 0);
    }
}
AutoFocusDirective.ɵfac = function AutoFocusDirective_Factory(t) { return new (t || AutoFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutoFocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutoFocusDirective, selectors: [["", "appAutoFocus", ""]], inputs: { appAutoFocus: "appAutoFocus" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoFocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAutoFocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "HPNS":
/*!*************************************************************!*\
  !*** ./src/app/components/testitest/testitest.component.ts ***!
  \*************************************************************/
/*! exports provided: TestitestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestitestComponent", function() { return TestitestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TestitestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestitestComponent.ɵfac = function TestitestComponent_Factory(t) { return new (t || TestitestComponent)(); };
TestitestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestitestComponent, selectors: [["app-testitest"]], decls: 2, vars: 0, template: function TestitestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "testitest works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aXRlc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestitestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testitest',
                templateUrl: './testitest.component.html',
                styleUrls: ['./testitest.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JTFZ":
/*!***********************************!*\
  !*** ./src/app/model/Priority.ts ***!
  \***********************************/
/*! exports provided: Priority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
var Priority;
(function (Priority) {
    Priority[Priority["low"] = 0] = "low";
    Priority[Priority["medium"] = 1] = "medium";
    Priority[Priority["high"] = 2] = "high";
})(Priority || (Priority = {}));


/***/ }),

/***/ "MPDF":
/*!*******************************!*\
  !*** ./src/app/model/Task.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(title, category, priority, done) {
        this.title = title;
        this.done = false;
        this.priority = priority;
        this.category = category;
        this.date = new Date();
        this.id = Task.taskCounter++;
    }
}
Task.taskCounter = 1;


/***/ }),

/***/ "ODr4":
/*!***********************************!*\
  !*** ./src/app/model/Category.ts ***!
  \***********************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(title) {
        this.id = Category.taskCounter++;
        this.title = title;
    }
}
Category.taskCounter = 1;


/***/ }),

/***/ "S2yG":
/*!***********************************************************!*\
  !*** ./src/app/pipes/search-filter/search-filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchFilterPipe {
    transform(list, searchText, clickedCategories, searchFlag, catFlag) {
        const searchString = searchText.trim().toLocaleLowerCase();
        let resultList = list;
        if (searchFlag) {
            resultList = resultList.filter(task => task.title.toLocaleLowerCase().indexOf(searchString) !== -1);
        }
        if (catFlag) {
            resultList = resultList.filter(task => {
                return clickedCategories.includes(task.category);
            });
        }
        return resultList;
    }
}
SearchFilterPipe.ɵfac = function SearchFilterPipe_Factory(t) { return new (t || SearchFilterPipe)(); };
SearchFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchFilter", type: SearchFilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchFilter',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_taskService_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/taskService/task.service */ "t+M0");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/categoryService/category.service */ "m72X");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_task_table_task_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task-table/task-table.component */ "kGZG");
/* harmony import */ var _components_task_input_task_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/task-input/task-input.component */ "mihA");
/* harmony import */ var _components_category_input_category_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/category-input/category-input.component */ "/Hu4");
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/category-list/category-list.component */ "uzT2");









class AppComponent {
    constructor(taskService, categoryService) {
        this.taskService = taskService;
        this.categoryService = categoryService;
        this.title = 'todo-app';
        this.categoryService.setTaskService(taskService);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_taskService_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand", "home"], [1, "container-fluid"], [1, "row"], [1, "col-8"], [1, "col-4"], [1, "side"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TodoApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-task-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-task-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-category-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-category-element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _components_task_table_task_table_component__WEBPACK_IMPORTED_MODULE_4__["TaskTableComponent"], _components_task_input_task_input_component__WEBPACK_IMPORTED_MODULE_5__["TaskInputComponent"], _components_category_input_category_input_component__WEBPACK_IMPORTED_MODULE_6__["CategoryInputComponent"], _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListComponent"]], styles: ["nav[_ngcontent-%COMP%] {\n  height: 8rem;\n  margin-bottom: 4rem;\n}\n.home[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  border-bottom: 1px solid #e9e9e9;\n  box-shadow: 0 3px 8px rgba(0,0,0,0.25);\n  padding: 40px;\n}\n.side[_ngcontent-%COMP%] {\n  align-content: space-evenly;\n  margin: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQixnQ0FBZ0M7QUFDaEMsSUFBSTtBQUVKO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBRUUsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxzQ0FBc0M7RUFDdEMsYUFBYTtBQUNmO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojY2F0ZWdvcnlDb2wgeyovXG4vKiBib3JkZXI6IDNweCBzb2xpZCBsaWdodGdyZXk7Ki9cbi8qfSovXG5cbm5hdiB7XG4gIGhlaWdodDogOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLmhvbWUge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBib3gtc2hhZG93OiAwIDNweCA4cHggcmdiYSgwLDAsMCwwLjI1KTtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLnNpZGUge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbjogNHJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _service_taskService_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "XdAR":
/*!************************************************************************!*\
  !*** ./src/app/components/task-edit-modal/add-task-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: AddTaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskModalComponent", function() { return AddTaskModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_Priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Priority */ "JTFZ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/categoryService/category.service */ "m72X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/auto-focus.directive */ "EgkN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddTaskModalComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r1.title, " ");
} }
class AddTaskModalComponent {
    constructor(activeModal, categoryService) {
        this.activeModal = activeModal;
        this.categoryService = categoryService;
        this.title = categoryService.taskService.taskToEdit.title;
        this.priority = categoryService.taskService.taskToEdit.priority;
        this.categoryTitle = categoryService.taskService.taskToEdit.category.title;
    }
    save() {
        // check if at least one attribute needs an edit
        if (this.title.trim().length > 0 || this.priority in _model_Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"] || this.categoryTitle.trim().length > 0) {
            this.activeModal.close({ title: this.title, categoryTitle: this.categoryTitle, priority: this.priority });
        }
    }
    ngOnInit() {
    }
}
AddTaskModalComponent.ɵfac = function AddTaskModalComponent_Factory(t) { return new (t || AddTaskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"])); };
AddTaskModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTaskModalComponent, selectors: [["app-add-task-modal"]], decls: 33, vars: 6, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "itemInputTitle"], ["id", "itemInputTitle", 1, "form-control", 3, "appAutoFocus", "ngModel", "ngModelChange"], ["for", "taskCategoryInput"], ["name", "Category", "id", "taskCategoryInput", 1, "form-control", "col-4", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", "", "value", ""], [4, "ngFor", "ngForOf"], ["for", "itemInputPriority"], ["name", "priority", "id", "itemInputPriority", 1, "form-control", "col-4", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "1"], ["value", "2"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "submit", 1, "btn", "btn-dark", 3, "click"]], template: function AddTaskModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskModalComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Set Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTaskModalComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Set Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTaskModalComponent_Template_select_ngModelChange_13_listener($event) { return ctx.categoryTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddTaskModalComponent_option_16_Template, 2, 1, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Set Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTaskModalComponent_Template_select_ngModelChange_19_listener($event) { return ctx.priority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PriorityMock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "high");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskModalComponent_Template_button_click_29_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Schlie\u00DFen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskModalComponent_Template_button_click_31_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit Entry #", ctx.categoryService.taskService.taskToEdit.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appAutoFocus", true)("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categoryTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryService.CATEGORYLIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.priority);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_5__["AutoFocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".btn-success[_ngcontent-%COMP%] {\n  background-color: #36d9b6;\n  border-radius: 0;\n  border: none;\n}\n\n.btn-outline-dark[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10YXNrLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoiYWRkLXRhc2stbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNmQ5YjY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhcmsge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTaskModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-task-modal',
                templateUrl: './add-task-modal.component.html',
                styleUrls: ['./add-task-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }, { type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_task_input_task_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/task-input/task-input.component */ "mihA");
/* harmony import */ var _components_task_table_task_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/task-table/task-table.component */ "kGZG");
/* harmony import */ var _components_task_edit_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/task-edit-modal/add-task-modal.component */ "XdAR");
/* harmony import */ var _components_category_input_category_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/category-input/category-input.component */ "/Hu4");
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/category-list/category-list.component */ "uzT2");
/* harmony import */ var _pipes_priority_priority_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/priority/priority.pipe */ "o4lq");
/* harmony import */ var _pipes_search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/search-filter/search-filter.pipe */ "S2yG");
/* harmony import */ var _components_testitest_testitest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/testitest/testitest.component */ "HPNS");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/auto-focus.directive */ "EgkN");



















/*
todo: highlight clicked category
 + make category unselectable
 + if category delete delete from clickedCat list
 + reset btn to reset all filters
 */
class AppModule {
    constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faAngleDoubleUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faAngleUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faAngleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faEdit"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconLibrary"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_task_input_task_input_component__WEBPACK_IMPORTED_MODULE_6__["TaskInputComponent"],
        _components_task_table_task_table_component__WEBPACK_IMPORTED_MODULE_7__["TaskTableComponent"],
        _components_task_edit_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskModalComponent"],
        _components_category_input_category_input_component__WEBPACK_IMPORTED_MODULE_9__["CategoryInputComponent"],
        _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"],
        _pipes_priority_priority_pipe__WEBPACK_IMPORTED_MODULE_11__["PriorityPipe"],
        _pipes_search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchFilterPipe"],
        _components_testitest_testitest_component__WEBPACK_IMPORTED_MODULE_13__["TestitestComponent"],
        _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_16__["AutoFocusDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_task_input_task_input_component__WEBPACK_IMPORTED_MODULE_6__["TaskInputComponent"],
                    _components_task_table_task_table_component__WEBPACK_IMPORTED_MODULE_7__["TaskTableComponent"],
                    _components_task_edit_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskModalComponent"],
                    _components_category_input_category_input_component__WEBPACK_IMPORTED_MODULE_9__["CategoryInputComponent"],
                    _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"],
                    _pipes_priority_priority_pipe__WEBPACK_IMPORTED_MODULE_11__["PriorityPipe"],
                    _pipes_search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchFilterPipe"],
                    _components_testitest_testitest_component__WEBPACK_IMPORTED_MODULE_13__["TestitestComponent"],
                    _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_16__["AutoFocusDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "kGZG":
/*!***************************************************************!*\
  !*** ./src/app/components/task-table/task-table.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTableComponent", function() { return TaskTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_taskService_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/taskService/task.service */ "t+M0");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/categoryService/category.service */ "m72X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/search-filter/search-filter.pipe */ "S2yG");








function TaskTableComponent_tr_25_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function TaskTableComponent_tr_25_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function TaskTableComponent_tr_25_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
const _c0 = function () { return ["fas", "angle-double-up"]; };
function TaskTableComponent_tr_25_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["fas", "angle-up"]; };
function TaskTableComponent_tr_25_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["fas", "angle-down"]; };
function TaskTableComponent_tr_25_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["fas", "edit"]; };
const _c4 = function () { return ["fas", "trash"]; };
function TaskTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskTableComponent_tr_25_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const task_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.done(task_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskTableComponent_tr_25_td_10_Template, 1, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskTableComponent_tr_25_td_11_Template, 1, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskTableComponent_tr_25_td_12_Template, 1, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskTableComponent_tr_25_ng_template_13_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskTableComponent_tr_25_ng_template_15_Template, 2, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaskTableComponent_tr_25_ng_template_17_Template, 2, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskTableComponent_tr_25_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const task_r1 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openEditModal(task_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskTableComponent_tr_25_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const task_r1 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.delete(task_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "doneCheckbox", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "doneCheckbox", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", task_r1.done ? "finish-title" : "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.category.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.priority == 2 || task_r1.priority == "high")("ngIfThen", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.priority == 1 || task_r1.priority == "medium")("ngIfThen", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.priority == 0 || task_r1.priority == "low")("ngIfThen", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 14, task_r1.date, "d. MMMM y, H:mm:ss"));
} }
const _c5 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
class TaskTableComponent {
    constructor(taskService, categoryService) {
        this.taskService = taskService;
        this.categoryService = categoryService;
        this.searchText = '';
        // console.log(taskService.taskList);
        this.clickedCategories = this.categoryService.categoriesClicked;
    }
    openEditModal(editEntry) {
        this.taskService.setTaskToEdit(editEntry);
        this.taskService.openTaskEditModal(editEntry).then();
    }
    ngOnInit() {
    }
    done(id) {
        this.taskService.doneTask(id);
    }
    delete(id) {
        this.taskService.deleteTask(id);
    }
    get _taskList() {
        return this.taskService.taskList;
    }
}
TaskTableComponent.ɵfac = function TaskTableComponent_Factory(t) { return new (t || TaskTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_taskService_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
TaskTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskTableComponent, selectors: [["app-task-table"]], decls: 27, vars: 14, consts: [[1, "todolist"], [1, "row"], [1, "col-2"], [1, "col-8"], ["type", "text", "placeholder", "Search Todo", "aria-label", "Search", 1, "form-control", "search", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover"], [1, "col"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "for"], ["tabindex", "0", "type", "checkbox", 3, "id", "change"], [3, "className"], [4, "ngIf", "ngIfThen"], ["highBlock", ""], ["mediumBlock", ""], ["lowBlock", ""], [1, "btn", "btn-outline-secondary", 3, "click"], [3, "icon"], [1, "btn", "btn-outline-danger", 3, "click"], [2, "color", "#ff0f0f", 3, "icon"], [2, "color", "#ffa500", 3, "icon"]], template: function TaskTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TodoList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskTableComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Done?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TaskTableComponent_tr_25_Template, 28, 19, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "searchFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](26, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](8, _c5, ctx._taskList, ctx.searchText, ctx.clickedCategories, ctx.searchText != "", ctx.clickedCategories.length != 0)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [_pipes_search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.finish-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-style: italic;\n  color: #707070;\n  text-decoration: line-through;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5rem;\n}\n\n.search[_ngcontent-%COMP%] {\n  position: relative;\n  align-content: center;\n  margin-bottom: 3rem;\n}\n\n.todolist[_ngcontent-%COMP%] {\n  margin-left: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InRhc2stdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5maW5pc2gtdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cmVtO1xufVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi50b2RvbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-table',
                templateUrl: './task-table.component.html',
                styleUrls: ['./task-table.component.css']
            }]
    }], function () { return [{ type: _service_taskService_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "m72X":
/*!*************************************************************!*\
  !*** ./src/app/service/categoryService/category.service.ts ***!
  \*************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Category */ "ODr4");
/* harmony import */ var _model_mocks_categoryMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/mocks/categoryMock */ "2RFk");




class CategoryService {
    constructor() {
        this.CATEGORYLIST = [_model_mocks_categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat1"], _model_mocks_categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat2"], _model_mocks_categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat3"], _model_mocks_categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat4"], _model_mocks_categoryMock__WEBPACK_IMPORTED_MODULE_2__["testCat5"]];
        this.categoriesClicked = [];
    }
    setTaskService(taskService) {
        this.taskService = taskService;
    }
    addCategory(newCategory) {
        if (newCategory.title.trim() === '') {
            return;
        }
        this.CATEGORYLIST.push(new _model_Category__WEBPACK_IMPORTED_MODULE_1__["Category"](newCategory.title));
    }
    get categoryList() {
        return this.CATEGORYLIST;
    }
    deleteCategory(id) {
        for (let i = 0; i < this.CATEGORYLIST.length; i++) {
            if (this.CATEGORYLIST[i].id === id) {
                this.CATEGORYLIST.splice(i, 1);
            }
        }
    }
    toggleCatInCategoriesClicked(id) {
        for (const cat of this.CATEGORYLIST) {
            if (cat.id === id) {
                if (!this.categoriesClicked.includes(cat)) {
                    this.categoriesClicked.push(cat);
                }
                else if (this.categoriesClicked.includes(cat)) {
                    this.categoriesClicked.splice(this.categoriesClicked.indexOf(cat), 1);
                }
            }
        }
        console.log(this.categoriesClicked);
    }
    filterCategories() {
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mihA":
/*!***************************************************************!*\
  !*** ./src/app/components/task-input/task-input.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskInputComponent", function() { return TaskInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Task */ "MPDF");
/* harmony import */ var _model_Priority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Priority */ "JTFZ");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/Category */ "ODr4");
/* harmony import */ var _service_taskService_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/taskService/task.service */ "t+M0");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/categoryService/category.service */ "m72X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function TaskInputComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r1.title, " ");
} }
class TaskInputComponent {
    constructor(taskService, categoryService) {
        this.taskService = taskService;
        this.categoryService = categoryService;
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newEntry = new _model_Task__WEBPACK_IMPORTED_MODULE_1__["Task"]('', new _model_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](''), _model_Priority__WEBPACK_IMPORTED_MODULE_2__["Priority"].low);
        // empty field
        this.title = '';
        this.priority = _model_Priority__WEBPACK_IMPORTED_MODULE_2__["Priority"].low;
        this.categoryTitle = '';
    }
    ngOnInit() {
    }
    // submitting the form
    onSubmit() {
        // call service
        this.newEntry.title = this.title;
        this.newEntry.priority = this.priority;
        this.newEntry.category = new _model_Category__WEBPACK_IMPORTED_MODULE_3__["Category"](this.categoryTitle);
        this.taskService.addTask(this.newEntry);
        // @ts-ignore
        document.getElementById('taskInput').value = '';
        // @ts-ignore
        document.getElementById('taskCategoryInput').value = '';
    }
}
TaskInputComponent.ɵfac = function TaskInputComponent_Factory(t) { return new (t || TaskInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_taskService_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"])); };
TaskInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskInputComponent, selectors: [["app-task-input"]], outputs: { addTodo: "addTodo" }, decls: 26, vars: 4, consts: [["id", "task-container", 1, "container"], ["id", "form-wrapper"], ["id", "form", 3, "ngSubmit"], [1, "input-group"], ["for", "taskInput"], ["id", "taskInput", "value", "", "type", "text", "required", "", "name", "title", "placeholder", "Todo", 1, "form-control", "col-4", 3, "ngModel", "ngModelChange"], ["for", "taskCategoryInput"], ["name", "Category", "id", "taskCategoryInput", 1, "form-control", "col-4", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", "", "value", ""], [4, "ngFor", "ngForOf"], ["for", "prio"], ["name", "priority", "id", "prio", 1, "form-control", "col-4", 3, "ngModel", "ngModelChange"], ["value", "low"], ["value", "medium"], ["value", "high"], [1, "input-group-append"], ["type", "submit", "id", "submit", 1, "btn"]], template: function TaskInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskInputComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add New Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskInputComponent_Template_input_ngModelChange_7_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskInputComponent_Template_select_ngModelChange_9_listener($event) { return ctx.categoryTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskInputComponent_option_12_Template, 2, 1, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskInputComponent_Template_select_ngModelChange_14_listener($event) { return ctx.priority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PriorityMock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "high");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categoryTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryService.CATEGORYLIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.priority);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["#task-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto;\n  justify-content: space-around;\n  align-items: flex-start;\n}\n\n#form-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  border-bottom: 1px solid #e9e9e9;\n  box-shadow: 0 3px 8px rgba(0,0,0,0.25);\n  padding: 2rem;\n  margin-bottom: 3rem;\n}\n\n#submit[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  border-radius: 0;\n}\n\n.task-wrapper[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 20px;\n  cursor: pointer;\n  border-bottom: 1px solid #e9e9e9;\n  color: #686868;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2staW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUVFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoidGFzay1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Rhc2stY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbiNmb3JtLXdyYXBwZXIge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBib3gtc2hhZG93OiAwIDNweCA4cHggcmdiYSgwLDAsMCwwLjI1KTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuI3N1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnRhc2std3JhcHBlciB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBjb2xvcjogIzY4Njg2ODtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-input',
                templateUrl: './task-input.component.html',
                styleUrls: ['./task-input.component.css']
            }]
    }], function () { return [{ type: _service_taskService_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }, { type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }]; }, { addTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "o4lq":
/*!*************************************************!*\
  !*** ./src/app/pipes/priority/priority.pipe.ts ***!
  \*************************************************/
/*! exports provided: PriorityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityPipe", function() { return PriorityPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_Priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/Priority */ "JTFZ");



class PriorityPipe {
    transform(value) {
        switch (value) {
            case _model_Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].low:
                return 'low';
            case _model_Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].medium:
                return 'medium';
            case _model_Priority__WEBPACK_IMPORTED_MODULE_1__["Priority"].high:
                return 'high';
            default:
                return value;
        }
    }
}
PriorityPipe.ɵfac = function PriorityPipe_Factory(t) { return new (t || PriorityPipe)(); };
PriorityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "priority", type: PriorityPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriorityPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'priority'
            }]
    }], null, null); })();


/***/ }),

/***/ "t+M0":
/*!*****************************************************!*\
  !*** ./src/app/service/taskService/task.service.ts ***!
  \*****************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Task */ "MPDF");
/* harmony import */ var _components_task_edit_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/task-edit-modal/add-task-modal.component */ "XdAR");
/* harmony import */ var _model_Priority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/Priority */ "JTFZ");
/* harmony import */ var _model_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/Category */ "ODr4");
/* harmony import */ var _model_mocks_taskMock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/mocks/taskMock */ "7Q3M");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









class TaskService {
    constructor(modalService) {
        this.modalService = modalService;
        this.taskToEdit = new _model_Task__WEBPACK_IMPORTED_MODULE_2__["Task"]('Test', new _model_Category__WEBPACK_IMPORTED_MODULE_5__["Category"]('test'), _model_Priority__WEBPACK_IMPORTED_MODULE_4__["Priority"].low);
        // tslint:disable-next-line:variable-name
        this._taskList = _model_mocks_taskMock__WEBPACK_IMPORTED_MODULE_6__["taskListMock"];
    }
    addTask(newEntry) {
        if (newEntry.title.trim() === '') {
            return;
        }
        // saving new task
        this.taskList.push(new _model_Task__WEBPACK_IMPORTED_MODULE_2__["Task"](newEntry.title, newEntry.category, newEntry.priority));
    }
    editTask(editEntry, title, category, priority) {
        for (const task of this.taskList) {
            // get the right task
            if (editEntry.id === task.id) {
                // check whats to edit
                if (title !== '') {
                    task.title = title;
                }
                if (category.title !== '') {
                    task.category = category;
                }
                if (priority in _model_Priority__WEBPACK_IMPORTED_MODULE_4__["Priority"]) {
                    task.priority = priority;
                }
            }
        }
    }
    setTaskToEdit(value) {
        this.taskToEdit = value;
    }
    openTaskEditModal(editEntry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalReference = this.modalService.open(_components_task_edit_modal_add_task_modal_component__WEBPACK_IMPORTED_MODULE_3__["AddTaskModalComponent"]);
            try {
                // get input values from modal via Promise on modal.close
                const result = yield modalReference.result;
                // set value from result if they were set
                const title = result.title !== '' ? result.title : '';
                const priority = result.priority in _model_Priority__WEBPACK_IMPORTED_MODULE_4__["Priority"] ? result.priority : _model_Priority__WEBPACK_IMPORTED_MODULE_4__["Priority"].low;
                const category = result.categoryTitle !== '' ? result.categoryTitle : '';
                // edit the task with the value from modal
                this.editTask(editEntry, title, new _model_Category__WEBPACK_IMPORTED_MODULE_5__["Category"](category), priority);
            }
            catch (err) {
                console.log(`something went wrong with the edit. Error: ${err}`);
            }
        });
    }
    doneTask(id) {
        for (const item of this._taskList) {
            if (item.id === id) {
                item.done = !item.done;
            }
        }
    }
    get taskList() {
        return this._taskList;
    }
    deleteTask(id) {
        for (let i = 0; i < this._taskList.length; i++) {
            if (this._taskList[i].id === id) {
                this._taskList.splice(i, 1);
            }
        }
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "uzT2":
/*!*********************************************************************!*\
  !*** ./src/app/components/category-list/category-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/categoryService/category.service */ "m72X");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CategoryListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_div_3_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.title, " ");
} }
function CategoryListComponent_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_div_3_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.delete(category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.title, " ");
} }
function CategoryListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const category_r1 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.categoryFilter(category_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryListComponent_div_3_div_1_Template, 5, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryListComponent_div_3_ng_template_3_Template, 5, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.categoryService.categoriesClicked.includes(category_r1))("ngIfElse", _r4);
} }
class CategoryListComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        console.log(categoryService.CATEGORYLIST);
    }
    get categoryList() {
        return this.categoryService.CATEGORYLIST;
    }
    ngOnInit() {
    }
    delete(id) {
        this.categoryService.deleteCategory(id);
    }
    categoryFilter(id) {
        this.categoryService.toggleCatInCategoriesClicked(id);
    }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"])); };
CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-element"]], decls: 4, vars: 1, consts: [[1, "form-wrapper"], ["class", "container", 3, "click", 4, "ngFor", "ngForOf"], [1, "container", 3, "click"], ["class", "card", 4, "ngIf", "ngIfElse"], ["isClickedBlock", ""], [1, "card"], [1, "btn", 3, "click"], [1, "card", 2, "background-color", "lightgrey"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter by Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryListComponent_div_3_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\nspan[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-top: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  margin-top: -10px;\n}\n\n.cat-filter[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  border-bottom: 1px solid #e9e9e9;\n  box-shadow: 0 3px 8px rgba(0,0,0,0.25);\n    padding: 2rem;\n    margin: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFRTtFQUVBLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsc0NBQXNDO0lBQ3BDLGFBQWE7SUFDYixjQUFjO0FBQ2xCIiwiZmlsZSI6ImNhdGVnb3J5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5zcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2F0LWZpbHRlciB7XG4gIG1hcmdpbjogMnJlbTtcbn1cblxuICAuZm9ybS13cmFwcGVyIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwwLDAsMC4yNSk7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDEuNXJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-element',
                templateUrl: './category-list.component.html',
                styleUrls: ['./category-list.component.css']
            }]
    }], function () { return [{ type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map