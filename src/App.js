import React from "react";
import { Container } from "semantic-ui-react";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CoursesPage from "./components/pages/CoursesPage";
import CreateCoursePage from "./components/pages/CreateCoursePage";
import EditCoursePage from "./components/pages/EditCoursePage";

class App extends React.Component {
  render() {
    return (
      <div className="Site">
        <HeaderComponent />
        <Container className="Site-content" style={{ marginTop: "7em" } }>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/courses" component={CoursesPage}></Route>
          <Route exact path="/course/create" component={CreateCoursePage}></Route>
          <Route exact path="/course/edit/:_id" component={EditCoursePage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
