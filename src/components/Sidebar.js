import styled from 'styled-components';

function Sidebar() {
  return (
    <Aside>
      <div>Hi</div>
    </Aside>
  );
}

const Aside = styled.aside`
  position: fixed;
  align-self: center;
  height: 96vh;
  width: 70px;
  margin-left: 20px;
  background-color: rgb(33, 33, 42);
  border-radius: 15px;
  grid-area: sidebar;
`;

export default Sidebar;
