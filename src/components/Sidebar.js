import styled from 'styled-components';

function Sidebar() {
  return (
    <Aside>
      <div>Collections</div>
    </Aside>
  );
}

const Aside = styled.aside`
  width: 200px;
  padding: 20px;
  background-color: rgb(33, 33, 42);
  color: white;
  grid-area: sidebar;
`;

export default Sidebar;
