/**
 * Created by Answer1215 on 8/10/2015.
 */

import React from 'react/addons';
import Note from '../app/components/notes/Notes';

var TestUtils = React.addons.TestUtils;

describe('Note', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Note username="zhentian-wan" />);
    });

    it('should display the correct artist name', () => {
        expect(React.findDOMNode(component).textContent).toMatch(/Notes for zhentian-wan/);
    });
});