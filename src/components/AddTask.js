import {useState} from 'react'

const AddTask = ({addTask}) => {
	const [data, setData] = useState('')
	
	const submitChange = (event) => {
		event.preventDefault();
		if(data !== '') {
			addTask(data);
		}
		else {
			alert('Please enter a Task Title\nThx :)')
		}
	}

	return(
		<div class="flex flex-col p-16">
			<form onSubmit={submitChange}>
				<h1 
					className="text-xl">Adding Tasks</h1><br/>
				<label>Task Title</label><br/>
				<input 
					type="text" 
					className="border rounded border-sky-500 mb-8"
					placeholder="Task Title"
					value={data}
					onChange={(e) => setData(e.target.value)}/><br/>
				<input 
					className="border rounded cursor-pointer w-24 px-2 bg-sky-900 text-white"
					type="submit" 
					value="Save"/>
			</form>
		</div>
	)
}
export default AddTask