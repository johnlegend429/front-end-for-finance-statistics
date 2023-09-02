import React from 'react';
import 'rsuite/dist/rsuite.css'

import { DateRangePicker } from 'rsuite';

const Range = () => (
        <div className="field">
          <DateRangePicker size="lg" placeholder="0000-00-00 ~ 0000-00-00" style={{width:'100%',zIndex:'1'}}/>
        </div>
);

export default Range;