const ShowTasks = ({tasks, onDone}) => {
	if(tasks.length !== 0) {
		return(
			<div className="">
				<h1 className="text-2xl m-4">To Do Liste</h1>
				{tasks.map((item) => (
					<div className="border rounded border-sky-500 px-8 py-2 mx-8">
					<div>
						<p key={item.id}>
							{!item.done ? item.title : null}
						</p>
					</div>
					<div>
						<button 
							className="border rounded cursor-pointer w-24 px-2 bg-sky-900 text-white"
							onClick={() => onDone(item)}>
							Done
						</button>
					</div>
					</div>
				))}
			</div>
		)
	}
	else {
		return(
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-2xl m-4">To Do Liste</h1>
					<div className="border rounded border-sky-500 p-8 w-48">
						<p>
							Sry No Tasks here :)
						</p>
					</div>
			</div>
		)
	}
}

export default ShowTasks