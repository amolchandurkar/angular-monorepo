module.exports = {
  name: 'ui-tracker',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/ui/tracker',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
