import Paper from '@material-ui/core/Paper';
import * as React from 'react';

export default class Portfolio extends React.Component<any, any> {
  render() {
    return (
      <Paper className="portfolio">
        <p>
          Portfolio will go here - logos for CRC and Run for This with pop out on click to see
          details
        </p>
      </Paper>
    );
  }
}
