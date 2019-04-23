import React from "react";

import { Container, Developer } from "./styles";

const ControlPanel = () => {
  return (
    <Container>
      <p>Marcações</p>
      <Developer>
        <li>
          <img
            src="https://avatars3.githubusercontent.com/u/14218370?v=4"
            alt="avatar"
          />
          <strong>Diogo Amaral</strong>
          <small>Diogo-Amaral</small>
        </li>
      </Developer>
    </Container>
  );
};

export default ControlPanel;
