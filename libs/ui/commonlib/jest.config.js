module.exports = {
  name: 'ui-commonlib',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/commonlib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
