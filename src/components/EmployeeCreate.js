import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from 'react-native';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone number"
            placeholder="555"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            "Create"
          </Button>
        </CardSection>
      </Card>
    ); 
  }
}

export default EmployeeCreate;
