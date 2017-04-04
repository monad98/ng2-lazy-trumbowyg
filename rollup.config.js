export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/trumbowyg.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2.lazy.trumbowyg',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/add/operator/retry': 'Rx.Observable.prototype',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/filter': 'Rx.Observable.prototype',
    'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
    'rxjs/add/operator/publishReplay': 'Rx.Observable.prototype',
    'rxjs/add/operator/do': 'Rx.Observable.prototype',
    'rxjs/add/observable/create': 'Rx.Observable',
    'rxjs/add/observable/fromPromise': 'Rx.Observable'
  }
}