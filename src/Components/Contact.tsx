import Paper from '@material-ui/core/Paper';
import * as React from 'react';

export default class Contact extends React.Component<any, any> {
  render() {
    return (
      <Paper className="contact">
        <p>
          Contact will go here - large images for email, Linkedin, Github with hover over to see
          "Email", "Linkedin", "Github"
        </p>
      </Paper>
    );
  }
}
