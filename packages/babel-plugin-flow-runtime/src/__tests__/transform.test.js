/* @flow */

import fixtures from './fixtures';

import testTransform from './testTransform';

describe('transform', () => {
  for (const [name, {input, expected, annotated, combined}] of fixtures) {
    it(`should transform ${name}`, () => {
      testTransform(input, {assert: true, annotate: false}, expected);
    });
    if (annotated) {
      it(`should transform ${name} with decorations`, () => {
        testTransform(input, {assert: false, annotate: true}, annotated);
      });
    }
    if (combined) {
      it(`should transform ${name} with decorations and assertions`, () => {
        testTransform(input, {assert: true, annotate: true}, combined);
      });
    }
  }
});
