function Tasks({ tasks }) {
    return(
        <div>
            {tasks.map(task => {
                return <div key={task.id}>{task.text}</div>
            })}
        </div>
    )
}

export default Tasks;