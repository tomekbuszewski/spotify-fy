/**
 * @author tomekbuszewski
 * @since 2020-04-04 11:36:50
 */

import * as React from "react";

interface Props {
  children: any;
  testId: string;
}

const TestWrapper = ({ children, testId }: Props) => {
  if (process.env.NODE_ENV === "production") {
    return children;
  }

  return React.Children.map(children, (Child: React.ReactElement, i) => {
    if (Child) {
      return <Child.type {...Child.props} data-testid={testId} />;
    }
  });
};

export { TestWrapper };
