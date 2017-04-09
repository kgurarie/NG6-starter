import angular from 'angular';

import Search from './search';

let serviceModule = angular.module('app.services', [
    Search
])

.name;

export default serviceModule;


