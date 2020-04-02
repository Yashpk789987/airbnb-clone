import React, { Component } from "react";
import { Form as AntForm, Button } from "antd";
import { Formik } from "formik";
import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";
import { RouteComponentProps } from "react-router-dom";

const FormItem = AntForm.Item;

interface FormValues {
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

interface State {
  page: number;
}

const pages = [<Page1 key="1" />, <Page2 key="2" />, <Page3 key="3" />];

export class CreateListingConnector extends Component<
  RouteComponentProps<{}>,
  State
> {
  state = {
    page: 0
  };
  onSubmit = (values: any) => {
    console.log("values ::", values);
  };
  nextPage = () => this.setState(state => ({ page: state.page + 1 }));
  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          name: "",
          category: "",
          description: "",
          price: 0,
          beds: 0,
          guests: 0,
          latitude: 0,
          longitude: 0,
          amenities: []
        }}
        onSubmit={this.onSubmit}
      >
        {() => (
          <div style={{ width: 400, margin: "auto" }}>
            {pages[this.state.page]}
            <FormItem>
              {this.state.page === pages.length - 1 ? (
                <Button type="primary" htmlType="submit">
                  create listing
                </Button>
              ) : (
                <Button onClick={this.nextPage} type="primary">
                  next page
                </Button>
              )}
            </FormItem>
          </div>
        )}
      </Formik>
    );
  }
}
