import Paper from '@material-ui/core/Paper';
import * as React from 'react';
// import injectSheet from 'react-jss';

// const styles = {
//   container: {
//     marginBottom: 60
//   }
// };

// @injectSheet(styles)
export default class Intro extends React.Component<any, any> {
  render() {
    return (
      <Paper className="intro">
        <div className="intro-text-container">
          <h4 className="intro-header">Dan McKeon</h4>
          <p className="intro-text">
            I'm a software engineer and entrepreneur finding innovative solutions to fight cancer.
            I'm passionate about scalable technologies that empower people to help themselves. For
            the last year, I've been building a website to help people who have cancer access
            clinical trials. I recently attended Dev Bootcamp to take my web development skills to
            the next level.
          </p>
        </div>
      </Paper>
    );
  }
}
