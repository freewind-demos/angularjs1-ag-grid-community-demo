agGrid.initialiseAgGridWithAngular1(angular);

const app = angular.module('app', ['agGrid']);

app.controller("exampleCtrl", function ($scope) {

  const columnDefs = [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ];

  const rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];

  $scope.gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };

});
