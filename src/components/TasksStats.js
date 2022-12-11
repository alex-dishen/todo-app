import styled from 'styled-components';
import PropTypes from 'prop-types';

function TasksStats({ notCompleted, completed }) {
  return (
    <Stats>
      {completed} / {notCompleted}
    </Stats>
  );
}

TasksStats.propTypes = {
  notCompleted: PropTypes.number,
  completed: PropTypes.number,
};

const Stats = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 24px;
  font-weight: 600;
  color: white;
  color: #ffb859;
`;

export default TasksStats;
