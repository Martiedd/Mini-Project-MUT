import React, { useState, useEffect } from 'react';
import '../styles/master.css';
import add from '../../assets/Adds.png';
import deletes from '../../assets/Delete.png';
import edits from '../../assets/Edits.png';
import search from '../../assets/Search.png';

function Room() {

	const [Is_underlinedId, setUnderlinedId] = useState(null);
	const [columns, setColumns] = useState([]); 

	const Page_Click = (id) => {
		setUnderlinedId(id); 

		if (id === 1) {
			const newColumns = ['รหัสแผนก', 'ชื่อแผนก'];
			setColumns(newColumns);
		}

		else if (id === 2){
			const newColumns = ['รหัสตำแหน่ง', 'ชื่อตำแหน่ง', 'เลขสิทธิ์การเข้าใช้งาน'];
			setColumns(newColumns);
		}

		else if(id === 3){
			const newColumns = ['รหัสตึก', 'ชื่อตึก', 'จำนวนชั้น'];
			setColumns(newColumns);
		}

		else{
			const newColumns = ['รหัสสถานะ', 'ชื่อสถานะ'];
			setColumns(newColumns);
		}
	};

	useEffect(() => {
		Page_Click(1); 
	}, []); 

	return (
		<div className='container'>

			<div className='selection-zone'>

				<p className="Department"
					onClick={() => Page_Click(1)}
					style={{
						textDecoration: Is_underlinedId === 1 ? 'underline' : 'none',
						cursor: 'pointer'
					}}
				>Department</p>

				<p className="Position"
					onClick={() => Page_Click(2)}
					style={{
						textDecoration: Is_underlinedId === 2 ? 'underline' : 'none',
						cursor: 'pointer'
					}}
				>Position</p>

				<p className="Building"
					onClick={() => Page_Click(3)}
					style={{
						textDecoration: Is_underlinedId === 3 ? 'underline' : 'none',
						cursor: 'pointer'
					}}
				>Building</p>

				<p className="Status"
					onClick={() => Page_Click(4)}
					style={{
						textDecoration: Is_underlinedId === 4 ? 'underline' : 'none',
						cursor: 'pointer'
					}}
				>Status</p>

			</div>

			<div className='event-zone'>

				<button type='submit'>
					<img src={add} alt='add' className='add-data' />
					Add
				</button>

				<button type='submit'>
					<img src={edits} alt='edits' className='edits-data' />
					Edits
				</button>

				<button type='submit'>
					<img src={deletes} alt='delete' className='delete-data' />
					Delete
				</button>

				<div class="search-container">
					<input className='input-text' type="text" placeholder="Search.." name="search"></input>
					<button className='input-pic' type="input-pic"><img className='search-data' src={search} alt='search' /></button>
				</div>
			</div>

			{/* <div className='searchbox'>
                    <input type='text' placeholder='search something...'>

                    </input>
                </div> */}

			<div className='table-zone'>
				<table>
					<thead>
						<tr>
							{columns.map((column, index) => (
								<th key={index}>{column}</th>
							))}
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
};

export default Room;