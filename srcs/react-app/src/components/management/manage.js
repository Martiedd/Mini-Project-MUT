import React, { useState, useEffect } from 'react';
import '../styles/master.css';
import add from '../../assets/Adds.png';
import deletes from '../../assets/Delete.png';
import edits from '../../assets/Edits.png';
import search from '../../assets/Search.png';

function Manage() {

	const [Is_underlinedId, setUnderlinedId] = useState(null);
	const [columns, setColumns] = useState([]); // เก็บข้อมูลคอลัมน์ใน <thead>

	const Page_Click = (id) => {
		setUnderlinedId(id); // ตั้งค่า id ของ <p> ที่ถูกคลิก

		if (id === 1) {
			// เพิ่ม <th> Columns เมื่อคลิก User
			const newColumns = ['รหัสผู้ใช้', 'ชื่อผู้ใช้', 'นามสกุล', 'แผนก', 'ตำแหน่ง', 'สถานะ', 'คะแนนผู้ใช้'];
			setColumns(newColumns);
		}

		else {
			// เพิ่ม <th> Columns เมื่อคลิก Room
			const newColumns = ['รหัสห้อง', 'ชื่อห้อง', 'รหัสตึก', 'ชั้น', 'ระดับห้อง', 'สถานะ', 'ความจุ'];
			setColumns(newColumns);
		}
	};

	// เรียกใช้ Func Page_Click(1) ครั้งแรกเมื่อหน้าเว็บโหลด
	useEffect(() => {
		Page_Click(1); // เรียกฟังก์ชันเมื่อโหลดครั้งแรก
	}, []); // [] หมายถึงเรียกใช้เมื่อคอมโพเนนต์ถูก mount ครั้งแรก

	return (
		<div className='container'>

			<div className='selection-zone'>

				<p className="user"
					onClick={() => Page_Click(1)}
					style={{
						textDecoration: Is_underlinedId === 1 ? 'underline' : 'none',
						cursor: 'pointer'
					}}
				>User</p>

				<p className="room"
					onClick={() => Page_Click(2)}
					style={{
						textDecoration: Is_underlinedId === 2 ? 'underline' : 'none',
						cursor: 'pointer'
					}}
				>Room</p>

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

			<div className='table-zone'>
				<table>
					<thead>
						<tr>
							{/* ใช้ map เพื่อสร้าง <th> ทั้ง 7 คอลัมน์เมื่อมีการคลิก */}
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

export default Manage;