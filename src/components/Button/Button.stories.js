import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button primary>Click me</Button>;
export const Disabled = () => <Button disabled>I am disabled</Button>;
